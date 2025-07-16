import { regions } from '@/data/regions';
import { Layout } from "@/components/Layout";
import { GameGrid } from "@/components/GameGrid";
import { useGameData } from "@/hooks/useGameData";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Zap, Clock, Star, Filter, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Deals() {
  const { games, loading, refetch } = useGameData();
  const [selectedRegion, setSelectedRegion] = useState("US");
  const [sortBy, setSortBy] = useState("highest-discount");

  const handleRefresh = () => {
    if (refetch) {
      refetch();
    }
    toast({
      title: "Deals loaded",
      description: "Latest deals have been updated successfully.",
    });
  };

  const hotDeals = games.filter((_, index) => index < 8);
  const newDeals = games.filter((_, index) => index >= 8 && index < 16);
  const topRated = games.filter((_, index) => index >= 16);

  return (
    <Layout 
      title="Game Deals" 
      subtitle="Discover the best deals across all stores"
      showRegion={true}
    >
      <div className="p-6 space-y-6">
        {/* Header Controls */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-48">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="highest-discount">Highest Discount</SelectItem>
                <SelectItem value="lowest-price">Lowest Price</SelectItem>
                <SelectItem value="highest-rating">Highest Rating</SelectItem>
                <SelectItem value="newest">Newest Deals</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={handleRefresh}>
              <RefreshCw className="w-4 h-4" />
            </Button>
          </div>
          <Button variant="outline">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>

        {/* Deal Categories */}
        <Tabs defaultValue="hot-deals" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="hot-deals" className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Hot Deals
            </TabsTrigger>
            <TabsTrigger value="new-deals" className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              New Deals
            </TabsTrigger>
            <TabsTrigger value="top-rated" className="flex items-center gap-2">
              <Star className="w-4 h-4" />
              Top Rated
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hot-deals" className="space-y-6">
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-orange-500" />
              <h2 className="text-xl font-semibold">Hot Deals</h2>
              <Badge variant="destructive" className="animate-pulse">Live</Badge>
            </div>
            <GameGrid games={hotDeals} selectedRegion={selectedRegion} searchQuery="" />
          </TabsContent>

          <TabsContent value="new-deals" className="space-y-6">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <h2 className="text-xl font-semibold">New Deals</h2>
              <Badge variant="secondary">Fresh</Badge>
            </div>
            <GameGrid games={newDeals} selectedRegion={selectedRegion} searchQuery="" />
          </TabsContent>

          <TabsContent value="top-rated" className="space-y-6">
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              <h2 className="text-xl font-semibold">Top Rated Games on Sale</h2>
              <Badge variant="outline">Quality</Badge>
            </div>
            <GameGrid games={topRated} selectedRegion={selectedRegion} searchQuery="" />
          </TabsContent>
        </Tabs>

        {/* Deal Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Deals</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{games.length}</div>
              <p className="text-xs text-muted-foreground">Across all stores</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Discount</CardTitle>
              <Badge variant="destructive">90%</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$4.99</div>
              <p className="text-xs text-muted-foreground">Was $49.99</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Free Games</CardTitle>
              <Badge variant="secondary">5</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">Available</div>
              <p className="text-xs text-muted-foreground">Limited time offers</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ending Soon</CardTitle>
              <Badge variant="destructive">12</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6 hours</div>
              <p className="text-xs text-muted-foreground">Time remaining</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}