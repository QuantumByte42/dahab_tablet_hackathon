export interface CardStylingProps {
  // Primary colors
  primaryColor: string | null // Main accent color for icons and illustrations
  backgroundColor: string | null // Main background color
  subBackgroundColor: string | null // Secondary background areas
  gradient1Color: string | null // First gradient color
  gradient2Color: string | null // Second gradient color
  buyColor: string | null // Buy price color
  sellColor: string | null // Sell price color

  // Font colors
  mainFontColor: string | null // Primary text color
  subFontColor: string | null // Secondary text color
  buyFontColor: string | null // Buy price text color
  sellFontColor: string | null // Sell price text color

  // Layout
  padding: string | null // Internal padding
  margin: string | null // External margin
  spacing: "compact" | "normal" | "spacious" | null // Internal spacing between elements

  // Border
  borderColor: string | null // Border color
  borderSize: string | null // Border width
  borderStyle: "solid" | "dashed" | "dotted" | "none" | null // Border style
  borderRadius: string | null // Corner radius

  // Shadow
  shadowStyle: "none" | "light" | "medium" | "heavy" | "glow" | "colored" | null
  shadowColor: string | null // Custom shadow color

  // Effects
  hoverEffect: "none" | "scale" | "lift" | "glow" | "rotate" | null
  transparency: number | null // Overall transparency (0-100)

  // Typography
  fontSize: "small" | "normal" | "large" | null
  fontWeight: "light" | "normal" | "medium" | "semibold" | "bold" | null

  // Advanced styling
  glassEffect: boolean | null // Glass/blur effect
  neonEffect: boolean | null // Neon glow effect
  gradientDirection: "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl" | "to-t" | "to-tr" | null
  iconStyle: "filled" | "outlined" | "duotone" | null
  priceLayout: "side-by-side" | "stacked" | "grid" | "inline" | null
  headerAlignment: "left" | "center" | "right" | null
  contentAlignment: "left" | "center" | "right" | null
}

