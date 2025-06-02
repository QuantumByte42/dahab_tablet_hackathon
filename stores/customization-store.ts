import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CustomizationSettings } from "@/types/customization"
import { defaultSettings, cardStyleDefaults } from "@/types/customization"

interface CustomizationStore {
  settings: CustomizationSettings
  updateSettings: (newSettings: Partial<CustomizationSettings>) => void
  resetSettings: () => void
  resetCardStyling: (cardStyle: string) => void
  setCardStyle: (cardStyle: string) => void
}

export const useCustomizationStore = create<CustomizationStore>()(
  persist(
    (set) => ({
      settings: defaultSettings,
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      resetSettings: () => set({ settings: defaultSettings }),
      resetCardStyling: (cardStyle) =>
        set((state) => {
          const defaultStyling = cardStyleDefaults[cardStyle] || cardStyleDefaults["modern-clean"]
          return {
            settings: {
              ...state.settings,
              cardStyling: defaultStyling,
            },
          }
        }),
      setCardStyle: (cardStyle) =>
        set((state) => {
          const defaultStyling = cardStyleDefaults[cardStyle] || cardStyleDefaults["modern-clean"]
          return {
            settings: {
              ...state.settings,
              cardStyle,
              cardStyling: defaultStyling, // Reset styling when changing card style
            },
          }
        }),
    }),
    {
      name: "goldStoreCustomization",
    },
  ),
)
