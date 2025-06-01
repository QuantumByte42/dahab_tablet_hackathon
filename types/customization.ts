export interface CustomizationSettings {
  cardStyle: "modern" | "classic" | "luxury" | "minimal" | "elegant" | "bold"
  backgroundColor:
  | "gradient-gold"
  | "gradient-blue"
  | "gradient-green"
  | "gradient-purple"
  | "gradient-rose"
  | "solid-white"
  | "solid-dark"
  | "solid-custom"
  backgroundPattern:
  | "none"
  | "dots"
  | "lines"
  | "geometric"
  | "waves"
  | "diagonal"
  | "grid"
  | "hexagon"
  | "triangles"
  | "circles"
  | "zigzag"
  | "cross"
  fontFamily: "cairo" | "amiri" | "tajawal" | "almarai" | "rubik"
  customBackgroundColor: string
  storeName: string
  showLastUpdate: boolean
}

export const defaultSettings: CustomizationSettings = {
  cardStyle: "modern",
  backgroundColor: "gradient-gold",
  backgroundPattern: "none",
  fontFamily: "cairo",
  customBackgroundColor: "#ffffff",
  storeName: "متجر الذهب",
  showLastUpdate: true,
}
