export interface GamePrice {
  store: string;
  price: number;
  currency: string;
  url: string;
  isOnSale: boolean;
  originalPrice?: number;
  saleEndDate?: string;
}

export interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  metacriticScore?: number;
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[];
  platforms: string[];
  prices: Record<string, GamePrice[]>; // Region -> Store prices
}

export interface Region {
  code: string;
  name: string;
  currency: string;
  flag: string;
}

export interface ErrorInfo {
  code: string;
  message: string;
  type: 'network' | 'api' | 'unknown' | 'search';
}

export type Store = 'steam' | 'epic' | 'gog' | 'xbox' | 'playstation';