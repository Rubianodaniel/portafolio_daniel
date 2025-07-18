// Main Application Controller - Modular SPA Architecture
// Author: Daniel Rubiano Meneses

import router from './utils/router.js';
import homeComponent from './components/home.js';
import systemsComponent from './components/systems.js';
import architectureComponent from './components/architecture.js';
import config from './config.js';

class BackendPortfolioApp {
    constructor() {
        this.router = router;
        this.isInitialized = false;
        this.init();
    }

    // Initialize the application
    async init() {
        if (this.isInitialized) return;
        
        try {
            // Validate configuration
            config.validate();
            
            // Initialize EmailJS
            this.initializeEmailJS();
            
            // Setup event listeners
            this.setupEventListeners();
            
            // Register components with router
            this.registerComponents();
            
            // Initialize router
            this.router.init();
            
            // Hide loading screen
            await this.hideLoadingScreen();
            
            this.isInitialized = true;
            console.log('✅ Portfolio SPA initialized successfully');
            
        } catch (error) {
            console.error('❌ Failed to initialize portfolio:', error);
        }
    }

    // Initialize EmailJS service
    initializeEmailJS() {
        emailjs.init(config.emailJS.publicKey);
        console.log('✅ EmailJS initialized with environment configuration');
    }

    // Register all components with the router
    registerComponents() {
        this.router.register('home', homeComponent);
        this.router.register('systems', systemsComponent);
        this.router.register('architecture', architectureComponent);
        
        // Skills page removed - technical skills shown in home page
        
        this.router.register('contact', {
            name: 'contact',
            title: 'Contact',
            getContent: () => this.getContactContent(),
            initialize: () => this.initializeContactFeatures()
        });
    }

