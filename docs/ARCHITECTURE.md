# Architecture Documentation - Game Price Pal

## System Overview

Game Price Pal is a modern React-based web application built with TypeScript, designed for comparing game prices across multiple digital storefronts. The architecture follows modern React patterns with a focus on maintainability, scalability, and user experience.

## Technology Stack

### Core Technologies
- **React 18**: UI library with concurrent features
- **TypeScript**: Type safety and developer experience
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework

### UI Framework
- **shadcn/ui**: High-quality React components
- **Radix UI**: Accessible component primitives
- **Lucide React**: Beautiful icon library
- **React Router DOM**: Client-side routing

### State Management
- **React Hooks**: Built-in state management
- **Custom Hooks**: Reusable stateful logic
- **Context API**: Global state when needed

### Development Tools
- **ESLint**: Code linting and quality
- **TypeScript Compiler**: Type checking
- **Vite HMR**: Hot module replacement

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui base components
│   ├── AppSidebar.tsx  # Navigation sidebar
│   ├── GameCard.tsx    # Game display component
│   ├── GameGrid.tsx    # Grid layout component
│   ├── Layout.tsx      # Page layout wrapper
│   └── ...             # Other components
├── pages/              # Route components
│   ├── Dashboard.tsx   # Main dashboard
│   ├── Deals.tsx       # Deals page
│   ├── Settings.tsx    # User settings
│   └── ...             # Other pages
├── hooks/              # Custom React hooks
│   ├── useGameData.ts  # Game data fetching
│   ├── useTheme.ts     # Theme management
│   └── ...             # Other hooks
├── types/              # TypeScript definitions
│   └── game.ts         # Game-related types
├── data/               # Static data
│   ├── mockGameData.ts # Sample data
│   └── regions.ts      # Region definitions
├── lib/                # Utility functions
│   └── utils.ts        # Common utilities
└── assets/             # Static assets
    └── icons/          # Store icons
```

## Component Architecture

### Component Hierarchy
```
App
├── ThemeProvider
├── QueryClientProvider
├── BrowserRouter
└── Routes
    ├── Layout
    │   ├── AppSidebar
    │   └── Page Content
    └── Individual Pages
        ├── GameGrid
        │   └── GameCard[]
        ├── SearchBar
        ├── RegionSelector
        └── Other Components
```

### Component Design Principles

#### 1. Single Responsibility
Each component has one clear purpose:
```typescript
// Good: Focused component
function GameCard({ game }: { game: Game }) {
  return (
    <Card>
      <GameImage src={game.imageUrl} />
      <GameInfo game={game} />
      <PriceDisplay prices={game.prices} />
    </Card>
  );
}
```

#### 2. Composition over Inheritance
Components are composed together:
```typescript
function GameGrid({ games }: { games: Game[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {games.map(game => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}
```

#### 3. Props Interface Design
Clear, typed interfaces for all components:
```typescript
interface GameCardProps {
  game: Game;
  regionPrices: GamePrice[];
  currency: string;
  onWishlistToggle?: (gameId: string) => void;
}
```

## State Management

### Local State Pattern
```typescript
function GameSearch() {
  const [query, setQuery] = useState('');
  const [filters, setFilters] = useState<SearchFilters>({});
  const [results, setResults] = useState<Game[]>([]);
  
  // Component logic
}
```

### Custom Hooks Pattern
```typescript
function useGameData() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<ErrorInfo | null>(null);
  
  useEffect(() => {
    // Data fetching logic
  }, []);
  
  return { games, loading, error, refetch };
}
```

### Context for Global State
```typescript
const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');
  
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
```

## Data Flow Architecture

### Unidirectional Data Flow
```
User Action → Component → Hook → API/Service → State Update → UI Re-render
```

### Example Flow: Game Search
1. **User Input**: Types in search bar
2. **Component**: SearchBar calls onSearchChange
3. **Parent Component**: Updates search state
4. **Hook**: useGameData refetches with new query
5. **API**: Fetches filtered games
6. **State Update**: Hook updates games state
7. **UI Update**: GameGrid re-renders with new games

### Data Transformation Pipeline
```typescript
// Raw API data → Normalized data → UI-ready data
API Response → transformGameData() → Game[] → GameCard props
```

## Routing Architecture

### Route Structure
```typescript
const routes = [
  { path: '/', component: Dashboard },
  { path: '/search', component: AdvancedSearch },
  { path: '/deals', component: Deals },
  { path: '/wishlist', component: Wishlist },
  { path: '/store/:storeId', component: StorePage },
  { path: '/settings', component: Settings },
  { path: '*', component: NotFound }
];
```

### Layout System
```typescript
function Layout({ children, title, subtitle }: LayoutProps) {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen">
        <AppSidebar />
        <main className="flex-1">
          <Header title={title} subtitle={subtitle} />
          <div className="p-6">{children}</div>
        </main>
      </div>
    </SidebarProvider>
  );
}
```

## Styling Architecture

### Design System
```css
:root {
  /* Color tokens */
  --primary: 217 76% 55%;
  --secondary: 240 5% 15%;
  --background: 240 10% 5%;
  --foreground: 240 5% 95%;
  
  /* Spacing tokens */
  --spacing-xs: 0.25rem;
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 1.5rem;
  
  /* Typography tokens */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
}
```

### Component Styling Pattern
```typescript
// Utility-first with semantic classes
function GameCard({ className, ...props }: GameCardProps) {
  return (
    <Card className={cn(
      "game-card hover:shadow-lg transition-shadow",
      className
    )}>
      {/* Content */}
    </Card>
  );
}
```

### Responsive Design
```css
/* Mobile-first approach */
.game-grid {
  @apply grid grid-cols-1;
  @apply md:grid-cols-2;
  @apply lg:grid-cols-3;
  @apply xl:grid-cols-4;
}
```

## Error Handling Architecture

### Error Boundary Pattern
```typescript
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorFallback />;
    }

    return this.props.children;
  }
}
```

### Hook-level Error Handling
```typescript
function useGameData() {
  const [error, setError] = useState<ErrorInfo | null>(null);
  
  const fetchGames = async () => {
    try {
      setError(null);
      const games = await gameAPI.fetchGames();
      setGames(games);
    } catch (err) {
      setError({
        code: 'FETCH_ERROR',
        message: 'Failed to load games',
        type: 'api'
      });
    }
  };
  
  return { games, error, refetch: fetchGames };
}
```

## Performance Architecture

### Code Splitting
```typescript
// Route-based splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const AdvancedSearch = lazy(() => import('./pages/AdvancedSearch'));

