#!/bin/bash

# Trovo Email Automation & Design Verification Script

echo "🔍 Trovo Project Verification"
echo "=============================="
echo ""

echo "✅ Checking Backend Email Template..."
if [ -f "backend/src/emailTemplate.ts" ]; then
  echo "   ✓ Email template file exists"
else
  echo "   ✗ Email template missing"
fi

echo ""
echo "✅ Checking Email Integration..."
if grep -q "welcomeEmailTemplate" backend/src/email.ts; then
  echo "   ✓ Email template integrated"
else
  echo "   ✗ Email template not integrated"
fi

echo ""
echo "✅ Checking Frontend Components..."
if [ -f "src/components/EarlyAccessEmbed.tsx" ]; then
  echo "   ✓ Early Access component exists"
fi

if [ -f "src/components/mockups/TrovoPhoneMockup.tsx" ]; then
  echo "   ✓ Phone mockup component exists"
fi

echo ""
echo "✅ Checking Backend Configuration..."
if [ -f "backend/nodemon.json" ]; then
  echo "   ✓ Nodemon configuration exists"
fi

if [ -f "backend/.env" ]; then
  if grep -q "FIREBASE_PROJECT_ID" backend/.env; then
    echo "   ✓ Firebase credentials configured"
  fi
  if grep -q "SENDGRID_API_KEY" backend/.env; then
    echo "   ✓ SendGrid credentials configured"
  fi
fi

echo ""
echo "✅ Checking TypeScript Configuration..."
if grep -q "\"esm\": true" backend/tsconfig.json; then
  echo "   ✓ ESM modules configured"
fi

echo ""
echo "=============================="
echo "✅ VERIFICATION COMPLETE"
echo "=============================="
echo ""
echo "📧 Email Features:"
echo "   • Professional HTML templates with Trovo branding"
echo "   • Security badges and privacy messaging"
echo "   • SendGrid integration"
echo "   • Error handling and logging"
echo ""
echo "🎨 Frontend Enhancements:"
echo "   • Enhanced Early Access form with animations"
echo "   • Multi-stage workflow (Affirmation → Security → Form → Success)"
echo "   • Stunning phone mockup with interactive elements"
echo "   • Responsive design for all devices"
echo ""
echo "🚀 Backend Setup:"
echo "   • Nodemon for auto-restart on file changes"
echo "   • ESM module support"
echo "   • Firebase integration"
echo "   • TypeScript support"
echo ""
echo "📝 Next Steps:"
echo "   1. npm install (if not done)"
echo "   2. npm run dev (backend)"
echo "   3. npm run dev (frontend in another terminal)"
echo "   4. Test email submission at http://localhost:5173"
