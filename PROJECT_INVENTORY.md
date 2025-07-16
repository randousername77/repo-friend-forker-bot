# Game Price Pal - Complete Project Inventory

## 📊 Project Overview
- **Name**: Game Price Pal
- **Type**: React TypeScript Web Application
- **Purpose**: Game price comparison across multiple digital storefronts
- **Architecture**: Single Page Application (SPA) with client-side routing

## 🎨 Design System & Themes

### Color Scheme
#### Light Mode
- Background: `240 10% 95%` (Light gray)
- Foreground: `240 10% 5%` (Dark text)
- Card: `0 0% 100%` (White)
- Primary: `217 76% 55%` (Blue)
- Secondary: `240 5% 85%` (Light gray)
- Muted: `240 5% 90%` (Very light gray)

#### Dark Mode (Default)
- Background: `240 10% 5%` (Very dark)
- Foreground: `240 5% 95%` (Light text)
- Card: `240 8% 8%` (Dark card)
- Primary: `217 76% 55%` (Blue)
- Secondary: `240 5% 15%` (Dark gray)
- Muted: `240 5% 12%` (Dark muted)

#### Sidebar Colors
- Background: `240 10% 8%` (Dark sidebar)
- Foreground: `240 5% 85%` (Light text)
- Accent: `240 5% 12%` (Hover states)
- Border: `240 8% 15%` (Borders)

#### Store-Specific Colors
- Steam: `221 83% 53%` (Steam blue)
- Epic: `0 0% 13%` (Dark)
- GOG: `271 91% 65%` (Purple)
- Humble: `25 95% 53%` (Orange)
- Fanatical: `343 87% 51%` (Red)
- Xbox: `120 61% 50%` (Green)
- PlayStation: `221 83% 53%` (Blue)

#### Status Colors
- Success/Positive: `142 76% 36%` (Green)
- Warning: `48 89% 50%` (Yellow)
- Error/Negative: `0 84% 60%` (Red)
- Metacritic Good: `120 61% 50%` (Green)
- Metacritic Mixed: `48 89% 50%` (Yellow)
- Metacritic Bad: `0 84% 60%` (Red)

### Typography
- Font Family: System font stack with Inter fallback
- Font Sizes: xs (0.75rem), sm (0.875rem), base (1rem), lg (1.125rem), xl (1.25rem), 2xl (1.5rem)
- Font Weights: normal (400), medium (500), semibold (600), bold (700)
- Line Heights: 120% for headings, 150% for body text

### Spacing System
- Based on 8px grid system
- Spacing scale: 1 (0.25rem), 2 (0.5rem), 3 (0.75rem), 4 (1rem), 6 (1.5rem), 8 (2rem)

### Border Radius
- Small: calc(var(--radius) - 4px)
- Medium: calc(var(--radius) - 2px)
- Large: var(--radius) = 0.75rem

## 🧩 Components Inventory

### Core Layout Components
1. **App.tsx** - Main application wrapper
   - Theme provider integration
   - Query client setup
   - Router configuration
   - Toast notifications

2. **Layout.tsx** - Page layout wrapper
   - Sidebar integration
   - Header with search and region selector
   - Main content area
   - Responsive design

3. **AppSidebar.tsx** - Navigation sidebar
   - Collapsible design
   - Navigation items with icons
   - Store-specific links
   - Settings access

