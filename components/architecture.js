// Architecture Component - Professional System Design Showcase
// Focus: Real-world architectures, monolith to microservices, event-driven systems

export class ArchitectureComponent {
    constructor() {
        this.name = 'architecture';
        this.title = 'System Architecture';
        this.animations = ['slideInLeft', 'fadeInUp'];
    }

    getContent() {
        return `
            <section class="architecture" data-animate>
                <div class="container">
                    <h2 class="section-title">System Architecture</h2>
                    <p class="section-intro">
                        Real-world system designs I've architected and implemented. From monolithic Django applications 
                        to event-driven microservices, focusing on scalability, reliability, and maintainability.
                    </p>
                    
                    <!-- Migration Case Study -->
                    <div class="architecture-case-study">
                        <h3>Case Study: Django Monolith to Microservices Migration</h3>
                        <div class="case-study-content">
                            <div class="architecture-overview">
                                <div class="before-after-comparison">
                                    <div class="monolith-section">
                                        <h4>Before: Django Monolith</h4>
                                        <div class="monolith-diagram">
                                            <div class="monolith-container">
                                                <div class="monolith-header">
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" alt="Django" class="tech-icon-small">
                                                    <span>Django Application</span>
                                                </div>
                                                <div class="monolith-services">
                                                    <div class="service-module alerts">
                                                        <i class="fas fa-bell"></i>
                                                        <span>Alert System</span>
                                                    </div>
                                                    <div class="service-module events">
                                                        <i class="fas fa-calendar-alt"></i>
                                                        <span>Event Processing</span>
                                                    </div>
                                                    <div class="service-module auth">
                                                        <i class="fas fa-lock"></i>
                                                        <span>Authentication</span>
                                                    </div>
                                                    <div class="service-module analytics">
                                                        <i class="fas fa-chart-line"></i>
                                                        <span>Analytics</span>
                                                    </div>
                                                    <div class="service-module notifications">
                                                        <i class="fas fa-envelope"></i>
                                                        <span>Notifications</span>
                                                    </div>
                                                </div>
                                                <div class="monolith-database">
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="tech-icon-small">
                                                    <span>Single PostgreSQL Database</span>
                                                </div>
                                            </div>
                                            <div class="architecture-problems">
                                                <h5>Challenges:</h5>
                                                <ul>
                                                    <li><i class="fas fa-exclamation-triangle"></i> Single point of failure</li>
                                                    <li><i class="fas fa-exclamation-triangle"></i> Difficult to scale alert processing</li>
                                                    <li><i class="fas fa-exclamation-triangle"></i> Tight coupling between modules</li>
                                                    <li><i class="fas fa-exclamation-triangle"></i> Deployment bottlenecks</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="migration-arrow">
                                        <i class="fas fa-arrow-right"></i>
                                        <span>Migration</span>
                                    </div>
                                    
                                    <div class="microservices-section">
                                        <h4>After: Event-Driven Microservices</h4>
                                        <div class="microservices-diagram">
                                            <div class="api-gateway-layer">
                                                <div class="api-gateway">
                                                    <i class="fas fa-shield-alt"></i>
                                                    <span>API Gateway + Auth0</span>
                                                </div>
                                            </div>
                                            
                                            <div class="services-layer">
                                                <div class="microservice alert-service">
                                                    <div class="service-header">
                                                        <i class="fas fa-bell"></i>
                                                        <span>Alert Service</span>
                                                    </div>
                                                    <div class="service-tech">
                                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg" alt="FastAPI" class="tech-icon-micro">
                                                        <span>FastAPI</span>
                                                    </div>
                                                </div>
                                                
                                                <div class="microservice event-service">
                                                    <div class="service-header">
                                                        <i class="fas fa-calendar-check"></i>
                                                        <span>Event Service</span>
                                                    </div>
                                                    <div class="service-tech">
                                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" alt="Go" class="tech-icon-micro">
                                                        <span>Go</span>
                                                    </div>
                                                </div>
                                                
                                                <div class="microservice notification-service">
                                                    <div class="service-header">
                                                        <i class="fas fa-paper-plane"></i>
                                                        <span>Notification Service</span>
                                                    </div>
                                                    <div class="service-tech">
                                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="tech-icon-micro">
                                                        <span>Python</span>
                                                    </div>
                                                </div>
                                                
                                                <div class="microservice analytics-service">
                                                    <div class="service-header">
                                                        <i class="fas fa-chart-bar"></i>
                                                        <span>Analytics Service</span>
                                                    </div>
                                                    <div class="service-tech">
                                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" class="tech-icon-micro">
                                                        <span>PySpark</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="messaging-layer">
                                                <div class="message-broker">
                                                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Kafka" class="tech-icon-small">
                                                    <span>Apache Kafka</span>
                                                    <div class="topics">
                                                        <span class="topic">alerts.created</span>
                                                        <span class="topic">events.processed</span>
                                                        <span class="topic">notifications.sent</span>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="data-layer">
                                                <div class="database-cluster">
                                                    <div class="db-service">
                                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" alt="PostgreSQL" class="tech-icon-small">
                                                        <span>Alerts DB</span>
                                                    </div>
                                                    <div class="db-service">
                                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" class="tech-icon-small">
                                                        <span>Events DB</span>
                                                    </div>
                                                    <div class="db-service">
                                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" alt="Redis" class="tech-icon-small">
                                                        <span>Cache</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="architecture-benefits">
                                            <h5>Results:</h5>
                                            <ul>
                                                <li><i class="fas fa-check-circle"></i> 20% improved uptime</li>
                                                <li><i class="fas fa-check-circle"></i> 3x traffic capacity</li>
                                                <li><i class="fas fa-check-circle"></i> Independent deployments</li>
                                                <li><i class="fas fa-check-circle"></i> Horizontal scaling</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Event-Driven Architecture -->
                    <div class="architecture-pattern">
                        <h3>Event-Driven Architecture Pattern</h3>
                        <div class="pattern-content">
                            <div class="event-flow-diagram">
                                <div class="event-source">
                                    <div class="event-producer">
                                        <i class="fas fa-bell"></i>
                                        <span>Alert Created</span>
                                    </div>
                                    <div class="event-arrow">→</div>
                                    <div class="event-topic">
                                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg" alt="Kafka" class="tech-icon-small">
                                        <span>alerts.created</span>
                                    </div>
                                </div>
                                
                                <div class="event-consumers">
                                    <div class="consumer">
                                        <i class="fas fa-envelope"></i>
                                        <span>Email Service</span>
                                    </div>
                                    <div class="consumer">
                                        <i class="fas fa-mobile-alt"></i>
                                        <span>SMS Service</span>
                                    </div>
                                    <div class="consumer">
                                        <i class="fas fa-chart-line"></i>
                                        <span>Analytics Service</span>
                                    </div>
                                    <div class="consumer">
                                        <i class="fas fa-database"></i>
                                        <span>Audit Service</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="event-benefits">
                                <h4>Event-Driven Benefits:</h4>
                                <div class="benefits-grid">
                                    <div class="benefit-item">
                                        <i class="fas fa-unlink"></i>
                                        <h5>Loose Coupling</h5>
                                        <p>Services communicate through events, not direct calls</p>
                                    </div>
                                    <div class="benefit-item">
                                        <i class="fas fa-expand-arrows-alt"></i>
                                        <h5>Scalability</h5>
                                        <p>Each service scales independently based on demand</p>
                                    </div>
                                    <div class="benefit-item">
                                        <i class="fas fa-shield-alt"></i>
                                        <h5>Resilience</h5>
                                        <p>System continues working even if some services fail</p>
                                    </div>
                                    <div class="benefit-item">
                                        <i class="fas fa-clock"></i>
                                        <h5>Real-time Processing</h5>
                                        <p>Events processed as they happen, not in batches</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Security Architecture -->
                    <div class="architecture-pattern">
                        <h3>Security Architecture with Auth0</h3>
                        <div class="pattern-content">
                            <div class="security-diagram">
                                <div class="client-layer">
                                    <div class="client-app">
                                        <i class="fas fa-desktop"></i>
                                        <span>Client Application</span>
                                    </div>
                                </div>
                                
                                <div class="security-flow">
                                    <div class="auth-flow-step">
                                        <span class="step-number">1</span>
                                        <span>Authentication Request</span>
                                    </div>
                                    <div class="auth-provider">
                                        <i class="fas fa-shield-alt"></i>
                                        <span>Auth0</span>
                                        <div class="auth-features">
                                            <span>JWT Tokens</span>
                                            <span>OAuth 2.0</span>
                                            <span>Multi-factor Auth</span>
                                        </div>
                                    </div>
                                    <div class="auth-flow-step">
                                        <span class="step-number">2</span>
                                        <span>JWT Token</span>
                                    </div>
                                </div>
                                
                                <div class="protected-services">
                                    <div class="service-with-auth">
                                        <div class="auth-middleware">
                                            <i class="fas fa-key"></i>
                                            <span>JWT Validation</span>
                                        </div>
                                        <div class="protected-service">
                                            <i class="fas fa-bell"></i>
                                            <span>Alert Service</span>
                                        </div>
                                    </div>
                                    <div class="service-with-auth">
                                        <div class="auth-middleware">
                                            <i class="fas fa-key"></i>
                                            <span>JWT Validation</span>
                                        </div>
                                        <div class="protected-service">
                                            <i class="fas fa-calendar-check"></i>
                                            <span>Event Service</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Architecture Summary -->
                    <div class="architecture-summary">
                        <h3>Architecture Decision Summary</h3>
                        <div class="decision-grid">
                            <div class="decision-item">
                                <div class="decision-icon">
                                    <i class="fas fa-cube"></i>
                                </div>
                                <div class="decision-content">
                                    <h4>Microservices Pattern</h4>
                                    <p>Decomposed monolith into domain-specific services (alerts, events, notifications, analytics) enabling independent scaling and deployment.</p>
                                </div>
                            </div>
                            
                            <div class="decision-item">
                                <div class="decision-icon">
                                    <i class="fas fa-stream"></i>
                                </div>
                                <div class="decision-content">
                                    <h4>Event-Driven Communication</h4>
                                    <p>Implemented asynchronous messaging with Kafka to decouple services and enable real-time event processing across the system.</p>
                                </div>
                            </div>
                            
                            <div class="decision-item">
                                <div class="decision-icon">
                                    <i class="fas fa-shield-alt"></i>
                                </div>
                                <div class="decision-content">
                                    <h4>Centralized Authentication</h4>
                                    <p>Integrated Auth0 for secure JWT-based authentication with OAuth 2.0 and multi-factor authentication support.</p>
                                </div>
                            </div>
                            
                            <div class="decision-item">
                                <div class="decision-icon">
                                    <i class="fas fa-database"></i>
                                </div>
                                <div class="decision-content">
                                    <h4>Database Per Service</h4>
                                    <p>Each service manages its own data store (PostgreSQL, MongoDB, Redis) ensuring data isolation and technology optimization.</p>
                                </div>
                            </div>
                            
                            <div class="decision-item">
                                <div class="decision-icon">
                                    <i class="fas fa-cloud"></i>
                                </div>
                                <div class="decision-content">
                                    <h4>Cloud-Native Deployment</h4>
                                    <p>Containerized with Docker and orchestrated with Kubernetes on Azure for high availability and automatic scaling.</p>
                                </div>
                            </div>
                            
                            <div class="decision-item">
                                <div class="decision-icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <div class="decision-content">
                                    <h4>Performance Monitoring</h4>
                                    <p>Comprehensive observability with distributed tracing, metrics collection, and real-time alerting for system health.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    initialize() {
        this.setupInteractiveDiagrams();
        this.animateArchitectureFlow();
    }

    setupInteractiveDiagrams() {
        // Add hover effects to microservices
        const microservices = document.querySelectorAll('.microservice');
        microservices.forEach(service => {
            service.addEventListener('mouseenter', () => {
                service.style.transform = 'translateY(-5px)';
                service.style.boxShadow = '0 10px 30px rgba(16, 185, 129, 0.2)';
            });
            
            service.addEventListener('mouseleave', () => {
                service.style.transform = 'translateY(0)';
                service.style.boxShadow = 'none';
            });
        });

        // Add click events to event consumers
        const consumers = document.querySelectorAll('.consumer');
        consumers.forEach(consumer => {
            consumer.addEventListener('click', () => {
                consumer.classList.add('active');
                setTimeout(() => {
                    consumer.classList.remove('active');
                }, 1000);
            });
        });
    }

    animateArchitectureFlow() {
        // Animate the migration arrow
        const arrow = document.querySelector('.migration-arrow');
        if (arrow) {
            setInterval(() => {
                arrow.style.transform = 'translateX(10px)';
                setTimeout(() => {
                    arrow.style.transform = 'translateX(0)';
                }, 500);
            }, 3000);
        }

        // Animate event flow
        const eventArrows = document.querySelectorAll('.event-arrow');
        eventArrows.forEach((arrow, index) => {
            setInterval(() => {
                arrow.style.color = '#10b981';
                setTimeout(() => {
                    arrow.style.color = '#64748b';
                }, 500);
            }, 2000 + (index * 200));
        });
    }

    cleanup() {
        // Clean up event listeners
    }
}

export default new ArchitectureComponent();