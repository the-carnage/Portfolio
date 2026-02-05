# My Portfolio

Welcome to my personal portfolio website! This is a modern, responsive showcase of my professional journey, skills, and projects. Built with cutting-edge web technologies, this portfolio represents my passion for clean code, great design, and continuous learning.

🌐 **Live at:** [www.mehebub.in](https://www.mehebub.in) | 🚀 **Hosted on:** Vercel

## 🎯 About This Portfolio

This portfolio is designed to provide visitors with a comprehensive overview of:

- **Who I am**: My professional background and journey
- **What I do**: My technical skills and expertise
- **What I've built**: Showcase of my completed projects and achievements
- **How to reach me**: Easy contact options for collaboration opportunities

The entire experience is crafted to be intuitive, visually appealing, and optimized for all devices—from desktop to mobile.

## 🛠️ How This Was Made

This portfolio was built using modern web development practices and tools:

### Technology Stack

- **React** - A JavaScript library for building interactive user interfaces with component-based architecture
- **Vite** - An ultra-fast build tool and development server that provides instant Hot Module Replacement (HMR) for a seamless development experience
- **CSS** - Custom styling for each component to ensure a unique, polished design

### Development Approach

Each major section of the portfolio is built as an independent React component:

- **Navbar** - Navigation component for easy access to all sections
- **Hero** - Eye-catching landing section with a strong first impression
- **About** - Personal introduction and professional background
- **Skills** - Organized showcase of technical abilities
- **Projects** - Portfolio of completed work with descriptions
- **Contact** - Call-to-action and contact information
- **Footer** - Closing section with additional links

### Key Features

- ⚡ **Fast Performance**: Built with Vite for lightning-quick build times and instant development feedback
- 📱 **Fully Responsive**: Seamlessly adapts to desktop, tablet, and mobile screens
- 🎨 **Custom Styling**: Carefully crafted CSS for a professional, modern aesthetic
- 🚀 **Optimized Deployment**: Production-ready build with performance optimization
- 🔥 **Hot Reload**: See changes instantly during development with HMR

## 📁 Project Structure

The project is organized into modular, reusable components:

```
src/
├── components/
│   ├── Navbar.jsx         # Navigation bar with links to all sections
│   ├── Hero.jsx           # Landing section with introduction
│   ├── About.jsx          # Personal and professional background
│   ├── Skills.jsx         # Technical skills showcase
│   ├── Projects.jsx       # Portfolio of projects
│   ├── Contact.jsx        # Contact section and CTA
│   ├── Footer.jsx         # Footer with additional links
│   ├── Navbar.css         # Navbar styling
│   ├── Hero.css           # Hero section styling
│   ├── About.css          # About section styling
│   ├── Skills.css         # Skills section styling
│   ├── Projects.css       # Projects section styling
│   ├── Contact.css        # Contact section styling
│   └── Footer.css         # Footer styling
├── App.jsx                # Main app component
├── main.jsx               # React entry point
├── App.css                # Global app styling
├── index.css              # Global styles
└── assets/                # Images and media files
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

Clone the repository and install dependencies:

```bash
npm install
```

### Development

Start the development server with hot reload:

```bash
npm run dev
```

The app will be available at `http://localhost:5173` (or another port if 5173 is in use). Changes to the code are reflected instantly in the browser.

### Build for Production

Create an optimized production build:

```bash
npm run build
```

This generates a `dist/` folder with minified and optimized files ready for deployment.

### Preview Production Build

Preview the production build locally before deploying:

```bash
npm run preview
```

## 📋 Available Scripts

| Script            | Description                                  |
| ----------------- | -------------------------------------------- |
| `npm run dev`     | Start the development server with hot reload |
| `npm run build`   | Create an optimized production build         |
| `npm run preview` | Preview the production build locally         |
| `npm run lint`    | Run ESLint to check code quality             |

## 💡 Development Highlights

### Why Vite?

Vite was chosen for this project because of its:

- **Lightning-fast HMR**: Near-instant feedback during development
- **Fast builds**: Dramatically faster build times compared to traditional bundlers
- **Optimized production output**: Efficient code splitting and bundling
- **Modern tooling**: Support for ES modules, TypeScript, and more

### Component-Based Architecture

Each section of the portfolio is a self-contained React component with its own styling, making the code:

- Easy to maintain and update
- Reusable across the application
- Simple to debug and test
- Scalable for future enhancements

### Responsive Design

The portfolio is built mobile-first, ensuring that it looks great on:

- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktops
- 🖥️ Large screens

## 🎨 Customization

To customize this portfolio for your own use:

1. **Update Content**: Edit component files in `src/components/` with your own information
2. **Modify Styling**: Customize CSS files to match your brand colors and design preferences
3. **Add Projects**: Update the Projects section with your own work samples
4. **Replace Images**: Add your own photos and media to the `src/assets/` folder
5. **Update Contact Info**: Modify the Contact section with your preferred contact methods

## 📦 Deployment

This portfolio is currently hosted on **Vercel** at [www.mehebub.in](https://www.mehebub.in)

Vercel was chosen for deployment because it:

- Offers seamless integration with GitHub for automatic deployments
- Provides zero-configuration deployment for Vite projects
- Includes built-in CDN and performance optimization
- Supports custom domains with automatic HTTPS

To deploy your own version, simply connect your GitHub repository to Vercel and push to deploy!

---

**Built with ❤️ using React and Vite**
