import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Cairo, Amiri, Tajawal, Almarai, Rubik } from "next/font/google"

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
})

const amiri = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-amiri",
  display: "swap",
})

const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
  variable: "--font-tajawal",
  display: "swap",
})

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-almarai",
  display: "swap",
})

const rubik = Rubik({
  subsets: ["arabic"],
  variable: "--font-rubik",
  display: "swap",
})

export const metadata: Metadata = {
  title: "لوحة تحكم متجر الذهب",
  description: "أسعار الذهب المباشرة وإدارة المخزون",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${cairo.variable} ${amiri.variable} ${tajawal.variable} ${almarai.variable} ${rubik.variable}`}
    >
      <body className={cairo.className}>{children}</body>
    </html>
  )
}
