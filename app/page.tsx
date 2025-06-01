import { GoldDashboard } from "@/components/gold-dashboard"
import { Header } from "@/components/header"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 to-amber-50">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <GoldDashboard />
      </div>
    </div>
  )
}
