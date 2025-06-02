import { Building2, BarChart3 } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"
import { Badge } from "@/components/ui/badge"

interface BusinessCorporateProps {
  item: GoldItem
  styling: CardStylingProps
}

export function BusinessCorporate({ item, styling }: BusinessCorporateProps) {
  // Override some styling properties to maintain the corporate style
  const corporateStyle = {
    ...styling,
    backgroundColor: styling.backgroundColor || "#ffffff",
    borderColor: styling.borderColor || "#e5e7eb",
    shadowStyle: styling.shadowStyle || "light",
  }

  return (
    <BaseCard item={item} styling={corporateStyle}>
      <div className="p-6 flex flex-col h-full justify-between">
        {/* Corporate header */}
        <div
          className="flex items-center justify-between mb-4 pb-3 border-b"
          style={{ borderColor: `${styling.borderColor || "#e5e7eb"}` }}
        >
          <div className="flex items-center gap-3">
            <div
              className="p-2 rounded"
              style={{
                backgroundColor: `${styling.primaryColor || "#1d4ed8"}10`,
              }}
            >
              <Building2 className="h-5 w-5" style={{ color: styling.primaryColor || "#1d4ed8" }} />
            </div>
            <div>
              <h3 className="font-semibold text-lg" style={{ color: styling.mainFontColor || "#1f2937" }}>
                {item.nameAr}
              </h3>
              <p className="text-sm" style={{ color: styling.subFontColor || "#6b7280" }}>
                {item.name}
              </p>
            </div>
          </div>
          <Badge
            variant="outline"
            className="text-xs font-mono"
            style={{
              borderColor: styling.borderColor || "#e5e7eb",
            }}
          >
            {item.code}
          </Badge>
        </div>

        {/* Professional grade display */}
        <div
          className="mb-4 p-3 rounded border"
          style={{
            backgroundColor: `${styling.subBackgroundColor || "#f8fafc"}`,
            borderColor: styling.borderColor || "#e5e7eb",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium" style={{ color: styling.subFontColor || "#6b7280" }}>
              العيار
            </span>
            <span className="font-bold text-xl" style={{ color: styling.mainFontColor || "#1f2937" }}>
              {item.grade}
            </span>
          </div>
        </div>

        {/* Business-style price table */}
        <div className="space-y-2">
          <div
            className="flex items-center justify-between p-3 border rounded"
            style={{
              backgroundColor: `${styling.buyColor || "#22c55e"}10`,
              borderColor: `${styling.buyColor || "#22c55e"}30`,
            }}
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" style={{ color: styling.buyColor || "#22c55e" }} />
              <span className="font-medium text-sm" style={{ color: styling.buyFontColor || "#15803d" }}>
                سعر الشراء
              </span>
            </div>
            <span className="font-bold text-lg" style={{ color: styling.buyFontColor || "#15803d" }}>
              {item.purchasePrice.toFixed(2)} د.أ
            </span>
          </div>

          <div
            className="flex items-center justify-between p-3 border rounded"
            style={{
              backgroundColor: `${styling.sellColor || "#3b82f6"}10`,
              borderColor: `${styling.sellColor || "#3b82f6"}30`,
            }}
          >
            <div className="flex items-center gap-2">
              <BarChart3 className="h-4 w-4" style={{ color: styling.sellColor || "#3b82f6" }} />
              <span className="font-medium text-sm" style={{ color: styling.sellFontColor || "#1d4ed8" }}>
                سعر البيع
              </span>
            </div>
            <span className="font-bold text-lg" style={{ color: styling.sellFontColor || "#1d4ed8" }}>
              {item.sellPrice.toFixed(2)} د.أ
            </span>
          </div>
        </div>

        {/* Professional footer */}
        <div className="mt-4 pt-3 border-t text-center" style={{ borderColor: styling.borderColor || "#e5e7eb" }}>
          <span className="text-xs uppercase tracking-wide" style={{ color: styling.subFontColor || "#6b7280" }}>
            دينار أردني
          </span>
        </div>
      </div>
    </BaseCard>
  )
}
