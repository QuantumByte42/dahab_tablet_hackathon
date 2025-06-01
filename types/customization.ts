export interface CustomizationSettings {
  cardStyle: "modern" | "classic" | "luxury" | "minimal" | "elegant" | "bold"
  background: "gradient-gold" | "gradient-blue" | "gradient-green" | "solid-white" | "solid-dark" | "pattern-geometric"
  fontFamily: "cairo" | "amiri" | "tajawal" | "almarai" | "rubik"
  accentColor: "gold" | "blue" | "green" | "purple" | "red" | "teal"
  storeName: string
  showLastUpdate: boolean
}

export const defaultSettings: CustomizationSettings = {
  cardStyle: "modern",
  background: "gradient-gold",
  fontFamily: "cairo",
  accentColor: "gold",
  storeName: "متجر الذهب",
  showLastUpdate: true,
}
