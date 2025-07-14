import { Store } from '@/types/game';
import steamIcon from '@/assets/icons/steam.svg';
import epicIcon from '@/assets/icons/epic.svg';
import gogIcon from '@/assets/icons/gog.svg';

interface StoreIconProps {
  store: Store;
  className?: string;
}

const storeIcons: Record<Store, string> = {
  steam: steamIcon,
  epic: epicIcon,
  gog: gogIcon,
  xbox: '/placeholder-xbox.svg',
  playstation: '/placeholder-playstation.svg'
};

const storeNames: Record<Store, string> = {
  steam: 'Steam',
  epic: 'Epic Games',
  gog: 'GOG',
  xbox: 'Xbox',
  playstation: 'PlayStation'
};

export function StoreIcon({ store, className = "w-6 h-6" }: StoreIconProps) {
  return (
    <img 
      src={storeIcons[store]} 
      alt={storeNames[store]}
      className={className}
      onError={(e) => {
        // Fallback to text if icon fails to load
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
        if (target.nextSibling) {
          (target.nextSibling as HTMLElement).style.display = 'inline';
        }
      }}
    />
  );
}