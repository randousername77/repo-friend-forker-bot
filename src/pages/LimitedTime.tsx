import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, RefreshCw, Gift, Timer, AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";

export default function LimitedTime() {
  const handleRefresh = () => {
    toast({
      title: "Limited deals loaded",
      description: "Found limited-time free games and promotions.",
    });
  };

  return (
    <Layout 
      title="Limited Time Offers" 
      subtitle="Games free for a limited time - claim them now!"
    >
      <div className="p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="w-6 h-6 text-orange-500" />
            <div>
              <h2 className="text-2xl font-bold">Limited Time Offers</h2>
              <p className="text-muted-foreground">Time-sensitive deals you shouldn't miss</p>
            </div>
          </div>
          <Button onClick={handleRefresh}>
            <RefreshCw className="w-4 h-4 mr-2" />
            Refresh
          </Button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Offers</CardTitle>
              <Gift className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">0</div>
              <p className="text-xs text-muted-foreground">Currently available</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Ending Soon</CardTitle>
              <Timer className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-orange-500">0</div>
              <p className="text-xs text-muted-foreground">Within 24 hours</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Value</CardTitle>
              <Badge variant="outline">$0</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$0</div>
              <p className="text-xs text-muted-foreground">Of free games</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Your Savings</CardTitle>
              <Badge variant="secondary" className="text-green-500">100%</Badge>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-500">100%</div>
              <p className="text-xs text-muted-foreground">Potential savings</p>
            </CardContent>
          </Card>
        </div>

        {/* Empty State */}
        <div className="flex items-center justify-center min-h-[400px]">
          <div className="text-center space-y-4">
            <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
              <Clock className="w-12 h-12 text-muted-foreground" />
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">No limited offers available</h3>
              <p className="text-muted-foreground max-w-md">
                Check back later for new limited-time free games and promotions.
              </p>
            </div>
            <Button size="lg" onClick={handleRefresh}>
              <Clock className="w-4 h-4 mr-2" />
              Check Again
            </Button>
          </div>
        </div>

        {/* Information Section */}
        <Card className="border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-950/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
              <Gift className="w-5 h-5" />
              About Limited Time Offers
            </CardTitle>
          </CardHeader>
          <CardContent className="text-orange-600 dark:text-orange-300">
            <p className="mb-4">
              Limited time offers are games that are temporarily free to claim and keep forever. 
              These offers typically last from a few hours to several days.
            </p>
            
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4" />
                <span className="text-sm">Once the offer ends, you'll need to purchase the game</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span className="text-sm">Offers are updated automatically throughout the day</span>
              </div>
              <div className="flex items-center gap-2">
                <Gift className="w-4 h-4" />
                <span className="text-sm">Claimed games remain in your library permanently</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}