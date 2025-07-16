# Deployment Guide - Game Price Pal

## 🌐 Web Deployment

### Netlify (Recommended)
1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**
   - Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)
   - Or connect your GitHub repository for automatic deployments

3. **Configuration**
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

### Vercel
1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   npm run build
   vercel --prod
   ```

### GitHub Pages
1. **Install gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json**
   ```json
   {
     "homepage": "https://yourusername.github.io/game-price-pal",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**
   ```bash
   npm run deploy
   ```

## 🖥 Desktop Application

### Electron Setup
1. **Install Electron**
   ```bash
   npm install --save-dev electron electron-builder
   ```

2. **Create main.js**
   ```javascript
   const { app, BrowserWindow } = require('electron');
   const path = require('path');

   function createWindow() {
     const mainWindow = new BrowserWindow({
       width: 1200,
       height: 800,
       webPreferences: {
         nodeIntegration: false,
         contextIsolation: true
       }
     });

     mainWindow.loadFile('dist/index.html');
   }

   app.whenReady().then(createWindow);
   ```

3. **Update package.json**
   ```json
   {
     "main": "main.js",
     "scripts": {
       "electron": "electron .",
       "build:electron": "npm run build && electron-builder"
     },
     "build": {
       "appId": "com.gamepricepal.app",
       "productName": "Game Price Pal",
       "directories": {
         "output": "dist-electron"
       },
       "files": ["dist/**/*", "main.js"]
     }
   }
   ```

4. **Build Desktop App**
   ```bash
   npm run build:electron
   ```

## 📱 Mobile Application (Future)

### Capacitor Setup
1. **Install Capacitor**
   ```bash
   npm install @capacitor/core @capacitor/cli
   npm install @capacitor/android @capacitor/ios
   ```

2. **Initialize Capacitor**
   ```bash
   npx cap init "Game Price Pal" "com.gamepricepal.app"
   ```

3. **Add Platforms**
   ```bash
   npx cap add android
   npx cap add ios
   ```

4. **Build and Sync**
   ```bash
   npm run build
   npx cap sync
   ```

5. **Open in Native IDE**
   ```bash
   npx cap open android  # For Android Studio
   npx cap open ios      # For Xcode
   ```

### Android APK Generation
1. **Prerequisites**
   - Android Studio installed
   - Java Development Kit (JDK) 8+
   - Android SDK

2. **Build APK**
   ```bash
   # In Android Studio
   Build > Build Bundle(s) / APK(s) > Build APK(s)
   ```

3. **Generate Signed APK**
   - Create keystore file
   - Configure signing in Android Studio
   - Build signed APK for release

## 🔧 Environment Configuration

### Production Environment Variables
Create `.env.production`:
```env
VITE_API_BASE_URL=https://api.yourdomain.com
VITE_APP_NAME=Game Price Pal
VITE_APP_VERSION=1.0.0
VITE_ENVIRONMENT=production
```

### Build Optimization
1. **Vite Configuration**
   ```typescript
   // vite.config.ts
   export default defineConfig({
     build: {
       rollupOptions: {
         output: {
           manualChunks: {
             vendor: ['react', 'react-dom'],
             ui: ['@radix-ui/react-dialog', '@radix-ui/react-select']
           }
         }
       }
     }
   });
   ```

2. **Performance Optimization**
   - Enable gzip compression
   - Implement code splitting
   - Optimize images and assets
   - Use CDN for static assets

## 🚀 CI/CD Pipeline

### GitHub Actions
Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy to Production

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v2
    
    - name: Setup Node.js
      uses: actions/setup-node@v2
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy to Netlify
      uses: nwtgck/actions-netlify@v1.2
      with:
        publish-dir: './dist'
        production-branch: main
      env:
        NETLIFY_AUTH_TOKEN: ${{ secrets.NETLIFY_AUTH_TOKEN }}
        NETLIFY_SITE_ID: ${{ secrets.NETLIFY_SITE_ID }}
```

## 📊 Monitoring and Analytics

### Error Tracking
1. **Sentry Integration**
   ```bash
   npm install @sentry/react @sentry/tracing
   ```

2. **Configuration**
   ```typescript
   import * as Sentry from "@sentry/react";
   
   Sentry.init({
     dsn: "YOUR_SENTRY_DSN",
     environment: process.env.NODE_ENV,
   });
   ```

### Analytics
1. **Google Analytics**
   ```bash
   npm install gtag
   ```

2. **Implementation**
   ```typescript
   import { gtag } from 'gtag';
   
   gtag('config', 'GA_MEASUREMENT_ID');
   ```

## 🔒 Security Considerations

### Production Security
1. **Environment Variables**
   - Never commit API keys
   - Use environment-specific configurations
   - Implement proper CORS policies

2. **Content Security Policy**
   ```html
   <meta http-equiv="Content-Security-Policy" 
         content="default-src 'self'; script-src 'self' 'unsafe-inline';">
   ```

3. **HTTPS Configuration**
   - Always use HTTPS in production
   - Implement HSTS headers
   - Use secure cookies

## 📈 Performance Monitoring

### Lighthouse Optimization
- Aim for 90+ scores in all categories
- Optimize Core Web Vitals
- Implement lazy loading
- Minimize bundle size

### Monitoring Tools
- Google PageSpeed Insights
- WebPageTest
- GTmetrix
- Chrome DevTools

---

This deployment guide covers all major platforms and deployment scenarios for Game Price Pal.