#!/usr/bin/env node

/**
 * Game Price Pal - APK Setup Script
 * Prepares the project for Android APK generation
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('📱 Game Price Pal - APK Setup');
console.log('==============================\n');

// Check if we're in the right directory
if (!fs.existsSync('package.json')) {
  console.error('❌ Error: package.json not found!');
  console.error('Please run this script from the project root directory.\n');
  process.exit(1);
}

const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));

console.log('🔍 Checking prerequisites...\n');

// Check if Node.js and npm are available
try {
  const nodeVersion = execSync('node --version', { encoding: 'utf8' }).trim();
  const npmVersion = execSync('npm --version', { encoding: 'utf8' }).trim();
  console.log(`✅ Node.js: ${nodeVersion}`);
  console.log(`✅ npm: ${npmVersion}`);
} catch (error) {
  console.error('❌ Node.js or npm not found!');
  console.error('Please install Node.js from: https://nodejs.org/\n');
  process.exit(1);
}

// Function to run command with error handling
function runCommand(command, description) {
  console.log(`\n🔄 ${description}...`);
  try {
    execSync(command, { stdio: 'inherit' });
    console.log(`✅ ${description} completed`);
  } catch (error) {
    console.error(`❌ ${description} failed`);
    console.error('Please check the error above and try again.\n');
    process.exit(1);
  }
}

// Install Capacitor dependencies
console.log('\n📦 Installing Capacitor dependencies...');
const capacitorDeps = [
  '@capacitor/core',
  '@capacitor/cli',
  '@capacitor/android',
  '@capacitor/app',
  '@capacitor/haptics',
  '@capacitor/keyboard',
  '@capacitor/status-bar'
];

runCommand(`npm install ${capacitorDeps.join(' ')}`, 'Installing Capacitor packages');

// Create Capacitor configuration
const capacitorConfig = {
  appId: 'com.gamepricepal.app',
  appName: 'Game Price Pal',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 2000,
      backgroundColor: '#1e293b',
      showSpinner: false
    },
    StatusBar: {
      style: 'dark'
    }
  }
};

fs.writeFileSync('capacitor.config.json', JSON.stringify(capacitorConfig, null, 2));
console.log('✅ Created capacitor.config.json');

// Initialize Capacitor
runCommand('npx cap init "Game Price Pal" "com.gamepricepal.app"', 'Initializing Capacitor');

// Build the web app
runCommand('npm run build', 'Building web application');

// Add Android platform
runCommand('npx cap add android', 'Adding Android platform');

// Sync the project
runCommand('npx cap sync', 'Syncing project files');

// Create APK build script
const apkBuildScript = `#!/usr/bin/env node

/**
 * Game Price Pal - APK Builder
 * Builds the Android APK file
 */

const { execSync } = require('child_process');
const fs = require('fs');

console.log('📱 Game Price Pal - APK Builder');
console.log('===============================\\n');

// Check if Android platform exists
if (!fs.existsSync('android')) {
  console.error('❌ Android platform not found!');
  console.error('Please run create-apk-setup.js first.\\n');
  process.exit(1);
}

// Build the web app first
console.log('🔄 Building web application...');
try {
  execSync('npm run build', { stdio: 'inherit' });
  console.log('✅ Web build completed');
} catch (error) {
  console.error('❌ Web build failed');
  process.exit(1);
}

// Sync with Capacitor
console.log('\\n🔄 Syncing with Capacitor...');
try {
  execSync('npx cap sync', { stdio: 'inherit' });
  console.log('✅ Sync completed');
} catch (error) {
  console.error('❌ Sync failed');
  process.exit(1);
}

// Open Android Studio
console.log('\\n🚀 Opening Android Studio...');
console.log('\\n📋 Next steps in Android Studio:');
console.log('1. Wait for Gradle sync to complete');
console.log('2. Go to Build > Build Bundle(s) / APK(s) > Build APK(s)');
console.log('3. Wait for build to complete');
console.log('4. APK will be in: android/app/build/outputs/apk/debug/');
console.log('\\n💡 For release APK:');
console.log('1. Go to Build > Generate Signed Bundle / APK');
console.log('2. Choose APK and follow the signing process');
console.log('3. Release APK will be in: android/app/build/outputs/apk/release/');

