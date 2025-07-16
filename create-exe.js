#!/usr/bin/env node

/**
 * Game Price Pal - Executable Creator
 * Creates a Windows executable for easy distribution
 */

const fs = require('fs');
const path = require('path');

console.log('🎮 Game Price Pal - Executable Creator');
console.log('=====================================\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found!');
  console.error('Please run this script from the project root directory.\n');
  process.exit(1);
}

// Read package.json to get project info
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
const projectName = packageJson.name || 'game-price-pal';
const version = packageJson.version || '1.0.0';

console.log(`📦 Project: ${projectName}`);
console.log(`🏷️  Version: ${version}\n`);

// Create executable script content
const executableContent = `@echo off
title Game Price Pal v${version}
echo.
echo ========================================
echo    Game Price Pal v${version}
echo    Starting Application...
echo ========================================
echo.

:: Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo After installation, restart this application.
    echo.
    pause
    exit /b 1
)

:: Check if we're in the right directory
if not exist "package.json" (
    echo ❌ ERROR: Application files not found!
    echo Please ensure all files are in the same directory.
    echo.
    pause
    exit /b 1
)

:: Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    echo This may take a few minutes on first run...
    echo.
    npm install --silent
    if %errorlevel% neq 0 (
        echo.
        echo ❌ ERROR: Failed to install dependencies!
        echo Please check your internet connection and try again.
        echo.
        pause
        exit /b 1
    )
    echo ✅ Dependencies installed successfully!
    echo.
)

:: Start the application
echo 🚀 Starting Game Price Pal...
echo.
echo The application will open in your default browser.
echo If it doesn't open automatically, go to: http://localhost:5173
echo.
echo To stop the application, close this window or press Ctrl+C.
echo.

:: Start development server
npm run dev

:: If we get here, the server stopped
echo.
echo 👋 Game Price Pal has stopped.
echo Thank you for using Game Price Pal!
pause
`;

// Write the executable file
const executablePath = 'GamePricePal.bat';
fs.writeFileSync(executablePath, executableContent);

console.log(`✅ Executable created: ${executablePath}`);
console.log('\n📋 Instructions:');
console.log('1. Double-click GamePricePal.bat to start the application');
console.log('2. The application will automatically install dependencies');
console.log('3. Your browser will open to http://localhost:5173');
console.log('4. Close the command window to stop the application');

// Create a README for the executable
const executableReadme = `# Game Price Pal - Executable Version

## Quick Start
1. Double-click \`GamePricePal.bat\`
2. Wait for automatic setup (first run only)
3. Application opens in your browser
4. Enjoy comparing game prices!

## Requirements
- Windows 7 or later
- Internet connection
- Node.js (will prompt to install if missing)

## Features
- Compare prices across Steam, Epic, GOG, Xbox, PlayStation
- Support for 10+ regions and currencies
- Advanced search and filtering
- Dark/Light theme support
- Mobile-friendly design

## Troubleshooting
- If Node.js is missing, download from: https://nodejs.org/
- If port 5173 is busy, the app will try alternative ports
- For issues, check the console output in the command window

## Version: ${version}
Built with ❤️ for gamers worldwide 🎮
`;

fs.writeFileSync('EXECUTABLE_README.txt', executableReadme);

console.log('\n📄 Created: EXECUTABLE_README.txt');
console.log('\n🎉 Setup complete! You can now distribute GamePricePal.bat');
console.log('\n💡 Tip: Include the entire project folder when sharing');
console.log('   Users only need to double-click GamePricePal.bat to start!');