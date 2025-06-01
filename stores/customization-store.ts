import { create } from "zustand"
import { persist } from "zustand/middleware"
import type { CustomizationSettings } from "@/types/customization"

interface CustomizationStore {
  settings: CustomizationSettings
  updateSettings: (newSettings: Partial<CustomizationSettings>) => void
  resetSettings: () => void
}

const defaultSettings: CustomizationSettings = {
  cardStyle: "modern",
  background: "gradient-gold",
  fontFamily: "cairo",
  accentColor: "gold",
  storeName: "متجر الذهب",
  showLastUpdate: true,
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
    }),
    {
      name: "goldStoreCustomization",
    },
  ),
)
