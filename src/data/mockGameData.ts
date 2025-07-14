import { Game } from '@/types/game';

export const mockGames: Game[] = [
  {
    id: 'cyberpunk-2077',
    title: 'Cyberpunk 2077',
    description: 'An open-world, action-adventure RPG set in the dark future of Night City.',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co2rv6.jpg',
    metacriticScore: 86,
    releaseDate: '2020-12-10',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    genres: ['RPG', 'Action', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    prices: {
      US: [
        { store: 'steam', price: 59.99, currency: 'USD', url: 'https://store.steampowered.com/app/1091500', isOnSale: false },
        { store: 'epic', price: 49.99, currency: 'USD', url: 'https://store.epicgames.com/en-US/p/cyberpunk-2077', isOnSale: true, originalPrice: 59.99 },
        { store: 'gog', price: 59.99, currency: 'USD', url: 'https://www.gog.com/game/cyberpunk_2077', isOnSale: false }
      ],
      EU: [
        { store: 'steam', price: 59.99, currency: 'EUR', url: 'https://store.steampowered.com/app/1091500', isOnSale: false },
        { store: 'epic', price: 49.99, currency: 'EUR', url: 'https://store.epicgames.com/en-US/p/cyberpunk-2077', isOnSale: true, originalPrice: 59.99 },
        { store: 'gog', price: 59.99, currency: 'EUR', url: 'https://www.gog.com/game/cyberpunk_2077', isOnSale: false }
      ],
      IN: [
        { store: 'steam', price: 2999, currency: 'INR', url: 'https://store.steampowered.com/app/1091500', isOnSale: false },
        { store: 'epic', price: 2499, currency: 'INR', url: 'https://store.epicgames.com/en-US/p/cyberpunk-2077', isOnSale: true, originalPrice: 2999 },
        { store: 'gog', price: 2999, currency: 'INR', url: 'https://www.gog.com/game/cyberpunk_2077', isOnSale: false }
      ],
      GB: [
        { store: 'steam', price: 54.99, currency: 'GBP', url: 'https://store.steampowered.com/app/1091500', isOnSale: false },
        { store: 'epic', price: 44.99, currency: 'GBP', url: 'https://store.epicgames.com/en-US/p/cyberpunk-2077', isOnSale: true, originalPrice: 54.99 }
      ]
    }
  },
  {
    id: 'witcher-3',
    title: 'The Witcher 3: Wild Hunt',
    description: 'Winner of over 250 Game of the Year awards, The Witcher 3: Wild Hunt is a story-driven open world adventure.',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co1wyy.jpg',
    metacriticScore: 93,
    releaseDate: '2015-05-19',
    developer: 'CD PROJEKT RED',
    publisher: 'CD PROJEKT RED',
    genres: ['RPG', 'Adventure'],
    platforms: ['PC', 'PlayStation', 'Xbox', 'Nintendo Switch'],
    prices: {
      US: [
        { store: 'steam', price: 39.99, currency: 'USD', url: 'https://store.steampowered.com/app/292030', isOnSale: false },
        { store: 'epic', price: 19.99, currency: 'USD', url: 'https://store.epicgames.com/en-US/p/the-witcher-3-wild-hunt', isOnSale: true, originalPrice: 39.99 },
        { store: 'gog', price: 39.99, currency: 'USD', url: 'https://www.gog.com/game/the_witcher_3_wild_hunt', isOnSale: false }
      ],
      EU: [
        { store: 'steam', price: 29.99, currency: 'EUR', url: 'https://store.steampowered.com/app/292030', isOnSale: false },
        { store: 'epic', price: 14.99, currency: 'EUR', url: 'https://store.epicgames.com/en-US/p/the-witcher-3-wild-hunt', isOnSale: true, originalPrice: 29.99 }
      ],
      IN: [
        { store: 'steam', price: 999, currency: 'INR', url: 'https://store.steampowered.com/app/292030', isOnSale: false },
        { store: 'epic', price: 499, currency: 'INR', url: 'https://store.epicgames.com/en-US/p/the-witcher-3-wild-hunt', isOnSale: true, originalPrice: 999 }
      ],
      GB: [
        { store: 'steam', price: 24.99, currency: 'GBP', url: 'https://store.steampowered.com/app/292030', isOnSale: false },
        { store: 'epic', price: 12.49, currency: 'GBP', url: 'https://store.epicgames.com/en-US/p/the-witcher-3-wild-hunt', isOnSale: true, originalPrice: 24.99 }
      ]
    }
  },
  {
    id: 'elden-ring',
    title: 'Elden Ring',
    description: 'Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord.',
    imageUrl: 'https://images.igdb.com/igdb/image/upload/t_cover_big/co4jni.jpg',
    metacriticScore: 96,
    releaseDate: '2022-02-25',
    developer: 'FromSoftware',
    publisher: 'Bandai Namco',
    genres: ['Action', 'RPG'],
    platforms: ['PC', 'PlayStation', 'Xbox'],
    prices: {
      US: [
        { store: 'steam', price: 59.99, currency: 'USD', url: 'https://store.steampowered.com/app/1245620', isOnSale: false },
        { store: 'epic', price: 59.99, currency: 'USD', url: 'https://store.epicgames.com/en-US/p/elden-ring', isOnSale: false }
      ],
      EU: [
        { store: 'steam', price: 59.99, currency: 'EUR', url: 'https://store.steampowered.com/app/1245620', isOnSale: false },
        { store: 'epic', price: 59.99, currency: 'EUR', url: 'https://store.epicgames.com/en-US/p/elden-ring', isOnSale: false }
      ],
      IN: [
        { store: 'steam', price: 2999, currency: 'INR', url: 'https://store.steampowered.com/app/1245620', isOnSale: false },
        { store: 'epic', price: 2999, currency: 'INR', url: 'https://store.epicgames.com/en-US/p/elden-ring', isOnSale: false }
      ],
      GB: [
        { store: 'steam', price: 49.99, currency: 'GBP', url: 'https://store.steampowered.com/app/1245620', isOnSale: false },
        { store: 'epic', price: 49.99, currency: 'GBP', url: 'https://store.epicgames.com/en-US/p/elden-ring', isOnSale: false }
      ]
    }
  }
];