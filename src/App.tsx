import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Dashboard from "./pages/Dashboard";
import AdvancedSearch from "./pages/AdvancedSearch";
import Wishlist from "./pages/Wishlist";
import Deals from "./pages/Deals";
import FreeGames from "./pages/FreeGames";
import LimitedTime from "./pages/LimitedTime";
import Settings from "./pages/Settings";
import StorePage from "./pages/StorePage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="dark">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/search" element={<AdvancedSearch />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/deals" element={<Deals />} />
            <Route path="/free-games" element={<FreeGames />} />
            <Route path="/limited-time" element={<LimitedTime />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/store/:storeId" element={<StorePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
