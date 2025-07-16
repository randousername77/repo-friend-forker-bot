# API Documentation - Game Price Pal

## Overview

Game Price Pal currently uses mock data for demonstration purposes. This document outlines the planned API integration and current data structures.

## Current Implementation

### Mock Data Structure
The application currently uses static mock data located in:
- `src/data/mockGameData.ts` - Sample game data
- `src/data/regions.ts` - Supported regions and currencies

### Data Flow
```
Component → useGameData Hook → Mock Data → Component Update
```

## Planned API Integration

### Primary API: IsThereAnyDeal
**Base URL**: `https://api.isthereanydeal.com`
**Documentation**: [IsThereAnyDeal API](https://docs.isthereanydeal.com/)

#### Authentication
```typescript
const API_KEY = process.env.VITE_ISTHEREANYDEAL_API_KEY;
const headers = {
  'Authorization': `Bearer ${API_KEY}`,
  'Content-Type': 'application/json'
};
```

#### Endpoints

##### 1. Game Search
```typescript
GET /v01/search/search/
Parameters:
- q: string (search query)
- limit: number (default: 20)
- offset: number (default: 0)

Response:
{
  "data": {
    "results": [
      {
        "id": "game_id",
        "title": "Game Title",
        "image": "image_url"
      }
    ]
  }
}
```

##### 2. Game Prices
```typescript
GET /v01/game/prices/
Parameters:
- key: string (API key)
- ids: string (comma-separated game IDs)
- region: string (region code)
- country: string (country code)

Response:
{
  "data": {
    "game_id": {
      "list": [
        {
          "price_new": 29.99,
          "price_old": 59.99,
          "price_cut": 50,
          "url": "store_url",
          "shop": {
            "id": "steam",
            "name": "Steam"
          }
        }
      ]
    }
  }
}
```

##### 3. Game Info
```typescript
GET /v01/game/info/
Parameters:
- key: string (API key)
- id: string (game ID)

Response:
{
  "data": {
    "title": "Game Title",
    "image": "image_url",
    "description": "Game description",
    "developers": ["Developer Name"],
    "publishers": ["Publisher Name"],
    "genres": ["Action", "Adventure"],
    "release_date": "2023-01-01"
  }
}
```

### Secondary APIs

#### Steam API
**Base URL**: `https://store.steampowered.com/api/`

```typescript
// App Details
GET /appdetails?appids={appid}

// Price Overview
GET /appdetails?appids={appid}&filters=price_overview
```

#### Epic Games Store API
**Base URL**: `https://store-site-backend-static.ak.epicgames.com/`

```typescript
// Free Games
GET /freeGamesPromotions?locale=en-US&country=US&allowCountries=US
```

## Implementation Plan

### Phase 1: Basic API Integration
```typescript
// src/services/api.ts
export class GamePriceAPI {
  private baseURL = 'https://api.isthereanydeal.com';
  private apiKey = process.env.VITE_ISTHEREANYDEAL_API_KEY;

  async searchGames(query: string): Promise<Game[]> {
    const response = await fetch(
      `${this.baseURL}/v01/search/search/?q=${encodeURIComponent(query)}`,
      { headers: this.getHeaders() }
    );
    return this.handleResponse(response);
  }

  async getGamePrices(gameId: string, region: string): Promise<GamePrice[]> {
    const response = await fetch(
      `${this.baseURL}/v01/game/prices/?ids=${gameId}&region=${region}`,
      { headers: this.getHeaders() }
    );
    return this.handleResponse(response);
  }

  private getHeaders() {
    return {
      'Authorization': `Bearer ${this.apiKey}`,
      'Content-Type': 'application/json'
    };
  }

  private async handleResponse(response: Response) {
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    return response.json();
  }
}
```

### Phase 2: Enhanced Features
```typescript
// Price history tracking
async getPriceHistory(gameId: string): Promise<PriceHistory[]> {
  // Implementation
}

// Deal alerts
async createPriceAlert(gameId: string, targetPrice: number): Promise<void> {
  // Implementation
}

// Wishlist sync
async syncWishlist(games: string[]): Promise<void> {
  // Implementation
}
```

## Data Transformation

### API Response to App Data
```typescript
// Transform IsThereAnyDeal response to app format
function transformGameData(apiResponse: any): Game {
  return {
    id: apiResponse.id,
    title: apiResponse.title,
    description: apiResponse.description || '',
    imageUrl: apiResponse.image || '/placeholder-game.jpg',
    metacriticScore: apiResponse.metacritic_score,
    releaseDate: apiResponse.release_date,
    developer: apiResponse.developers?.[0] || 'Unknown',
    publisher: apiResponse.publishers?.[0] || 'Unknown',
    genres: apiResponse.genres || [],
    platforms: apiResponse.platforms || [],
    prices: transformPriceData(apiResponse.prices)
  };
}

function transformPriceData(pricesData: any): Record<string, GamePrice[]> {
  const prices: Record<string, GamePrice[]> = {};
  
  Object.entries(pricesData).forEach(([region, regionPrices]: [string, any]) => {
    prices[region] = regionPrices.list.map((price: any) => ({
      store: price.shop.id,
      price: price.price_new,
      currency: getCurrencyForRegion(region),
      url: price.url,
      isOnSale: price.price_cut > 0,
      originalPrice: price.price_old,
      saleEndDate: price.sale_end
    }));
  });
  
  return prices;
}
```

## Error Handling

### API Error Types
```typescript
export enum APIErrorType {
  NETWORK_ERROR = 'network',
  API_ERROR = 'api',
  RATE_LIMIT = 'rate_limit',
  UNAUTHORIZED = 'unauthorized',
  NOT_FOUND = 'not_found'
}

export class APIError extends Error {
  constructor(
    public type: APIErrorType,
    public message: string,
    public code?: string
  ) {
    super(message);
  }
}
```

### Error Handling Implementation
```typescript
async function handleAPICall<T>(apiCall: () => Promise<T>): Promise<T> {
  try {
    return await apiCall();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new APIError(APIErrorType.NETWORK_ERROR, 'Network connection failed');
    }
    
    if (error instanceof Response) {
      switch (error.status) {
        case 401:
          throw new APIError(APIErrorType.UNAUTHORIZED, 'Invalid API key');
        case 404:
          throw new APIError(APIErrorType.NOT_FOUND, 'Resource not found');
        case 429:
          throw new APIError(APIErrorType.RATE_LIMIT, 'Rate limit exceeded');
        default:
          throw new APIError(APIErrorType.API_ERROR, 'API request failed');
      }
    }
    
    throw error;
  }
}
```

## Caching Strategy

### Local Storage Caching
```typescript
class CacheManager {
  private cache = new Map<string, CacheEntry>();
  private readonly TTL = 5 * 60 * 1000; // 5 minutes

  set(key: string, data: any): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    });
  }

  get(key: string): any | null {
    const entry = this.cache.get(key);
    if (!entry) return null;
    
    if (Date.now() - entry.timestamp > this.TTL) {
      this.cache.delete(key);
      return null;
    }
    
    return entry.data;
  }
}
```

## Rate Limiting

### Request Throttling
```typescript
class RateLimiter {
  private requests: number[] = [];
  private readonly maxRequests = 100;
  private readonly timeWindow = 60 * 1000; // 1 minute

  async throttle(): Promise<void> {
    const now = Date.now();
    this.requests = this.requests.filter(time => now - time < this.timeWindow);
    
    if (this.requests.length >= this.maxRequests) {
      const oldestRequest = Math.min(...this.requests);
      const waitTime = this.timeWindow - (now - oldestRequest);
      await new Promise(resolve => setTimeout(resolve, waitTime));
    }
    
    this.requests.push(now);
  }
}
```

## Testing

### API Mocking for Tests
```typescript
// src/services/__mocks__/api.ts
export const mockAPI = {
  searchGames: jest.fn(),
  getGamePrices: jest.fn(),
  getGameInfo: jest.fn()
};

// Test implementation
describe('GamePriceAPI', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should search games successfully', async () => {
    mockAPI.searchGames.mockResolvedValue(mockGameData);
    
    const api = new GamePriceAPI();
    const result = await api.searchGames('cyberpunk');
    
    expect(result).toEqual(mockGameData);
    expect(mockAPI.searchGames).toHaveBeenCalledWith('cyberpunk');
  });
});
```

## Environment Configuration

### API Keys Setup
```env
# .env.local
VITE_ISTHEREANYDEAL_API_KEY=your_api_key_here
VITE_STEAM_API_KEY=your_steam_key_here
VITE_API_BASE_URL=https://api.isthereanydeal.com
VITE_ENABLE_API=true
```

### Development vs Production
```typescript
const config = {
  development: {
    apiBaseUrl: 'https://api.isthereanydeal.com',
    enableMockData: true,
    cacheEnabled: false
  },
  production: {
    apiBaseUrl: 'https://api.isthereanydeal.com',
    enableMockData: false,
    cacheEnabled: true
  }
};
```

This API documentation will be updated as the real API integration is implemented.