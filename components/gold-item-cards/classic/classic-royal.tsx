import { Crown, Star } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard } from "../base-card"
import { Badge } from "@/components/ui/badge"

interface ClassicRoyalProps {
  item: GoldItem
  styling: CardStylingProps
}

export function ClassicRoyal({ item, styling }: ClassicRoyalProps) {
  // Override some styling properties to maintain the royal style
  const royalStyle = {
    ...styling,
    backgroundColor: styling.backgroundColor || "#fef3c7",
    primaryColor: styling.primaryColor || "#d97706",
    mainFontColor: styling.mainFontColor || "#92400e",
    subFontColor: styling.subFontColor || "#d97706",
    borderColor: styling.borderColor || "#d97706",
    borderSize: styling.borderSize || "2px",
  }

  return (
    <BaseCard item={item} styling={royalStyle}>
      <div className="p-6 flex flex-col h-full justify-between">
        {/* Royal header with crown */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div
              className="p-4 rounded-full border-2"
              style={{
                backgroundColor: `${styling.primaryColor || "#d97706"}10`,
                borderColor: styling.borderColor || "#d97706",
              }}
            >
              <Crown className="h-10 w-10" style={{ color: styling.primaryColor || "#d97706" }} />
            </div>
          </div>
          <h3 className="font-bold text-2xl mb-2" style={{ color: styling.mainFontColor || "#92400e" }}>
            {item.nameAr}
          </h3>
          <p className="text-sm mb-3" style={{ color: styling.subFontColor || "#d97706" }}>
            {item.name}
          </p>
          <Badge
            variant="outline"
            className="px-3 py-1"
            style={{
              borderColor: styling.borderColor || "#d97706",
              color: styling.mainFontColor || "#92400e",
            }}
          >
            {item.code}
          </Badge>
        </div>

        {/* Ornate grade display */}
        <div
          className="text-center p-4 rounded-lg border-2 my-6"
          style={{
            backgroundColor: `${styling.primaryColor || "#d97706"}10`,
            borderColor: styling.borderColor || "#d97706",
          }}
        >
          <div
            className="text-sm font-medium mb-1 flex items-center justify-center gap-1"
            style={{ color: styling.subFontColor || "#d97706" }}
          >
            <Star className="h-3 w-3" />
            العيار
            <Star className="h-3 w-3" />
          </div>
          <div className="font-bold text-3xl" style={{ color: styling.mainFontColor || "#92400e" }}>
            {item.grade}
          </div>
        </div>

        {/* Royal price layout */}
        <div className="space-y-4">
          <div
            className="rounded-lg border-2 shadow-sm overflow-hidden"
            style={{
              backgroundColor: styling.subBackgroundColor || "#ffffff",
              borderColor: styling.borderColor || "#d97706",
            }}
          >
            <div
              className="px-4 py-2 border-b"
              style={{
                backgroundColor: `${styling.primaryColor || "#d97706"}10`,
                borderColor: styling.borderColor || "#d97706",
              }}
            >
              <span className="font-medium text-sm" style={{ color: styling.subFontColor || "#d97706" }}>
                سعر الشراء
              </span>
            </div>
            <div className="p-4 text-center">
              <span className="font-bold text-xl" style={{ color: styling.buyFontColor || "#15803d" }}>
                {item.purchasePrice.toFixed(2)} د.أ
              </span>
            </div>
          </div>

          <div
            className="rounded-lg border-2 shadow-sm overflow-hidden"
            style={{
              backgroundColor: styling.subBackgroundColor || "#ffffff",
              borderColor: styling.borderColor || "#d97706",
            }}
          >
            <div
              className="px-4 py-2 border-b"
              style={{
                backgroundColor: `${styling.primaryColor || "#d97706"}10`,
                borderColor: styling.borderColor || "#d97706",
              }}
            >
              <span className="font-medium text-sm" style={{ color: styling.subFontColor || "#d97706" }}>
                سعر البيع
              </span>
            </div>
            <div className="p-4 text-center">
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
