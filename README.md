# Game Price Pal

A comprehensive game price comparison tool that helps gamers find the best deals across multiple digital storefronts and regions.

## 🚀 Quick Start

### Option 1: Windows Executable (Recommended)
1. Download the repository
2. Double-click `start-windows.bat`
3. The application will automatically install dependencies and start

### Option 2: Android APK (Future Release)
- APK generation requires additional setup with Capacitor
- Currently in development

### Option 3: Manual Setup
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

## 📋 Table of Contents

1. [Features](#features)
2. [Installation Guide](#installation-guide)
3. [Project Structure](#project-structure)
4. [Development Setup](#development-setup)
5. [Building for Production](#building-for-production)
6. [API Integration](#api-integration)
7. [Troubleshooting](#troubleshooting)
8. [Contributing](#contributing)

## ✨ Features

### Core Features
- **Multi-Store Comparison**: Compare prices across Steam, Epic Games Store, GOG, Xbox, and PlayStation stores
- **Regional Pricing**: Support for 10+ regions including US, EU, UK, India, Japan, China, Brazil, Russia, Australia, and Canada
- **Real-time Price Tracking**: Get up-to-date pricing information with sale indicators
- **Advanced Search**: Search games by title, developer, or genre with detailed filters
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark/Light Theme**: Toggle between themes with system preference support

### Advanced Features
- **Wishlist Management**: Track favorite games and get price alerts
- **Deal Categories**: Hot deals, new deals, and top-rated games on sale
- **Free Games Tracking**: Discover games that are currently free to claim
- **Limited Time Offers**: Time-sensitive deals you shouldn't miss
- **Store-specific Pages**: Dedicated pages for each supported store
- **Price History**: Track price changes over time
- **Smart Notifications**: Get alerts for price drops and new deals

## 🛠 Installation Guide

### Prerequisites
- Node.js 18+ or Bun
- npm, yarn, or bun package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Step-by-Step Installation

#### Windows Users (Easiest Method)
1. **Download the Repository**
   ```bash
   git clone https://github.com/your-username/game-price-pal.git
   cd game-price-pal
   ```

2. **Run the Batch File**
   - Double-click `start-windows.bat`
   - The script will automatically:
     - Check for Node.js installation
     - Install dependencies
     - Start the development server
     - Open the application in your browser

#### Manual Installation
1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/game-price-pal.git
   cd game-price-pal
   ```

2. **Install Dependencies**
   ```bash
   # Using npm
   npm install

   # Using yarn
   yarn install

   # Using bun
   bun install
   ```

3. **Start Development Server**
   ```bash
   # Using npm
   npm run dev

   # Using yarn
   yarn dev

   # Using bun
   bun dev
   ```

4. **Open in Browser**
   - Navigate to `http://localhost:5173`
   - The application should load automatically

## 📁 Project Structure

```
game-price-pal/
├── public/                     # Static assets
│   ├── favicon.ico
│   ├── robots.txt
│   └── lovable-uploads/        # Image assets
├── src/
│   ├── assets/                 # Static assets (icons, images)
│   │   └── icons/              # Store icons (Steam, Epic, GOG)
│   ├── components/             # Reusable UI components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── AppSidebar.tsx      # Main navigation sidebar
│   │   ├── ErrorDialog.tsx     # Error handling dialog
│   │   ├── GameCard.tsx        # Individual game display
│   │   ├── GameGrid.tsx        # Grid layout for games
│   │   ├── Header.tsx          # Page header component
│   │   ├── Layout.tsx          # Main layout wrapper
│   │   ├── RegionSelector.tsx  # Region/currency selector
│   │   ├── SearchBar.tsx       # Search functionality
│   │   ├── StoreIcon.tsx       # Store logo display
│   │   └── ThemeToggle.tsx     # Dark/light theme toggle
│   ├── data/                   # Static data and mock data
│   │   ├── mockGameData.ts     # Sample game data
│   │   └── regions.ts          # Supported regions/currencies
│   ├── hooks/                  # Custom React hooks
│   │   ├── use-mobile.tsx      # Mobile detection
│   │   ├── use-toast.ts        # Toast notifications
│   │   ├── useGameData.ts      # Game data fetching
│   │   └── useTheme.ts         # Theme management
│   ├── lib/                    # Utility functions
│   │   └── utils.ts            # Common utilities
│   ├── pages/                  # Application pages
│   │   ├── AdvancedSearch.tsx  # Advanced search page
│   │   ├── Dashboard.tsx       # Main dashboard
│   │   ├── Deals.tsx           # Deals listing page
│   │   ├── FreeGames.tsx       # Free games page
│   │   ├── LimitedTime.tsx     # Limited time offers
│   │   ├── NotFound.tsx        # 404 error page
│   │   ├── Settings.tsx        # User settings
│   │   ├── StorePage.tsx       # Individual store pages
│   │   └── Wishlist.tsx        # User wishlist
│   ├── types/                  # TypeScript type definitions
│   │   └── game.ts             # Game-related types
│   ├── App.tsx                 # Main application component
│   ├── index.css               # Global styles and design system
│   └── main.tsx                # Application entry point
├── start-windows.bat           # Windows startup script
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
├── tsconfig.json               # TypeScript configuration
└── vite.config.ts              # Vite build configuration
```

## 🔧 Development Setup

### Environment Configuration
The application uses environment variables for configuration. Create a `.env` file in the root directory:

```env
# API Configuration (when implementing real API)
VITE_API_BASE_URL=https://api.isthereanydeal.com
VITE_API_KEY=your_api_key_here

# Application Settings
VITE_APP_NAME=Game Price Pal
VITE_APP_VERSION=1.0.0
```

### Development Scripts
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run linting
npm run lint

# Type checking
npm run type-check
```

### Code Style and Standards
- **TypeScript**: Strict mode enabled with comprehensive type checking
- **ESLint**: Code linting with React and TypeScript rules
- **Prettier**: Code formatting (configure in your editor)
- **Tailwind CSS**: Utility-first CSS framework
- **Component Structure**: Functional components with hooks

### Adding New Features
1. **Create Component**: Add new components in `src/components/`
2. **Add Types**: Define TypeScript types in `src/types/`
3. **Create Hook**: Add custom hooks in `src/hooks/`
4. **Add Page**: Create new pages in `src/pages/`
5. **Update Routes**: Modify routing in `src/App.tsx`

## 🏗 Building for Production

### Web Application
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview

# Deploy to static hosting (Netlify, Vercel, etc.)
# Upload the 'dist' folder to your hosting provider
```

### Desktop Application (Electron - Future)
```bash
# Install Electron dependencies
npm install electron electron-builder --save-dev

# Build desktop app
npm run build:desktop
```

### Mobile Application (Capacitor - Future)
```bash
# Install Capacitor
npm install @capacitor/core @capacitor/cli

# Initialize Capacitor
npx cap init

# Add platforms
npx cap add android
npx cap add ios

# Build and sync
npm run build
npx cap sync

# Open in native IDE
npx cap open android
npx cap open ios
```

## 🔌 API Integration

### Current Implementation
The application currently uses mock data for demonstration. To integrate with real APIs:

1. **IsThereAnyDeal API** (Recommended)
   ```typescript
   // src/services/api.ts
   const API_BASE = 'https://api.isthereanydeal.com';
   
   export async function fetchGamePrices(gameId: string) {
     const response = await fetch(`${API_BASE}/v01/game/prices/?key=${API_KEY}&ids=${gameId}`);
     return response.json();
   }
   ```

2. **Steam API Integration**
   ```typescript
   export async function fetchSteamPrices(appId: string) {
     const response = await fetch(`https://store.steampowered.com/api/appdetails?appids=${appId}`);
     return response.json();
   }
   ```

3. **Epic Games Store API**
   ```typescript
   export async function fetchEpicPrices(productId: string) {
     // Epic Games Store API integration
   }
   ```

### Data Flow
1. **User Action** → Component
2. **Component** → Custom Hook (`useGameData`)
3. **Hook** → API Service
4. **API Service** → External API
5. **Response** → Hook → Component → UI Update

## 🐛 Troubleshooting

### Common Issues

#### 1. Dependencies Installation Failed
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### 2. Port Already in Use
```bash
# Kill process on port 5173
npx kill-port 5173

# Or start on different port
npm run dev -- --port 3000
```

#### 3. TypeScript Errors
```bash
# Check TypeScript configuration
npx tsc --noEmit

# Update TypeScript
npm update typescript
```

#### 4. Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite

# Rebuild
npm run build
```

### Performance Issues
1. **Slow Loading**: Check network requests in browser dev tools
2. **Memory Leaks**: Use React DevTools Profiler
3. **Bundle Size**: Analyze with `npm run build` and check dist folder

### Browser Compatibility
- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

### Development Workflow
1. **Fork the Repository**
2. **Create Feature Branch**
   ```bash
   git checkout -b feature/new-feature
   ```
3. **Make Changes**
4. **Test Thoroughly**
5. **Submit Pull Request**

### Code Guidelines
- Follow existing code style
- Add TypeScript types for all new code
- Write meaningful commit messages
- Add tests for new features
- Update documentation

### Reporting Issues
1. Check existing issues first
2. Provide detailed reproduction steps
3. Include browser/OS information
4. Add screenshots if applicable

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **shadcn/ui**: Beautiful UI components
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Beautiful icons
- **Vite**: Fast build tool
- **React**: UI library
- **TypeScript**: Type safety

## 📞 Support

For support and questions:
- Create an issue on GitHub
- Check the troubleshooting section
- Review the documentation

---

**Happy Gaming! 🎮**