### UI Components (shadcn/ui)
1. **Accordion** - Expandable content sections
2. **Alert Dialog** - Modal confirmations
3. **Alert** - Status messages
4. **Aspect Ratio** - Responsive containers
5. **Avatar** - User profile images
6. **Badge** - Status indicators and labels
7. **Breadcrumb** - Navigation trail
8. **Button** - Interactive elements
9. **Calendar** - Date selection
10. **Card** - Content containers
11. **Carousel** - Image/content sliders
12. **Chart** - Data visualization
13. **Checkbox** - Boolean inputs
14. **Collapsible** - Expandable sections
15. **Command** - Command palette
16. **Context Menu** - Right-click menus
17. **Dialog** - Modal windows
18. **Drawer** - Side panels
19. **Dropdown Menu** - Action menus
20. **Form** - Form handling
21. **Hover Card** - Tooltip-like overlays
22. **Input** - Text inputs
23. **Input OTP** - One-time password
24. **Label** - Form labels
25. **Menubar** - Menu navigation
26. **Navigation Menu** - Site navigation
27. **Pagination** - Page navigation
28. **Popover** - Floating content
29. **Progress** - Progress indicators
30. **Radio Group** - Single selection
31. **Resizable** - Adjustable panels
32. **Scroll Area** - Custom scrollbars
33. **Select** - Dropdown selection
34. **Separator** - Visual dividers
35. **Sheet** - Side panels
36. **Sidebar** - Navigation panels
37. **Skeleton** - Loading placeholders
38. **Slider** - Range inputs
39. **Sonner** - Toast notifications
40. **Switch** - Toggle inputs
41. **Table** - Data tables
42. **Tabs** - Tabbed content
43. **Textarea** - Multi-line text
44. **Toast** - Notifications
45. **Toggle** - Toggle buttons
46. **Toggle Group** - Toggle collections
47. **Tooltip** - Hover information

### Custom Components
1. **GameCard.tsx** - Individual game display
   - Game cover image
   - Title and developer
   - Genre badges
   - Metacritic score
   - Price comparison
   - Store links

2. **GameGrid.tsx** - Grid layout for games
   - Responsive grid
   - Search filtering
   - Empty states
   - Loading states

3. **SearchBar.tsx** - Search functionality
   - Real-time search
   - Clear button
   - Focus states
   - Search suggestions

4. **RegionSelector.tsx** - Region/currency selection
   - Flag icons
   - Currency display
   - Dropdown selection

5. **StoreIcon.tsx** - Store logo display
   - SVG icons for stores
   - Fallback handling
   - Consistent sizing

6. **ThemeToggle.tsx** - Dark/light mode toggle
   - Animated icon transition
   - System preference detection

7. **ErrorDialog.tsx** - Error handling UI
   - Error type icons
   - Detailed error messages
   - Retry functionality

8. **Header.tsx** - Page headers (legacy)
9. **Layout.tsx** - Main layout wrapper

## 📱 Pages Inventory

### 1. Dashboard.tsx
- **Purpose**: Main landing page with featured deals
- **Features**:
  - Statistics cards (Active Deals, Total Savings, Average Discount, Free Games)
  - Featured deals section
  - Hot deals with live badge
  - Quick action cards
  - Search and region selection
- **Components Used**: Card, Badge, Button, GameGrid
- **Icons**: TrendingUp, Zap, Clock, Star, Filter, RefreshCw

### 2. AdvancedSearch.tsx
- **Purpose**: Detailed game search with filters
- **Features**:
  - Search input
  - Genre checkboxes (Action, Adventure, RPG, Strategy, etc.)
  - Price range radio buttons
  - Minimum rating selector
  - On sale only filter
  - Sort options
  - Clear filters functionality
- **Components Used**: Input, Checkbox, RadioGroup, Select, Button, Card, Badge
- **Icons**: Search, Filter, SlidersHorizontal

### 3. Deals.tsx
- **Purpose**: Browse all available deals
- **Features**:
  - Tabbed interface (Hot Deals, New Deals, Top Rated)
  - Sort options (Highest Discount, Lowest Price, etc.)
  - Refresh functionality
  - Deal statistics cards
  - Game grid display
- **Components Used**: Tabs, Select, Button, Card, Badge, GameGrid
- **Icons**: TrendingUp, Zap, Clock, Star, Filter, RefreshCw

### 4. FreeGames.tsx
- **Purpose**: Display currently free games
- **Features**:
  - Free game placeholders
  - Store-specific free games (Epic Weekly, Steam Weekend, etc.)
  - Claim buttons
  - Information cards about free game sources
  - Empty state handling
- **Components Used**: Card, Badge, Button
- **Icons**: Gift, RefreshCw, ExternalLink, Clock

