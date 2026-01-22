import { Cloud, Code2, ShieldCheck, Database, Headphones, BarChart3 } from "lucide-react";

export const services = [
    {
        slug: "cloud-engineering",
        icon: Cloud,
        title: "Cloud Engineering",
        description: "Scalable cloud architecture design, migration, and optimization on AWS, Azure, and Google Cloud.",
        details: `
      <p>Our Cloud Engineering services provide end-to-end solutions for businesses looking to leverage the power of the cloud. From initial strategy and migration to ongoing optimization and management, we ensure your cloud infrastructure is secure, scalable, and cost-effective.</p>
      
      <h3 class="text-xl font-bold mt-6 mb-3">Key Offerings</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Cloud Migration:</strong> Seamlessly move your applications and data to the cloud with minimal downtime.</li>
        <li><strong>Architecture Design:</strong> Build robust, scalable, and high-availability cloud architectures tailored to your needs.</li>
        <li><strong>Cost Optimization:</strong> Analyze and reduce your cloud spend without compromising performance.</li>
        <li><strong>Multi-Cloud Strategy:</strong> Leverage the best features of AWS, Azure, and Google Cloud for a resilient infrastructure.</li>
      </ul>
    `
    },
    {
        slug: "software-development",
        icon: Code2,
        title: "Software Development",
        description: "Custom web and mobile application development using modern stacks like React, Node.js, and Python.",
        details: `
      <p>We build high-performance, scalable, and user-friendly software solutions that drive business growth. Our team of expert developers uses the latest technologies to deliver custom web and mobile applications that meet your specific requirements.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Our Expertise</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Web Development:</strong> Modern, responsive web applications using React, Next.js, and Vue.</li>
        <li><strong>Mobile App Development:</strong> Native and cross-platform mobile apps for iOS and Android.</li>
        <li><strong>API Development:</strong> Robust and secure RESTful and GraphQL APIs.</li>
        <li><strong>Custom Software:</strong> Tailored solutions to automate workflows and solve complex business problems.</li>
      </ul>
    `
    },
    {
        slug: "cybersecurity",
        icon: ShieldCheck,
        title: "Cybersecurity",
        description: "Comprehensive security audits, penetration testing, and compliance management (SOC2, HIPAA).",
        details: `
      <p>Protect your business from evolving cyber threats with our comprehensive cybersecurity services. We provide security assessments, real-time monitoring, and compliance management to ensure your data remains secure and your operations compliant.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Security Services</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Penetration Testing:</strong> Identify and fix vulnerabilities before attackers can exploit them.</li>
        <li><strong>Security Audits:</strong> Comprehensive reviews of your security posture and policies.</li>
        <li><strong>Compliance Management:</strong> Assistance with SOC2, HIPAA, GDPR, and ISO standards.</li>
        <li><strong>Incident Response:</strong> Rapid response planning and execution for security breaches.</li>
      </ul>
    `
    },
    {
        slug: "managed-it-services",
        icon: Database,
        title: "Managed IT Services",
        description: "Proactive infrastructure monitoring, database management, and remote troubleshooting.",
        details: `
      <p>Focus on your core business while we handle your IT infrastructure. Our Managed IT Services provide 24/7 monitoring, maintenance, and support to ensure your systems are always up and running smoothly.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">What We Manage</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Network Infrastructure:</strong> Monitoring and management of routers, switches, and firewalls.</li>
        <li><strong>Database Management:</strong> Performance tuning, backups, and security for your databases.</li>
        <li><strong>Server Maintenance:</strong> Patch management, updates, and health checks.</li>
        <li><strong>Help Desk Support:</strong> Remote troubleshooting and technical assistance for your team.</li>
      </ul>
    `
    },
    {
        slug: "devops-support",
        icon: Headphones,
        title: "DevOps & Support",
        description: "CI/CD pipeline automation, containerization with Docker/Kubernetes, and 24/7 technical support.",
        details: `
      <p>Accelerate your development cycle and improve release reliability with our DevOps services. We implement automation, containerization, and continuous integration/continuous deployment (CI/CD) pipelines to streamline your software delivery.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">DevOps Solutions</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>CI/CD Automation:</strong> Automated build, test, and deployment pipelines.</li>
        <li><strong>Containerization:</strong> Docker and Kubernetes implementation for scalable deployments.</li>
        <li><strong>Infrastructure as Code (IaC):</strong> Managing infrastructure using Terraform or CloudFormation.</li>
        <li><strong>Monitoring & Logging:</strong> Setting up Prometheus, Grafana, and ELK stack for observability.</li>
      </ul>
    `
    },
    {
        slug: "business-process",
        icon: BarChart3,
        title: "Business Process",
        description: "Digital transformation consulting and automation strategies to streamline operations.",
        details: `
      <p>Transform your business operations with our digital consulting and process automation services. We help you identify inefficiencies and implement technology solutions to streamline workflows and increase productivity.</p>

      <h3 class="text-xl font-bold mt-6 mb-3">Consulting Areas</h3>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>Digital Transformation:</strong> Roadmap creation for modernizing legacy systems.</li>
        <li><strong>Process Automation:</strong> implementing RPA and workflow automation tools.</li>
        <li><strong>Data Analytics:</strong> Deriving actionable insights from your business data.</li>
        <li><strong>IT Strategy:</strong> Aligning technology investments with business goals.</li>
      </ul>
    `
    },
];
