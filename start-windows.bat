@echo off
echo ========================================
echo    Game Price Pal - Windows Launcher
echo ========================================
echo.

:: Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo After installation, restart this script.
    echo.
    pause
    exit /b 1
)

echo ✓ Node.js is installed
node --version

:: Check if npm is available
npm --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: npm is not available!
    echo Please reinstall Node.js from: https://nodejs.org/
    echo.
    pause
    exit /b 1
)

echo ✓ npm is available
npm --version
echo.

:: Check if package.json exists
if not exist "package.json" (
    echo ERROR: package.json not found!
    echo Make sure you're running this script from the project root directory.
    echo.
    pause
    exit /b 1
)

echo ✓ Project files found
echo.

:: Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo Installing dependencies...
    echo This may take a few minutes...
    echo.
    npm install
    if %errorlevel% neq 0 (
        echo.
        echo ERROR: Failed to install dependencies!
        echo Try running: npm cache clean --force
        echo Then run this script again.
        echo.
        pause
        exit /b 1
    )
    echo.
    echo ✓ Dependencies installed successfully!
) else (
    echo ✓ Dependencies already installed
)

echo.
echo Starting Game Price Pal...
echo.
echo The application will open in your default browser.
echo If it doesn't open automatically, go to: http://localhost:5173
echo.
echo To stop the application, press Ctrl+C in this window.
echo.

:: Start the development server
npm run dev

:: If we get here, the server stopped
echo.
echo Game Price Pal has stopped.
pause