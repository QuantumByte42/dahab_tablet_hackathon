"use client"

import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import type { GoldItem } from "@/types/gold"
import { useCustomizationStore } from "@/stores/customization-store"

export function useGoldData() {
  const [goldItems, setGoldItems] = useState<GoldItem[]>([])
  const [originalGoldItems, setOriginalGoldItems] = useState<GoldItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [lastUpdate, setLastUpdate] = useState<Date>(new Date())
  const { pricePreferences } = useCustomizationStore()

  useEffect(() => {
    let isMounted = true
    let intervalId: NodeJS.Timeout | null = null

    async function fetchGoldData() {
      if (!isMounted) {
        return
      }

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

        if (!isMounted) return

        if (items.length > 0) {
          // Store original items
          setOriginalGoldItems(items)

          const adjustedItems = applyPriceAdjustments(items, pricePreferences)
          setGoldItems(adjustedItems)

          setLastUpdate(new Date())
        } else {
          setError("لا توجد بيانات ذهب في قاعدة البيانات")
        }
      } catch (err) {
        if (!isMounted) return
        console.error("Error fetching gold data:", err)
        setError("Failed to fetch gold data")
      } finally {
        if (isMounted) {
          setLoading(false)
        }
      }
    }

    // Initial fetch
    fetchGoldData()

    // Set up interval for auto-refresh (only if component is still mounted)
    intervalId = setInterval(() => {
      if (isMounted) {
        console.log("Auto-refreshing...")
        fetchGoldData()
      }
    }, 30000)

    // Cleanup function
    return () => {
      isMounted = false
      if (intervalId) {
        clearInterval(intervalId)
        intervalId = null
      }
    }
  }, []) // Only run on mount

  useEffect(() => {
    if (originalGoldItems.length > 0) {
      const adjustedItems = applyPriceAdjustments(originalGoldItems, pricePreferences)
      setGoldItems(adjustedItems)
    }
  }, [pricePreferences, originalGoldItems])

  function applyPriceAdjustments(
    items: GoldItem[],
    preferences: Record<string, { buy_delta: number; sell_delta: number }>,
  ) {
    return items.map((item) => {
      const preference = preferences[item.name]

      if (preference) {
        return {
          ...item,
          purchasePrice: item.purchasePrice + (preference.buy_delta || 0),
          sellPrice: item.sellPrice + (preference.sell_delta || 0),
        }
      }

      return item
    })
  }

  return {
    goldItems,
    originalGoldItems,
    loading,
    error,
    lastUpdate,
    usingMockData: false,
    firebaseStatus: "connected" as const,
  }
}
