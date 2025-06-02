import { create } from "zustand"
import type { CustomizationSettings } from "@/types/customization"
import { defaultSettings, cardStyleDefaults } from "@/types/customization"
import { pb } from "@/lib/pocketbase"

interface CustomizationStore {
  settings: CustomizationSettings
  isLoadingSettings: boolean
  updateSettings: (newSettings: Partial<CustomizationSettings>) => void
  resetSettings: () => void
  resetCardStyling: (cardStyle: string) => void
  setCardStyle: (cardStyle: string) => void
  loadSettings: () => Promise<void>
  saveSettings: (settings: CustomizationSettings) => Promise<void>
}

export const useCustomizationStore = create<CustomizationStore>()((set, get) => ({
  settings: defaultSettings,
  isLoadingSettings: false,

  updateSettings: (newSettings) => {
    const updatedSettings = { ...get().settings, ...newSettings }
    set({ settings: updatedSettings })
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
        return
      }

      const userId = pb.authStore.model.id
      const user = await pb.collection("admins").getOne(userId)

      if (user.portable_dahab_system_style_preferences) {
        console.log("Loading settings from PocketBase:", user.portable_dahab_system_style_preferences)
        set({ settings: user.portable_dahab_system_style_preferences })
      } else {
        console.log("No saved settings")
        set({ settings: defaultSettings })
      }
    } catch (error) {
      console.error("Error loading settings:", error)
      set({ settings: defaultSettings })
    } finally {
      set({ isLoadingSettings: false })
    }
  },

  saveSettings: async (settings) => {
    try {
      if (!pb.authStore.isValid || !pb.authStore.model) {
        console.log("No authenticated user")
        return
      }

      const userId = pb.authStore.model.id
      await pb.collection("admins").update(userId, {
        portable_dahab_system_style_preferences: settings,
      })
    } catch (error) {
      console.error("Error saving settings:", error)
    }
  },
}))
