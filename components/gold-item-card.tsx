import { useCustomizationStore } from "@/stores/customization-store"

// Modern cards
import { ModernClean } from "./gold-item-cards/modern/modern-clean"
import { ModernGlass } from "./gold-item-cards/modern/modern-glass"
import { ModernNeon } from "./gold-item-cards/modern/modern-neon"
import { ModernSimple } from "./gold-item-cards/modern/modern-simple"

// Classic cards
import { ClassicRoyal } from "./gold-item-cards/classic/classic-royal"
import { ClassicVintage } from "./gold-item-cards/classic/classic-vintage"

// Creative cards
import { CreativeArtistic } from "./gold-item-cards/creative/creative-artistic"
import { CreativeGeometric } from "./gold-item-cards/creative/creative-geometric"
import { CreativeGradient } from "./gold-item-cards/creative/creative-gradient"

// Business cards
import { BusinessCorporate } from "./gold-item-cards/business/business-corporate"
import { BusinessDashboard } from "./gold-item-cards/business/business-dashboard"
import { BusinessTable } from "./gold-item-cards/business/business-table"

import type { GoldItem } from "@/types/gold"

interface GoldItemCardProps {
  item: GoldItem
}

export function GoldItemCard({ item }: GoldItemCardProps) {
  const { settings } = useCustomizationStore()

  const cardComponents = {
    // Modern category
    "modern-clean": ModernClean,
    "modern-glass": ModernGlass,
    "modern-neon": ModernNeon,
    "modern-simple": ModernSimple,

    // Classic category
    "classic-royal": ClassicRoyal,
    "classic-vintage": ClassicVintage,

    // Creative category
    "creative-artistic": CreativeArtistic,
    "creative-geometric": CreativeGeometric,
    "creative-gradient": CreativeGradient,

    // Business category
    "business-corporate": BusinessCorporate,
    "business-dashboard": BusinessDashboard,
    "business-table": BusinessTable,
  }

  const CardComponent = cardComponents[settings.cardStyle as keyof typeof cardComponents] || ModernClean

  return <CardComponent item={item} styling={settings.cardStyling} />
}
