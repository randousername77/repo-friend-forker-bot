import { useState, useEffect } from 'react';
import { Game, ErrorInfo } from '@/types/game';
import { mockGames } from '@/data/mockGameData';

export function useGameData() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorInfo | null>(null);

  useEffect(() => {
    const loadGames = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Simulate potential errors for testing
        const shouldError = Math.random() < 0.1; // 10% chance of error
        
        if (shouldError) {
          const errorTypes: Array<ErrorInfo['type']> = ['network', 'api', 'unknown'];
          const randomType = errorTypes[Math.floor(Math.random() * errorTypes.length)];
          
          const errorMessages = {
            network: 'Unable to connect to game price services. Please check your internet connection.',
            api: 'Game price service is temporarily unavailable. Please try again later.',
            unknown: 'An unexpected error occurred while fetching game data.'
          };
          
          throw new Error(JSON.stringify({
            code: `ERR_${randomType.toUpperCase()}_${Math.floor(Math.random() * 1000)}`,
            message: errorMessages[randomType],
            type: randomType
          }));
        }
        
        setGames(mockGames);
      } catch (err) {
        console.error('Error loading games:', err);
        
        let errorInfo: ErrorInfo;
        
        try {
          errorInfo = JSON.parse((err as Error).message);
        } catch {
          errorInfo = {
            code: 'ERR_UNKNOWN_001',
            message: 'Failed to load game data. Please try again.',
            type: 'unknown'
          };
        }
        
        setError(errorInfo);
      } finally {
        setLoading(false);
      }
    };

    loadGames();
  }, []);

  const refetch = () => {
    // Simple refetch implementation
    window.location.reload();
  };

  return { games, loading, error, refetch };
}