import { Zap, TrendingUp, TrendingDown } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"
import { Badge } from "@/components/ui/badge"

interface ModernNeonProps {
  item: GoldItem
  styling: CardStylingProps
}

export function ModernNeon({ item, styling }: ModernNeonProps) {
  const spacingClasses = {
    compact: "gap-3",
    normal: "gap-4",
    spacious: "gap-6",
  }

  const spacing = styling.spacing || "normal"

  // Override some styling properties to maintain the neon effect
  const neonStyle = {
    ...styling,
    neonEffect: true,
    backgroundColor: styling.backgroundColor || "#111827",
    mainFontColor: styling.mainFontColor || "#ffffff",
    subFontColor: styling.subFontColor || "#94a3b8",
    borderColor: styling.primaryColor || "#06b6d4",
  }

  return (
    <BaseCard item={item} styling={neonStyle}>
      <div className={`p-4 flex flex-col ${spacingClasses[spacing]} h-full justify-between`}>
        {/* Neon header */}
        <div className="text-center mb-4">
          <div className="flex justify-center mb-3">
            <div
              className="p-3 rounded-full border"
              style={{
                backgroundColor: `${styling.primaryColor || "#06b6d4"}20`,
                borderColor: `${styling.primaryColor || "#06b6d4"}50`,
              }}
            >
              <Zap className="h-6 w-6" style={{ color: styling.primaryColor || "#06b6d4" }} />
            </div>
          </div>
          <h3 className="font-bold text-xl mb-1" style={{ color: styling.mainFontColor || "#ffffff" }}>
            {item.nameAr}
          </h3>
          <p className="text-sm" style={{ color: styling.subFontColor || "#94a3b8" }}>
            {item.name}
          </p>
          <Badge
            className="mt-2"
            style={{
              backgroundColor: `${styling.primaryColor || "#06b6d4"}20`,
              color: styling.primaryColor || "#06b6d4",
              borderColor: `${styling.primaryColor || "#06b6d4"}50`,
            }}
          >
            {item.code}
          </Badge>
        </div>

        {/* Neon grade */}
        <div
          className="p-4 rounded-lg border"
          style={{
            backgroundColor: `${styling.primaryColor || "#06b6d4"}10`,
            borderColor: `${styling.primaryColor || "#06b6d4"}30`,
          }}
        >
          <div className="text-center">
            <span className="text-sm font-medium block mb-1" style={{ color: styling.subFontColor || "#94a3b8" }}>
              العيار
            </span>
            <span
              className="font-bold text-3xl drop-shadow-[0_0_10px_rgba(6,182,212,0.5)]"
              style={{ color: styling.primaryColor || "#06b6d4" }}
            >
              {item.grade}
            </span>
          </div>
        </div>

        {/* Neon prices */}
        <div className="space-y-3">
          <div
            className="p-4 rounded-lg border hover:bg-green-500/20 transition-all"
            style={{
              backgroundColor: `${styling.buyColor || "#22c55e"}10`,
              borderColor: `${styling.buyColor || "#22c55e"}30`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingDown className="h-5 w-5" style={{ color: styling.buyColor || "#4ade80" }} />
                <span className="font-medium" style={{ color: styling.buyFontColor || "#4ade80" }}>
                  شراء
                </span>
              </div>
              <span
                className="font-bold text-xl drop-shadow-[0_0_5px_rgba(34,197,94,0.5)]"
                style={{ color: styling.buyFontColor || "#4ade80" }}
              >
                {item.purchasePrice.toFixed(2)} د.أ
              </span>
            </div>
          </div>

          <div
            className="p-4 rounded-lg border hover:bg-blue-500/20 transition-all"
            style={{
              backgroundColor: `${styling.sellColor || "#3b82f6"}10`,
              borderColor: `${styling.sellColor || "#3b82f6"}30`,
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" style={{ color: styling.sellColor || "#60a5fa" }} />
                <span className="font-medium" style={{ color: styling.sellFontColor || "#60a5fa" }}>
                  بيع
                </span>
              </div>
              <span
                className="font-bold text-xl drop-shadow-[0_0_5px_rgba(59,130,246,0.5)]"
                style={{ color: styling.sellFontColor || "#60a5fa" }}
              >
                {item.sellPrice.toFixed(2)} د.أ
              </span>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  )
}