try {
  execSync('npx cap open android', { stdio: 'inherit' });
} catch (error) {
  console.error('❌ Failed to open Android Studio');
  console.error('Please open Android Studio manually and import the android/ folder');
}
`;

fs.writeFileSync('build-apk.js', apkBuildScript);
fs.chmodSync('build-apk.js', '755');
console.log('✅ Created build-apk.js script');

// Update package.json with new scripts
packageJson.scripts = {
  ...packageJson.scripts,
  'mobile:setup': 'node create-apk-setup.js',
  'mobile:build': 'node build-apk.js',
  'mobile:sync': 'npx cap sync',
  'mobile:android': 'npx cap open android'
};

fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
console.log('✅ Updated package.json with mobile scripts');

// Create mobile development guide
const mobileGuide = `# 📱 Game Price Pal - Mobile Development Guide

## Prerequisites
- Node.js 18+ installed
- Android Studio installed
- Java Development Kit (JDK) 8 or 11
- Android SDK (installed with Android Studio)

## Quick Start
1. Run setup: \`node create-apk-setup.js\` (already done)
2. Build APK: \`node build-apk.js\`
3. Follow Android Studio instructions

## Available Scripts
- \`npm run mobile:setup\` - Setup mobile development
- \`npm run mobile:build\` - Build and open Android Studio
- \`npm run mobile:sync\` - Sync web changes to mobile
- \`npm run mobile:android\` - Open Android Studio

## APK Build Process
1. **Debug APK** (for testing):
   - Build > Build Bundle(s) / APK(s) > Build APK(s)
   - Output: \`android/app/build/outputs/apk/debug/app-debug.apk\`

2. **Release APK** (for distribution):
   - Build > Generate Signed Bundle / APK
   - Choose APK and create/use signing key
   - Output: \`android/app/build/outputs/apk/release/app-release.apk\`

## Troubleshooting

### "Android Studio not found"
- Download from: https://developer.android.com/studio
- Ensure Android SDK is installed

### "Gradle sync failed"
- Check internet connection
- Update Android Studio
- Invalidate caches: File > Invalidate Caches and Restart

### "Build failed"
- Check Java version: \`java -version\`
- Ensure JAVA_HOME is set correctly
- Clean project: Build > Clean Project

## App Configuration
- **App ID**: com.gamepricepal.app
- **App Name**: Game Price Pal
- **Config**: capacitor.config.json

## Features in Mobile App
- ✅ Full web functionality
- ✅ Native navigation
- ✅ Splash screen
- ✅ Status bar styling
- ✅ Hardware back button
- ✅ Responsive design

## Testing
1. Install debug APK on device/emulator
2. Test all features work correctly
3. Check performance and responsiveness
4. Verify offline behavior (if applicable)

## Distribution
1. Build release APK with signing key
2. Test release APK thoroughly
3. Upload to Google Play Store (optional)
4. Or distribute APK directly

## Support
- Android Studio docs: https://developer.android.com/studio/intro
- Capacitor docs: https://capacitorjs.com/docs
- Project issues: Create GitHub issue

Happy mobile development! 📱🎮
`;

fs.writeFileSync('MOBILE_GUIDE.md', mobileGuide);
console.log('✅ Created MOBILE_GUIDE.md');

console.log('\n🎉 APK setup completed successfully!');
console.log('\n📋 Next steps:');
console.log('1. Run: node build-apk.js');
console.log('2. Follow Android Studio instructions');
console.log('3. Build your APK!');
console.log('\n📖 For detailed instructions, see: MOBILE_GUIDE.md');
console.log('\n💡 Requirements:');
console.log('- Android Studio installed');
console.log('- Java JDK 8 or 11');
console.log('- Android SDK');