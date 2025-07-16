import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

const genres = [
  "Action", "Adventure", "RPG", "Strategy", "Simulation", 
  "Sports", "Racing", "Fighting", "Platform"
];

const priceRanges = [
  { label: "Free", value: "free" },
  { label: "Under $5", value: "under-5" },
  { label: "$5 - $15", value: "5-15" },
  { label: "$15 - $30", value: "15-30" },
  { label: "$30 - $60", value: "30-60" },
  { label: "Over $60", value: "over-60" }
];

export default function AdvancedSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenres, setSelectedGenres] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState("");
  const [onSaleOnly, setOnSaleOnly] = useState(false);
  const [sortBy, setSortBy] = useState("highest-discount");
  const [minRating, setMinRating] = useState("");

  const handleGenreToggle = (genre: string) => {
    setSelectedGenres(prev => 
      prev.includes(genre) 
        ? prev.filter(g => g !== genre)
        : [...prev, genre]
    );
  };

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedGenres([]);
    setPriceRange("");
    setOnSaleOnly(false);
    setSortBy("highest-discount");
    setMinRating("");
  };

  return (
    <Layout 
      title="Advanced Search" 
      subtitle="Find games with detailed filtering options"
    >
      <div className="flex h-full">
        {/* Filters Sidebar */}
        <div className="w-80 border-r border-border p-6 space-y-6 overflow-auto scrollbar-thin">
          {/* Search */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-4 h-4" />
                Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Input 
                placeholder="Search for games..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </CardContent>
          </Card>

          {/* Genres */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                🎮 Genres
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="max-h-40 overflow-y-auto scrollbar-thin space-y-2">
                {genres.map((genre) => (
                  <div key={genre} className="flex items-center space-x-2">
                    <Checkbox 
                      id={genre}
                      checked={selectedGenres.includes(genre)}
                      onCheckedChange={() => handleGenreToggle(genre)}
                    />
                    <Label htmlFor={genre} className="text-sm">{genre}</Label>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Price Range */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                💰 Price Range
              </CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={priceRange} onValueChange={setPriceRange}>
                {priceRanges.map((range) => (
                  <div key={range.value} className="flex items-center space-x-2">
                    <RadioGroupItem value={range.value} id={range.value} />
                    <Label htmlFor={range.value} className="text-sm">{range.label}</Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          {/* Minimum Rating */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                ⭐ Minimum Rating
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={minRating} onValueChange={setMinRating}>
                <SelectTrigger>
                  <SelectValue placeholder="Any Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Rating</SelectItem>
                  <SelectItem value="90">90+ (Universal Acclaim)</SelectItem>
                  <SelectItem value="80">80+ (Generally Favorable)</SelectItem>
                  <SelectItem value="70">70+ (Mixed Reviews)</SelectItem>
                  <SelectItem value="60">60+ (Generally Unfavorable)</SelectItem>
                </SelectContent>
              </Select>
            </CardContent>
          </Card>

          {/* Additional Filters */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Checkbox 
                  id="on-sale"
                  checked={onSaleOnly}
                  onCheckedChange={setOnSaleOnly}
                />
                <Label htmlFor="on-sale" className="text-sm">On Sale Only</Label>
              </div>

              <div className="space-y-2">
                <Label htmlFor="sort-by" className="text-sm">Sort By</Label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="highest-discount">Highest Discount</SelectItem>
                    <SelectItem value="lowest-price">Lowest Price</SelectItem>
                    <SelectItem value="highest-rating">Highest Rating</SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="alphabetical">Alphabetical</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button className="w-full" size="lg">
              Search Games
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={clearFilters}
            >
              Clear Filters
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="flex items-center justify-center min-h-[400px]">
            <div className="text-center space-y-4">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
                <SlidersHorizontal className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold">Use filters to search for games</h3>
                <p className="text-muted-foreground max-w-md">
                  Select your preferences and click "Search Games" to find the perfect deals.
                </p>
              </div>
              {selectedGenres.length > 0 && (
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedGenres.map(genre => (
                    <Badge key={genre} variant="secondary">
                      {genre}
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}