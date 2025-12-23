# Trovo Fintech Landing Page

A modern, animated landing page for Trovo - a fintech application that helps users unlock their unused credit card points and provides seamless payment solutions.

## 🚀 Features

- **Modern Design**: Clean, futuristic fintech aesthetic inspired by CheQ
- **Smooth Animations**: Framer Motion powered scroll-based animations and micro-interactions
- **Responsive**: Mobile-first design that works beautifully on all devices
- **TypeScript**: Full type safety throughout the application
- **Fast Development**: Built with Vite for lightning-fast development experience

## 🎨 Design System

- **Colors**: White background with Trovo Green (#1DB954) accents
- **Typography**: Inter font family for modern, clean look
- **Layout**: Clean grid system with proper spacing and soft shadows

## 📦 Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework with custom theme
- **Framer Motion** - Production-ready motion library for React
- **Vite** - Next generation frontend build tool

## 🛠️ Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🎯 Landing Page Sections

1. **Hero Section** - "Do you want your treasure back?" with animated CTA and phone mockup
2. **Problem Section** - Highlights current fintech pain points with animated cards
3. **Solution Section** - Showcases Trovo's four key features with hover effects
4. **Why Trovo Section** - Trust building with stats and social proof
5. **Early Access Section** - Waitlist signup with email capture

## 🎬 Animation Features

- Scroll-triggered animations with `useInView` hook
- Staggered animations for lists and grids
- Hover effects with scale and shadow transformations
- Smooth transitions with custom easing
- Floating elements and micro-animations for engagement
- CTA buttons with glow effects

## 🎨 Custom Theme

The project uses a custom Tailwind theme with:
- Trovo Green colors (`#1DB954`, `#1ed760`, `#18a147`)
- Inter font family
- Custom animations (fade-in, slide-up, float, glow)
- Responsive design utilities

## 📁 Project Structure

```
src/
├── components/
│   ├── HeroSection.tsx        # Main landing section
│   ├── ProblemSection.tsx     # Problem identification
│   ├── SolutionSection.tsx    # Feature showcase
│   ├── WhyTrovoSection.tsx    # Trust building
│   └── EarlyAccessSection.tsx # Waitlist signup
├── App.tsx                    # Main app component
├── main.tsx                   # Entry point
└── index.css                  # Global styles with Tailwind
```

## 🚀 Deployment

The project can be deployed to any static hosting service like Vercel, Netlify, or GitHub Pages.

## 📝 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ for the future of fintech in India

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
