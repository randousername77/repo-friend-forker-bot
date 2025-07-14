import { Region } from '@/types/game';

export const regions: Region[] = [
  {
    code: 'US',
    name: 'United States',
    currency: 'USD',
    flag: '🇺🇸'
  },
  {
    code: 'EU',
    name: 'European Union',
    currency: 'EUR',
    flag: '🇪🇺'
  },
  {
    code: 'GB',
    name: 'United Kingdom',
    currency: 'GBP',
    flag: '🇬🇧'
  },
  {
    code: 'IN',
    name: 'India',
    currency: 'INR',
    flag: '🇮🇳'
  },
  {
    code: 'JP',
    name: 'Japan',
    currency: 'JPY',
    flag: '🇯🇵'
  },
  {
    code: 'CN',
    name: 'China',
    currency: 'CNY',
    flag: '🇨🇳'
  },
  {
    code: 'BR',
    name: 'Brazil',
    currency: 'BRL',
    flag: '🇧🇷'
  },
  {
    code: 'RU',
    name: 'Russia',
    currency: 'RUB',
    flag: '🇷🇺'
  },
  {
    code: 'AU',
    name: 'Australia',
    currency: 'AUD',
    flag: '🇦🇺'
  },
  {
    code: 'CA',
    name: 'Canada',
    currency: 'CAD',
    flag: '🇨🇦'
  }
];

export const defaultRegion = regions[0]; // US as default