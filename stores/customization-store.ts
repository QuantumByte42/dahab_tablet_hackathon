import { create } from "zustand"
import type { CustomizationSettings } from "@/types/customization"
import { defaultSettings, cardStyleDefaults } from "@/types/customization"
import { pb } from "@/lib/pocketbase"

export interface PricePreference {
  sell_delta: number
  buy_delta: number
}

export interface PricePreferences {
  [itemName: string]: PricePreference
}

interface CustomizationStore {
  settings: CustomizationSettings
  pricePreferences: PricePreferences
  isLoadingSettings: boolean
  hasLoadedOnce: boolean
  updateSettings: (newSettings: Partial<CustomizationSettings>) => Promise<void>
  updatePricePreference: (itemName: string, field: "buy_delta" | "sell_delta", value: number) => Promise<void>
  resetSettings: () => Promise<void>
  resetCardStyling: (cardStyle: string) => Promise<void>
  setCardStyle: (cardStyle: string) => Promise<void>
  loadSettings: () => Promise<void>
  saveSettings: (settings: CustomizationSettings) => Promise<void>
  savePricePreferences: (preferences: PricePreferences) => Promise<void>
}

export const useCustomizationStore = create<CustomizationStore>()((set, get) => ({
  settings: defaultSettings,
  pricePreferences: {},
  isLoadingSettings: false,
  hasLoadedOnce: false,

  updateSettings: async (newSettings) => {
    const updatedSettings = { ...get().settings, ...newSettings }
    set({ settings: updatedSettings })

    // Automatically save settings when they're updated
    await get().saveSettings(updatedSettings)
  },

  updatePricePreference: async (itemName, field, value) => {
    const currentPreferences = { ...get().pricePreferences }

    // Initialize the item if it doesn't exist
    if (!currentPreferences[itemName]) {
      currentPreferences[itemName] = { buy_delta: 0, sell_delta: 0 }
    }

    currentPreferences[itemName][field] = value

    set({ pricePreferences: currentPreferences })
    await get().savePricePreferences(currentPreferences)
  },

  resetSettings: async () => {
    set({ settings: defaultSettings })
    await get().saveSettings(defaultSettings)
  },

  resetCardStyling: async (cardStyle) => {
    const defaultStyling = cardStyleDefaults[cardStyle] || cardStyleDefaults["modern-clean"]
    const updatedSettings = {
      ...get().settings,
      cardStyling: defaultStyling,
    }
    set({ settings: updatedSettings })
    await get().saveSettings(updatedSettings)
  },

  setCardStyle: async (cardStyle) => {
    const defaultStyling = cardStyleDefaults[cardStyle] || cardStyleDefaults["modern-clean"]
    const updatedSettings = {
      ...get().settings,
      cardStyle,
      cardStyling: defaultStyling,
    }
    set({ settings: updatedSettings })
    await get().saveSettings(updatedSettings)
  },

  loadSettings: async () => {
    if (get().isLoadingSettings) {
      console.log("skipping...")
      return
    }

    try {
      set({ isLoadingSettings: true })

      if (!pb.authStore.isValid || !pb.authStore.model) {
        set({ hasLoadedOnce: true })
        return
      }

      const userId = pb.authStore.model.id
      console.log("Loading settings for user:", userId)

      const user = await pb.collection("admins").getOne(userId)

      if (user.portable_dahab_system_style_preferences) {
        console.log("Loading settings from PocketBase:", user.portable_dahab_system_style_preferences)
        set({
          settings: user.portable_dahab_system_style_preferences,
          hasLoadedOnce: true,
        })
      } else {
        set({
          settings: defaultSettings,
          hasLoadedOnce: true,
        })
      }

      if (user.portable_dahab_system_pricing_preferences) {
        console.log("Loading price preferences from PocketBase:", user.portable_dahab_system_pricing_preferences)
        set({
          pricePreferences: user.portable_dahab_system_pricing_preferences,
        })
      } else {
        console.log("No saved price preferences found, using empty object")
        set({
          pricePreferences: {},
        })
      }
    } catch (error) {
      console.error("Error loading settings:", error)
      set({
        settings: defaultSettings,
        pricePreferences: {},
        hasLoadedOnce: true,
      })
    } finally {
      set({ isLoadingSettings: false })
    }
  },

  saveSettings: async (settings) => {
    try {
      if (!pb.authStore.isValid || !pb.authStore.model) {
        return
      }

      const userId = pb.authStore.model.id

      await pb.collection("admins").update(userId, {
        portable_dahab_system_style_preferences: settings,
      })
      console.log("Style settings saved to PocketBase successfully")
    } catch (error) {
      console.error("Error saving style settings:", error)
    }
  },

  savePricePreferences: async (preferences) => {
    try {
      if (!pb.authStore.isValid || !pb.authStore.model) {
        console.log("No authenticated user, cannot save price preferences")
        return
      }

      const userId = pb.authStore.model.id
      console.log("Saving price preferences to PocketBase for user:", userId)

      await pb.collection("admins").update(userId, {
        portable_dahab_system_pricing_preferences: preferences,
      })
      console.log("Price preferences saved to PocketBase successfully")
    } catch (error) {
      console.error("Error saving price preferences:", error)
    }
  },
}))
