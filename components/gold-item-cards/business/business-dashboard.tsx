import { LineChart, ArrowUp, ArrowDown, Info } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"
import { Badge } from "@/components/ui/badge"

interface BusinessDashboardProps {
  item: GoldItem
  styling: CardStylingProps
}

export function BusinessDashboard({ item, styling }: BusinessDashboardProps) {
  // Override some styling properties to maintain the dashboard style
  const dashboardStyle = {
    ...styling,
    backgroundColor: styling.backgroundColor || "#f8fafc",
    borderColor: styling.borderColor || "#cbd5e1",
    shadowStyle: styling.shadowStyle || "light",
  }

  return (
    <BaseCard item={item} styling={dashboardStyle}>
      <div className="p-4 flex flex-col h-full justify-between">
        {/* Dashboard header */}
        <div
          className="flex items-center justify-between mb-4 pb-3 border-b"
          style={{ borderColor: styling.borderColor || "#cbd5e1" }}
        >
          <div className="flex items-center gap-2">
            <div className="p-1.5 rounded" style={{ backgroundColor: `${styling.subBackgroundColor || "#e2e8f0"}` }}>
              <LineChart className="h-4 w-4" style={{ color: styling.mainFontColor || "#475569" }} />
            </div>
            <div>
              <h3 className="font-medium text-base" style={{ color: styling.mainFontColor || "#475569" }}>
                {item.nameAr}
              </h3>
              <p className="text-xs opacity-70" style={{ color: styling.subFontColor || "#64748b" }}>
                {item.name}
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="text-xs font-mono"
            style={{
              borderColor: styling.borderColor || "#cbd5e1",
              backgroundColor: styling.subBackgroundColor || "#e2e8f0",
            }}
          >
            {item.code}
          </Badge>
        </div>

        {/* Dashboard metrics */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div
            className="p-2 rounded border"
            style={{
              backgroundColor: styling.subBackgroundColor || "#e2e8f0",
              borderColor: styling.borderColor || "#cbd5e1",
            }}
          >
            <div className="text-xs opacity-70 mb-1" style={{ color: styling.subFontColor || "#64748b" }}>
              العيار
            </div>
            <div className="font-semibold" style={{ color: styling.mainFontColor || "#475569" }}>
              {item.grade}
            </div>
          </div>
          <div
            className="p-2 rounded border"
            style={{
              backgroundColor: styling.subBackgroundColor || "#e2e8f0",
              borderColor: styling.borderColor || "#cbd5e1",
            }}
          >
            <div className="text-xs opacity-70 mb-1" style={{ color: styling.subFontColor || "#64748b" }}>
              العملة
            </div>
            <div className="font-semibold" style={{ color: styling.mainFontColor || "#475569" }}>
              دينار أردني
            </div>
          </div>
        </div>

        {/* Dashboard price indicators */}
        <div className="space-y-2">
          <div
            className="flex items-center justify-between p-3 rounded border"
            style={{
              backgroundColor: styling.subBackgroundColor || "#ffffff",
              borderColor: styling.borderColor || "#cbd5e1",
            }}
          >
            <div className="flex items-center gap-2">
              <ArrowDown className="h-4 w-4" style={{ color: styling.buyColor || "#22c55e" }} />
              <span className="text-sm" style={{ color: styling.mainFontColor || "#475569" }}>
                سعر الشراء
              </span>
            </div>
            <div className="font-semibold" style={{ color: styling.buyFontColor || "#15803d" }}>
              {item.purchasePrice.toFixed(2)}
            </div>
          </div>

          <div
            className="flex items-center justify-between p-3 rounded border"
            style={{
              backgroundColor: styling.subBackgroundColor || "#ffffff",
              borderColor: styling.borderColor || "#cbd5e1",
            }}
          >
            <div className="flex items-center gap-2">
              <ArrowUp className="h-4 w-4" style={{ color: styling.sellColor || "#3b82f6" }} />
              <span className="text-sm" style={{ color: styling.mainFontColor || "#475569" }}>
                سعر البيع
              </span>
            </div>
            <div className="font-semibold" style={{ color: styling.sellFontColor || "#1d4ed8" }}>
              {item.sellPrice.toFixed(2)}
            </div>
          </div>
        </div>

        {/* Dashboard footer */}
        <div className="mt-4 pt-2 border-t" style={{ borderColor: styling.borderColor || "#cbd5e1" }}>
          <div className="flex items-center justify-center gap-1 text-xs opacity-60">
            <Info className="h-3 w-3" style={{ color: styling.subFontColor || "#64748b" }} />
            <span style={{ color: styling.subFontColor || "#64748b" }}>تحديث تلقائي كل 30 ثانية</span>
          </div>
        </div>
      </div>
    </BaseCard>
  )
}
