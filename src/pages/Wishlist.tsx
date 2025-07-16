import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Heart, Search, Plus } from "lucide-react";
import { useState } from "react";

export default function Wishlist() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <Layout 
      title="Wishlist" 
      subtitle="Track your favorite games and get price alerts"
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="w-6 h-6 text-primary" />
            <div>
              <h2 className="text-2xl font-bold">Your Wishlist</h2>
              <p className="text-muted-foreground">0 of 0 games</p>
            </div>
          </div>
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Browse Games
          </Button>
        </div>

        {/* Search */}
        <Card>
          <CardContent className="pt-6">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search wishlist..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
          </CardContent>
        </Card>

        {/* Empty State */}
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
              <Heart className="w-12 h-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Your wishlist is empty</h3>
              <p className="text-muted-foreground max-w-md">
                Start adding games to track their prices and get notified of deals.
              </p>
            </div>
            <Button size="lg">
              <Plus className="w-4 h-4 mr-2" />
              Browse Games
            </Button>
          </div>
        </div>

        {/* Wishlist Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🔔 Price Alerts
              </CardTitle>
              <CardDescription>
                Get notified when wishlist games go on sale
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                📊 Price History
              </CardTitle>
              <CardDescription>
                Track price changes over time for better deals
              </CardDescription>
            </CardHeader>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎯 Smart Recommendations
              </CardTitle>
              <CardDescription>
                Discover similar games based on your wishlist
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </Layout>
  );
}