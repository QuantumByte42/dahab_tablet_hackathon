import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"

interface BusinessTableProps {
  item: GoldItem
  styling: CardStylingProps
}

export function BusinessTable({ item, styling }: BusinessTableProps) {
  // Override some styling properties to maintain the table style
  const tableStyle = {
    ...styling,
    backgroundColor: styling.backgroundColor || "#ffffff",
    borderColor: styling.borderColor || "#e5e7eb",
    shadowStyle: styling.shadowStyle || "light",
    padding: "0",
  }

  return (
    <BaseCard item={item} styling={tableStyle}>
      <div className="flex flex-col h-full">
        {/* Table header */}
        <div 
          className="p-3 border-b rounded-t"
          style={{ 
            backgroundColor: styling.subBackgroundColor || "#f9fafb",
            borderColor: styling.borderColor || "#e5e7eb"
          }}
        >
          <div className="flex justify-between items-center">
            <h3 
              className="font-medium"
              style={{ color: styling.mainFontColor || "#374151" }}
            >
              {item.nameAr}
            </h3>
            <span 
              className="text-xs px-2 py-0.5 rounded"
              style={{ 
                backgroundColor: styling.subBackgroundColor || "#f3f4f6",
                color: styling.subFontColor || "#6b7280"
              }}
            >
              {item.code}
            </span>
          </div>
        </div>

        {/* Table body */}
        <div 
          className="divide-y"
          style={{ borderColor: `${styling.borderColor || "#e5e7eb"}50` }}
        >
          <div 
            className="grid grid-cols-2 divide-x text-sm"
            style={{ borderColor: `${styling.borderColor || "#e5e7eb"}50` }}
          >
            <div className="p-3 text-center">
              <div 
                className="text-xs mb-1"
                style={{ color: styling.subFontColor || "#6b7280" }}
              >
                الاسم
              </div>
              <div style={{ color: styling.mainFontColor || "#374151" }}>
                {item.name}
              </div>
            </div>
            <div className="p-3 text-center">
              <div 
                className="text-xs mb-1"
                style={{ color: styling.subFontColor || "#6b7280" }}
              >
                العيار
              </div>
              <div 
                className="font-medium"
                style={{ color: styling.mainFontColor || "#374151" }}
              >
                {item.grade}
              </div>
            </div>
          </div>

          <div 
            className="grid grid-cols-2 divide-x"
            style={{ borderColor: `${styling.borderColor || "#e5e7eb"}50` }}
          >
            <div className="p-3">
              <div 
                className="text-xs mb-1"
                style={{ color: styling.subFontColor || "#6b7280" }}
              >
                سعر الشراء
              </div>
              <div 
                className="font-semibold"
                style={{ color: styling.buyFontColor || "#15803d" }}
              >
                {item.purchasePrice.toFixed(2)} د.أ
              </div>
            </div>
            <div className="\
