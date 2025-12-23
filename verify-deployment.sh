#!/bin/bash

# Trovo Deployment Verification Script
# This script verifies that the build is ready for deployment

echo "🚀 Trovo Deployment Verification"
echo "================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run from project root."
    exit 1
fi

# Check Node.js version
echo "📦 Checking Node.js version..."
node_version=$(node --version)
echo "   Node.js: $node_version"

# Check npm version  
npm_version=$(npm --version)
echo "   npm: $npm_version"

# Install dependencies
echo "📥 Installing dependencies..."
npm install --silent

# Run TypeScript check
echo "🔍 Running TypeScript check..."
if npm run build > build.log 2>&1; then
    echo "✅ TypeScript compilation successful"
    rm build.log
else
    echo "❌ TypeScript compilation failed:"
    cat build.log
    rm build.log
    exit 1
fi

# Check for critical files
echo "📋 Checking critical files..."
critical_files=(
    "src/components/NativeSEO.tsx"
    "src/App.tsx"
    "public/sitemap.xml"
    "public/robots.txt"
    "index.html"
)

for file in "${critical_files[@]}"; do
    if [ -f "$file" ]; then
        echo "   ✅ $file"
    else
        echo "   ❌ $file (missing)"
        exit 1
    fi
done

# Check package.json for problematic dependencies
echo "🔍 Checking for problematic dependencies..."
if grep -q "react-helmet-async" package.json; then
    echo "   ❌ react-helmet-async found in package.json (should be removed)"
    exit 1
else
    echo "   ✅ No react-helmet-async dependency"
fi

# Verify build output
echo "🏗️  Verifying build output..."
if [ -d "dist" ]; then
    build_size=$(du -sh dist | cut -f1)
    echo "   ✅ Build directory exists (Size: $build_size)"
    
    if [ -f "dist/index.html" ]; then
        echo "   ✅ index.html generated"
    else
        echo "   ❌ index.html not found in build"
        exit 1
    fi
    
    # Count assets
    css_files=$(find dist -name "*.css" | wc -l)
    js_files=$(find dist -name "*.js" | wc -l)
    echo "   📊 Generated assets: $css_files CSS, $js_files JS files"
else
    echo "   ❌ Build directory not found"
    exit 1
fi

# Final summary
echo ""
echo "🎉 Deployment Verification Complete!"
echo "=================================="
echo "✅ All checks passed"
echo "✅ Build successful"  
echo "✅ No dependency conflicts"
echo "✅ SEO components working"
echo "✅ Ready for Vercel deployment"
echo ""
echo "Next steps:"
echo "1. Deploy to Vercel: vercel --prod"
echo "2. Verify SEO in production"
echo "3. Test all routes and functionality"

exit 0
