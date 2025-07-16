import { Layout } from "@/components/Layout";
import { GameGrid } from "@/components/GameGrid";
import { useGameData } from "@/hooks/useGameData";
import { Loader2, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

export default function Dashboard() {
  const { games, loading, error } = useGameData();
  const [selectedRegion, setSelectedRegion] = useState("US");

  if (loading) {
    return (
      <Layout title="Latest Game Deals" subtitle="Discover the best deals across all stores">
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="flex items-center gap-2">
            <Loader2 className="h-6 w-6 animate-spin" />
            <span>Loading latest deals...</span>
          </div>
        </div>
      </Layout>
    );
  }

  const featuredDeals = games.slice(0, 8);
  const totalSavings = featuredDeals.reduce((acc, game) => {
    const prices = game.prices[selectedRegion] || [];
    const bestPrice = prices.length > 0 ? Math.min(...prices.map(p => p.price)) : 0;
    const originalPrice = prices.find(p => p.originalPrice)?.originalPrice || bestPrice;
    return acc + (originalPrice - bestPrice);
  }, 0);

  return (
    <Layout 
      title="Latest Game Deals" 
      subtitle="Discover the best deals across all stores"
      showSearch={true}
      showRegion={true}
    >
      <div className="p-6 space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{games.length}</div>
              <p className="text-xs text-muted-foreground">+12 from yesterday</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Savings</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalSavings.toFixed(0)}</div>
              <p className="text-xs text-muted-foreground">Across all deals</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Discount</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">34%</div>
              <p className="text-xs text-muted-foreground">Best value deals</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Free Games</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">5</div>
              <p className="text-xs text-muted-foreground">Available now</p>
            </CardContent>
          </Card>
        </div>

        {/* Featured Section */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold tracking-tight">Featured Deals</h2>
              <p className="text-muted-foreground">The best gaming deals right now</p>
            </div>
            <Button variant="outline">View All Deals</Button>
          </div>

          {/* Hot Deals */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-2">
                <span className="text-lg font-semibold">🔥 Hot Deals</span>
                <Badge variant="destructive" className="animate-pulse">Live</Badge>
              </div>
            </div>
            
            <GameGrid games={featuredDeals} selectedRegion={selectedRegion} />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Advanced Search
              </CardTitle>
              <CardDescription>
                Find specific games with detailed filters
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💝 Free Games
              </CardTitle>
              <CardDescription>
                Discover games that are currently free
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card className="cursor-pointer hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⏰ Limited Time
              </CardTitle>
              <CardDescription>
                Time-sensitive offers you shouldn't miss
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </Layout>
  );
}