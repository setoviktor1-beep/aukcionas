// Vartotojas
export interface User {
  id: string
  email: string
  full_name: string | null
  avatar_url: string | null
  phone: string | null
  address: string | null
  rating: number
  created_at: string
  updated_at: string
}

// Aukciono skelbimai
export interface Listing {
  id: string
  seller_id: string
  title: string
  description: string
  category: string
  condition: 'new' | 'like_new' | 'good' | 'fair' | 'poor'
  starting_price: number
  current_price: number
  buy_now_price: number | null
  images: string[]
  location: string
  ends_at: string
  status: 'active' | 'ended' | 'sold' | 'cancelled'
  created_at: string
  updated_at: string
  seller?: User
  bids?: Bid[]
}

// Pasiūlymai
export interface Bid {
  id: string
  listing_id: string
  bidder_id: string
  amount: number
  created_at: string
  bidder?: User
}

// Transakcijos
export interface Transaction {
  id: string
  listing_id: string
  buyer_id: string
  seller_id: string
  amount: number
  platform_fee: number
  stripe_payment_intent_id: string | null
  status: 'pending' | 'completed' | 'refunded' | 'failed'
  created_at: string
}

// Stebimų skelbimai
export interface WatchlistItem {
  id: string
  user_id: string
  listing_id: string
  created_at: string
  listing?: Listing
}

// Reitingai
export interface Rating {
  id: string
  reviewer_id: string
  reviewed_id: string
  listing_id: string
  score: number
  comment: string | null
  created_at: string
  reviewer?: User
}

// Kategorijos
export type Category =
  | 'elektronika'
  | 'transportas'
  | 'nekilnojamas-turtas'
  | 'butas-ir-sodas'
  | 'drabuzia-ir-mada'
  | 'sportas'
  | 'kolekcionavimas'
  | 'knygos'
  | 'vaiku-prekes'
  | 'kita'

// API atsakymai
export interface ApiResponse<T> {
  data: T | null
  error: string | null
}