### 5. LimitedTime.tsx
- **Purpose**: Time-sensitive offers
- **Features**:
  - Statistics cards (Active Offers, Ending Soon, Total Value, Savings)
  - Empty state with call-to-action
  - Information section about limited offers
  - Refresh functionality
- **Components Used**: Card, Badge, Button
- **Icons**: Clock, RefreshCw, Gift, Timer, AlertTriangle

### 6. Wishlist.tsx
- **Purpose**: User's saved games
- **Features**:
  - Search wishlist functionality
  - Empty state with browse games CTA
  - Feature information cards (Price Alerts, Price History, Recommendations)
  - Add games functionality
- **Components Used**: Input, Card, Button
- **Icons**: Heart, Search, Plus

### 7. Settings.tsx
- **Purpose**: User preferences and configuration
- **Features**:
  - Profile section (name input)
  - Theme selection (Light, Dark, System)
  - Region/currency selection
  - Notification toggles (Price Alerts, New Deals, Free Games, Wishlist Updates)
  - Data management (Export, Import, Clear)
  - About section with version info
- **Components Used**: Input, Select, Switch, Button, Card, Separator
- **Icons**: User, Globe, Bell, Database, Trash2, Settings

### 8. StorePage.tsx
- **Purpose**: Individual store information and games
- **Features**:
  - Store header with description and features
  - Store statistics (Available Games, Best Discount, Average Rating)
  - Games grid filtered by store
  - External store link
  - Empty state handling
- **Components Used**: Card, Badge, Button, GameGrid
- **Icons**: Store, ExternalLink, TrendingUp

### 9. NotFound.tsx
- **Purpose**: 404 error page
- **Features**:
  - Error message display
  - Return to home link
  - Error logging

## 🔧 Hooks Inventory

### 1. useGameData.ts
- **Purpose**: Game data fetching and management
- **Features**:
  - Mock data loading with simulated delay
  - Error simulation for testing
  - Loading states
  - Error handling with typed errors
  - Refetch functionality

### 2. useTheme.ts
- **Purpose**: Theme management
- **Features**:
  - Theme state management (dark, light, system)
  - Local storage persistence
  - System preference detection
  - DOM class manipulation

### 3. use-mobile.tsx
- **Purpose**: Mobile device detection
- **Features**:
  - Responsive breakpoint detection
  - Window resize handling
  - Mobile-specific UI adaptations

### 4. use-toast.ts
- **Purpose**: Toast notification system
- **Features**:
  - Toast queue management
  - Auto-dismiss functionality
  - Multiple toast types
  - Action buttons support

## 📊 Data Structures

### 1. Game Interface
```typescript
interface Game {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  metacriticScore?: number;
  releaseDate: string;
  developer: string;
  publisher: string;
  genres: string[];
  platforms: string[];
  prices: Record<string, GamePrice[]>;
}
```

### 2. GamePrice Interface
```typescript
interface GamePrice {
  store: string;
  price: number;
  currency: string;
  url: string;
  isOnSale: boolean;
  originalPrice?: number;
  saleEndDate?: string;
}
```

### 3. Region Interface
```typescript
interface Region {
  code: string;
  name: string;
  currency: string;
  flag: string;
}
```

### 4. ErrorInfo Interface
```typescript
interface ErrorInfo {
  code: string;
  message: string;
  type: 'network' | 'api' | 'unknown' | 'search';
}
```

## 🎮 Supported Stores
1. **Steam** - PC gaming platform
2. **Epic Games Store** - Epic's gaming platform
3. **GOG** - DRM-free games
4. **Humble Store** - Charity-supporting store
5. **Fanatical** - Digital game keys
6. **Xbox Store** - Microsoft's platform
7. **PlayStation Store** - Sony's platform

## 🌍 Supported Regions
1. **United States** (USD) 🇺🇸
2. **European Union** (EUR) 🇪🇺
3. **United Kingdom** (GBP) 🇬🇧
4. **India** (INR) 🇮🇳
5. **Japan** (JPY) 🇯🇵
6. **China** (CNY) 🇨🇳
7. **Brazil** (BRL) 🇧🇷
8. **Russia** (RUB) 🇷🇺
9. **Australia** (AUD) 🇦🇺
10. **Canada** (CAD) 🇨🇦

