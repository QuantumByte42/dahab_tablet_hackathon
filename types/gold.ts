export interface GoldItem {
  name: string
  nameAr: string
  code: string
  grade: string
  purchasePrice: number
  sellPrice: number
}

export interface GoldData {
  [key: string]: GoldItem
}
