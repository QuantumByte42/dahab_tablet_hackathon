import { useCustomizationStore } from "@/stores/customization-store"
import { ModernCard } from "./gold-item-cards/modern-card"
import { ClassicCard } from "./gold-item-cards/classic-card"
import { LuxuryCard } from "./gold-item-cards/luxury-card"
import { MinimalCard } from "./gold-item-cards/minimal-card"
import { ElegantCard } from "./gold-item-cards/elegant-card"
import { BoldCard } from "./gold-item-cards/bold-card"
import type { GoldItem } from "@/types/gold"

interface GoldItemCardProps {
  item: GoldItem
}

export function GoldItemCard({ item }: GoldItemCardProps) {
  const { settings } = useCustomizationStore()

  const cardComponents = {
    modern: ModernCard,
    classic: ClassicCard,
    luxury: LuxuryCard,
    minimal: MinimalCard,
    elegant: ElegantCard,
    bold: BoldCard,
  }

  const CardComponent = cardComponents[settings.cardStyle] || ModernCard

  return <CardComponent item={item} settings={settings} />
}