export interface CustomizationSettings {
  cardStyle: string
  cardCategory: "modern" | "classic" | "creative" | "business"
  cardStyling: CardStylingProps
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

// Comprehensive defaults for each card style
export const cardStyleDefaults: Record<string, CardStylingProps> = {
  "modern-clean": {
    primaryColor: "#f59e0b",
    backgroundColor: "#ffffff",
    subBackgroundColor: "#f8fafc",
    gradient1Color: null,
    gradient2Color: null,
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#1f2937",
    subFontColor: "#6b7280",
    buyFontColor: "#15803d",
    sellFontColor: "#1d4ed8",
    padding: "1.5rem",
    margin: "0.5rem",
    spacing: "normal",
    borderColor: "#e5e7eb",
    borderSize: "1px",
    borderStyle: "solid",
    borderRadius: "0.75rem",
    shadowStyle: "medium",
    shadowColor: null,
    hoverEffect: "scale",
    transparency: 100,
    fontSize: "normal",
    fontWeight: "normal",
    glassEffect: false,
    neonEffect: false,
    gradientDirection: null,
    iconStyle: "filled",
    priceLayout: "grid",
    headerAlignment: "left",
    contentAlignment: "center",
  },

  "modern-glass": {
    primaryColor: "#06b6d4",
    backgroundColor: "#ffffff",
    subBackgroundColor: "#f8fafc90",
    gradient1Color: null,
    gradient2Color: null,
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#1f2937",
    subFontColor: "#64748b",
    buyFontColor: "#15803d",
    sellFontColor: "#1d4ed8",
    padding: "1.5rem",
    margin: "0.5rem",
    spacing: "normal",
    borderColor: "#e5e7eb80",
    borderSize: "1px",
    borderStyle: "solid",
    borderRadius: "0.75rem",
    shadowStyle: "glow",
    shadowColor: "#06b6d4",
    hoverEffect: "lift",
    transparency: 90,
    fontSize: "normal",
    fontWeight: "medium",
    glassEffect: true,
    neonEffect: false,
    gradientDirection: null,
    iconStyle: "filled",
    priceLayout: "stacked",
    headerAlignment: "center",
    contentAlignment: "center",
  },

  "modern-neon": {
    primaryColor: "#06b6d4",
    backgroundColor: "#111827",
    subBackgroundColor: "#1f293740",
    gradient1Color: "#06b6d4",
    gradient2Color: "#8b5cf6",
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#ffffff",
    subFontColor: "#94a3b8",
    buyFontColor: "#4ade80",
    sellFontColor: "#60a5fa",
    padding: "1.5rem",
    margin: "0.5rem",
    spacing: "normal",
    borderColor: "#06b6d4",
    borderSize: "2px",
    borderStyle: "solid",
    borderRadius: "0.75rem",
    shadowStyle: "glow",
    shadowColor: "#06b6d4",
    hoverEffect: "glow",
    transparency: 100,
    fontSize: "normal",
    fontWeight: "bold",
    glassEffect: false,
    neonEffect: true,
    gradientDirection: "to-br",
    iconStyle: "filled",
    priceLayout: "stacked",
    headerAlignment: "center",
    contentAlignment: "center",
  },

  "modern-simple": {
    primaryColor: null,
    backgroundColor: "#ffffff",
    subBackgroundColor: "#ffffff",
    gradient1Color: null,
    gradient2Color: null,
    buyColor: "#6b7280",
    sellColor: "#6b7280",
    mainFontColor: "#1f2937",
    subFontColor: "#9ca3af",
    buyFontColor: "#1f2937",
    sellFontColor: "#1f2937",
    padding: "2rem",
    margin: "0.5rem",
    spacing: "spacious",
    borderColor: "#e5e7eb",
    borderSize: "1px",
    borderStyle: "solid",
    borderRadius: "0.5rem",
    shadowStyle: "light",
    shadowColor: null,
    hoverEffect: "none",
    transparency: 100,
    fontSize: "normal",
    fontWeight: "light",
    glassEffect: false,
    neonEffect: false,
    gradientDirection: null,
    iconStyle: null,
    priceLayout: "stacked",
    headerAlignment: "center",
    contentAlignment: "center",
  },

  "classic-royal": {
    primaryColor: "#d97706",
    backgroundColor: "#fef3c7",
    subBackgroundColor: "#ffffff",
    gradient1Color: "#fef3c7",
    gradient2Color: "#fed7aa",
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#92400e",
    subFontColor: "#d97706",
    buyFontColor: "#15803d",
    sellFontColor: "#1d4ed8",
    padding: "1.5rem",
    margin: "0.5rem",
    spacing: "normal",
    borderColor: "#d97706",
    borderSize: "2px",
    borderStyle: "solid",
    borderRadius: "0.75rem",
    shadowStyle: "medium",
    shadowColor: null,
    hoverEffect: "scale",
    transparency: 100,
    fontSize: "large",
    fontWeight: "bold",
    glassEffect: false,
    neonEffect: false,
    gradientDirection: "to-b",
    iconStyle: "filled",
    priceLayout: "stacked",
    headerAlignment: "center",
    contentAlignment: "center",
  },

  "classic-vintage": {
    primaryColor: "#ea580c",
    backgroundColor: "#fef7ed",
    subBackgroundColor: "#ffffff",
    gradient1Color: "#fef7ed",
    gradient2Color: "#fed7aa",
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#9a3412",
    subFontColor: "#ea580c",
    buyFontColor: "#15803d",
    sellFontColor: "#1d4ed8",
    padding: "1.5rem",
    margin: "0.5rem",
    spacing: "normal",
    borderColor: "#fed7aa",
    borderSize: "1px",
    borderStyle: "dashed",
    borderRadius: "0.5rem",
    shadowStyle: "light",
    shadowColor: null,
    hoverEffect: "none",
    transparency: 100,
    fontSize: "normal",
    fontWeight: "medium",
    glassEffect: false,
    neonEffect: false,
    gradientDirection: "to-br",
    iconStyle: "outlined",
    priceLayout: "stacked",
    headerAlignment: "center",
    contentAlignment: "center",
  },

  "creative-artistic": {
    primaryColor: "#a855f7",
    backgroundColor: "#fdf4ff",
    subBackgroundColor: "#ffffff70",
    gradient1Color: "#fdf4ff",
    gradient2Color: "#f0e6ff",
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#581c87",
    subFontColor: "#a855f7",
    buyFontColor: "#15803d",
    sellFontColor: "#1d4ed8",
    padding: "1.5rem",
    margin: "0.5rem",
    spacing: "normal",
    borderColor: null,
    borderSize: "0px",
    borderStyle: "none",
    borderRadius: "1rem",
    shadowStyle: "heavy",
    shadowColor: "#a855f7",
    hoverEffect: "scale",
    transparency: 95,
    fontSize: "normal",
    fontWeight: "bold",
    glassEffect: true,
    neonEffect: false,
    gradientDirection: "to-br",
    iconStyle: "duotone",
    priceLayout: "stacked",
    headerAlignment: "center",
    contentAlignment: "center",
  },

  "creative-geometric": {
    primaryColor: "#6366f1",
    backgroundColor: "#ffffff",
    subBackgroundColor: "#f1f5f9",
    gradient1Color: null,
    gradient2Color: null,
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#1e293b",
    subFontColor: "#6366f1",
    buyFontColor: "#15803d",
    sellFontColor: "#1d4ed8",
    padding: "1.5rem",
    margin: "0.5rem",
    spacing: "normal",
    borderColor: "#6366f1",
    borderSize: "2px",
    borderStyle: "solid",
    borderRadius: "0.75rem",
    shadowStyle: "medium",
    shadowColor: null,
    hoverEffect: "scale",
    transparency: 100,
    fontSize: "normal",
    fontWeight: "bold",
    glassEffect: false,
    neonEffect: false,
    gradientDirection: null,
    iconStyle: "filled",
    priceLayout: "grid",
    headerAlignment: "left",
    contentAlignment: "center",
  },

  "creative-gradient": {
    primaryColor: "#0ea5e9",
    backgroundColor: "#1e293b",
    subBackgroundColor: "#ffffff20",
    gradient1Color: "#0ea5e9",
    gradient2Color: "#ec4899",
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#ffffff",
    subFontColor: "#cbd5e1",
    buyFontColor: "#4ade80",
    sellFontColor: "#60a5fa",
    padding: "1.5rem",
    margin: "0.5rem",
    spacing: "normal",
    borderColor: null,
    borderSize: "0px",
    borderStyle: "none",
    borderRadius: "1rem",
    shadowStyle: "heavy",
    shadowColor: "#0ea5e9",
    hoverEffect: "glow",
    transparency: 100,
    fontSize: "normal",
    fontWeight: "bold",
    glassEffect: true,
    neonEffect: true,
    gradientDirection: "to-br",
    iconStyle: "filled",
    priceLayout: "stacked",
    headerAlignment: "center",
    contentAlignment: "center",
  },

  "business-corporate": {
    primaryColor: "#1d4ed8",
    backgroundColor: "#ffffff",
    subBackgroundColor: "#f8fafc",
    gradient1Color: null,
    gradient2Color: null,
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#1f2937",
    subFontColor: "#6b7280",
    buyFontColor: "#15803d",
    sellFontColor: "#1d4ed8",
    padding: "1.5rem",
    margin: "0.5rem",
    spacing: "compact",
    borderColor: "#d1d5db",
    borderSize: "1px",
    borderStyle: "solid",
    borderRadius: "0.5rem",
    shadowStyle: "light",
    shadowColor: null,
    hoverEffect: "none",
    transparency: 100,
    fontSize: "normal",
    fontWeight: "medium",
    glassEffect: false,
    neonEffect: false,
    gradientDirection: null,
    iconStyle: "filled",
    priceLayout: "stacked",
    headerAlignment: "left",
    contentAlignment: "left",
  },

  "business-dashboard": {
    primaryColor: "#475569",
    backgroundColor: "#f8fafc",
    subBackgroundColor: "#ffffff",
    gradient1Color: null,
    gradient2Color: null,
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#475569",
    subFontColor: "#64748b",
    buyFontColor: "#15803d",
    sellFontColor: "#1d4ed8",
    padding: "1rem",
    margin: "0.5rem",
    spacing: "compact",
    borderColor: "#cbd5e1",
    borderSize: "1px",
    borderStyle: "solid",
    borderRadius: "0.5rem",
    shadowStyle: "light",
    shadowColor: null,
    hoverEffect: "none",
    transparency: 100,
    fontSize: "small",
    fontWeight: "medium",
    glassEffect: false,
    neonEffect: false,
    gradientDirection: null,
    iconStyle: "outlined",
    priceLayout: "grid",
    headerAlignment: "left",
    contentAlignment: "left",
  },

  "business-table": {
    primaryColor: "#4b5563",
    backgroundColor: "#ffffff",
    subBackgroundColor: "#f9fafb",
    gradient1Color: null,
    gradient2Color: null,
    buyColor: "#22c55e",
    sellColor: "#3b82f6",
    mainFontColor: "#374151",
    subFontColor: "#6b7280",
    buyFontColor: "#15803d",
    sellFontColor: "#1d4ed8",
    padding: "0rem",
    margin: "0.5rem",
    spacing: "compact",
    borderColor: "#d1d5db",
    borderSize: "1px",
    borderStyle: "solid",
    borderRadius: "0.5rem",
    shadowStyle: "light",
    shadowColor: null,
    hoverEffect: "none",
    transparency: 100,
    fontSize: "small",
    fontWeight: "medium",
    glassEffect: false,
    neonEffect: false,
    gradientDirection: null,
    iconStyle: null,
    priceLayout: "inline",
    headerAlignment: "left",
    contentAlignment: "left",
  },
}

export const defaultCardStyling: CardStylingProps = cardStyleDefaults["modern-clean"]

export const defaultSettings: CustomizationSettings = {
  cardStyle: "modern-clean",
  cardCategory: "modern",
  cardStyling: defaultCardStyling,
  backgroundColor: "gradient-gold",
  backgroundPattern: "none",
  fontFamily: "cairo",
  customBackgroundColor: "#ffffff",
  storeName: "متجر الذهب",
  showLastUpdate: true,
}

// Helper function to get only the non-null configurations for a card style
export function getActiveConfigs(cardStyle: string): (keyof CardStylingProps)[] {
  const config = cardStyleDefaults[cardStyle] || defaultCardStyling
  return Object.keys(config).filter(
    (key) => config[key as keyof CardStylingProps] !== null,
  ) as (keyof CardStylingProps)[]
}

// Helper function to get the display name for config keys
export function getConfigDisplayName(key: keyof CardStylingProps): string {
  const displayNames: Record<keyof CardStylingProps, string> = {
    primaryColor: "اللون الأساسي",
    backgroundColor: "لون الخلفية",
    subBackgroundColor: "لون الخلفية الثانوية",
    gradient1Color: "اللون المتدرج الأول",
    gradient2Color: "اللون المتدرج الثاني",
    buyColor: "لون الشراء",
    sellColor: "لون البيع",
    mainFontColor: "لون النص الأساسي",
    subFontColor: "لون النص الثانوي",
    buyFontColor: "لون نص الشراء",
    sellFontColor: "لون نص البيع",
    padding: "المسافة الداخلية",
    margin: "المسافة الخارجية",
    spacing: "المسافات الداخلية",
    borderColor: "لون الحدود",
    borderSize: "حجم الحدود",
    borderStyle: "نمط الحدود",
    borderRadius: "انحناء الحواف",
    shadowStyle: "نمط الظل",
    shadowColor: "لون الظل",
    hoverEffect: "تأثير التمرير",
    transparency: "الشفافية",
    fontSize: "حجم الخط",
    fontWeight: "وزن الخط",
    glassEffect: "التأثير الزجاجي",
    neonEffect: "التأثير النيوني",
    gradientDirection: "اتجاه التدرج",
    iconStyle: "نمط الأيقونات",
    priceLayout: "تخطيط الأسعار",
    headerAlignment: "محاذاة العنوان",
    contentAlignment: "محاذاة المحتوى",
  }
  return displayNames[key] || key
}
