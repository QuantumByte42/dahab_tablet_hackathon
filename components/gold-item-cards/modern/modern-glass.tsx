import { Sparkles, ArrowUpRight, ArrowDownRight } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"
import { Badge } from "@/components/ui/badge"

interface ModernGlassProps {
  item: GoldItem
  styling: CardStylingProps
}

export function ModernGlass({ item, styling }: ModernGlassProps) {
  const spacingClasses = {
    compact: "gap-3",
    normal: "gap-4",
    spacious: "gap-6",
  }

  const spacing = styling.spacing || "normal"

  // Override some styling properties to maintain the glass effect
  const glassStyle = {
    ...styling,
    glassEffect: true,
    backgroundColor: styling.backgroundColor || "#ffffff",
    borderColor: `${styling.borderColor || "#ffffff"}80`,
  }

  return (
    <BaseCard item={item} styling={glassStyle} className="backdrop-blur-md">
      <div className={`p-4 flex flex-col ${spacingClasses[spacing]} h-full justify-between`}>
        {/* Floating header */}
        <div className="relative">
          <div className="absolute -top-2 -right-2">
            <Sparkles className="h-4 w-4" style={{ color: styling.primaryColor || "#f59e0b" }} />
          </div>
          <div className="text-center mb-4">
            <h3 className="font-bold text-xl mb-1" style={{ color: styling.mainFontColor || "#1f2937" }}>
              {item.nameAr}
            </h3>
            <p className="text-sm" style={{ color: styling.subFontColor || "#6b7280" }}>
              {item.name}
            </p>
            <Badge
              className="mt-2 backdrop-blur-sm"
              style={{
                backgroundColor: `${styling.primaryColor || "#f59e0b"}20`,
                color: styling.primaryColor || "#f59e0b",
                borderColor: `${styling.primaryColor || "#f59e0b"}40`,
              }}
            >
              {item.code}
            </Badge>
          </div>
        </div>

        {/* Glass grade display */}
        <div
          className="p-4 backdrop-blur-sm rounded-lg border shadow-sm"
          style={{
            backgroundColor: `${styling.subBackgroundColor || "#f8fafc"}90`,
            borderColor: styling.borderColor || "#e5e7eb",
          }}
        >
          <div className="text-center">
            <span className="text-sm font-medium block mb-1" style={{ color: styling.subFontColor || "#6b7280" }}>
              العيار
            </span>
            <span className="font-bold text-3xl" style={{ color: styling.primaryColor || "#f59e0b" }}>
              {item.grade}
            </span>
          </div>
        </div>

        {/* Glass price cards */}
        <div className="space-y-3">
          <div
            className="p-4 backdrop-blur-sm rounded-lg border shadow-sm"
            style={{
              backgroundColor: `${styling.buyColor || "#22c55e"}10`,
              borderColor: `${styling.buyColor || "#22c55e"}30`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowDownRight className="h-5 w-5" style={{ color: styling.buyColor || "#22c55e" }} />
                <span className="font-medium" style={{ color: styling.buyFontColor || "#15803d" }}>
                  شراء
                </span>
              </div>
              <span className="font-bold text-xl" style={{ color: styling.buyFontColor || "#15803d" }}>
                {item.purchasePrice.toFixed(2)} د.أ
              </span>
            </div>
          </div>

          <div
            className="p-4 backdrop-blur-sm rounded-lg border shadow-sm"
            style={{
              backgroundColor: `${styling.sellColor || "#3b82f6"}10`,
              borderColor: `${styling.sellColor || "#3b82f6"}30`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ArrowUpRight className="h-5 w-5" style={{ color: styling.sellColor || "#3b82f6" }} />
                <span className="font-medium" style={{ color: styling.sellFontColor || "#1d4ed8" }}>
                  بيع
                </span>
              </div>
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
