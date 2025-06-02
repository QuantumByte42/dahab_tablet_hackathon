import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import type { ReactNode } from "react"

interface BaseCardProps {
  item: GoldItem
  styling: CardStylingProps
  children: ReactNode
  className?: string
}

export function BaseCard({ item, styling, children, className = "" }: BaseCardProps) {
  // Helper functions to build styles
  const getShadowClass = () => {
    if (!styling.shadowStyle || styling.shadowStyle === "none") return ""

    const shadowClasses = {
      light: "shadow-sm",
      medium: "shadow-md",
      heavy: "shadow-xl",
      glow: `shadow-lg ${styling.shadowColor ? `shadow-[${styling.shadowColor}]/25` : "shadow-blue-500/25"}`,
      colored: styling.shadowColor ? `shadow-lg shadow-[${styling.shadowColor}]/30` : "shadow-lg",
    }
    return shadowClasses[styling.shadowStyle] || ""
  }

  const getHoverEffectClass = () => {
    if (!styling.hoverEffect || styling.hoverEffect === "none") return ""

    const hoverClasses = {
      scale: "hover:scale-105",
      lift: "hover:-translate-y-1 hover:shadow-lg",
      glow: styling.shadowColor
        ? `hover:shadow-lg hover:shadow-[${styling.shadowColor}]/40`
        : "hover:shadow-lg hover:shadow-blue-500/40",
      rotate: "hover:rotate-1",
    }
    return hoverClasses[styling.hoverEffect] || ""
  }

  const getFontSizeClass = () => {
    if (!styling.fontSize) return ""

    const fontSizeClasses = {
      small: "text-sm",
      normal: "text-base",
      large: "text-lg",
    }
    return fontSizeClasses[styling.fontSize] || ""
  }

  const getFontWeightClass = () => {
    if (!styling.fontWeight) return ""

    const fontWeightClasses = {
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    }
    return fontWeightClasses[styling.fontWeight] || ""
  }

  const getBackgroundStyle = () => {
    const style: any = {}

    if (styling.backgroundColor) {
      if (styling.gradient1Color && styling.gradient2Color && styling.gradientDirection) {
        const direction = styling.gradientDirection.replace("to-", "")
        style.backgroundImage = `linear-gradient(${direction}, ${styling.gradient1Color}, ${styling.gradient2Color})`
      } else {
        style.backgroundColor = styling.backgroundColor
      }
    }

    if (styling.glassEffect) {
      style.backdropFilter = "blur(10px)"
      style.backgroundColor = styling.backgroundColor ? `${styling.backgroundColor}90` : "rgba(255, 255, 255, 0.9)"
    }

    return style
  }

  const getBorderStyle = () => {
    const style: any = {}

    if (styling.borderColor) style.borderColor = styling.borderColor
    if (styling.borderSize) style.borderWidth = styling.borderSize
    if (styling.borderRadius) style.borderRadius = styling.borderRadius
    if (styling.transparency) style.opacity = styling.transparency / 100

    return style
  }

  const cardClasses = [
    "h-full transition-all duration-300",
    getShadowClass(),
    getHoverEffectClass(),
    getFontSizeClass(),
    getFontWeightClass(),
    styling.glassEffect ? "backdrop-blur-md" : "",
    styling.neonEffect ? "ring-1 ring-current" : "",
    styling.borderStyle === "none" ? "border-0" : `border-${styling.borderStyle || "solid"}`,
    className,
  ]
    .filter(Boolean)
    .join(" ")

  return (
    <Card
      className={cardClasses}
      style={{
        ...getBackgroundStyle(),
        ...getBorderStyle(),
        color: styling.mainFontColor || undefined,
        padding: styling.padding || undefined,
        margin: styling.margin || undefined,
      }}
    >
      <CardContent className="p-0 h-full flex flex-col">{children}</CardContent>
    </Card>
  )
}

// Common components that all cards can use
interface CommonCardProps {
  item: GoldItem
  styling: CardStylingProps
}

