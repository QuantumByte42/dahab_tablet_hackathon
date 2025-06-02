import { Palette, Brush } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"
import { Badge } from "@/components/ui/badge"

interface CreativeArtisticProps {
  item: GoldItem
  styling: CardStylingProps
}

export function CreativeArtistic({ item, styling }: CreativeArtisticProps) {
  // Override some styling properties to maintain the artistic style
  const artisticStyle = {
    ...styling,
    backgroundColor: styling.backgroundColor || "#fdf4ff",
    primaryColor: styling.primaryColor || "#a855f7",
    borderSize: "0px",
    borderStyle: "none",
    shadowStyle: styling.shadowStyle || "heavy",
  }

  return (
    <BaseCard item={item} styling={artisticStyle} className="overflow-hidden">
      {/* Artistic background elements */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-full"
        style={{
          background: `linear-gradient(to bottom left, ${styling.primaryColor || "#a855f7"}30, transparent)`,
        }}
      ></div>
      <div
        className="absolute bottom-0 left-0 w-16 h-16 rounded-full"
        style={{
          background: `linear-gradient(to top right, ${styling.gradient2Color || "#f0e6ff"}30, transparent)`,
        }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-xl"
        style={{
          background: `linear-gradient(to right, ${styling.primaryColor || "#a855f7"}20, ${styling.gradient2Color || "#f0e6ff"}20)`,
        }}
      ></div>

      <div className="p-6 flex flex-col h-full justify-between relative z-10">
        {/* Artistic header */}
        <div className="text-center">
          <div className="flex justify-center mb-3">
            <div
              className="p-3 rounded-full shadow-lg"
              style={{
                background: `linear-gradient(to right, ${styling.primaryColor || "#a855f7"}, ${styling.gradient2Color || "#f0e6ff"})`,
              }}
            >
              <Palette className="h-6 w-6 text-white" />
            </div>
          </div>
          <h3
            className="font-bold text-xl mb-1"
            style={{
              background: `linear-gradient(to right, ${styling.primaryColor || "#a855f7"}, ${styling.gradient2Color || "#f0e6ff"})`,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {item.nameAr}
          </h3>
          <p className="text-sm" style={{ color: styling.subFontColor || "#6b7280" }}>
            {item.name}
          </p>
          <Badge
            className="mt-2 border-0"
            style={{
              background: `linear-gradient(to right, ${styling.primaryColor || "#a855f7"}, ${styling.gradient2Color || "#f0e6ff"})`,
              color: "#ffffff",
            }}
          >
            {item.code}
          </Badge>
        </div>

        {/* Artistic grade */}
        <div className="relative">
          <div className="absolute -top-2 -right-2">
            <Brush className="h-4 w-4" style={{ color: styling.primaryColor || "#a855f7" }} />
          </div>
          <div
            className="p-4 backdrop-blur-sm rounded-lg border shadow-sm"
            style={{
              backgroundColor: `${styling.subBackgroundColor || "#ffffff"}70`,
              borderColor: `${styling.primaryColor || "#a855f7"}50`,
            }}
          >
            <div className="text-center">
              <span className="text-sm font-medium block mb-1" style={{ color: styling.primaryColor || "#a855f7" }}>
                العيار
              </span>
              <span
                className="font-bold text-3xl"
                style={{
                  background: `linear-gradient(to right, ${styling.primaryColor || "#a855f7"}, ${styling.gradient2Color || "#f0e6ff"})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                {item.grade}
              </span>
            </div>
          </div>
        </div>

        {/* Artistic prices */}
        <div className="space-y-3">
          <div
            className="p-4 backdrop-blur-sm rounded-lg border"
            style={{
              background: `linear-gradient(to right, ${styling.buyColor || "#22c55e"}20, ${styling.buyColor || "#22c55e"}10)`,
              borderColor: `${styling.buyColor || "#22c55e"}30`,
            }}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium" style={{ color: styling.buyFontColor || "#15803d" }}>
                شراء
              </span>
              <span className="font-bold text-xl" style={{ color: styling.buyFontColor || "#15803d" }}>
                {item.purchasePrice.toFixed(2)} د.أ
              </span>
            </div>
          </div>

          <div
            className="p-4 backdrop-blur-sm rounded-lg border"
            style={{
              background: `linear-gradient(to right, ${styling.sellColor || "#3b82f6"}20, ${styling.sellColor || "#3b82f6"}10)`,
              borderColor: `${styling.sellColor || "#3b82f6"}30`,
            }}
          >
            <div className="flex justify-between items-center">
              <span className="font-medium" style={{ color: styling.sellFontColor || "#1d4ed8" }}>
                بيع
              </span>
              <span className="font-bold text-xl" style={{ color: styling.sellFontColor || "#1d4ed8" }}>
                {item.sellPrice.toFixed(2)} د.أ
              </span>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  )
}
