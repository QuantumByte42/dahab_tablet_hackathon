import { Coins } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CardStylingProps } from "@/types/customization"
import { BaseCard, CardHeader, CardGrade, CardPrices } from "../base-card"

interface ModernCleanProps {
  item: GoldItem
  styling: CardStylingProps
}

export function ModernClean({ item, styling }: ModernCleanProps) {
  const spacingClasses = {
    compact: "gap-2",
    normal: "gap-4",
    spacious: "gap-6",
  }

  const spacing = styling.spacing || "normal"

  return (
    <BaseCard item={item} styling={styling}>
      <div className={`flex flex-col ${spacingClasses[spacing]} h-full justify-between`}>
        <CardHeader item={item} styling={styling} icon={<Coins className="h-6 w-6" />} />
        <CardGrade item={item} styling={styling} />
        <CardPrices item={item} styling={styling} />
      </div>
    </BaseCard>
  )
}
