# 🚀 Game Price Pal - Quick Start Guide

## Instant Setup (Choose Your Platform)

### 🪟 Windows Users
```bash
# Simply double-click this file:
start-windows.bat
```

### 🐧 Linux Users
```bash
chmod +x start-linux.sh && ./start-linux.sh
```

### 🍎 macOS Users
```bash
chmod +x start-mac.sh && ./start-mac.sh
```

## What Happens Automatically

1. ✅ **System Check** - Verifies Node.js installation
2. ✅ **Dependency Install** - Downloads all required packages
3. ✅ **Development Server** - Starts the application
4. ✅ **Browser Launch** - Opens http://localhost:5173

## Manual Setup (If Scripts Fail)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser to http://localhost:5173
```

## Troubleshooting

### "Node.js not found"
- **Windows**: Download from [nodejs.org](https://nodejs.org/)
- **Linux**: `sudo apt install nodejs npm`
- **macOS**: `brew install node`

### "Port already in use"
```bash
npx kill-port 5173
# or
npm run dev -- --port 3000
```

### "Permission denied" (Linux/macOS)
```bash
chmod +x start-linux.sh  # or start-mac.sh
```

## Next Steps

1. 🎮 **Explore Dashboard** - See featured game deals
2. 🔍 **Try Search** - Find specific games
3. 🏪 **Browse Stores** - Check Steam, Epic, GOG, etc.
4. 🌍 **Change Region** - Select your currency
5. 🌙 **Toggle Theme** - Switch dark/light mode

## Features Available

- ✨ **Multi-Store Comparison** - Steam, Epic, GOG, Xbox, PlayStation
- 🌍 **10+ Regions** - US, EU, UK, India, Japan, China, Brazil, etc.
- 🔍 **Advanced Search** - Filter by genre, price, rating
- 💰 **Deal Tracking** - Hot deals, new deals, free games
- 📱 **Responsive Design** - Works on mobile, tablet, desktop
- 🎨 **Dark/Light Theme** - Choose your preference

## Need Help?

- 📖 **Full Documentation**: See README.md
- 🔧 **Setup Issues**: Check SETUP.md
- 🐛 **Bug Reports**: Create GitHub issue
- 💡 **Feature Requests**: Use GitHub discussions

**Happy Gaming! 🎮**