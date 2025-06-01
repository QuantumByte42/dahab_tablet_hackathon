"use client"

import { useState, useEffect } from "react"
import { collection, getDocs } from "firebase/firestore"
import { db } from "@/lib/firebase"
import type { GoldItem } from "@/types/gold"

export function useGoldData() {
  const [goldItems, setGoldItems] = useState<GoldItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchGoldData() {
      try {
        setLoading(true)
        const snapshot = await getDocs(collection(db, "goldMerchant"))
        const items: GoldItem[] = []

        snapshot.forEach((doc) => {
          if (doc.id === "date") return
          const data = doc.data()

          for (const key in data) {
            if (typeof data[key] === "object" && data[key].name) {
              items.push(data[key] as GoldItem)
            }
          }
        })

        setGoldItems(items)
        setError(null)
      } catch (err) {
        console.error("Error fetching gold data:", err)
        setError("Failed to fetch gold data")
      } finally {
        setLoading(false)
      }
    }

    fetchGoldData()

    const interval = setInterval(fetchGoldData, 30000)
    return () => clearInterval(interval)
  }, [])

  return { goldItems, loading, error }
}
