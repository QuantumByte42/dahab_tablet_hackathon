import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Zap, TrendingUp, TrendingDown } from "lucide-react"
import type { GoldItem } from "@/types/gold"
import type { CustomizationSettings } from "@/types/customization"

interface BoldCardProps {
  item: GoldItem
  settings: CustomizationSettings
}

export function BoldCard({ item, settings }: BoldCardProps) {
  return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-500 via-red-500 to-pink-600 text-white border-0 transform hover:scale-105 relative overflow-hidden">
      {/* Bold background effects */}
      <div className="absolute inset-0 bg-gradient-to-tr from-yellow-400/20 via-transparent to-purple-600/20"></div>
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400"></div>

      <CardContent className="p-6 relative z-10">
        {/* Bold header */}
        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <div className="p-4 bg-white/20 rounded-full backdrop-blur-sm border-2 border-white/30">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>
          <h3 className="font-black text-2xl text-white mb-2 uppercase tracking-wide">{item.nameAr}</h3>
          <p className="text-sm text-orange-100 font-medium">{item.name}</p>
          <Badge className="bg-white text-orange-600 font-black mt-3 px-3 py-1">{item.code}</Badge>
        </div>

        {/* Bold grade */}
        <div className="text-center mb-6">
          <div className="inline-block p-4 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
            <span className="text-sm font-bold text-orange-100 block mb-1">العيار</span>
            <span className="font-black text-3xl text-white">{item.grade}</span>
          </div>
        </div>

        {/* Bold price display */}
        <div className="space-y-4">
          <div className="relative">
            <div className="absolute inset-0 bg-green-400/20 rounded-lg blur-sm"></div>
            <div className="relative p-4 bg-green-500/30 rounded-lg backdrop-blur-sm border border-green-400/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-6 w-6 text-green-300" />
                  <span className="font-black text-green-100 text-lg">شراء</span>
                </div>
                <span className="font-black text-2xl text-green-200">{item.purchasePrice.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-blue-400/20 rounded-lg blur-sm"></div>
            <div className="relative p-4 bg-blue-500/30 rounded-lg backdrop-blur-sm border border-blue-400/50">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-6 w-6 text-blue-300" />
                  <span className="font-black text-blue-100 text-lg">بيع</span>
                </div>
                <span className="font-black text-2xl text-blue-200">{item.sellPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bold footer */}
        <div className="text-center mt-6">
          <span className="font-bold text-white/80 uppercase tracking-widest text-xs">دينار أردني</span>
        </div>
      </CardContent>
    </Card>
  )
}