function App() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/search" element={<AdvancedSearch />} />
      </Routes>
    </Suspense>
  );
}
```

### Memoization Strategy
```typescript
// Expensive calculations
const expensiveValue = useMemo(() => {
  return games.reduce((acc, game) => {
    // Complex calculation
    return acc + calculateSavings(game);
  }, 0);
}, [games]);

// Component memoization
const GameCard = memo(({ game }: GameCardProps) => {
  return <Card>{/* Game content */}</Card>;
});
```

### Virtual Scrolling (Future)
```typescript
// For large game lists
function VirtualGameGrid({ games }: { games: Game[] }) {
  const { virtualItems, totalSize } = useVirtualizer({
    count: games.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => 300,
  });
  
  return (
    <div ref={parentRef} style={{ height: totalSize }}>
      {virtualItems.map(virtualItem => (
        <GameCard
          key={virtualItem.index}
          game={games[virtualItem.index]}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: virtualItem.size,
            transform: `translateY(${virtualItem.start}px)`,
          }}
        />
      ))}
    </div>
  );
}
```

## Security Architecture

### Input Sanitization
```typescript
function sanitizeSearchQuery(query: string): string {
  return query
    .trim()
    .replace(/[<>]/g, '') // Remove potential HTML
    .substring(0, 100); // Limit length
}
```

### API Security
```typescript
// Environment-based configuration
const apiConfig = {
  baseURL: import.meta.env.VITE_API_BASE_URL,
  apiKey: import.meta.env.VITE_API_KEY,
  timeout: 10000,
};

// Request interceptor
function createAPIClient() {
  return {
    async request(url: string, options: RequestInit = {}) {
      const response = await fetch(url, {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiConfig.apiKey}`,
          ...options.headers,
        },
        signal: AbortSignal.timeout(apiConfig.timeout),
      });
      
      if (!response.ok) {
        throw new APIError(response.status, response.statusText);
      }
      
      return response.json();
    }
  };
}
```

## Testing Architecture

### Component Testing
```typescript
// Component test structure
describe('GameCard', () => {
  const mockGame: Game = {
    id: '1',
    title: 'Test Game',
    // ... other properties
  };

  it('renders game information correctly', () => {
    render(<GameCard game={mockGame} />);
    
    expect(screen.getByText('Test Game')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('alt', 'Test Game');
  });

  it('handles price display', () => {
    render(<GameCard game={mockGame} regionPrices={mockPrices} />);
    
    expect(screen.getByText('$29.99')).toBeInTheDocument();
  });
});
```

### Hook Testing
```typescript
describe('useGameData', () => {
  it('fetches games successfully', async () => {
    const { result } = renderHook(() => useGameData());
    
    expect(result.current.loading).toBe(true);
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false);
      expect(result.current.games).toHaveLength(3);
    });
  });
});
```

## Build Architecture

### Vite Configuration
```typescript
export default defineConfig({
  plugins: [react(), componentTagger()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-dialog', '@radix-ui/react-select'],
        },
      },
    },
  },
});
```

### Bundle Optimization
- **Code Splitting**: Route-based and component-based
- **Tree Shaking**: Automatic dead code elimination
- **Asset Optimization**: Image compression and lazy loading
- **Chunk Strategy**: Vendor, UI, and app chunks

## Deployment Architecture

### Static Site Generation
```bash
# Build process
npm run build
# Generates optimized static files in dist/

# Deployment targets
- Netlify (recommended)
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
```

### Environment Configuration
```typescript
// Environment-specific builds
const config = {
  development: {
    apiUrl: 'http://localhost:3001',
    enableDevTools: true,
  },
  production: {
    apiUrl: 'https://api.gamepricepal.com',
    enableDevTools: false,
  },
};
```

## Future Architecture Considerations

### Scalability Improvements
1. **State Management**: Consider Zustand or Redux Toolkit for complex state
2. **Data Fetching**: Implement React Query for server state
3. **Micro-frontends**: Split into smaller, independent applications
4. **Service Workers**: Add offline support and caching

### Performance Enhancements
1. **Server-Side Rendering**: Next.js migration for SEO
2. **Edge Computing**: Deploy to edge locations
3. **Database**: Add persistent storage for user data
4. **CDN**: Implement global content delivery

### Mobile Architecture
1. **Progressive Web App**: Add PWA capabilities
2. **Native Apps**: React Native or Capacitor implementation
3. **Responsive Design**: Enhanced mobile experience

This architecture provides a solid foundation for the current application while allowing for future growth and enhancements.