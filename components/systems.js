// Systems Component - Showcasing Built Systems
// Focus: Real systems built with impact metrics

export class SystemsComponent {
    constructor() {
        this.name = 'systems';
        this.title = 'Systems Built';
        this.animations = ['slideInRight', 'fadeInUp'];
    }

    getContent() {
        return `
            <section class="systems" data-animate>
                <div class="container">
                    <h2 class="section-title">Systems I've Built</h2>
                    
                    <div class="system-showcase">
                        <div class="system-card active" data-system="pipeline">
                            <div class="system-header">
                                <h3><i class="fas fa-stream"></i> Real-time Data Pipeline</h3>
                                <span class="tech-stack">PySpark + Kafka + PostgreSQL</span>
                            </div>
                            <div class="system-content">
                                <div class="pipeline-demo">
                                    <div class="data-flow">
                                        <div class="flow-step">
                                            <div class="step-icon"><i class="fas fa-upload"></i></div>
                                            <span>Data Ingestion</span>
                                        </div>
                                        <div class="flow-arrow"></div>
                                        <div class="flow-step">
                                            <div class="step-icon"><i class="fas fa-cogs"></i></div>
                                            <span>Processing</span>
                                        </div>
                                        <div class="flow-arrow"></div>
                                        <div class="flow-step">
                                            <div class="step-icon"><i class="fas fa-database"></i></div>
                                            <span>Storage</span>
                                        </div>
                                        <div class="flow-arrow"></div>
                                        <div class="flow-step">
                                            <div class="step-icon"><i class="fas fa-chart-line"></i></div>
                                            <span>Analytics</span>
                                        </div>
                                    </div>
                                    <div class="metrics-display">
                                        <div class="metric-item">
                                            <span class="metric-value">15%</span>
                                            <span class="metric-label">Latency Reduction</span>
                                        </div>
                                        <div class="metric-item">
                                            <span class="metric-value">99.9%</span>
                                            <span class="metric-label">Uptime</span>
                                        </div>
                                        <div class="metric-item">
                                            <span class="metric-value">1M+</span>
                                            <span class="metric-label">Events/Day</span>
                                        </div>
                                    </div>
                                </div>
                                <p>Built a fault-tolerant pipeline that processes millions of events daily with automatic failover and data consistency guarantees.</p>
                            </div>
                        </div>

                        <div class="system-card" data-system="api">
                            <div class="system-header">
                                <h3><i class="fas fa-plug"></i> FastAPI Microservices</h3>
                                <span class="tech-stack">Python + FastAPI + Docker + Kubernetes</span>
                            </div>
                            <div class="system-content">
                                <div class="api-demo">
                                    <div class="api-endpoint">
                                        <div class="endpoint-header">
                                            <span class="method post">POST</span>
                                            <span class="url">/api/v1/predictions</span>
                                        </div>
                                        <div class="endpoint-body">
                                            <pre><code>{
  "model_id": "ai_model_v2",
  "input_data": {...},
  "options": {
    "async": true,
    "webhook_url": "..."
  }
}</code></pre>
                                        </div>
                                    </div>
                                    <div class="response-time">
                                        <div class="response-indicator">
                                            <span class="response-time-value">45ms</span>
                                            <span class="response-status">200 OK</span>
                                        </div>
                                    </div>
                                </div>
                                <p>Architected a Python-based microservice ecosystem that powers core AI products with sub-50ms response times.</p>
                            </div>
                        </div>

                        <div class="system-card" data-system="infrastructure">
                            <div class="system-header">
                                <h3><i class="fas fa-server"></i> Infrastructure Automation</h3>
                                <span class="tech-stack">Azure + Docker + Kubernetes + Terraform</span>
                            </div>
                            <div class="system-content">
                                <div class="infrastructure-demo">
                                    <div class="deployment-pipeline">
                                        <div class="pipeline-stage">
                                            <div class="stage-icon"><i class="fab fa-git-alt"></i></div>
                                            <span>Git Push</span>
                                        </div>
                                        <div class="pipeline-arrow"></div>
                                        <div class="pipeline-stage">
                                            <div class="stage-icon"><i class="fas fa-vial"></i></div>
                                            <span>Tests</span>
                                        </div>
                                        <div class="pipeline-arrow"></div>
                                        <div class="pipeline-stage">
                                            <div class="stage-icon"><i class="fab fa-docker"></i></div>
                                            <span>Build</span>
                                        </div>
                                        <div class="pipeline-arrow"></div>
                                        <div class="pipeline-stage">
                                            <div class="stage-icon"><i class="fas fa-rocket"></i></div>
                                            <span>Deploy</span>
                                        </div>
                                    </div>
                                    <div class="automation-stats">
                                        <div class="stat">
                                            <span class="stat-number">60%</span>
                                            <span class="stat-label">Less Manual Work</span>
                                        </div>
                                        <div class="stat">
                                            <span class="stat-number">5min</span>
                                            <span class="stat-label">Deploy Time</span>
                                        </div>
                                    </div>
                                </div>
                                <p>Automated server management and deployment processes, reducing manual intervention by 60% through infrastructure-as-code practices.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        `;
    }

    initialize() {
        this.setupSystemCardInteractions();
        this.autoSelectFirstCard();
    }

    setupSystemCardInteractions() {
        const systemCards = document.querySelectorAll('.system-card');
        systemCards.forEach(card => {
            card.addEventListener('click', () => {
                this.selectSystemCard(card);
            });
        });
    }

    autoSelectFirstCard() {
        setTimeout(() => {
            const firstCard = document.querySelector('.system-card');
            if (firstCard) this.selectSystemCard(firstCard);
        }, 500);
    }

    selectSystemCard(card) {
        // Remove active from all cards
        document.querySelectorAll('.system-card').forEach(c => {
            c.classList.remove('active');
        });
        
        // Add active to selected card
        card.classList.add('active');
        
        // Animate metrics
        const metrics = card.querySelectorAll('.metric-value, .stat-number');
        metrics.forEach(metric => {
            this.animateCounter(metric);
        });
    }

    animateCounter(element) {
        const finalValue = element.textContent;
        const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ''));
        
        if (!isNaN(numericValue)) {
            let currentValue = 0;
            const increment = numericValue / 30;
            const suffix = finalValue.replace(/[0-9.]/g, '');
            
            const animation = setInterval(() => {
                currentValue += increment;
                if (currentValue >= numericValue) {
                    currentValue = numericValue;
                    clearInterval(animation);
                }
                element.textContent = Math.floor(currentValue) + suffix;
            }, 50);
        }
    }

    cleanup() {
        // Remove event listeners
    }
}

export default new SystemsComponent();