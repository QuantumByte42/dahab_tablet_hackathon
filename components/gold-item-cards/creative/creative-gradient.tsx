import { Droplets } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"
import { Badge } from "@/components/ui/badge"

interface CreativeGradientProps {
  item: GoldItem
  styling: CardStylingProps
}

export function CreativeGradient({ item, styling }: CreativeGradientProps) {
  // Override some styling properties to maintain the gradient style
  const gradientStyle = {
    ...styling,
    borderSize: "0px",
    borderStyle: "none",
    mainFontColor: styling.mainFontColor || "#ffffff",
    subFontColor: styling.subFontColor || "#ffffff",
  }

  // Create a gradient background if not provided
  const backgroundStyle =
    styling.gradient1Color && styling.gradient2Color
      ? { background: `linear-gradient(to bottom right, ${styling.gradient1Color}, ${styling.gradient2Color})` }
      : { background: "linear-gradient(to bottom right, #0ea5e9, #ec4899)" }

  return (
    <BaseCard item={item} styling={gradientStyle} className="text-white">
      <div className="absolute inset-0 rounded-lg overflow-hidden" style={backgroundStyle}></div>

      <div className="p-6 flex flex-col h-full justify-between relative z-10">
        {/* Gradient header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-3">
            <div className="p-3 backdrop-blur-sm rounded-full" style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}>
              <Droplets className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3 className="font-bold text-xl mb-1" style={{ color: styling.mainFontColor || "#ffffff" }}>
            {item.nameAr}
          </h3>
          <p className="text-sm opacity-70" style={{ color: styling.subFontColor || "#ffffff" }}>
            {item.name}
          </p>
          <Badge
            className="mt-2 backdrop-blur-sm"
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.2)",
              color: styling.mainFontColor || "#ffffff",
              borderColor: "rgba(255, 255, 255, 0.3)",
            }}
          >
            {item.code}
          </Badge>
        </div>

        {/* Gradient grade display */}
        <div
          className="mb-6 p-4 backdrop-blur-sm rounded-lg border"
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            borderColor: "rgba(255, 255, 255, 0.2)",
          }}
        >
          <div className="text-center">
            <span
              className="text-sm font-medium block mb-1 opacity-70"
              style={{ color: styling.subFontColor || "#ffffff" }}
            >
              العيار
            </span>
            <span className="font-bold text-3xl" style={{ color: styling.mainFontColor || "#ffffff" }}>
              {item.grade}
            </span>
          </div>
        </div>

        {/* Gradient price cards */}
        <div className="space-y-3">
          <div
            className="p-4 backdrop-blur-sm rounded-lg border"
            style={{
              backgroundColor: "rgba(34, 197, 94, 0.3)",
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium" style={{ color: styling.mainFontColor || "#ffffff" }}>
                شراء
              </span>
              <span className="font-bold text-xl" style={{ color: styling.mainFontColor || "#ffffff" }}>
                {item.purchasePrice.toFixed(2)} د.أ
              </span>
            </div>
          </div>

          <div
            className="p-4 backdrop-blur-sm rounded-lg border"
            style={{
              backgroundColor: "rgba(59, 130, 246, 0.3)",
              borderColor: "rgba(255, 255, 255, 0.2)",
            }}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium" style={{ color: styling.mainFontColor || "#ffffff" }}>
                بيع
              </span>
              <span className="font-bold text-xl" style={{ color: styling.mainFontColor || "#ffffff" }}>
                {item.sellPrice.toFixed(2)} د.أ
              </span>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  )
}
