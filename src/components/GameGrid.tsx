import { regions } from '@/data/regions';
import { Game, Region } from '@/types/game';
import { GameCard } from './GameCard';
import { AlertCircle, Search } from 'lucide-react';

interface GameGridProps {
  games: Game[];
  selectedRegion: string;
  searchQuery: string;
}

export function GameGrid({ games, selectedRegion, searchQuery }: GameGridProps) {
  const region = regions.find(r => r.code === selectedRegion) || regions[0];

  const filteredGames = games.filter(game =>
    game.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.developer.toLowerCase().includes(searchQuery.toLowerCase()) ||
    game.genres.some(genre => genre.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  if (searchQuery && filteredGames.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <Search className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">No games found</h3>
        <p className="text-muted-foreground max-w-md">
          We couldn't find any games matching "{searchQuery}". Try adjusting your search terms or browse our available games.
        </p>
      </div>
    );
  }

  if (filteredGames.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <AlertCircle className="h-16 w-16 text-muted-foreground mb-4" />
        <h3 className="text-xl font-semibold mb-2">No games available</h3>
        <p className="text-muted-foreground max-w-md">
          There are currently no games available for the selected region. Please try selecting a different region.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {filteredGames.map(game => {
        const regionPrices = game.prices[selectedRegion] || [];
        
        if (regionPrices.length === 0) {
          return null; // Skip games without prices in selected region
        }

        return (
          <GameCard
            key={game.id}
            game={game}
            regionPrices={regionPrices}
            currency={region.currency}
          />
        );
      })}
    </div>
  );
}