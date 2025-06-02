import { Card, CardContent } from "@/components/ui/card"
import type { GoldItem } from "@/types/gold"
import type { CustomizationSettings } from "@/types/customization"

interface MinimalCardProps {
  item: GoldItem
  settings: CustomizationSettings
}

export function MinimalCard({ item }: MinimalCardProps) {
  return (
    <Card className="h-full hover:shadow-md transition-shadow duration-200 bg-white border border-gray-200">
      <CardContent className="p-8">
        {/* Ultra minimal header */}
        <div className="text-center mb-8">
          <h3 className="font-light text-2xl text-gray-900 mb-2">{item.nameAr}</h3>
          <p className="text-sm text-gray-400 uppercase tracking-wide">{item.name}</p>
        </div>

        {/* Simple divider */}
        <div className="w-12 h-px bg-gray-300 mx-auto mb-8"></div>

        {/* Code and grade in one line */}
        <div className="flex justify-between items-center mb-8 text-sm text-gray-500">
          <span>{item.code}</span>
          <span>{item.grade}</span>
        </div>

        {/* Clean price list */}
        <div className="space-y-6">
          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-light">شراء</span>
            <span className="font-medium text-xl text-gray-900">{item.purchasePrice.toFixed(2)}</span>
          </div>

          <div className="w-full h-px bg-gray-100"></div>

          <div className="flex justify-between items-center">
            <span className="text-gray-600 font-light">بيع</span>
            <span className="font-medium text-xl text-gray-900">{item.sellPrice.toFixed(2)}</span>
          </div>
        </div>

        {/* Minimal currency indicator */}
        <div className="text-center mt-6">
          <span className="text-xs text-gray-400 uppercase tracking-widest">دينار أردني</span>
        </div>
      </CardContent>
    </Card>
  )
}
