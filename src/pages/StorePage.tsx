import { Layout } from "@/components/Layout";
import { GameGrid } from "@/components/GameGrid";
import { useGameData } from "@/hooks/useGameData";
import { useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Store, TrendingUp } from "lucide-react";
import { useState } from "react";

const storeInfo = {
  steam: {
    name: "Steam",
    description: "The largest PC gaming platform with millions of games",
    url: "https://store.steampowered.com",
    color: "blue",
    features: ["Achievements", "Trading Cards", "Workshop", "Cloud Saves"]
  },
  epic: {
    name: "Epic Games Store",
    description: "Epic's gaming platform with free weekly games",
    url: "https://store.epicgames.com",
    color: "gray",
    features: ["Free Weekly Games", "Epic Rewards", "Cross-Platform"]
  },
  gog: {
    name: "GOG",
    description: "DRM-free games that you truly own",
    url: "https://www.gog.com",
    color: "purple",
    features: ["DRM-Free", "Old Games", "Galaxy Client", "No Online Required"]
  },
  humble: {
    name: "Humble Store",
    description: "Games that support charity",
    url: "https://www.humblebundle.com",
    color: "orange",
    features: ["Charity Support", "Humble Bundle", "Multiple Platforms"]
  },
  fanatical: {
    name: "Fanatical",
    description: "Digital game keys at great prices",
    url: "https://www.fanatical.com",
    color: "red",
    features: ["Star Deals", "Mystery Bundles", "Steam Keys"]
  },
  xbox: {
    name: "Xbox Store",
    description: "Microsoft's gaming platform for PC and Xbox",
    url: "https://www.xbox.com",
    color: "green",
    features: ["Game Pass", "Cross-Platform", "Xbox Play Anywhere"]
  },
  playstation: {
    name: "PlayStation Store",
    description: "Sony's digital gaming store",
    url: "https://store.playstation.com",
    color: "blue",
    features: ["PlayStation Plus", "Exclusive Games", "PS5 Enhanced"]
  }
};

export default function StorePage() {
  const { storeId } = useParams();
  const { games, loading } = useGameData();
  const [selectedRegion, setSelectedRegion] = useState("US");

  const store = storeInfo[storeId as keyof typeof storeInfo];
  
  if (!store) {
    return (
      <Layout title="Store Not Found">
        <div className="p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Store not found</h2>
            <p className="text-muted-foreground">The requested store could not be found.</p>
          </div>
        </div>
      </Layout>
    );
  }

  // Filter games for this store
  const storeGames = games.filter(game => 
    Object.values(game.prices).some(regionPrices => 
      regionPrices.some(price => price.store.toLowerCase() === storeId?.toLowerCase())
    )
  );

  return (
    <Layout 
      title={store.name} 
      subtitle={store.description}
      showRegion={true}
    >
      <div className="p-6 space-y-6">
        {/* Store Header */}
        <Card className={`border-${store.color}-200 bg-${store.color}-50 dark:border-${store.color}-900 dark:bg-${store.color}-950/20`}>
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className={`w-16 h-16 bg-${store.color}-500 rounded-lg flex items-center justify-center`}>
                  <Store className="w-8 h-8 text-white" />
                </div>
                <div>
                  <CardTitle className="text-2xl">{store.name}</CardTitle>
                  <CardDescription className="text-lg">
                    {store.description}
                  </CardDescription>
                </div>
              </div>
              <Button asChild>
                <a href={store.url} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit Store
                </a>
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {store.features.map(feature => (
                <Badge key={feature} variant="secondary">
                  {feature}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Store Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Games</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{storeGames.length}</div>
              <p className="text-xs text-muted-foreground">On sale now</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Best Discount</CardTitle>
              <Badge variant="destructive">75%</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$9.99</div>
              <p className="text-xs text-muted-foreground">From $39.99</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Average Rating</CardTitle>
              <Badge variant="secondary">Positive</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">8.2/10</div>
              <p className="text-xs text-muted-foreground">User reviews</p>
            </CardContent>
          </Card>
        </div>

        {/* Games Grid */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold">Games on {store.name}</h2>
            <Badge variant="outline">{storeGames.length} games</Badge>
          </div>
          
          {storeGames.length > 0 ? (
            <GameGrid games={storeGames} selectedRegion={selectedRegion} searchQuery="" />
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Store className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-semibold mb-2">No games found</h3>
              <p className="text-muted-foreground">
                No games are currently on sale at {store.name}.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}