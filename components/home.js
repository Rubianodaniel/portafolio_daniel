// Home Component - Software Engineering Portfolio
// Focus: Software Engineering expertise and tech stack showcase

export class HomeComponent {
    constructor() {
        this.name = 'home';
        this.title = 'Software Engineering Portfolio';
        this.animations = ['fadeInUp', 'typeWriter'];
    }

    getContent() {
        return `
            <section class="hero" data-animate>
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 id="hero-title">Software Engineering</h1>
                        <h2 class="hero-subtitle">Scalable • Distributed • High-Performance</h2>
                        <p class="hero-description">
                            I design and engineer enterprise-grade software systems that power modern applications. 
                            Specializing in distributed architectures, cloud-native solutions, and high-throughput 
                            data processing systems that serve millions of users.
                        </p>
                        <div class="hero-stats">
                            <div class="stat-item">
                                <div class="stat-number">5+</div>
                                <div class="stat-label">Years Experience</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">100K+</div>
                                <div class="stat-label">Events/Day</div>
                            </div>
                            <div class="stat-item">
                                <div class="stat-number">99%</div>
                                <div class="stat-label">Uptime</div>
                            </div>
                        </div>
                        <div class="hero-buttons">
                            <button class="btn btn-primary" onclick="app.navigateTo('systems')">
                                <i class="fas fa-code"></i> View My Systems
                            </button>
                            <button class="btn btn-secondary" onclick="app.navigateTo('contact')">
                                <i class="fas fa-handshake"></i> Let's Build Together
                            </button>
                        </div>
                    </div>
                    <div class="hero-visual">
                        <div class="engineering-showcase">
                            <div class="tech-stack-section">
                                <h3>Core Technologies</h3>
                                <div class="tech-grid">
                                    <div class="tech-item" data-tooltip="Python - FastAPI, Django, Flask, PySpark">
                                        <div class="tech-logo">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="tech-icon">
                                        </div>
                                        <span>Python</span>
                                    </div>
                                    <div class="tech-item" data-tooltip="Go - High-performance microservices">
                                        <div class="tech-logo">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" class="tech-icon">
                                        </div>
                                        <span>Go</span>
                                    </div>
                                    <div class="tech-item" data-tooltip="Docker - Container orchestration">
                                        <div class="tech-logo">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" alt="Docker" class="tech-icon">
                                        </div>
                                        <span>Docker</span>
                                    </div>
                                    <div class="tech-item" data-tooltip="Kubernetes - Container orchestration">
                                        <div class="tech-logo">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" alt="Kubernetes" class="tech-icon">
                                        </div>
                                        <span>Kubernetes</span>
                                    </div>
                                    <div class="tech-item" data-tooltip="PostgreSQL - Relational database">
                                        <div class="tech-logo">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="tech-icon">
                                        </div>
                                        <span>PostgreSQL</span>
                                    </div>
                                    <div class="tech-item" data-tooltip="Apache Kafka - Event streaming">
                                        <div class="tech-logo">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Apache Kafka" class="tech-icon">
                                        </div>
                                        <span>Kafka</span>
                                    </div>
                                    <div class="tech-item" data-tooltip="Microsoft Azure - Cloud platform">
                                        <div class="tech-logo">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg" alt="Microsoft Azure" class="tech-icon">
                                        </div>
                                        <span>Azure</span>
                                    </div>
                                    <div class="tech-item" data-tooltip="Redis - In-memory data store">
                                        <div class="tech-logo">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" class="tech-icon">
                                        </div>
                                        <span>Redis</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="architecture-preview">
                                <h3>System Architecture</h3>
                                <div class="system-diagram">
                                    <div class="node api-gateway" data-tooltip="API Gateway - FastAPI, GraphQL, JWT Authentication">
                                        <i class="fas fa-globe"></i>
                                        <span>API Gateway</span>
                                    </div>
                                    <div class="node microservices" data-tooltip="Microservices - Python, Go, Docker containers">
                                        <i class="fas fa-cubes"></i>
                                        <span>Microservices</span>
                                    </div>
                                    <div class="node database" data-tooltip="Database Layer - PostgreSQL, MongoDB, Redis">
                                        <i class="fas fa-database"></i>
                                        <span>Database</span>
                                    </div>
                                    <div class="node cache" data-tooltip="Cache Layer - Redis, Memcached">
                                        <i class="fas fa-memory"></i>
                                        <span>Cache</span>
                                    </div>
                                    <div class="node message-queue" data-tooltip="Message Queue - Kafka, RabbitMQ">
                                        <i class="fas fa-exchange-alt"></i>
                                        <span>Message Queue</span>
                                    </div>
                                    <div class="connection-lines">
                                        <svg width="100%" height="100%" class="connections">
                                            <line x1="50%" y1="50%" x2="80%" y2="20%" stroke="#10b981" stroke-width="2" opacity="0.6"/>
                                            <line x1="50%" y1="50%" x2="80%" y2="80%" stroke="#10b981" stroke-width="2" opacity="0.6"/>
                                            <line x1="50%" y1="50%" x2="20%" y2="80%" stroke="#10b981" stroke-width="2" opacity="0.6"/>
                                            <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#10b981" stroke-width="2" opacity="0.6"/>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    // Initialize component-specific features
    initialize() {
        this.setupTechStackInteractions();
        this.setupSystemDiagramInteractions();
        this.startTypingAnimation();
        this.animateStats();
    }

    setupTechStackInteractions() {
        const techItems = document.querySelectorAll('.tech-item');
        techItems.forEach(item => {
            item.addEventListener('mouseenter', () => {
                this.showTechTooltip(item);
                this.animateTechProficiency(item);
            });
            
            item.addEventListener('mouseleave', () => {
                this.hideTechTooltip();
            });
        });
    }

    setupSystemDiagramInteractions() {
        const nodes = document.querySelectorAll('.node');
        nodes.forEach(node => {
            node.addEventListener('click', () => {
                this.animateNode(node);
            });
            
            node.addEventListener('mouseenter', () => {
                this.showSystemTooltip(node);
            });
            
            node.addEventListener('mouseleave', () => {
                this.hideSystemTooltip();
            });
        });
    }

    startTypingAnimation() {
        const title = document.getElementById('hero-title');
        if (!title) return;

        const text = title.textContent;
        title.textContent = '';
        
        let i = 0;
        const typeInterval = setInterval(() => {
            if (i < text.length) {
                title.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(typeInterval);
            }
        }, 100);
    }

    animateStats() {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach((stat, index) => {
            setTimeout(() => {
                const finalValue = stat.textContent;
                const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
                
                if (!isNaN(numericValue)) {
                    this.animateCounter(stat, numericValue, finalValue.replace(/[0-9.]/g, ''));
                }
            }, index * 200);
        });
    }

    animateCounter(element, finalValue, suffix) {
        let currentValue = 0;
        const increment = finalValue / 50;
        
        const animation = setInterval(() => {
            currentValue += increment;
            if (currentValue >= finalValue) {
                currentValue = finalValue;
                clearInterval(animation);
            }
            element.textContent = Math.floor(currentValue) + suffix;
        }, 30);
    }

    // Tech proficiency animation removed for cleaner look

    animateNode(node) {
        node.style.animation = 'pulse 0.6s ease';
        setTimeout(() => {
            node.style.animation = '';
        }, 600);
    }

    showTechTooltip(element) {
        const tooltip = element.dataset.tooltip;
        if (tooltip) {
            // Tooltip logic here
            console.log('Tech tooltip:', tooltip);
        }
    }

    hideTechTooltip() {
        // Hide tooltip logic
    }

    showSystemTooltip(element) {
        const tooltip = element.dataset.tooltip;
        if (tooltip) {
            // System tooltip logic here
            console.log('System tooltip:', tooltip);
        }
    }

    hideSystemTooltip() {
        // Hide system tooltip logic
    }

    // Clean up when component is unmounted
    cleanup() {
        // Remove event listeners and clean up
    }
}

// Export default instance
export default new HomeComponent();