## 🎯 Icons Inventory (Lucide React)

### Navigation Icons
- Home, Search, Heart, TrendingUp, Gift, Clock, Settings
- Steam, Gamepad2, Store, Zap, Star, Trophy, Joystick

### Action Icons
- ExternalLink, RefreshCw, Plus, Filter, SlidersHorizontal
- User, Globe, Bell, Database, Trash2

### Status Icons
- AlertCircle, AlertTriangle, Loader2, CheckCircle
- Wifi, Server, HelpCircle

### UI Icons
- ChevronDown, ChevronLeft, ChevronRight, ChevronUp
- X, Check, Circle, MoreHorizontal
- PanelLeft, Moon, Sun

### Content Icons
- Timer, Box, Dot, GripVertical

## 🚀 Features Inventory

### Core Features
1. **Multi-Store Price Comparison**
   - Real-time price fetching (planned)
   - Sale detection and highlighting
   - Historical price tracking (planned)

2. **Regional Pricing Support**
   - 10+ supported regions
   - Currency conversion
   - Regional availability checking

3. **Advanced Search & Filtering**
   - Text search across titles, developers, genres
   - Genre filtering with checkboxes
   - Price range filtering
   - Rating-based filtering
   - Sale-only filtering
   - Multiple sort options

4. **Deal Discovery**
   - Hot deals section
   - New deals tracking
   - Top-rated games on sale
   - Free games monitoring
   - Limited-time offers

5. **User Personalization**
   - Wishlist management
   - Price alerts (planned)
   - Theme preferences
   - Region preferences
   - Notification settings

6. **Responsive Design**
   - Mobile-first approach
   - Tablet optimization
   - Desktop enhancement
   - Touch-friendly interfaces

### Technical Features
1. **Performance Optimization**
   - Code splitting
   - Lazy loading
   - Memoization
   - Virtual scrolling (planned)

2. **Error Handling**
   - Comprehensive error types
   - User-friendly error messages
   - Retry mechanisms
   - Fallback states

3. **Accessibility**
   - ARIA labels
   - Keyboard navigation
   - Screen reader support
   - High contrast support

4. **Developer Experience**
   - TypeScript throughout
   - Comprehensive documentation
   - Automated setup scripts
   - Testing framework ready

## 📦 Dependencies

### Core Dependencies
- React 18.3.1
- TypeScript 5.5.3
- Vite 5.4.1
- React Router DOM 6.26.2

### UI Dependencies
- @radix-ui/* (35+ components)
- Tailwind CSS 3.4.11
- Lucide React 0.462.0
- class-variance-authority 0.7.1

### State Management
- @tanstack/react-query 5.56.2
- React Hook Form 7.53.0
- Zustand (not yet implemented)

### Development Dependencies
- ESLint 9.9.0
- TypeScript ESLint 8.0.1
- Autoprefixer 10.4.20
- PostCSS 8.4.47

## 🔧 Build Configuration

### Vite Configuration
- React SWC plugin
- Path aliases (@/ for src/)
- Component tagger for development
- Manual chunk splitting for optimization

### TypeScript Configuration
- Strict mode disabled for flexibility
- Path mapping for imports
- Modern ES2020 target
- JSX React runtime

### Tailwind Configuration
- Custom color system
- Component variants
- Animation utilities
- Responsive breakpoints

## 📱 Planned Features

### Mobile Application
- Capacitor integration
- Native app features
- Push notifications
- Offline support

### Desktop Application
- Electron wrapper
- System tray integration
- Auto-updater
- Native menus

### Advanced Features
- Machine learning price predictions
- Social features and sharing
- API for third-party integrations
- Premium subscription features

## 🔒 Security Features

### Input Validation
- Search query sanitization
- XSS prevention
- CSRF protection (planned)

### API Security
- Environment variable protection
- Request rate limiting (planned)
- Authentication tokens (planned)

### Data Privacy
- Local storage encryption (planned)
- GDPR compliance (planned)
- User data export/import

This inventory represents the complete current state of the Game Price Pal project as of the latest analysis.