    // Setup global event listeners
    setupEventListeners() {
        // Navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const page = e.target.dataset.page;
                this.navigateTo(page);
            });
        });

        // Mobile menu toggle
        const hamburger = document.querySelector('.hamburger');
        const navMenu = document.querySelector('.nav-menu');
        
        hamburger?.addEventListener('click', () => {
            navMenu?.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Scroll effects
        this.setupScrollEffects();
    }

    // Navigation wrapper
    navigateTo(page) {
        this.router.navigateTo(page);
    }

    // Scroll effects for navbar
    setupScrollEffects() {
        let lastScrollTop = 0;
        const navbar = document.querySelector('.navbar');
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            if (scrollTop > lastScrollTop && scrollTop > 100) {
                navbar.classList.add('hidden');
            } else {
                navbar.classList.remove('hidden');
            }
            
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
            
            lastScrollTop = scrollTop;
        });
    }

    // Hide loading screen with animation
    async hideLoadingScreen() {
        return new Promise((resolve) => {
            const loadingScreen = document.getElementById('loading-screen');
            const loadingProgress = document.querySelector('.loading-progress');
            const loadingText = document.querySelector('.loading-text');
            
            if (!loadingScreen) {
                resolve();
                return;
            }
            
            // Animate loading bar
            if (loadingProgress) {
                loadingProgress.style.width = '100%';
            }
            
            // Update loading text
            if (loadingText) {
                setTimeout(() => {
                    loadingText.innerHTML = '<span class="cursor">$</span> <span class="typing-text">System ready!</span>';
                }, 800);
            }
            
            // Hide loading screen
            setTimeout(() => {
                loadingScreen.style.opacity = '0';
                setTimeout(() => {
                    loadingScreen.style.display = 'none';
                    resolve();
                }, 500);
            }, 1500);
        });
    }

    // Notification system
    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.innerHTML = `
            <i class="fas fa-${type === 'success' ? 'check' : type === 'error' ? 'times' : 'info'}"></i>
            <span>${message}</span>
        `;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);
        
        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => {
                notification.remove();
            }, 300);
        }, 4000);
    }

    // Temporary component content methods (until we create separate components)
    getArchitectureContent() {
        return `
            <section class="architecture" data-animate>
                <div class="container">
                    <h2 class="section-title">System Architecture</h2>
                    <div class="architecture-showcase">
                        <div class="architecture-item">
                            <h3>Monolith to Microservices Migration</h3>
                            <div class="migration-demo">
                                <div class="before-after">
                                    <div class="before">
                                        <h4>Before</h4>
                                        <div class="monolith-box">
                                            <div class="monolith-content">
                                                <div class="service-block">Auth</div>
                                                <div class="service-block">Users</div>
                                                <div class="service-block">Orders</div>
                                                <div class="service-block">Payment</div>
                                                <div class="service-block">Analytics</div>
                                            </div>
                                        </div>
                                        <div class="metrics">
                                            <span class="metric bad">Single Point of Failure</span>
                                            <span class="metric bad">Hard to Scale</span>
                                        </div>
                                    </div>
                                    <div class="arrow">
                                        <i class="fas fa-arrow-right"></i>
                                    </div>
                                    <div class="after">
                                        <h4>After</h4>
                                        <div class="microservices-grid">
                                            <div class="microservice">Auth API</div>
                                            <div class="microservice">User API</div>
                                            <div class="microservice">Order API</div>
                                            <div class="microservice">Payment API</div>
                                            <div class="microservice">Analytics API</div>
                                        </div>
                                        <div class="metrics">
                                            <span class="metric good">20% Better Uptime</span>
                                            <span class="metric good">3x Traffic Handled</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p><strong>Real Impact:</strong> Led the modernization of a legacy Django monolith at Spot, improving uptime by 20% and enabling the system to handle 3x traffic increase.</p>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Skills content removed - now integrated in home page tech stack

    getContactContent() {
        return `
            <section class="contact" data-animate>
                <div class="container">
                    <h2 class="section-title">Let's Build Something Together</h2>
                    <div class="contact-content">
                        <div class="contact-info">
                            <h3>Ready to discuss your next project?</h3>
                            <p>I specialize in building scalable backend systems that grow with your business.</p>
                            <div class="contact-details">
                                <div class="contact-item">
                                    <i class="fas fa-envelope"></i>
                                    <a href="mailto:danielrubianomeneses@gmail.com">danielrubianomeneses@gmail.com</a>
                                </div>
                                <div class="contact-item">
                                    <i class="fab fa-linkedin"></i>
                                    <a href="https://linkedin.com/in/rubianodaniel/" target="_blank">linkedin.com/in/rubianodaniel/</a>
                                </div>
                                <div class="contact-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <span>Bogota, Colombia (Remote)</span>
                                </div>
                            </div>
                        </div>
                        <div class="contact-form">
                            <form id="contactForm">
                                <div class="form-group">
                                    <input type="text" name="name" placeholder="Your Name" required>
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" placeholder="Your Email" required>
                                </div>
                                <div class="form-group">
                                    <textarea name="message" placeholder="Tell me about your project..." rows="5" required></textarea>
                                </div>
                                <button type="submit" class="btn btn-primary">
                                    <i class="fas fa-paper-plane"></i> Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Temporary initialization methods
    initializeArchitectureFeatures() {
        // Architecture-specific initialization
    }

    initializeSkillsFeatures() {
        // Skills-specific initialization
    }

    initializeContactFeatures() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleContactForm(form);
            });
        }
    }

    async handleContactForm(form) {
        const formData = new FormData(form);
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.innerHTML;
        
        // Get form values
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');
        
        // Basic validation
        if (!name || !email || !message) {
            this.showNotification('Please fill in all fields.', 'error');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showNotification('Please enter a valid email address.', 'error');
            return;
        }
        
        // Update button state
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitButton.disabled = true;
        
        try {
            // EmailJS template parameters
            const templateParams = {
                from_name: name,
                from_email: email,
                message: message,
                to_name: 'Daniel Rubiano',
                reply_to: email
            };
            
            // Send email using EmailJS
            const response = await emailjs.send(
                config.emailJS.serviceId,
                config.emailJS.templateId,
                templateParams
            );
            
            console.log('Email sent successfully:', response);
            this.showNotification(`Thank you ${name}! Your message has been sent successfully. I'll get back to you soon.`, 'success');
            form.reset();
            
        } catch (error) {
            console.error('Error sending email:', error);
            this.showNotification('There was an error sending your message. Please try again later.', 'error');
        } finally {
            submitButton.innerHTML = originalText;
            submitButton.disabled = false;
        }
    }
    
    // Email validation helper
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }
}

// Initialize the application when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new BackendPortfolioApp();
});

// Export for use in other scripts
export default BackendPortfolioApp;