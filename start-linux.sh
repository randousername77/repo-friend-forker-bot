#!/bin/bash

echo "========================================"
echo "   Game Price Pal - Linux Launcher"
echo "========================================"
echo

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo -e "${RED}ERROR: Node.js is not installed!${NC}"
    echo
    echo "Please install Node.js:"
    echo "Ubuntu/Debian: sudo apt update && sudo apt install nodejs npm"
    echo "CentOS/RHEL: sudo yum install nodejs npm"
    echo "Arch: sudo pacman -S nodejs npm"
    echo "Or download from: https://nodejs.org/"
    echo
    exit 1
fi

echo -e "${GREEN}✓ Node.js is installed${NC}"
node --version

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo -e "${RED}ERROR: npm is not available!${NC}"
    echo "Please install npm or reinstall Node.js"
    echo
    exit 1
fi

echo -e "${GREEN}✓ npm is available${NC}"
npm --version
echo

# Check if package.json exists
if [ ! -f "package.json" ]; then
    echo -e "${RED}ERROR: package.json not found!${NC}"
    echo "Make sure you're running this script from the project root directory."
    echo
    exit 1
fi

echo -e "${GREEN}✓ Project files found${NC}"
echo

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo -e "${YELLOW}Installing dependencies...${NC}"
    echo "This may take a few minutes..."
    echo
    npm install
    if [ $? -ne 0 ]; then
        echo
        echo -e "${RED}ERROR: Failed to install dependencies!${NC}"
        echo "Try running: npm cache clean --force"
        echo "Then run this script again."
        echo
        exit 1
    fi
    echo
    echo -e "${GREEN}✓ Dependencies installed successfully!${NC}"
else
    echo -e "${GREEN}✓ Dependencies already installed${NC}"
fi

echo
echo -e "${YELLOW}Starting Game Price Pal...${NC}"
echo
echo "The application will open in your default browser."
echo "If it doesn't open automatically, go to: http://localhost:5173"
echo
echo "To stop the application, press Ctrl+C in this terminal."
echo

# Start the development server
npm run dev

# If we get here, the server stopped
echo
echo "Game Price Pal has stopped."