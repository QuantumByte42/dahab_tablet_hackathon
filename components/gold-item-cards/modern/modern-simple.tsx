import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"

interface ModernSimpleProps {
  item: GoldItem
  styling: CardStylingProps
}

export function ModernSimple({ item, styling }: ModernSimpleProps) {
  // Override some styling properties to maintain the simple style
  const simpleStyle = {
    ...styling,
    shadowStyle: styling.shadowStyle || "light",
    borderStyle: styling.borderStyle || "solid",
    borderColor: styling.borderColor || "#e5e7eb",
    backgroundColor: styling.backgroundColor || "#ffffff",
  }

  return (
    <BaseCard item={item} styling={simpleStyle}>
      <div className="p-8 h-full flex flex-col">
        {/* Ultra minimal header */}
        <div className="text-center mb-8">
          <h3 className="font-light text-2xl mb-2" style={{ color: styling.mainFontColor || "#1f2937" }}>
            {item.nameAr}
          </h3>
          <p
            className="text-sm opacity-60 uppercase tracking-wide"
            style={{ color: styling.subFontColor || "#9ca3af" }}
          >
            {item.name}
          </p>
        </div>

        {/* Simple divider */}
        <div className="w-12 h-px mx-auto mb-8" style={{ backgroundColor: styling.borderColor || "#e5e7eb" }}></div>

        {/* Code and grade in one line */}
        <div
          className="flex justify-between items-center mb-8 text-sm"
          style={{ color: styling.subFontColor || "#9ca3af" }}
        >
          <span>{item.code}</span>
          <span>{item.grade}</span>
        </div>

        {/* Clean price list */}
        <div className="space-y-6 mt-auto">
          <div className="flex justify-between items-center">
            <span className="font-light" style={{ color: styling.subFontColor || "#9ca3af" }}>
              شراء
            </span>
            <span className="font-medium text-xl" style={{ color: styling.buyFontColor || "#1f2937" }}>
              {item.purchasePrice.toFixed(2)}
            </span>
          </div>

          <div className="w-full h-px" style={{ backgroundColor: `${styling.borderColor || "#e5e7eb"}50` }}></div>

          <div className="flex justify-between items-center">
            <span className="font-light" style={{ color: styling.subFontColor || "#9ca3af" }}>
              بيع
            </span>
            <span className="font-medium text-xl" style={{ color: styling.sellFontColor || "#1f2937" }}>
              {item.sellPrice.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Minimal currency indicator */}
        <div className="text-center mt-6">
          <span
            className="text-xs opacity-50 uppercase tracking-widest"
            style={{ color: styling.subFontColor || "#9ca3af" }}
          >
            دينار أردني
          </span>
        </div>
      </div>
    </BaseCard>
  )
}
