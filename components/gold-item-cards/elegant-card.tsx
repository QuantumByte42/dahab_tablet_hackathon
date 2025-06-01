import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Gem, Sparkles } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CustomizationSettings } from "@/types/customization"

interface ElegantCardProps {
  item: GoldItem
  settings: CustomizationSettings
}

export function ElegantCard({ item, settings }: ElegantCardProps) {
  return (
    <Card className="h-full hover:shadow-lg transition-all duration-300 bg-gradient-to-br from-slate-50 to-gray-100 border-slate-200 relative overflow-hidden">
      {/* Elegant decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-slate-200/50 to-transparent rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-slate-200/30 to-transparent rounded-full"></div>

      <CardContent className="p-6 relative">
        {/* Asymmetric header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-200 rounded-lg">
                <Gem className="h-5 w-5 text-slate-600" />
              </div>
              <Badge variant="outline" className="border-slate-300 text-slate-600 text-xs">
                {item.code}
              </Badge>
            </div>
            <Sparkles className="h-4 w-4 text-slate-400" />
          </div>

          <div className="ml-10">
            <h3 className="font-semibold text-xl text-slate-800 mb-1">{item.nameAr}</h3>
            <p className="text-sm text-slate-500">{item.name}</p>
          </div>
        </div>

        {/* Elegant grade display */}
        <div className="mb-6 ml-6">
          <div className="inline-block p-3 bg-white rounded-lg border border-slate-200 shadow-sm">
            <span className="text-xs text-slate-500 block mb-1">العيار</span>
            <span className="font-semibold text-lg text-slate-800">{item.grade}</span>
          </div>
        </div>

        {/* Sophisticated price layout */}
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 bg-white/70 rounded-lg border border-slate-200/50 backdrop-blur-sm">
            <div className="text-right">
              <span className="text-xs text-emerald-600 block">شراء</span>
              <span className="font-bold text-emerald-700">{item.purchasePrice.toFixed(2)}</span>
            </div>
            <div className="w-px h-8 bg-slate-200"></div>
            <div className="text-left">
              <span className="text-xs text-blue-600 block">بيع</span>
              <span className="font-bold text-blue-700">{item.sellPrice.toFixed(2)}</span>
            </div>
          </div>
        </div>

        {/* Elegant footer */}
        <div className="mt-4 text-center">
          <span className="text-xs text-slate-400">دينار أردني</span>
        </div>
      </CardContent>
    </Card>
  )
}
