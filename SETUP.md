# Game Price Pal - Setup Guide

## 🚀 Quick Start (Choose Your Platform)

### Windows Users
1. Download/clone the repository
2. Double-click `start-windows.bat`
3. Wait for automatic setup and launch

### Linux Users
1. Download/clone the repository
2. Open terminal in project directory
3. Run: `chmod +x start-linux.sh && ./start-linux.sh`

### macOS Users
1. Download/clone the repository
2. Open terminal in project directory
3. Run: `chmod +x start-mac.sh && ./start-mac.sh`

## 📋 What the Scripts Do

### Automatic Setup Process
1. **Check Node.js Installation**
   - Verifies Node.js is installed
   - Shows version information
   - Provides installation instructions if missing

2. **Verify npm Availability**
   - Confirms npm package manager is working
   - Shows version information

3. **Project Validation**
   - Checks for package.json in current directory
   - Ensures you're in the correct project folder

4. **Dependency Installation**
   - Automatically installs all required packages
   - Only runs if node_modules folder doesn't exist
   - Shows progress and handles errors

5. **Application Launch**
   - Starts the development server
   - Opens application in default browser
   - Provides local URL (http://localhost:5173)

## 🛠 Manual Setup (Alternative)

If the automatic scripts don't work, follow these steps:

### Prerequisites
- Node.js 18+ ([Download here](https://nodejs.org/))
- npm (comes with Node.js)

### Steps
```bash
# 1. Clone repository
git clone <repository-url>
cd game-price-pal

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open browser
# Go to http://localhost:5173
```

## 🔧 Troubleshooting

### Common Issues

#### "Node.js is not installed"
**Solution:**
- Windows: Download from [nodejs.org](https://nodejs.org/)
- Linux: `sudo apt install nodejs npm` (Ubuntu/Debian)
- macOS: `brew install node` or download from [nodejs.org](https://nodejs.org/)

#### "npm install failed"
**Solutions:**
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and try again
rm -rf node_modules package-lock.json
npm install

# Try with different registry
npm install --registry https://registry.npmjs.org/
```

#### "Port 5173 already in use"
**Solutions:**
```bash
# Kill process on port 5173
npx kill-port 5173

# Or start on different port
npm run dev -- --port 3000
```

#### "Permission denied" (Linux/macOS)
**Solution:**
```bash
# Make script executable
chmod +x start-linux.sh  # or start-mac.sh

# Then run
./start-linux.sh  # or ./start-mac.sh
```

### Getting Help
1. Check this troubleshooting section
2. Look at the main README.md
3. Create an issue on GitHub
4. Check browser console for errors

## 📱 Future Mobile App (APK)

The APK generation is planned for future releases and will require:
1. Capacitor setup for mobile deployment
2. Android Studio for APK building
3. Additional configuration for mobile-specific features

Current focus is on the web application with desktop support.

## 🎯 Next Steps After Setup

Once the application is running:
1. **Explore the Dashboard** - See featured deals and statistics
2. **Try Advanced Search** - Use filters to find specific games
3. **Check Different Stores** - Browse Steam, Epic, GOG, etc.
4. **Set Your Region** - Choose your preferred currency/region
5. **Toggle Theme** - Switch between dark and light modes
6. **Create Wishlist** - Track your favorite games (coming soon)

## 📞 Support

If you encounter issues:
- Check the troubleshooting section above
- Review the main README.md documentation
- Create an issue on the GitHub repository
- Ensure you have the latest version of Node.js

---

**Happy Gaming! 🎮**