"use client"

import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import type { GoldItem } from "@/types/gold"

export function useGoldData() {
  const [goldItems, setGoldItems] = useState<GoldItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())

  useEffect(() => {
    async function fetchGoldData() {
      try {
        setLoading(true)
        setError(null)

        console.log("🔄 Fetching data from Firebase goldMerchant collection...")

        const snapshot = await getDocs(collection(db, "goldMerchant"))
        const items: GoldItem[] = []

        snapshot.forEach((doc) => {
          if (doc.id === "date") return

          const data = doc.data()
          console.log(`📄 Processing document: ${doc.id}`, data)

          for (const key in data) {
            if (typeof data[key] === "object" && data[key] !== null) {
              const item = data[key]

              if (
                item.name &&
                item.nameAr &&
                item.code &&
                item.grade &&
                typeof item.purchasePrice === "number" &&
                typeof item.sellPrice === "number"
              ) {
                items.push({
                  name: item.name,
                  nameAr: item.nameAr,
                  code: item.code,
                  grade: item.grade,
                  purchasePrice: item.purchasePrice,
                  sellPrice: item.sellPrice,
                } as GoldItem)

                console.log(`✅ Added item: ${item.nameAr} (${item.code})`)
              }
            }
          }
        })

        if (items.length > 0) {
          setGoldItems(items)
          setLastUpdate(new Date())
        } else {
          setError("لا توجد بيانات ذهب في قاعدة البيانات")
        }
      } catch (err) {
        console.error("Error fetching gold data:", err)
        setError("Failed to fetch gold data")
      } finally {
        setLoading(false)
      }
    }

    // Initial fetch
    fetchGoldData()

    const interval = setInterval(() => {
      console.log("Auto-refreshing...")
      fetchGoldData()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return {
    goldItems,
    loading,
    error,
    lastUpdate,
    usingMockData: false,
    firebaseStatus: "connected" as const,
  }
}
