# Alok Kumar Saw - Portfolio Website

A modern, responsive portfolio website built with React, Vite, and Chakra UI showcasing my projects, skills, and professional experience as a Java Full Stack Developer.

## Features

- **Responsive Design**: Optimized for all devices (desktop, tablet, mobile)
- **Modern UI**: Built with Chakra UI for a clean, professional interface
- **Smooth Animations**: AOS (Animate On Scroll) for engaging user experience
- **Navigation**: Smooth scrolling navigation with active section highlighting
- **Project Showcase**: Interactive project cards with live demos and GitHub links
- **Contact Form**: Functional contact section with social links
- **Statistics**: Dynamic statistics display
- **Resume Section**: Professional resume and education timeline

## Tech Stack

### Frontend
- **React 18**: Modern React with hooks
- **Vite**: Fast build tool and development server
- **Chakra UI**: Component library for modern UI design
- **React Router DOM**: Client-side routing
- **React Scroll**: Smooth scrolling navigation
- **AOS**: Animate on scroll library
- **React Icons**: Icon library

### Development Tools
- **ESLint**: Code linting and formatting
- **GH Pages**: Deployment to GitHub Pages

## Project Structure

```
my-portfolio/
├── public/                     # Static assets
│   ├── images/                # Project screenshots and profile images
│   └── documents/             # Resume and other documents
├── src/
│   ├── components/
│   │   ├── common/           # Reusable components (Navbar, Footer)
│   │   └── sections/         # Page sections (Home, About, Projects, etc.)
│   ├── assets/
│   │   ├── images/           # Image assets
│   │   └── documents/        # PDF documents
│   ├── styles/               # CSS files
│   ├── hooks/                # Custom React hooks
│   ├── utils/                # Utility functions
│   ├── data/                 # Static data and constants
│   ├── App.jsx               # Main App component
│   └── main.jsx              # Application entry point
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/ALOKKUMARSAW/My-Portfolio.git
   cd My-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Customization

### Adding New Projects
1. Open `src/components/sections/Projects.jsx`
2. Add your project to the `projects` array:
   ```javascript
   {
     title: "Your Project Name",
     description: "Brief description of your project",
     technologies: ["React", "Node.js", "MongoDB"],
     image: "/project-screenshot.png",
     github: "https://github.com/yourusername/project",
     live: "https://yourproject.com"
   }
   ```

### Updating Personal Information
- **Profile**: Update information in `src/components/sections/Home.jsx`
- **About**: Modify `src/components/sections/About.jsx`
- **Skills**: Edit skills data in `src/components/sections/Skills.jsx`
- **Contact**: Update contact details in `src/components/sections/Contact.jsx`

### Styling
- Global styles: `src/styles/navbar.css`
- Component-specific styles: `src/styles/Projects.css`
- Chakra UI theme customization in `src/App.jsx`

## Deployment

### GitHub Pages
1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

### Manual Deployment
1. Build the project: `npm run build`
2. Upload the `dist` folder to your hosting provider

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/ALOKKUMARSAW/My-Portfolio/issues).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

**Alok Kumar Saw**
- GitHub: [@ALOKKUMARSAW](https://github.com/ALOKKUMARSAW)
- LinkedIn: [Alok Kumar Saw](https://linkedin.com/in/alok-kumar-saw)
- Email: alokkumarsaw@example.com

## Acknowledgments

- [Chakra UI](https://chakra-ui.com/) for the amazing component library
- [AOS](https://michalsnik.github.io/aos/) for scroll animations
- [React Icons](https://react-icons.github.io/react-icons/) for beautiful icons
- [Vite](https://vitejs.dev/) for the fast development experience

---

If you like this portfolio, please give it a star!
