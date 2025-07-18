// Environment Configuration
class Config {
    constructor() {
        this.emailJS = {
            publicKey: this.getEnvVar('EMAILJS_PUBLIC_KEY'),
            serviceId: this.getEnvVar('EMAILJS_SERVICE_ID'),
            templateId: this.getEnvVar('EMAILJS_TEMPLATE_ID')
        };
    }

    getEnvVar(name) {
        // For production, these should be set during build time
        // For development, you can set them here temporarily
        const envVars = {
            'EMAILJS_PUBLIC_KEY': 'IIhi6yDnWg7VZ-5tY',
            'EMAILJS_SERVICE_ID': 'service_stils01',
            'EMAILJS_TEMPLATE_ID': 'template_6121fak'
        };

        // Use fallback values since this is a frontend application
        return envVars[name];
    }

    // Validate that all required environment variables are set
    validate() {
        const missing = [];
        
        if (!this.emailJS.publicKey) missing.push('EMAILJS_PUBLIC_KEY');
        if (!this.emailJS.serviceId) missing.push('EMAILJS_SERVICE_ID');  
        if (!this.emailJS.templateId) missing.push('EMAILJS_TEMPLATE_ID');

        if (missing.length > 0) {
            throw new Error(`Missing required environment variables: ${missing.join(', ')}`);
        }

        return true;
    }
}

export default new Config();