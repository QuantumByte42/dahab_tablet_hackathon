import { Scroll } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"
import { Badge } from "@/components/ui/badge"

interface ClassicVintageProps {
  item: GoldItem
  styling: CardStylingProps
}

export function ClassicVintage({ item, styling }: ClassicVintageProps) {
  // Override some styling properties to maintain the vintage style
  const vintageStyle = {
    ...styling,
    backgroundColor: styling.backgroundColor || "#fef7ed",
    primaryColor: styling.primaryColor || "#ea580c",
    mainFontColor: styling.mainFontColor || "#9a3412",
    subFontColor: styling.subFontColor || "#ea580c",
    borderColor: styling.borderColor || "#fed7aa",
    borderStyle: styling.borderStyle || "dashed",
  }

  return (
    <BaseCard item={item} styling={vintageStyle}>
      <div className="p-6 flex flex-col h-full justify-between">
        {/* Vintage decorative border */}
        <div
          className="border-2 border-dashed rounded-lg p-4 h-full"
          style={{
            backgroundColor: `${styling.subBackgroundColor || "#ffffff"}50`,
            borderColor: styling.borderColor || "#fed7aa",
          }}
        >
          {/* Vintage header */}
          <div className="text-center mb-4">
            <div className="flex justify-center mb-3">
              <div
                className="p-3 rounded-full border"
                style={{
                  backgroundColor: `${styling.primaryColor || "#ea580c"}20`,
                  borderColor: styling.borderColor || "#fed7aa",
                }}
              >
                <Scroll className="h-6 w-6" style={{ color: styling.primaryColor || "#ea580c" }} />
              </div>
            </div>
            <h3 className="font-serif font-bold text-xl mb-1" style={{ color: styling.mainFontColor || "#9a3412" }}>
              {item.nameAr}
            </h3>
            <p className="text-sm italic" style={{ color: styling.subFontColor || "#ea580c" }}>
              {item.name}
            </p>
            <div className="mt-2 flex justify-center">
              <Badge
                className="font-serif"
                style={{
                  backgroundColor: `${styling.primaryColor || "#ea580c"}20`,
                  color: styling.mainFontColor || "#9a3412",
                  borderColor: styling.borderColor || "#fed7aa",
                }}
              >
                {item.code}
              </Badge>
            </div>
          </div>

          {/* Vintage grade with decorative elements */}
          <div className="relative mb-4">
            <div
              className="absolute -top-1 -left-1 w-4 h-4 border-l-2 border-t-2"
              style={{ borderColor: styling.borderColor || "#fed7aa" }}
            ></div>
            <div
              className="absolute -top-1 -right-1 w-4 h-4 border-r-2 border-t-2"
              style={{ borderColor: styling.borderColor || "#fed7aa" }}
            ></div>
            <div
              className="absolute -bottom-1 -left-1 w-4 h-4 border-l-2 border-b-2"
              style={{ borderColor: styling.borderColor || "#fed7aa" }}
            ></div>
            <div
              className="absolute -bottom-1 -right-1 w-4 h-4 border-r-2 border-b-2"
              style={{ borderColor: styling.borderColor || "#fed7aa" }}
            ></div>

            <div
              className="p-4 border text-center"
              style={{
                backgroundColor: `${styling.primaryColor || "#ea580c"}10`,
                borderColor: styling.borderColor || "#fed7aa",
              }}
            >
              <span className="text-sm font-serif block mb-1" style={{ color: styling.subFontColor || "#ea580c" }}>
                ~ العيار ~
              </span>
              <span className="font-serif font-bold text-2xl" style={{ color: styling.mainFontColor || "#9a3412" }}>
                {item.grade}
              </span>
            </div>
          </div>

          {/* Vintage price display */}
          <div className="space-y-3">
            <div
              className="border rounded p-3"
              style={{
                backgroundColor: `${styling.buyColor || "#22c55e"}10`,
                borderColor: `${styling.buyColor || "#22c55e"}30`,
              }}
            >
              <div className="flex justify-between items-center">
                <span className="font-serif" style={{ color: styling.buyFontColor || "#15803d" }}>
                  شراء
                </span>
                <span className="font-serif font-bold text-lg" style={{ color: styling.buyFontColor || "#15803d" }}>
                  {item.purchasePrice.toFixed(2)} د.أ
                </span>
              </div>
            </div>

            <div
              className="border rounded p-3"
              style={{
                backgroundColor: `${styling.sellColor || "#3b82f6"}10`,
                borderColor: `${styling.sellColor || "#3b82f6"}30`,
              }}
            >
              <div className="flex justify-between items-center">
                <span className="font-serif" style={{ color: styling.sellFontColor || "#1d4ed8" }}>
                  بيع
                </span>
                <span className="font-serif font-bold text-lg" style={{ color: styling.sellFontColor || "#1d4ed8" }}>
                  {item.sellPrice.toFixed(2)} د.أ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BaseCard>
  )
}
