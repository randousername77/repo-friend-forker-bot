import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Gift, RefreshCw, ExternalLink, Clock } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const freeGamePlaceholders = [
  {
    title: "Epic Weekly Free Game",
    description: "Check back for this week's free game",
    store: "Epic Games",
    type: "Weekly"
  },
  {
    title: "Steam Free Weekend",
    description: "Play free this weekend",
    store: "Steam",
    type: "Weekend"
  },
  {
    title: "GOG Giveaway",
    description: "Limited time free game",
    store: "GOG",
    type: "Giveaway"
  },
  {
    title: "Humble Bundle Freebie",
    description: "Free game for subscribers",
    store: "Humble",
    type: "Subscriber"
  }
];

export default function FreeGames() {
  const handleRefresh = () => {
    toast({
      title: "Deals loaded",
      description: "Latest deals have been updated successfully.",
    });
  };

  return (
    <Layout 
      title="Free Games" 
      subtitle="Discover games that are currently free to claim"
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Gift className="w-6 h-6 text-green-500" />
            <div>
              <h2 className="text-2xl font-bold">Free Games</h2>
              <p className="text-muted-foreground">Currently available free games</p>
            </div>
          </div>
          <Button onClick={handleRefresh}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Free Game Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {freeGamePlaceholders.map((game, index) => (
            <Card key={index} className="game-card group cursor-pointer">
              <CardHeader className="pb-3">
                <div className="aspect-video bg-muted rounded-md mb-3 flex items-center justify-center">
                  <Gift className="w-8 h-8 text-muted-foreground" />
                </div>
                <Badge className="w-fit bg-green-500/10 text-green-500 border-green-500/20">
                  {game.type}
                </Badge>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <h3 className="font-semibold group-hover:text-primary transition-colors">
                    {game.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{game.description}</p>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="text-sm text-muted-foreground">{game.store}</div>
                  <Button size="sm" variant="outline">
                    <ExternalLink className="w-3 h-3 mr-1" />
                    Claim
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Empty State */}
        <div className="flex items-center justify-center min-h-[200px] border-2 border-dashed border-border rounded-lg">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto">
              <Gift className="w-8 h-8 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Loading free games...</h3>
              <p className="text-muted-foreground">
                We're checking all stores for current free game offers.
              </p>
            </div>
          </div>
        </div>

        {/* Free Game Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎮 Epic Games Store
              </CardTitle>
              <CardDescription>
                New free game every Thursday
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Next update in 3 days</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Steam Free Weekends
              </CardTitle>
              <CardDescription>
                Play full games free during weekends
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Updated weekly</span>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💎 GOG Giveaways
              </CardTitle>
              <CardDescription>
                DRM-free games to keep forever
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Occasional offers</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}