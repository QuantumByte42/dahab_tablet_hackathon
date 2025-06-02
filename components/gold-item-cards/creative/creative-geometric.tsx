import { Hexagon, Triangle, Circle } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"
import { Badge } from "@/components/ui/badge"

interface CreativeGeometricProps {
  item: GoldItem
  styling: CardStylingProps
}

export function CreativeGeometric({ item, styling }: CreativeGeometricProps) {
  // Override some styling properties to maintain the geometric style
  const geometricStyle = {
    ...styling,
    backgroundColor: styling.backgroundColor || "#ffffff",
    primaryColor: styling.primaryColor || "#6366f1",
    mainFontColor: styling.mainFontColor || "#1e293b",
    subFontColor: styling.subFontColor || "#6366f1",
  }

  return (
    <BaseCard item={item} styling={geometricStyle}>
      <div className="p-6 flex flex-col h-full justify-between">
        {/* Geometric shapes in background */}
        <div className="absolute top-4 right-4 opacity-10">
          <Hexagon className="h-20 w-20" style={{ color: styling.primaryColor || "#6366f1" }} />
        </div>
        <div className="absolute bottom-4 left-4 opacity-10">
          <Triangle className="h-16 w-16" style={{ color: styling.primaryColor || "#6366f1" }} />
        </div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-5">
          <Circle className="h-32 w-32" style={{ color: styling.primaryColor || "#6366f1" }} />
        </div>

        {/* Content with relative positioning */}
        <div className="relative z-10">
          {/* Header with geometric accent */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-lg transform rotate-45"
                  style={{ backgroundColor: styling.primaryColor || "#6366f1" }}
                ></div>
                <div className="relative z-10 p-2">
                  <Hexagon className="h-5 w-5 text-white" />
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl" style={{ color: styling.mainFontColor || "#1e293b" }}>
                  {item.nameAr}
                </h3>
                <p className="text-sm opacity-70" style={{ color: styling.subFontColor || "#6366f1" }}>
                  {item.name}
                </p>
              </div>
            </div>
            <Badge
              style={{
                backgroundColor: `${styling.primaryColor || "#6366f1"}10`,
                color: styling.primaryColor || "#6366f1",
                borderColor: `${styling.primaryColor || "#6366f1"}20`,
              }}
            >
              {item.code}
            </Badge>
          </div>

          {/* Grade display with geometric accent */}
          <div className="mb-6 relative">
            <div
              className="absolute -top-2 -left-2 w-4 h-4 transform rotate-45"
              style={{ backgroundColor: styling.primaryColor || "#6366f1" }}
            ></div>
            <div
              className="p-4 rounded-lg border"
              style={{
                backgroundColor: `${styling.primaryColor || "#6366f1"}10`,
                borderColor: `${styling.primaryColor || "#6366f1"}20`,
              }}
            >
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium" style={{ color: styling.primaryColor || "#6366f1" }}>
                  العيار
                </span>
                <span className="font-bold text-2xl" style={{ color: styling.primaryColor || "#6366f1" }}>
                  {item.grade}
                </span>
              </div>
            </div>
          </div>

          {/* Prices with geometric accents */}
          <div className="space-y-4">
            <div className="relative">
              <div
                className="absolute -top-1 -right-1 w-3 h-3 rounded-full"
                style={{ backgroundColor: styling.buyColor || "#22c55e" }}
              ></div>
              <div
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: `${styling.buyColor || "#22c55e"}10`,
                  borderColor: `${styling.buyColor || "#22c55e"}20`,
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
            </div>

            <div className="relative">
              <div
                className="absolute -top-1 -right-1 w-3 h-3 transform rotate-45"
                style={{ backgroundColor: styling.sellColor || "#3b82f6" }}
              ></div>
              <div
                className="p-4 rounded-lg border"
                style={{
                  backgroundColor: `${styling.sellColor || "#3b82f6"}10`,
                  borderColor: `${styling.sellColor || "#3b82f6"}20`,
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
        </div>
      </div>
    </BaseCard>
  )
}
