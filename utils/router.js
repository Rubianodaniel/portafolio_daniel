// Router - SPA Navigation System
// Handles routing, component loading, and navigation

export class Router {
    constructor() {
        this.routes = new Map();
        this.currentComponent = null;
        this.isLoading = false;
        this.defaultRoute = 'home';
    }

    // Register a route with its component
    register(path, component) {
        this.routes.set(path, component);
    }

    // Navigate to a route
    async navigateTo(path, updateHistory = true) {
        if (this.isLoading || !this.routes.has(path)) {
            console.warn(`Route '${path}' not found`);
            return;
        }

        this.isLoading = true;
        
        try {
            // Update navigation UI
            this.updateNavigationState(path);
            
            // Update browser history
            if (updateHistory) {
                history.pushState({ page: path }, '', `#${path}`);
            }

            // Load component
            await this.loadComponent(path);
            
            // Update document title
            this.updateDocumentTitle(path);
            
        } catch (error) {
            console.error('Navigation error:', error);
        } finally {
            this.isLoading = false;
        }
    }

    // Load and render component
    async loadComponent(path) {
        const component = this.routes.get(path);
        if (!component) return;

        const app = document.getElementById('app');
        if (!app) return;

        // Cleanup previous component
        if (this.currentComponent && this.currentComponent.cleanup) {
            this.currentComponent.cleanup();
        }

        // Add loading state
        app.classList.add('loading');
        
        // Render new component
        setTimeout(() => {
            app.innerHTML = component.getContent();
            
            // Initialize component
            if (component.initialize) {
                component.initialize();
            }
            
            // Apply animations
            this.applyAnimations(component.animations || []);
            
            // Update current component
            this.currentComponent = component;
            
            // Remove loading state
            app.classList.remove('loading');
        }, 300);
    }

    // Update navigation active state
    updateNavigationState(path) {
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.dataset.page === path) {
                link.classList.add('active');
            }
        });

        // Close mobile menu
        const navMenu = document.querySelector('.nav-menu');
        const hamburger = document.querySelector('.hamburger');
        navMenu?.classList.remove('active');
        hamburger?.classList.remove('active');
    }

    // Update document title
    updateDocumentTitle(path) {
        const component = this.routes.get(path);
        if (component && component.title) {
            document.title = `${component.title} - Daniel Rubiano`;
        }
    }

    // Apply component animations
    applyAnimations(animations) {
        animations.forEach((animation, index) => {
            setTimeout(() => {
                this.executeAnimation(animation);
            }, index * 200);
        });
    }

    // Execute specific animation
    executeAnimation(animation) {
        const elements = document.querySelectorAll('[data-animate]');
        elements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add(animation);
            }, index * 100);
        });
    }

    // Initialize router
    init() {
        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            const path = e.state?.page || this.getInitialRoute();
            this.navigateTo(path, false);
        });

        // Navigate to initial route
        const initialRoute = this.getInitialRoute();
        this.navigateTo(initialRoute, false);
    }

    // Get initial route from URL hash
    getInitialRoute() {
        const hash = window.location.hash.replace('#', '');
        return hash || this.defaultRoute;
    }

    // Set default route
    setDefaultRoute(route) {
        this.defaultRoute = route;
    }

    // Get current route
    getCurrentRoute() {
        return this.currentComponent?.name || this.defaultRoute;
    }

    // Check if route exists
    hasRoute(path) {
        return this.routes.has(path);
    }

    // Get all registered routes
    getRoutes() {
        return Array.from(this.routes.keys());
    }
}

// Export singleton instance
export default new Router();