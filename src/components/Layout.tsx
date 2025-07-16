import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import { ThemeToggle } from "@/components/ThemeToggle";
import { RegionSelector } from "@/components/RegionSelector";
import { SearchBar } from "@/components/SearchBar";
import { useState } from "react";

interface LayoutProps {
  children: React.ReactNode;
  showSearch?: boolean;
  showRegion?: boolean;
  title?: string;
  subtitle?: string;
}

export function Layout({ 
  children, 
  showSearch = false, 
  showRegion = false,
  title,
  subtitle 
}: LayoutProps) {
  const [selectedRegion, setSelectedRegion] = useState("US");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SidebarProvider collapsedWidth={60}>
      <div className="min-h-screen flex w-full bg-background">
        <AppSidebar />
        
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
            <div className="flex items-center justify-between h-full px-6">
              <div className="flex items-center gap-4">
                <SidebarTrigger className="hover:bg-accent hover:text-accent-foreground" />
                {title && (
                  <div>
                    <h1 className="text-xl font-semibold text-foreground">{title}</h1>
                    {subtitle && <p className="text-sm text-muted-foreground">{subtitle}</p>}
                  </div>
                )}
              </div>
              
              <div className="flex items-center gap-4">
                {showSearch && (
                  <SearchBar
                    searchQuery={searchQuery}
                    onSearchChange={setSearchQuery}
                    className="w-96"
                  />
                )}
                {showRegion && (
                  <RegionSelector
                    selectedRegion={selectedRegion}
                    onRegionChange={setSelectedRegion}
                  />
                )}
                <ThemeToggle />
              </div>
            </div>
          </header>

          {/* Main Content */}
          <main className="flex-1 overflow-auto">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  );
}