export function CardHeader({ item, styling, icon }: CommonCardProps & { icon?: ReactNode }) {
  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  }

  const alignment = styling.headerAlignment || "center"

  return (
    <div className={`flex items-start justify-between mb-4 ${alignmentClasses[alignment]}`}>
      <div className="flex items-center gap-3">
        {icon && styling.primaryColor && (
          <div
            className="p-3 rounded-full"
            style={{
              backgroundColor: `${styling.primaryColor}20`,
              color: styling.primaryColor,
            }}
          >
            {icon}
          </div>
        )}
        <div>
          <h3 className="font-bold text-xl mb-1" style={{ color: styling.mainFontColor || undefined }}>
            {item.nameAr}
          </h3>
          <p
            className="text-sm opacity-70"
            style={{ color: styling.subFontColor || styling.mainFontColor || undefined }}
          >
            {item.name}
          </p>
        </div>
      </div>
      <Badge
        variant="outline"
        className="text-xs font-mono"
        style={{
          borderColor: styling.borderColor || undefined,
          color: styling.primaryColor || styling.mainFontColor || undefined,
          backgroundColor: styling.primaryColor ? `${styling.primaryColor}10` : undefined,
        }}
      >
        {item.code}
      </Badge>
    </div>
  )
}

export function CardGrade({ item, styling }: CommonCardProps) {
  const spacingClasses = {
    compact: "p-2 mb-3",
    normal: "p-4 mb-4",
    spacious: "p-6 mb-6",
  }

  const spacing = styling.spacing || "normal"

  return (
    <div
      className={`rounded-lg border text-center ${spacingClasses[spacing]}`}
      style={{
        backgroundColor: styling.subBackgroundColor || undefined,
        borderColor: styling.borderColor || undefined,
        borderStyle: styling.borderStyle || "solid",
      }}
    >
      <span
        className="text-sm font-medium opacity-70 block mb-1"
        style={{ color: styling.subFontColor || styling.mainFontColor || undefined }}
      >
        العيار
      </span>
      <span
        className="font-bold text-2xl"
        style={{ color: styling.primaryColor || styling.mainFontColor || undefined }}
      >
        {item.grade}
      </span>
    </div>
  )
}

export function CardPrices({ item, styling }: CommonCardProps) {
  const spacingClasses = {
    compact: "gap-2",
    normal: "gap-4",
    spacious: "gap-6",
  }

  const paddingClasses = {
    compact: "p-2",
    normal: "p-4",
    spacious: "p-6",
  }

  const spacing = styling.spacing || "normal"
  const layout = styling.priceLayout || "grid"

  const layoutClasses = {
    "side-by-side": `flex ${spacingClasses[spacing]}`,
    stacked: `space-y-${spacing === "compact" ? "2" : spacing === "spacious" ? "6" : "4"}`,
    grid: `grid grid-cols-2 ${spacingClasses[spacing]}`,
    inline: `flex justify-between ${spacingClasses[spacing]}`,
  }

  return (
    <div className={layoutClasses[layout]}>
      {/* Buy Price */}
      <div
        className={`rounded-xl border text-center ${paddingClasses[spacing]}`}
        style={{
          backgroundColor: styling.buyColor ? `${styling.buyColor}10` : "#22c55e10",
          borderColor: styling.buyColor ? `${styling.buyColor}30` : "#22c55e30",
        }}
      >
        <span
          className="text-xs font-medium block mb-1"
          style={{ color: styling.buyFontColor || styling.buyColor || "#16a34a" }}
        >
          شراء
        </span>
        <p className="text-lg font-bold" style={{ color: styling.buyFontColor || styling.buyColor || "#15803d" }}>
          {item.purchasePrice.toFixed(2)}
        </p>
        {layout !== "inline" && (
          <p className="text-xs" style={{ color: styling.buyFontColor || styling.buyColor || "#16a34a" }}>
            دينار أردني
          </p>
        )}
      </div>

      {/* Sell Price */}
      <div
        className={`rounded-xl border text-center ${paddingClasses[spacing]}`}
        style={{
          backgroundColor: styling.sellColor ? `${styling.sellColor}10` : "#3b82f610",
          borderColor: styling.sellColor ? `${styling.sellColor}30` : "#3b82f630",
        }}
      >
        <span
          className="text-xs font-medium block mb-1"
          style={{ color: styling.sellFontColor || styling.sellColor || "#2563eb" }}
        >
          بيع
        </span>
        <p className="text-lg font-bold" style={{ color: styling.sellFontColor || styling.sellColor || "#1d4ed8" }}>
          {item.sellPrice.toFixed(2)}
        </p>
        {layout !== "inline" && (
          <p className="text-xs" style={{ color: styling.sellFontColor || styling.sellColor || "#2563eb" }}>
            دينار أردني
          </p>
        )}
      </div>
    </div>
  )
}
