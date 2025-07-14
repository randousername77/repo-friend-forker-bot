import { useState } from 'react';
import { Header } from '@/components/Header';
import { GameGrid } from '@/components/GameGrid';
import { ErrorDialog } from '@/components/ErrorDialog';
import { useGameData } from '@/hooks/useGameData';
import { regions, defaultRegion } from '@/data/regions';
import { Region } from '@/types/game';
import { Loader2 } from 'lucide-react';

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState<Region>(defaultRegion);
  const [searchQuery, setSearchQuery] = useState('');
  const [showErrorDialog, setShowErrorDialog] = useState(false);
  
  const { games, loading, error } = useGameData();

  // Show error dialog when error occurs
  if (error && !showErrorDialog) {
    setShowErrorDialog(true);
  }

  const handleErrorClose = () => {
    setShowErrorDialog(false);
    // Optionally refetch data here
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header 
          selectedRegion={selectedRegion}
          onRegionChange={setSelectedRegion}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col items-center justify-center py-16">
            <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
            <p className="text-muted-foreground">Loading game prices...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header 
        selectedRegion={selectedRegion}
        onRegionChange={setSelectedRegion}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-bold">Game Prices in {selectedRegion.name}</h2>
              <p className="text-muted-foreground">
                Comparing prices across multiple digital storefronts
              </p>
            </div>
            <div className="text-sm text-muted-foreground">
              {games.length} games available
            </div>
          </div>
        </div>

        <GameGrid 
          games={games}
          selectedRegion={selectedRegion}
          searchQuery={searchQuery}
        />
      </main>

      <ErrorDialog 
        error={error}
        open={showErrorDialog}
        onClose={handleErrorClose}
      />
    </div>
  );
};

export default Index;
