import { 
  Home, 
  Search, 
  Heart, 
  TrendingUp, 
  Gift, 
  Clock, 
  Settings,
  Steam,
  Gamepad2,
  Store,
  Zap,
  Star,
  Trophy,
  Joystick
} from "lucide-react";
import { NavLink, useLocation } from "react-router-dom";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "Advanced Search", url: "/search", icon: Search },
  { title: "Wishlist", url: "/wishlist", icon: Heart },
  { title: "Deals", url: "/deals", icon: TrendingUp },
  { title: "Free Games", url: "/free-games", icon: Gift },
  { title: "Limited Time", url: "/limited-time", icon: Clock },
];

const storeItems = [
  { title: "Steam", url: "/store/steam", icon: Steam },
  { title: "Epic Games", url: "/store/epic", icon: Zap },
  { title: "GOG", url: "/store/gog", icon: Star },
  { title: "Humble Store", url: "/store/humble", icon: Trophy },
  { title: "Fanatical", url: "/store/fanatical", icon: Joystick },
  { title: "Xbox", url: "/store/xbox", icon: Gamepad2 },
  { title: "PlayStation", url: "/store/playstation", icon: Store },
];

export function AppSidebar() {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => {
    if (path === "/") return currentPath === path;
    return currentPath.startsWith(path);
  };

  const getNavClass = (active: boolean) =>
    active 
      ? "bg-sidebar-accent text-sidebar-accent-foreground border-r-2 border-primary" 
      : "hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <SidebarContent className="bg-sidebar-background border-r border-sidebar-border">
        {/* Logo */}
        <div className="p-4 border-b border-sidebar-border">
          {!collapsed ? (
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-bold text-sidebar-foreground">Game Price</h2>
                <p className="text-xs text-sidebar-foreground/60">Explorer</p>
              </div>
            </div>
          ) : (
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center mx-auto">
              <TrendingUp className="w-5 h-5 text-primary-foreground" />
            </div>
          )}
        </div>

        {/* Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 px-3">
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Stores */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sidebar-foreground/60 px-3">
            Stores
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {storeItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClass(isActive(item.url))}
                    >
                      <item.icon className="w-4 h-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Settings */}
        <div className="mt-auto border-t border-sidebar-border">
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to="/settings" 
                      className={getNavClass(isActive("/settings"))}
                    >
                      <Settings className="w-4 h-4" />
                      {!collapsed && <span>Settings</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}