import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Game, GamePrice } from '@/types/game';
import { StoreIcon } from './StoreIcon';
import { ExternalLink, Star } from 'lucide-react';

interface GameCardProps {
  game: Game;
  regionPrices: GamePrice[];
  currency: string;
}

export function GameCard({ game, regionPrices, currency }: GameCardProps) {
  const lowestPrice = regionPrices.reduce((min, price) => 
    !min || price.price < min.price ? price : min, null as GamePrice | null
  );

  const formatPrice = (price: number, currency: string) => {
    const currencySymbols: Record<string, string> = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      INR: '₹',
      JPY: '¥',
      CNY: '¥',
      BRL: 'R$',
      RUB: '₽',
      AUD: 'A$',
      CAD: 'C$'
    };
    
    const symbol = currencySymbols[currency] || currency;
    return `${symbol}${price.toFixed(2)}`;
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
      <CardHeader className="p-0">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img 
            src={game.imageUrl} 
            alt={game.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = '/placeholder-game-cover.jpg';
            }}
          />
          {game.metacriticScore && (
            <div className="absolute top-2 right-2 bg-black/80 text-white px-2 py-1 rounded-md text-sm font-semibold flex items-center gap-1">
              <Star className="w-3 h-3 fill-current" />
              {game.metacriticScore}
            </div>
          )}
        </div>
      </CardHeader>
      
      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-semibold text-lg line-clamp-2 group-hover:text-primary transition-colors">
              {game.title}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">
              {game.developer}
            </p>
          </div>

          <div className="flex flex-wrap gap-1">
            {game.genres.slice(0, 2).map((genre) => (
              <Badge key={genre} variant="secondary" className="text-xs">
                {genre}
              </Badge>
            ))}
          </div>

          {lowestPrice && (
            <div className="bg-primary/5 p-3 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Best Price</span>
                <StoreIcon store={lowestPrice.store as any} className="w-5 h-5" />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  {lowestPrice.isOnSale && lowestPrice.originalPrice && (
                    <span className="text-xs text-muted-foreground line-through mr-2">
                      {formatPrice(lowestPrice.originalPrice, currency)}
                    </span>
                  )}
                  <span className={`font-bold text-lg ${lowestPrice.isOnSale ? 'text-green-600' : ''}`}>
                    {formatPrice(lowestPrice.price, currency)}
                  </span>
                </div>
                <Button size="sm" variant="outline" asChild>
                  <a href={lowestPrice.url} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    View
                  </a>
                </Button>
              </div>
            </div>
          )}

          <div className="space-y-2">
            <span className="text-sm font-medium">All Stores</span>
            <div className="space-y-2">
              {regionPrices.map((price) => (
                <div key={price.store} className="flex items-center justify-between p-2 bg-muted/50 rounded-md">
                  <div className="flex items-center gap-2">
                    <StoreIcon store={price.store as any} className="w-4 h-4" />
                    <span className="text-sm capitalize">{price.store}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="text-right">
                      {price.isOnSale && price.originalPrice && (
                        <div className="text-xs text-muted-foreground line-through">
                          {formatPrice(price.originalPrice, currency)}
                        </div>
                      )}
                      <div className={`text-sm font-medium ${price.isOnSale ? 'text-green-600' : ''}`}>
                        {formatPrice(price.price, currency)}
                      </div>
                    </div>
                    <Button size="sm" variant="ghost" asChild>
                      <a href={price.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}