import { RegionSelector } from './RegionSelector';
import { SearchBar } from './SearchBar';
import { Region } from '@/types/game';
import { Gamepad2 } from 'lucide-react';

interface HeaderProps {
  selectedRegion: Region;
  onRegionChange: (region: Region) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export function Header({ selectedRegion, onRegionChange, searchQuery, onSearchChange }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                Game Price Pal
              </h1>
            </div>
            <div className="hidden md:block text-sm text-muted-foreground">
              Compare game prices across multiple stores
            </div>
          </div>
          
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <SearchBar
              value={searchQuery}
              onChange={onSearchChange}
              className="flex-1 min-w-[300px]"
            />
            <RegionSelector 
              selectedRegion={selectedRegion}
              onRegionChange={onRegionChange}
            />
          </div>
        </div>
      </div>
    </header>
  );
}