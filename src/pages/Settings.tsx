import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Settings as SettingsIcon, User, Globe, Bell, Database, Trash2 } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export default function Settings() {
  const { theme, setTheme } = useTheme();
  const [userName, setUserName] = useState("Bhaive");
  const [selectedRegion, setSelectedRegion] = useState("india-inr");
  const [priceAlerts, setPriceAlerts] = useState(true);
  const [newDeals, setNewDeals] = useState(true);
  const [freeGames, setFreeGames] = useState(true);
  const [wishlistUpdates, setWishlistUpdates] = useState(true);

  const handleApplySettings = () => {
    toast({
      title: "Settings applied",
      description: "Your preferences have been saved successfully.",
    });
  };

  const handleExportData = () => {
    toast({
      title: "Export initiated",
      description: "Your data export will be ready shortly.",
    });
  };

  const handleImportData = () => {
    toast({
      title: "Import ready",
      description: "Select a file to import your wishlist data.",
    });
  };

  const handleClearData = () => {
    toast({
      title: "Data cleared",
      description: "All your data has been removed.",
      variant: "destructive",
    });
  };

  return (
    <Layout 
      title="Settings" 
      subtitle="Customize your game tracking experience"
    >
      <div className="p-6 space-y-6 max-w-4xl mx-auto">
        {/* Profile Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Profile
            </CardTitle>
            <CardDescription>
              Manage your personal information
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username">Your Name</Label>
              <Input 
                id="username"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Enter your name"
              />
              <p className="text-sm text-muted-foreground">
                This name will be displayed throughout the app
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Appearance Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              🎨 Appearance
            </CardTitle>
            <CardDescription>
              Choose how the application looks and feels
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Theme</Label>
              <Select value={theme} onValueChange={setTheme}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light Mode</SelectItem>
                  <SelectItem value="dark">Dark Mode</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Current: {theme === "dark" ? "Dark Mode" : theme === "light" ? "Light Mode" : "System"}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Region & Currency Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Globe className="w-5 h-5" />
              Region & Currency
            </CardTitle>
            <CardDescription>
              Set your preferred region for pricing and availability
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label>Region</Label>
              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger className="w-full">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="us-usd">United States (USD)</SelectItem>
                  <SelectItem value="uk-gbp">United Kingdom (GBP)</SelectItem>
                  <SelectItem value="eu-eur">European Union (EUR)</SelectItem>
                  <SelectItem value="canada-cad">Canada (CAD)</SelectItem>
                  <SelectItem value="australia-aud">Australia (AUD)</SelectItem>
                  <SelectItem value="india-inr">India (INR)</SelectItem>
                  <SelectItem value="japan-jpy">Japan (JPY)</SelectItem>
                  <SelectItem value="brazil-brl">Brazil (BRL)</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                Prices will be displayed in INR
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Notifications Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Notifications
            </CardTitle>
            <CardDescription>
              Choose what notifications you want to receive
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Price Alerts</Label>
                <p className="text-sm text-muted-foreground">
                  Get notified when wishlist games go on sale
                </p>
              </div>
              <Switch checked={priceAlerts} onCheckedChange={setPriceAlerts} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>New Deals</Label>
                <p className="text-sm text-muted-foreground">
                  Weekly digest of the best new deals
                </p>
              </div>
              <Switch checked={newDeals} onCheckedChange={setNewDeals} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Free Games</Label>
                <p className="text-sm text-muted-foreground">
                  Alert when games become free
                </p>
              </div>
              <Switch checked={freeGames} onCheckedChange={setFreeGames} />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label>Wishlist Updates</Label>
                <p className="text-sm text-muted-foreground">
                  Changes to games in your wishlist
                </p>
              </div>
              <Switch checked={wishlistUpdates} onCheckedChange={setWishlistUpdates} />
            </div>
          </CardContent>
        </Card>

        {/* Account Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Database className="w-5 h-5" />
              Account
            </CardTitle>
            <CardDescription>
              Manage your account and data preferences
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleExportData}>
                Export Wishlist Data
              </Button>
              <Button variant="outline" onClick={handleImportData}>
                Import Wishlist Data
              </Button>
            </div>
            
            <Separator />
            
            <div className="space-y-2">
              <Button 
                variant="destructive" 
                className="w-full"
                onClick={handleClearData}
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Clear All Data
              </Button>
              <p className="text-sm text-muted-foreground">
                This will permanently delete all your wishlists and preferences
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Apply Settings Button */}
        <Card>
          <CardHeader>
            <CardTitle>Apply Settings</CardTitle>
            <CardDescription>
              All settings are saved and applied automatically
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={handleApplySettings} className="w-full" size="lg">
              Apply Settings
            </Button>
          </CardContent>
        </Card>

        {/* About Section */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              ℹ️ About
            </CardTitle>
            <CardDescription>
              Information about Game Price Tracker
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h4 className="font-semibold">Version</h4>
                <p className="text-muted-foreground">1.2.0</p>
              </div>
              <div>
                <h4 className="font-semibold">Data Source</h4>
                <p className="text-muted-foreground">IsThereAnyDeal API</p>
              </div>
              <div>
                <h4 className="font-semibold">Last Updated</h4>
                <p className="text-muted-foreground">Today</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}