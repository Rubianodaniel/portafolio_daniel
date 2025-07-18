# 🚀 Software Engineering Portfolio

> A modern, interactive portfolio showcasing backend engineering expertise and system architecture skills.

[![Live Demo](https://img.shields.io/badge/Live-Demo-brightgreen)](https://danielrubiano.github.io/portfolio)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow.svg)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## 📖 Overview

This portfolio demonstrates enterprise-level software engineering capabilities through interactive examples of real-world architectures. Built as a Single Page Application (SPA) with vanilla JavaScript, it showcases the transition from monolithic to microservices architectures, event-driven systems, and modern backend technologies.

## ✨ Features

### 🏗️ **Architecture Showcase**
- **Django Monolith to Microservices Migration** - Real case study with before/after comparison
- **Event-Driven Architecture** - Interactive Kafka-based system diagrams
- **Security Integration** - Auth0 JWT authentication patterns
- **Database Strategy** - Multi-database approach (PostgreSQL, MongoDB, Redis)

### 🛠️ **Technical Highlights**
- **SPA Architecture** - Modular component-based design
- **Responsive Design** - Mobile-first approach with modern dark theme
- **Real-time Interactions** - Animated system diagrams and tech stack
- **Professional Icons** - DevIcons CDN integration
- **Contact Form** - Functional email integration with EmailJS

### 🔧 **Technologies Demonstrated**
- **Backend**: Python, Go, FastAPI, Django
- **Infrastructure**: Docker, Kubernetes, Azure
- **Data**: PostgreSQL, MongoDB, Redis, Apache Kafka
- **Architecture**: Microservices, Event-Driven, RESTful APIs

## 🎯 Target Audience

- **Software Engineering Recruiters** - Demonstrating backend expertise
- **Technical Teams** - Showcasing system design capabilities
- **Potential Collaborators** - Highlighting architectural experience

## 🚀 Live Demo

Visit the live portfolio: **[danielrubiano.github.io/portfolio](https://danielrubiano.github.io/portfolio)**

## 📱 Screenshots

### Home Page - Tech Stack Showcase
![Home Page](https://via.placeholder.com/800x400?text=Interactive+Tech+Stack+Showcase)

### Architecture Page - Migration Case Study
![Architecture](https://via.placeholder.com/800x400?text=Monolith+to+Microservices+Migration)

### Systems Page - Real-time Demos
![Systems](https://via.placeholder.com/800x400?text=Live+System+Demonstrations)

## 🛠️ Technical Architecture

### Project Structure
```
portfolio/
├── 📱 index.html          # Main HTML shell
├── 🎨 styles.css          # Modern dark theme styles
├── ⚙️ app.js              # Application controller
├── 📁 components/         # SPA components
│   ├── home.js           # Tech stack showcase
│   ├── architecture.js   # System architecture examples
│   └── systems.js        # Interactive system demos
├── 🔧 utils/
│   └── router.js         # SPA routing system
├── ⚙️ config.js          # Environment configuration
└── 📋 DEPLOYMENT.md      # Deployment instructions
```

### Key Design Patterns
- **Component-Based Architecture** - Modular, reusable components
- **Environment Configuration** - Secure credential management
- **Responsive Design** - Mobile-first CSS methodology
- **Progressive Enhancement** - Works without JavaScript

## 🔧 Installation & Setup

### Prerequisites
- Modern web browser
- Local web server (for development)

### Quick Start
```bash
# Clone the repository
git clone https://github.com/danielrubiano/portfolio.git
cd portfolio

# Serve locally (choose one)
python3 -m http.server 8000
# or
npx serve .
# or
php -S localhost:8000

# Open in browser
open http://localhost:8000
```

### Environment Configuration
```bash
# Create environment file
cp .env.example .env

# Edit with your EmailJS credentials
EMAILJS_PUBLIC_KEY=your_public_key
EMAILJS_SERVICE_ID=your_service_id
EMAILJS_TEMPLATE_ID=your_template_id
```

## 📧 Contact Form Setup

The portfolio includes a functional contact form powered by [EmailJS](https://www.emailjs.com/).

### Setup Steps:
1. **Create EmailJS Account** (Free - 200 emails/month)
2. **Configure Email Service** (Gmail recommended)
3. **Create Email Template**
4. **Update Environment Variables**

Detailed instructions: [DEPLOYMENT.md](DEPLOYMENT.md)

## 🚀 Deployment

### GitHub Pages (Recommended)
```bash
# Push to GitHub
git remote add origin https://github.com/username/portfolio.git
git push -u origin main

# Enable GitHub Pages in repository settings
# Source: Deploy from branch (main)
```

### Netlify
```bash
# Connect GitHub repository
# Build command: (none)
# Publish directory: ./
# Environment variables: Set EmailJS credentials
```

### Vercel
```bash
# Import GitHub repository
# Framework: Other
# Environment variables: Set EmailJS credentials
```

Complete deployment guide: [DEPLOYMENT.md](DEPLOYMENT.md)

## 🎨 Customization

### Styling
- **CSS Variables** - Easy theme customization
- **Modular Styles** - Component-specific styling
- **Responsive Breakpoints** - Mobile, tablet, desktop

### Content
- **Component Templates** - Easy content updates
- **Tech Stack** - Update technologies in `home.js`
- **Architecture Examples** - Modify case studies in `architecture.js`

### Configuration
- **Environment Variables** - Secure credential management
- **Router Configuration** - Add/remove pages easily
- **Animation Settings** - Customize interactions

## 🧪 Testing

### Local Testing
```bash
# Test responsive design
# Chrome DevTools > Device Toolbar

# Test contact form
# Fill form > Check console for EmailJS response

# Test navigation
# All SPA routes should work without page refresh
```

### Performance
- **Lighthouse Score**: 95+ (Performance, Accessibility, Best Practices)
- **Mobile Responsive**: All breakpoints tested
- **Cross-browser**: Chrome, Firefox, Safari, Edge

## 📈 Performance Features

- **Lightweight** - No heavy frameworks
- **Fast Loading** - Optimized assets
- **Smooth Animations** - CSS3 transitions
- **SEO Friendly** - Semantic HTML structure
- **Accessible** - ARIA labels and semantic elements

## 🤝 Contributing

This is a personal portfolio, but suggestions and feedback are welcome!

1. **Fork** the repository
2. **Create** a feature branch
3. **Submit** a pull request with description

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Daniel Rubiano Meneses**
- 💼 Software Engineer specializing in backend systems
- 🌐 Portfolio: [danielrubiano.github.io/portfolio](https://danielrubiano.github.io/portfolio)
- 📧 Email: danielrubianomeneses@gmail.com
- 💼 LinkedIn: [linkedin.com/in/rubianodaniel](https://linkedin.com/in/rubianodaniel)

## 🙏 Acknowledgments

- **EmailJS** - Contact form functionality
- **DevIcons** - Professional technology icons
- **Font Awesome** - UI icons
- **Google Fonts** - Typography (Inter, JetBrains Mono)

---

⭐ **If you found this portfolio helpful, please give it a star!** ⭐