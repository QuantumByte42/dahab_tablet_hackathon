import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import { Cairo } from 'next/font/google';

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
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
    <html lang="ar" dir="rtl" className={cairo.className}>
      <body>{children}</body>
    </html>
  )
}
