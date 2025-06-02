import { create } from "zustand"
import type { CustomizationSettings } from "@/types/customization"
import { defaultSettings, cardStyleDefaults } from "@/types/customization"
import { pb } from "@/lib/pocketbase"

interface CustomizationStore {
  settings: CustomizationSettings
  isLoadingSettings: boolean
  hasLoadedOnce: boolean
  updateSettings: (newSettings: Partial<CustomizationSettings>) => Promise<void>
  resetSettings: () => Promise<void>
  resetCardStyling: (cardStyle: string) => Promise<void>
  setCardStyle: (cardStyle: string) => Promise<void>
  loadSettings: () => Promise<void>
  saveSettings: (settings: CustomizationSettings) => Promise<void>
}

export const useCustomizationStore = create<CustomizationStore>()((set, get) => ({
  settings: defaultSettings,
  isLoadingSettings: false,
  hasLoadedOnce: false,

  updateSettings: async (newSettings) => {
    const updatedSettings = { ...get().settings, ...newSettings }
    set({ settings: updatedSettings })

    await get().saveSettings(updatedSettings)
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
    } catch (error) {
      console.error("Error loading settings:", error)
      set({
        settings: defaultSettings,
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
      console.log("Saving settings to PocketBase for user:", userId, settings)

      await pb.collection("admins").update(userId, {
        portable_dahab_system_style_preferences: settings,
      })
      console.log("Settings saved")
    } catch (error) {
      console.error("Error saving settings:", error)
    }
  },
}))
