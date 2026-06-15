// src/components/ServicesAll/ServicesData.js

export const overviewCards = [
  {
    icon: "FaBolt",
    title: "Digital Acceleration",
    desc: "Enable business agility with cloud migration services, AI automation for business, and data-driven insights.",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: "FaBuilding",
    title: "Enterprise Transformation",
    desc: "Modernize operations with IoT solutions, SAP implementation, DevOps services, and scalable application development.",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: "FaUsers",
    title: "Workforce Management",
    desc: "Build high-performing teams through IT staff augmentation, lateral hiring, and deployment services.",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    icon: "FaShareAlt",
    title: "Shared Services",
    desc: "Optimize IT operations with managed IT services, infrastructure support, and compliance & governance solutions.",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    image: "https://images.pexels.com/photos/3184451/pexels-photo-3184451.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const detailedServices = [
  {
    id: "digital-acceleration",
    title: "Digital Acceleration",
    icon: "FaBolt",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    subText: [
      `Zeta-V's Digital Acceleration Services enable organizations to modernize their operations and stay competitive in a rapidly evolving digital landscape. We combine digital transformation consulting, enterprise cloud migration, generative AI consulting, and data analytics to help businesses unlock new growth opportunities and improve decision-making.`,
      `We work closely with enterprises to design scalable, secure, and future-ready digital ecosystems. From migrating legacy systems to the cloud to implementing intelligent automation and advanced analytics, our solutions are tailored to meet unique business needs.`,
      `By aligning technology with business goals, we help organizations enhance customer experiences, reduce operational costs, and accelerate innovation. Zeta-V empowers businesses to move beyond traditional models and embrace a fully digital, data-driven future.`,
    ],
    offerings: [
      "Cloud Migration Services for scalable and secure infrastructure",
      "Generative AI Consulting & Machine Learning Solutions",
      "AI Automation for Business Processes",
      "Data Analytics Consulting Firm Expertise",
      "Cybersecurity Consulting Services",
    ],
    impact: [
      "Faster decision-making with real-time insights",
      "Reduced operational costs through automation",
      "Enhanced customer experiences",
    ],
    challenges: [
      {
        title: "Legacy System Modernization",
        desc: "Outdated infrastructure limiting business agility and innovation capabilities.",
      },
      {
        title: "Data Fragmentation",
        desc: "Siloed data sources preventing unified analytics and insights.",
      },
    ],
    demoImage: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "enterprise-transformation",
    title: "Enterprise Transformation",
    icon: "FaBuilding",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    subText: [
      `Zeta-V's Enterprise Transformation Services are designed to help organizations modernize their core systems and achieve operational excellence through advanced technologies. We provide end-to-end solutions including IoT implementation, SAP integration, application development, and DevOps services.`,
      `With our SAP implementation services, we support organizations in streamlining their enterprise resource planning systems, ensuring seamless integration across departments. Our IoT solutions enable real-time monitoring and intelligent decision-making.`,
      `By combining innovation with deep industry expertise, Zeta-V helps organizations build resilient and future-ready enterprises. Our solutions empower businesses to optimize operations, improve productivity, and respond quickly to changing market demands.`,
    ],
    offerings: [
      "IoT (Internet of Things) Solutions for connected operations",
      "SAP Implementation Partner Services for enterprise systems",
      "Custom Application Development & Modernization",
      "DevOps Services for faster deployment and scalability",
    ],
    impact: [
      "Improved operational efficiency",
      "Seamless system integration",
      "Faster time-to-market",
    ],
    challenges: [
      {
        title: "Operational Silos",
        desc: "Disconnected systems leading to inefficient workflows and data duplication.",
      },
      {
        title: "Slow Time-to-Market",
        desc: "Lengthy development cycles preventing rapid response to market changes.",
      },
    ],
    demoImage: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "workforce-management",
    title: "Workforce Management",
    icon: "FaUsers",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    subText: [
      `Zeta-V's Workforce Management Services are designed to help organizations build, scale, and manage high-performing teams with ease. We provide flexible and efficient talent solutions, including IT staff augmentation, lateral hiring, and deployment services.`,
      `Our IT staff augmentation services allow organizations to quickly scale their teams with skilled professionals across various technologies, ensuring project continuity and faster execution. Through our lateral hiring solutions, we help businesses acquire experienced talent that align with their technical requirements.`,
      `We understand the challenges of talent acquisition in a competitive market, and our approach focuses on delivering reduced hiring costs, improved workforce efficiency, and enhance overall performance.`,
    ],
    offerings: [
      "IT Staff Augmentation for flexible team scaling",
      "Lateral Hiring Services for experienced professionals",
      "Deployment Services for rapid onboarding",
    ],
    impact: [
      "Reduced hiring time and costs",
      "Access to skilled IT professionals",
      "Increased productivity and project efficiency",
    ],
    challenges: [
      {
        title: "Talent Shortage",
        desc: "Difficulty finding qualified professionals with specialized skills.",
      },
      {
        title: "High Turnover Rates",
        desc: "Employee retention challenges impacting project continuity.",
      },
    ],
    demoImage: "https://images.pexels.com/photos/3184423/pexels-photo-3184423.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
  {
    id: "shared-services",
    title: "Shared Services",
    icon: "FaShareAlt",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    subText: [
      `Zeta-V's Shared Services are designed to simplify and optimize IT operations by providing centralized, reliable, and cost-effective support solutions. We offer comprehensive services including managed IT services, IT infrastructure support, and compliance & governance services.`,
      `Our managed IT services provide end-to-end management of IT environments, allowing businesses to focus on their core objectives while we handle infrastructure, maintenance, and support. With our IT infrastructure support services, we ensure high system availability and performance optimization.`,
      `We also help organizations maintain regulatory compliance through robust governance frameworks and security practices. Our compliance and governance services ensure that businesses meet industry standards while safeguarding sensitive data and systems.`,
    ],
    offerings: [
      "Managed IT Services for end-to-end IT operations",
      "IT Infrastructure Support Services",
      "Compliance & Governance Services for regulatory adherence",
    ],
    impact: [
      "Improved system reliability and uptime",
      "Stronger security and compliance posture",
      "Reduced IT operational complexity",
    ],
    challenges: [
      {
        title: "Operational Complexity",
        desc: "Managing diverse IT systems with limited internal resources.",
      },
      {
        title: "Compliance Risks",
        desc: "Keeping up with evolving regulatory requirements and security standards.",
      },
    ],
    demoImage: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1200",
  },
];

export const howWeWorkSteps = [
  {
    num: "01",
    icon: "FaLaptopCode",
    title: "Discovery",
    body: "We begin by understanding your business landscape, technology environment, and strategic objectives through deep-dive workshops and stakeholder interviews.",
  },
  {
    num: "02",
    icon: "HiOutlineLightBulb",
    title: "Design",
    body: "Our architects craft a tailored solution blueprint — covering technology stack, integration points, security posture, and a phased delivery roadmap.",
  },
  {
    num: "03",
    icon: "FaRocket",
    title: "Deploy",
    body: "We execute with agile precision — iterative sprints, continuous testing, and seamless deployment into your production environment.",
  },
  {
    num: "04",
    icon: "FaHeadset",
    title: "Support",
    body: "Post-launch, we provide ongoing monitoring, optimization, and managed support to ensure peak performance and continuous improvement.",
  },
];

export const caseStudies = [
  {
    title: "AI-Driven Digital Transformation for Enterprise Operations",
    industry: "Financial Services",
    challenge: "An enterprise faced inefficiencies due to manual processes and fragmented data systems, resulting in slow decision-making and high operational costs.",
    solutions: [
      "Cloud migration services to AWS cloud infrastructure",
      "Generative AI and machine learning models for predictive analytics",
      "Data analytics dashboards for real-time decision-making",
    ],
    results: [
      { metric: "60%", label: "improvement in operational efficiency" },
      { metric: "Real-time", label: "insights for faster decision-making" },
      { metric: "Automated", label: "reduced manual workload through automation" },
    ],
    image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Industrial IoT Implementation for Smart Manufacturing",
    industry: "Manufacturing",
    challenge: "A manufacturing company struggled with lack of real-time visibility into operations, leading to unplanned downtime and production inefficiencies.",
    solutions: [
      "Real-time monitoring of connected devices across production lines",
      "Integration with analytics platforms for predictive insights",
      "Predictive maintenance using AI models to prevent failures",
    ],
    results: [
      { metric: "40%", label: "reduction in equipment downtime" },
      { metric: "25%", label: "improvement in production efficiency" },
      { metric: "Real-time", label: "operational insights across facilities" },
    ],
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export const techStackCategories = [
  {
    category: "Frontend",
    icon: "🎨",
    technologies: [
      { name: "HTML5", icon: "🌐", color: "#E34F26" },
      { name: "CSS3", icon: "🎨", color: "#1572B6" },
      { name: "JavaScript", icon: "⚡", color: "#F7DF1E" },
      { name: "TypeScript", icon: "📘", color: "#3178C6" },
      { name: "React", icon: "⚛️", color: "#61DAFB" },
      { name: "Vue.js", icon: "💚", color: "#4FC08D" },
      { name: "Angular", icon: "🅰️", color: "#DD0031" },
      { name: "Tailwind CSS", icon: "🌊", color: "#06B6D4" },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    technologies: [
      { name: "Node.js", icon: "🟢", color: "#339933" },
      { name: "Python", icon: "🐍", color: "#3776AB" },
      { name: "Java", icon: "☕", color: "#007396" },
      { name: "Go", icon: "🐹", color: "#00ADD8" },
      { name: "PHP", icon: "🐘", color: "#777BB4" },
      { name: "Django", icon: "🎸", color: "#092E20" },
      { name: "Spring Boot", icon: "🌱", color: "#6DB33F" },
      { name: ".NET", icon: "🔷", color: "#512BD4" },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "☁️",
    technologies: [
      { name: "AWS", icon: "☁️", color: "#FF9900" },
      { name: "Azure", icon: "🔷", color: "#0089D6" },
      { name: "Google Cloud", icon: "☁️", color: "#4285F4" },
      { name: "Docker", icon: "🐳", color: "#2496ED" },
      { name: "Kubernetes", icon: "⚓", color: "#326CE5" },
      { name: "Terraform", icon: "🏗️", color: "#7B42BC" },
      { name: "Jenkins", icon: "👨‍🔧", color: "#D33833" },
      { name: "GitHub Actions", icon: "⚡", color: "#2088FF" },
    ],
  },
  {
    category: "Databases",
    icon: "🗄️",
    technologies: [
      { name: "MongoDB", icon: "🍃", color: "#47A248" },
      { name: "PostgreSQL", icon: "🐘", color: "#4169E1" },
      { name: "MySQL", icon: "🐬", color: "#4479A1" },
      { name: "Redis", icon: "🔴", color: "#DC382D" },
      { name: "Elasticsearch", icon: "🔍", color: "#005571" },
      { name: "Firebase", icon: "🔥", color: "#FFCA28" },
    ],
  },
];

export const stats = [
  { value: "500+", label: "Projects Delivered", icon: "FaStar" },
  { value: "200+", label: "Happy Clients", icon: "FaCrown" },
  { value: "98%", label: "Client Retention", icon: "FaGem" },
  { value: "24/7", label: "Support Available", icon: "FaClock" },
];

export const testimonials = [
  {
    text: "Zeta-V's digital transformation services have been instrumental in modernizing our operations. Their AI solutions delivered measurable ROI within months.",
    author: "Sarah Johnson",
    role: "CTO, GlobalTech Industries",
    rating: 5,
  },
  {
    text: "The team at Zeta-V provided exceptional cloud migration services. Our infrastructure is now more scalable, secure, and cost-effective.",
    author: "Michael Chen",
    role: "Director of IT, FinCorp",
    rating: 5,
  },
  {
    text: "Working with Zeta-V on our IoT implementation was seamless. Their expertise and support have been outstanding throughout the journey.",
    author: "Emily Rodriguez",
    role: "VP of Operations, ManuSmart",
    rating: 5,
  },
];

export const faqs = [
  {
    question: "What industries does Zeta-V specialize in?",
    answer: "Zeta-V serves a wide range of industries including finance, healthcare, manufacturing, retail, government, and technology. Our deep domain expertise allows us to deliver tailored solutions that address industry-specific challenges and compliance requirements.",
  },
  {
    question: "How long does a typical digital transformation project take?",
    answer: "Project timelines vary based on scope and complexity. Our agile methodology enables rapid delivery, with initial results often visible within 8-12 weeks. We work with clients to establish realistic milestones and deliver incremental value throughout the engagement.",
  },
  {
    question: "Does Zeta-V offer ongoing support after deployment?",
    answer: "Yes, we provide comprehensive post-deployment support including managed IT services, 24/7 monitoring, regular maintenance, and continuous optimization. Our support models are flexible and can be tailored to your specific needs.",
  },
  {
    question: "How does Zeta-V ensure data security and compliance?",
    answer: "We implement enterprise-grade security measures including encryption, access controls, regular audits, and compliance frameworks aligned with industry standards like GDPR, HIPAA, SOC 2, and ISO 27001. Security is embedded throughout our development lifecycle.",
  },
];