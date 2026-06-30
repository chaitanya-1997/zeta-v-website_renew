// // ChatBox.jsx
// import { useState, useRef, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import {
//   HiOutlineChatBubbleLeftRight,
//   HiOutlineXMark,
//   HiOutlinePaperAirplane,
//   HiOutlineUser,
//   HiOutlineCheckCircle,
//   HiOutlineClock,
//   HiOutlineGlobeAlt,
//   HiOutlineQuestionMarkCircle,
//   HiOutlineLightBulb,
//   HiOutlineBuildingOffice,
//   HiOutlineSparkles,
//   HiOutlineCog,
//   HiOutlineShieldCheck,
//   HiOutlineBriefcase,
//   HiOutlineHome,
//   HiOutlineTruck,
//   HiOutlineShoppingBag,
//   HiOutlineWrenchScrewdriver,
// } from 'react-icons/hi2'
// import './ChatBox.css'

// // ─── QUICK QUESTIONS (6 shown initially) ───
// const quickQuestions = [
//   { id: 1, text: 'What services does Zeta-V offer?', icon: HiOutlineGlobeAlt, color: '#22a7f0' },
//   { id: 2, text: 'How much do your services cost?', icon: HiOutlineQuestionMarkCircle, color: '#6366f1' },
//   { id: 3, text: 'Do you work with small businesses?', icon: HiOutlineUser, color: '#34d399' },
//   { id: 4, text: 'What industries do you specialize in?', icon: HiOutlineLightBulb, color: '#f59e0b' },
//   { id: 5, text: 'How do I get started?', icon: HiOutlineCheckCircle, color: '#22c55e' },
//   { id: 6, text: 'Where is Zeta-V located?', icon: HiOutlineBuildingOffice, color: '#ec4899' },
// ]

// // ─── COMPLETE RESPONSES DATABASE ───
// const botResponses = {
//   // ════════════════════════════════════════
//   // 1️⃣ GREETINGS & GENERAL
//   // ════════════════════════════════════════
//   'hi': 'Hello! 👋 Welcome to Zeta-V Technology Solutions. I\'m here to help you with information about our services, industries, careers, and more. How can I assist you today?',
//   'hello': 'Hello! 👋 Welcome to Zeta-V Technology Solutions. I\'m here to help you with information about our services, industries, careers, and more. How can I assist you today?',
//   'hey': 'Hello! 👋 Welcome to Zeta-V Technology Solutions. I\'m here to help you with information about our services, industries, careers, and more. How can I assist you today?',
//   'good morning': 'Good morning! ☀️ Welcome to Zeta-V Technology Solutions. How can I help you today?',
//   'good afternoon': 'Good afternoon! 🌤️ Welcome to Zeta-V Technology Solutions. How can I help you today?',
//   'how are you': 'I\'m doing great, thank you for asking! 😊 I\'m here to help you explore what Zeta-V has to offer. What would you like to know?',
//   'who are you': 'I\'m the Zeta-V virtual assistant 🤖. I can help you learn about our services, industries we serve, our team, office locations, career opportunities, and how to get in touch with us. Feel free to ask me anything!',
//   'what is this chatbot': 'I\'m the Zeta-V virtual assistant 🤖. I can help you learn about our services, industries we serve, our team, office locations, career opportunities, and how to get in touch with us. Feel free to ask me anything!',

//   // ════════════════════════════════════════
//   // 2️⃣ ABOUT THE COMPANY
//   // ════════════════════════════════════════
//   'what is zeta-v': 'Zeta-V Technology Solutions is an AI-driven automation and IT services company founded in 2017 in Hong Kong. We empower organizations to accelerate digital transformation and unlock measurable value through strategic consulting, intelligent technology ecosystems, and our proprietary zVMF (Zeta Value Multiplier Framework). Our mantra is — Simplify Solutions, Multiply Value.',
//   'tell me about zeta-v': 'Zeta-V Technology Solutions is an AI-driven automation and IT services company founded in 2017 in Hong Kong. We empower organizations to accelerate digital transformation and unlock measurable value through strategic consulting, intelligent technology ecosystems, and our proprietary zVMF (Zeta Value Multiplier Framework). Our mantra is — Simplify Solutions, Multiply Value.',
//   'what does zeta-v do': 'Zeta-V Technology Solutions is an AI-driven automation and IT services company founded in 2017 in Hong Kong. We empower organizations to accelerate digital transformation and unlock measurable value through strategic consulting, intelligent technology ecosystems, and our proprietary zVMF (Zeta Value Multiplier Framework). Our mantra is — Simplify Solutions, Multiply Value.',
//   'when was zeta-v founded': 'Zeta-V was founded in 2017 in Hong Kong, starting as a technology pioneer in Asia\'s financial hub. Since then, we have expanded across China, India, USA, Germany, and Europe. 🚀',
//   'what is zvmf': 'zVMF stands for Zeta Value Multiplier Framework — our proprietary framework that ensures every technology decision is aligned with measurable business outcomes. It helps organizations move faster from strategy to implementation with clear, tangible results. 📊',
//   'what is zeta-v vision': 'Our vision is to shape a future where businesses harness the power of AI, automation, and emerging technologies to unlock new possibilities, accelerate innovation, and create lasting value — making organizations more intelligent, agile, and resilient. 🌟',
//   'what is zeta-v mission': 'Our mission is to empower mid-market enterprises with scalable offshore IT services that seamlessly harmonize human ingenuity with artificial intelligence, delivering secure, high-velocity solutions that respect strict data residency and sovereign compliance. 🎯',
//   'what are zeta-v core values': 'Our five core values are — Innovation (Think Ahead, Deliver Now), Integrity (Say It. Mean It. Deliver It.), Adaptability (Change Is Our Constant), Inclusivity (Technology Without Borders), and Partnership (We Succeed When You Succeed). 💪',
//   'how many years experience': 'Zeta-V has 9+ years of experience, with 50+ team members, 100+ deployments, and expertise across 15+ technologies. 📈',
//   'how big is zeta-v': 'We have a team of 50+ professionals representing 18+ nationalities, with 52% women in the workforce and 73% diverse leadership across our global offices. 🌍',

//   // ════════════════════════════════════════
//   // 3️⃣ OFFICES & LOCATIONS
//   // ════════════════════════════════════════
//   'where is zeta-v located': 'Zeta-V has offices across multiple global locations — Hong Kong, Mumbai, Pune (India), Shanghai (China), Gurugram (India), and Orlando (USA). Our India office is located at Gera\'s Imperium Rise, Hinjewadi, Pune. 🌍',
//   'what are your office locations': 'Zeta-V has offices across multiple global locations — Hong Kong, Mumbai, Pune (India), Shanghai (China), Gurugram (India), and Orlando (USA). Our India office is located at Gera\'s Imperium Rise, Hinjewadi, Pune. 🌍',
//   'how can i contact zeta-v': 'You can reach us through:\n\n📧 Email: contactus@zeta-v.com\n📞 Phone: +91 206-901-5402\n🌐 Website: www.zeta-v.com\n📍 Office: Gera\'s Imperium Rise, Hinjewadi, Pune\n\nWe are available Monday to Friday.',
//   'do you have offices in india': 'Yes! 🇮🇳 We have offices in Mumbai, Pune (Gera\'s Imperium Rise, Hinjewadi), and Gurugram.',
//   'do you have offices in usa': 'Yes! 🇺🇸 We have an office in Orlando, USA.',
//   'do you have offices in china': 'Yes! 🇨🇳 We have an office in Shanghai, China.',
//   'do you have offices in hong kong': 'Yes! 🇭🇰 We have an office in Hong Kong, our headquarters.',

//   // ════════════════════════════════════════
//   // 4️⃣ SERVICES
//   // ════════════════════════════════════════
//   'what services does zeta-v offer': 'Zeta-V offers a wide range of IT and digital transformation services including:\n\n🚀 Digital Acceleration\n📊 Strategy Consulting\n🤖 Analytics & Automation\n🌐 Digital Footprint Management\n🏢 Enterprise Transformation\n⚙️ Engineering Solutions\n👥 Workforce Management (Staff Augmentation)\n📚 Shared Services (Bookkeeping, Compliance, Incorporation)\n☁️ Cloud Services\n🔒 Cybersecurity\n🧠 Generative AI Solutions\n🔄 Application Modernization\n🤖 RPA/Automation',
//   'what do you provide': 'Zeta-V offers a wide range of IT and digital transformation services including:\n\n🚀 Digital Acceleration\n📊 Strategy Consulting\n🤖 Analytics & Automation\n🌐 Digital Footprint Management\n🏢 Enterprise Transformation\n⚙️ Engineering Solutions\n👥 Workforce Management (Staff Augmentation)\n📚 Shared Services (Bookkeeping, Compliance, Incorporation)\n☁️ Cloud Services\n🔒 Cybersecurity\n🧠 Generative AI Solutions\n🔄 Application Modernization\n🤖 RPA/Automation',
//   'do you offer cloud services': 'Yes! ☁️ We provide end-to-end Cloud Services including Cloud Consulting, Infrastructure Migration, and Hybrid Cloud Architecture. We work with AWS, Microsoft Azure, and Google Cloud to help enterprises securely migrate and modernize their infrastructure.',
//   'do you offer ai solutions': 'Absolutely! 🧠 We offer advanced Generative AI Solutions including AI Copilots, Enterprise AI Assistants, and Predictive Analytics platforms. We help businesses integrate AI into their core operations to drive intelligent automation and enterprise innovation.',
//   'what is digital footprint management': 'Our Digital Footprint Management service covers your entire online presence under one roof — website maintenance, SEO, social media management, digital marketing, brand consistency, IT infrastructure, and compliance. It starts from $1,299 per month with 24/7 monitoring and support. 🌐',
//   'do you offer bookkeeping services': 'Yes! 📚 We offer Professional Bookkeeping Services starting from $999 per month. This includes transaction tracking, accounts payable and receivable management, bank reconciliation, payroll management, financial reporting, and more — at 60% lower cost than hiring an in-house bookkeeper.',
//   'do you provide staff augmentation': 'Yes! 👥 Through our IT Staff Augmentation model, we help organizations quickly access specialized technology talent in areas such as cloud, AI, cybersecurity, and software engineering.',
//   'what is your development process': 'Our development process follows five key stages — Discovery (understanding business goals), Planning (defining roadmap and architecture), Design (creating user experiences), Development (building scalable and secure solutions), and Deployment (launching with continuous support). 🔄',
//   'do you offer it consulting': 'Yes! 💼 We offer comprehensive IT Consulting services including digital strategy, technology roadmap, and transformation planning to help businesses navigate complex technology decisions.',
//   'do you offer cybersecurity': 'Yes! 🔒 We provide end-to-end Cybersecurity services including security assessments, compliance audits, threat monitoring, and incident response to protect your business.',
//   'do you offer rpa automation': 'Yes! 🤖 We offer Robotic Process Automation (RPA) services to automate repetitive tasks, improve efficiency, and reduce operational costs.',
//   'what is application modernization': 'Application Modernization is the process of updating legacy applications to modern architectures, improving performance, security, and scalability. We help businesses migrate to cloud-native solutions. 🔄',
//   'do you offer analytics automation': 'Yes! 📊 We provide Analytics & Automation services to help businesses make data-driven decisions through advanced analytics, business intelligence, and automated reporting.',
//   'what is digital acceleration': 'Digital Acceleration is our service to help businesses rapidly adopt digital technologies, optimize processes, and create new revenue streams through innovative solutions. 🚀',
//   'do you offer enterprise transformation': 'Yes! 🏢 We help organizations transform their enterprise operations through digital technologies, process optimization, and organizational change management.',
//   'what is engineering solutions': 'Our Engineering Solutions include custom software development, cloud-native applications, API development, and system integration services. ⚙️',
//   'do you offer shared services': 'Yes! 📚 We offer Shared Services including Bookkeeping, Compliance management, Incorporation services, and other back-office support to help businesses focus on core operations.',
//   'what is strategy consulting': 'Strategy Consulting helps businesses define their digital vision, identify opportunities, and create roadmaps for successful technology adoption and business growth. 📊',

//   // ════════════════════════════════════════
//   // 5️⃣ BOOKKEEPING SERVICES
//   // ════════════════════════════════════════
//   'what is bookkeeping services': 'Our Professional Bookkeeping Services include transaction tracking, accounts payable and receivable management, bank reconciliation, payroll management, financial reporting, and more — all at 60% lower cost than hiring an in-house bookkeeper. 📚',
//   'how much do bookkeeping services cost': 'Our Professional Bookkeeping Services start from $999 per month. The exact pricing depends on your transaction volume, number of accounts, and any add-on services you need. 💰',
//   'what is included in bookkeeping': 'Our bookkeeping services include:\n\n✅ Transaction tracking\n✅ Bank & credit card reconciliation\n✅ Accounts payable & receivable management\n✅ Payroll management\n✅ General ledger maintenance\n✅ Financial reporting (P&L, Balance Sheet, Cash Flow)\n✅ Expense categorization\n✅ Tax-ready financial statements',
//   'do you offer monthly bookkeeping': 'Yes! We offer monthly bookkeeping services where we update your books monthly. We also offer weekly and fortnightly options for businesses that need more frequent updates. 📆',
//   'do you offer weekly bookkeeping': 'Yes! We offer weekly bookkeeping services for businesses that require more frequent updates. This provides real-time visibility into your financial position. 📆',
//   'do you offer catch-up bookkeeping': 'Yes! We offer catch-up bookkeeping services to get your books current if they are behind. Pricing depends on how many months need to be caught up. 📋',
//   'do you offer payroll management': 'Yes! We offer Payroll Management as an add-on to our bookkeeping services, starting at $150 per month for 1-10 employees. 💰',

//   // ════════════════════════════════════════
//   // 6️⃣ DIGITAL FOOTPRINT
//   // ════════════════════════════════════════
//   'what is digital footprint': 'Our Digital Footprint Management service covers your entire online presence under one roof — website maintenance, SEO, social media management, digital marketing, brand consistency, IT infrastructure, and compliance. 🌐',
//   'how much does digital footprint cost': 'Our Digital Footprint Management starts from $1,299 per month with 24/7 monitoring and support. 💰',
//   'what is included in digital footprint': 'Digital Footprint includes:\n\n✅ Website maintenance & updates\n✅ SEO & online visibility\n✅ Social media management\n✅ Digital marketing campaigns\n✅ Brand consistency\n✅ Online reputation management\n✅ IT infrastructure monitoring\n✅ Compliance & data privacy',
//   'do you offer website management': 'Yes! We provide complete website management including content updates, hosting, performance optimization, security patches, and uptime monitoring. 🌐',
//   'do you offer seo services': 'Yes! We offer comprehensive SEO services including on-page optimization, technical SEO, Google Business Profile management, local listings, keyword tracking, and monthly ranking reports. 📈',
//   'do you offer social media management': 'Yes! We manage LinkedIn, Instagram, Facebook, and X with monthly content calendars, branded graphics, community management, and performance analytics. 📱',
//   'do you offer digital marketing': 'Yes! We offer digital marketing services including Google Ads, Meta Ads, email marketing, lead generation funnels, and performance reporting. 📣',
//   'do you offer brand consistency': 'Yes! We ensure consistent brand voice across every channel through brand guidelines, touchpoint audits, and template creation. 🎨',
//   'do you offer online reputation management': 'Yes! We monitor and respond to reviews, track PR mentions, and manage your online reputation across all platforms. ⭐',

//   // ════════════════════════════════════════
//   // 7️⃣ INDUSTRIES
//   // ════════════════════════════════════════
//   'which industries does zeta-v serve': 'We serve a range of industries including:\n\n🏦 Financial Services (Banking, Fintech, Insurance)\n🏭 Manufacturing (Industry 4.0, ERP, IIoT)\n🏥 Healthcare (Telemedicine, EHR, AI)\n🛒 Retail & E-commerce\n🏛️ Retail & Distribution\n🏨 Hotels & Hospitality\n🍽️ Food & Beverage\n🏠 Real Estate\n💻 IT & Tech Companies',
//   'what industries do you specialize in': 'We serve a range of industries including:\n\n🏦 Financial Services (Banking, Fintech, Insurance)\n🏭 Manufacturing (Industry 4.0, ERP, IIoT)\n🏥 Healthcare (Telemedicine, EHR, AI)\n🛒 Retail & E-commerce\n🏛️ Retail & Distribution\n🏨 Hotels & Hospitality\n🍽️ Food & Beverage\n🏠 Real Estate\n💻 IT & Tech Companies',
//   'do you work with healthcare companies': 'Yes! 🏥 We accelerate digital transformation in healthcare through telemedicine platforms, secure patient data systems, AI-driven healthcare analytics, and EHR (Electronic Health Record) solutions.',
//   'do you work with financial services': 'Yes! 🏦 We have strong expertise in Financial Services including Banking, Fintech, and Insurance — delivering digital transformation, data analytics, and intelligent automation tailored for regulated financial environments.',
//   'do you work with manufacturing': 'Yes! 🏭 We help manufacturing companies with Industry 4.0, ERP implementation, Industrial IoT, supply chain optimization, and smart factory solutions.',
//   'do you work with retail ecommerce': 'Yes! 🛒 We help retail and e-commerce businesses with omnichannel solutions, marketplace integration, customer analytics, and digital marketing.',
//   'do you work with hospitality': 'Yes! 🏨 We help hotels and hospitality businesses with digital presence management, booking platform integration, customer experience solutions, and operational efficiency.',
//   'do you work with real estate': 'Yes! 🏠 We help real estate companies with digital marketing, property listing visibility, Google Ads, customer relationship management, and reputation management.',
//   'do you work with government': 'Yes! 🏛️ We help government agencies with digital transformation, secure data management, citizen services platforms, and compliance solutions.',
//   'do you work with tech companies': 'Yes! 💻 We help IT and tech companies with cloud migration, DevOps, cybersecurity, and digital acceleration.',
//   'do you work with food and beverage': 'Yes! 🍽️ We help F&B businesses with digital presence, social media management, local SEO, delivery platform integration, and customer engagement.',

//   // ════════════════════════════════════════
//   // 8️⃣ LEADERSHIP & TEAM
//   // ════════════════════════════════════════
//   'who are the founders of zeta-v': 'Zeta-V was co-founded by Sujit Chatterjee (Founder & CEO) who drives global digital transformation and enterprise innovation, and Ranga Vellamore (Founder & CTO) who leads cloud, SAP, and next-generation technology solutions. 👨‍💼👨‍💻',
//   'who leads zeta-v': 'The Zeta-V leadership team includes — Sujit Chatterjee (CEO), Ranga Vellamore (CTO), Javvaji Srinivasa Rao (COO), Gagan Sabharwal (Chief Growth Officer), Archana Ambike (Chief People Officer), Aashish Shroff (Head of Operations India), Meggie Wang (Head of Operations China), and Neha Bhalla (Research & Advisory Head). 👥',
//   'who is the ceo of zeta-v': 'Sujit Chatterjee is the Founder & CEO of Zeta-V Technology Solutions. He drives global digital transformation and enterprise innovation. 👨‍💼',
//   'who is the cto of zeta-v': 'Ranga Vellamore is the Founder & CTO of Zeta-V Technology Solutions. He leads cloud, SAP, and next-generation technology solutions. 👨‍💻',
//   'who is the coo of zeta-v': 'Javvaji Srinivasa Rao is the COO of Zeta-V Technology Solutions, overseeing global operations. 👔',
//   'how big is the team': 'We have a team of 50+ professionals representing 18+ nationalities, with 52% women in the workforce and 73% diverse leadership across our global offices. 🌍',
//   'how many employees does zeta-v have': 'We have 50+ team members across our global offices in Hong Kong, India, China, and USA. 👥',

//   // ════════════════════════════════════════
//   // 9️⃣ PARTNERS & CLIENTS
//   // ════════════════════════════════════════
//   'who are zeta-v technology partners': 'We collaborate with 10+ accredited technology partners including IZAPY, Fugu Mobile, Inmorphis, Cynoteck, Swan, and Zerolite — covering technology solutions, mobile, digital transformation, enterprise solutions, and cloud services. 🤝',
//   'what is zeta-v client retention rate': 'We have a 95% client retention rate, reflecting the trust our clients place in us through consistent delivery and measurable long-term outcomes. We have delivered 242+ projects for 34+ enterprise clients. 📊',
//   'how many clients does zeta-v have': 'We have delivered 242+ projects for 34+ enterprise clients with a 95% client retention rate. 🏢',
//   'how many projects has zeta-v delivered': 'We have delivered 242+ projects for 34+ enterprise clients across multiple industries and geographies. 📈',

//   // ════════════════════════════════════════
//   // 🔟 CAREERS
//   // ════════════════════════════════════════
//   'is zeta-v hiring': 'Yes! 🎯 We have 50+ open roles across various departments. Current openings include positions like Systems & IT Security Support Associate, Account Executive, Node.js Developer, and IT Business Analyst. Visit our careers page at zeta-v.com/careers or email us at contactus@zeta-v.com to apply.',
//   'are there any job openings': 'Yes! 🎯 We have 50+ open roles across various departments. Current openings include positions like Systems & IT Security Support Associate, Account Executive, Node.js Developer, and IT Business Analyst. Visit our careers page at zeta-v.com/careers or email us at contactus@zeta-v.com to apply.',
//   'what is it like to work at zeta-v': 'Zeta-V offers a collaborative and innovative work environment with continuous learning, paid certifications, competitive salaries, health benefits, career acceleration programs, flexible culture, global project exposure, and work-life balance. We celebrate diversity with 18+ nationalities represented across our teams. 💼✨',
//   'how do i apply for a job at zeta-v': 'You can view all open positions and apply directly on our careers page at zeta-v.com/careers. You can also submit your resume proactively and we will keep it in our talent database for future opportunities. 📝',
//   'what are the current job openings': 'Current openings include Systems & IT Security Support Associate, Account Executive, Node.js Developer, IT Business Analyst, and many more. Visit zeta-v.com/careers for the complete list. 💼',
//   'do you offer remote work': 'Yes! We offer flexible work arrangements including remote work options for many positions. 🌐',
//   'what is the work culture like': 'Our work culture is collaborative, innovative, and inclusive. We value continuous learning, diversity, and work-life balance. We have 18+ nationalities represented across our teams. 🌍',
//   'do you offer internships': 'Yes! We offer internship programs for students and fresh graduates in various departments. Contact us at contactus@zeta-v.com for more information. 🎓',

//   // ════════════════════════════════════════
//   // 1️⃣1️⃣ WHY CHOOSE ZETA-V
//   // ════════════════════════════════════════
//   'why should i choose zeta-v': 'There are several strong reasons to choose Zeta-V:\n\n✅ Proven proprietary zVMF framework\n✅ Single accountable partner for your entire technology journey\n✅ 10+ specialist technology partners\n✅ 95% client retention rate\n✅ Global expertise with local understanding across multilingual teams\n✅ 242+ successful project deliveries\n\nWe deliver measurable value for your business! 🚀',
//   'why choose zeta-v over others': 'There are several strong reasons to choose Zeta-V:\n\n✅ Proven proprietary zVMF framework\n✅ Single accountable partner\n✅ 95% client retention rate\n✅ Global expertise with local understanding\n✅ 242+ successful project deliveries\n\nWe deliver measurable value for your business! 🚀',
//   'what problems does zeta-v solve': 'We help businesses overcome common challenges such as outdated legacy systems, digital complexity and unclear ROI, talent gaps in cloud and AI, data silos, and growing cybersecurity risks — through strategic consulting, modern technology solutions, and global talent access. 🎯',
//   'what makes zeta-v different': 'What makes Zeta-V unique is our proprietary zVMF framework, single accountable partner model, 95% client retention rate, and our ability to deliver global expertise with local understanding across 18+ nationalities. 🌟',
//   'what are zeta-v advantages': 'Our key advantages include:\n\n✅ 9+ years of experience\n✅ 50+ global team members\n✅ 10+ technology partners\n✅ 95% client retention\n✅ 242+ successful projects\n✅ 18+ nationalities represented',
//   'how is zeta-v different from competitors': 'Unlike competitors, Zeta-V offers a single accountable partner for your entire technology journey, with our proprietary zVMF framework ensuring every decision aligns with measurable business outcomes. We have a 95% client retention rate and deliver global expertise with local understanding. 🌟',

//   // ════════════════════════════════════════
//   // 1️⃣2️⃣ PRICING & GETTING STARTED
//   // ════════════════════════════════════════
//   'how much do your services cost': 'Pricing varies depending on the service:\n\n📚 Bookkeeping: Starting from $999/month\n🌐 Digital Footprint Management: Starting from $1,299/month\n💻 IT Consulting & Digital Transformation: Custom pricing based on your requirements\n\nPlease contact us at contactus@zeta-v.com or call +91 206-901-5402 for a tailored quote. 💰',
//   'what is the pricing': 'Pricing varies depending on the service:\n\n📚 Bookkeeping: Starting from $999/month\n🌐 Digital Footprint Management: Starting from $1,299/month\n💻 IT Consulting & Digital Transformation: Custom pricing based on your requirements\n\nPlease contact us at contactus@zeta-v.com or call +91 206-901-5402 for a tailored quote. 💰',
//   'how do i get started with zeta-v': 'Getting started is simple! 📋\n\n1️⃣ Reach out to us via email at contactus@zeta-v.com\n2️⃣ Call us at +91 206-901-5402\n3️⃣ Fill out the contact form on our website at zeta-v.com\n\nWe will schedule a free consultation, assess your requirements, and recommend the right solution for your business.',
//   'how do i get started': 'Getting started is simple! 📋\n\n1️⃣ Reach out to us via email at contactus@zeta-v.com\n2️⃣ Call us at +91 206-901-5402\n3️⃣ Fill out the contact form on our website at zeta-v.com\n\nWe will schedule a free consultation, assess your requirements, and recommend the right solution for your business.',
//   'do you offer a free consultation': 'Yes! ✅ We offer a free initial consultation and assessment. Contact us at contactus@zeta-v.com or visit zeta-v.com to book your session. 🆓',
//   'how do i schedule a consultation': 'You can schedule a free consultation by:\n\n📧 Email: contactus@zeta-v.com\n📞 Phone: +91 206-901-5402\n🌐 Website: www.zeta-v.com\n\nWe\'ll respond within 24 hours. 📅',
//   'do you offer ongoing support': 'Yes! 🌟 We provide 24/7 support for all our services. Our team is always available to help with any issues, questions, or updates you need. 🕐',
//   'what kind of support do you provide': 'We provide 24/7 support including:\n\n✅ Dedicated support team\n✅ Rapid issue resolution\n✅ Monthly performance reports\n✅ Continuous optimization\n✅ 24/7 monitoring for critical systems',
//   'do you have 24/7 support': 'Yes! We provide 24/7 support for all our services, ensuring your business always has access to help when you need it. 🌟',

//   // ════════════════════════════════════════
//   // FALLBACK
//   // ════════════════════════════════════════
//   'default': 'Thank you for your question! 🙏 For anything not covered here, please reach out to our team directly:\n\n📧 Email: contactus@zeta-v.com\n📞 Phone: +91 206-901-5402\n🌐 Website: www.zeta-v.com\n\nOur team is available Monday to Friday and will be happy to help you. 💙'
// }

// // ─── GET RESPONSE FUNCTION ───
// const getResponse = (question) => {
//   const normalized = question.toLowerCase().trim()
  
//   // Check for exact matches first
//   for (const [key, value] of Object.entries(botResponses)) {
//     if (normalized === key || normalized.includes(key) || key.includes(normalized)) {
//       return value
//     }
//   }
  
//   // Check for partial matches with keywords
//   const keywords = normalized.split(' ')
//   for (const [key, value] of Object.entries(botResponses)) {
//     if (key !== 'default' && keywords.some(word => key.includes(word) || word.includes(key))) {
//       return value
//     }
//   }
  
//   return botResponses.default
// }

// export default function ChatBox() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [isMinimized, setIsMinimized] = useState(false)
//   const [messages, setMessages] = useState([
//     {
//       id: 1,
//       type: 'bot',
//       text: '👋 Hi there! Welcome to Zeta-V Technology Solutions.\n\nI\'m here to help you with information about our services, industries, careers, and more. How can I assist you today?',
//       timestamp: new Date(),
//     }
//   ])
//   const [input, setInput] = useState('')
//   const [isTyping, setIsTyping] = useState(false)
//   const [showQuickQuestions, setShowQuickQuestions] = useState(true)
//   const messagesEndRef = useRef(null)
//   const inputRef = useRef(null)

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
//   }, [messages])

//   useEffect(() => {
//     if (isOpen && !isMinimized) {
//       setTimeout(() => inputRef.current?.focus(), 400)
//     }
//   }, [isOpen, isMinimized])

//   const handleSend = () => {
//     if (!input.trim()) return

//     const userMessage = {
//       id: messages.length + 1,
//       type: 'user',
//       text: input.trim(),
//       timestamp: new Date(),
//     }
//     setMessages(prev => [...prev, userMessage])
//     setInput('')
//     setIsTyping(true)
//     setShowQuickQuestions(false)

//     setTimeout(() => {
//       const response = getResponse(input.trim())
//       const botMessage = {
//         id: messages.length + 2,
//         type: 'bot',
//         text: response,
//         timestamp: new Date(),
//       }
//       setMessages(prev => [...prev, botMessage])
//       setIsTyping(false)
//     }, 800 + Math.random() * 800)
//   }

//   const handleQuickQuestion = (question) => {
//     setInput(question)
//     setShowQuickQuestions(false)
//     setTimeout(() => {
//       const userMessage = {
//         id: messages.length + 1,
//         type: 'user',
//         text: question,
//         timestamp: new Date(),
//       }
//       setMessages(prev => [...prev, userMessage])
//       setIsTyping(true)

//       setTimeout(() => {
//         const response = getResponse(question)
//         const botMessage = {
//           id: messages.length + 2,
//           type: 'bot',
//           text: response,
//           timestamp: new Date(),
//         }
//         setMessages(prev => [...prev, botMessage])
//         setIsTyping(false)
//       }, 800 + Math.random() * 800)
//     }, 300)
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && !e.shiftKey) {
//       e.preventDefault()
//       handleSend()
//     }
//   }

//   const formatTime = (date) => {
//     return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
//   }

//   const toggleMinimize = () => {
//     setIsMinimized(!isMinimized)
//   }

//   return (
//     <>
//       {/* Chat Toggle Button */}
//       <motion.button
//         className={`chat-toggle ${isOpen ? 'open' : ''}`}
//         onClick={() => setIsOpen(!isOpen)}
//         aria-label="Toggle chat"
//         whileHover={{ scale: 1.08 }}
//         whileTap={{ scale: 0.92 }}
//       >
//         {isOpen ? (
//           <HiOutlineXMark />
//         ) : (
//           <>
//             <HiOutlineChatBubbleLeftRight />
//             <span className="chat-ripple" />
//             <span className="chat-ripple" style={{ animationDelay: '1s' }} />
//           </>
//         )}
//         {!isOpen && <span className="chat-badge-dot" />}
//       </motion.button>

//       {/* Chat Window */}
//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             className={`chat-window ${isMinimized ? 'minimized' : ''}`}
//             initial={{ opacity: 0, y: 40, scale: 0.85 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 40, scale: 0.85 }}
//             transition={{ duration: 0.3, type: 'spring', damping: 25 }}
//           >
//             {/* Header */}
//             <div className="chat-header">
//               <div className="chat-header-glow" />
//               <div className="chat-header-left">
//                 <div className="chat-avatar">
//                   <span className="chat-avatar-text">Z</span>
//                   <div className="chat-avatar-ring" />
//                 </div>
//                 <div>
//                   <h3>
//                     Zeta-V Support
//                     <span className="chat-verified-badge">
//                       <HiOutlineCheckCircle />
//                     </span>
//                   </h3>
//                   <p>
//                     <span className="chat-status-dot" />
//                     <span className="chat-status-text">Online • Available 24/7</span>
//                   </p>
//                 </div>
//               </div>
//               <div className="chat-header-actions">
//                 <button
//                   className="chat-header-btn chat-minimize"
//                   onClick={toggleMinimize}
//                   aria-label="Minimize chat"
//                 >
//                   <HiOutlineXMark style={{ transform: 'rotate(90deg)' }} />
//                 </button>
//                 <button
//                   className="chat-header-btn chat-close-btn"
//                   onClick={() => setIsOpen(false)}
//                   aria-label="Close chat"
//                 >
//                   <HiOutlineXMark />
//                 </button>
//               </div>
//             </div>

//             {/* Messages */}
//             <div className="chat-messages">
//               {messages.map((message, index) => (
//                 <motion.div
//                   key={message.id}
//                   className={`chat-message ${message.type}`}
//                   initial={{ opacity: 0, y: 15, scale: 0.95 }}
//                   animate={{ opacity: 1, y: 0, scale: 1 }}
//                   transition={{ delay: index * 0.05, duration: 0.3 }}
//                 >
//                   {message.type === 'bot' && (
//                     <div className="chat-message-avatar">
//                       <span>Z</span>
//                     </div>
//                   )}
//                   <div className="chat-message-content">
//                     <div className="chat-message-text">
//                       {message.text.split('\n').map((line, i) => (
//                         <p key={i}>{line}</p>
//                       ))}
//                     </div>
//                     <span className="chat-message-time">
//                       {formatTime(message.timestamp)}
//                     </span>
//                   </div>
//                 </motion.div>
//               ))}
              
//               {isTyping && (
//                 <motion.div
//                   className="chat-message bot"
//                   initial={{ opacity: 0, y: 15 }}
//                   animate={{ opacity: 1, y: 0 }}
//                 >
//                   <div className="chat-message-avatar">
//                     <span>Z</span>
//                   </div>
//                   <div className="chat-message-content">
//                     <div className="chat-typing">
//                       <span></span>
//                       <span></span>
//                       <span></span>
//                     </div>
//                   </div>
//                 </motion.div>
//               )}
//               <div ref={messagesEndRef} />
//             </div>

//             {/* Quick Questions */}
//             {showQuickQuestions && messages.length < 3 && (
//               <div className="chat-quick-questions">
//                 <div className="chat-quick-header">
//                   <HiOutlineSparkles />
//                   <span>Quick Questions</span>
//                 </div>
//                 <div className="chat-quick-grid">
//                   {quickQuestions.map((q) => {
//                     const Icon = q.icon
//                     return (
//                       <motion.button
//                         key={q.id}
//                         className="chat-quick-btn"
//                         onClick={() => handleQuickQuestion(q.text)}
//                         style={{ '--btn-color': q.color }}
//                         whileHover={{ scale: 1.02, y: -2 }}
//                         whileTap={{ scale: 0.98 }}
//                       >
//                         <Icon style={{ color: q.color }} />
//                         <span>{q.text}</span>
//                       </motion.button>
//                     )
//                   })}
//                 </div>
//               </div>
//             )}

//             {/* Input */}
//             <div className="chat-input-wrapper">
//               <div className="chat-input-container">
//                 <input
//                   ref={inputRef}
//                   type="text"
//                   placeholder="Ask me anything about Zeta-V..."
//                   value={input}
//                   onChange={(e) => setInput(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   className="chat-input"
//                 />
//                 <motion.button
//                   className={`chat-send ${input.trim() ? 'active' : ''}`}
//                   onClick={handleSend}
//                   disabled={!input.trim()}
//                   aria-label="Send message"
//                   whileHover={input.trim() ? { scale: 1.05 } : {}}
//                   whileTap={input.trim() ? { scale: 0.95 } : {}}
//                 >
//                   <HiOutlinePaperAirplane />
//                 </motion.button>
//               </div>
//               <div className="chat-footer">
//                 <span className="chat-footer-brand">⚡ Zeta-V Technology</span>
//                 <span className="chat-footer-dot">•</span>
//                 <span className="chat-footer-secure">
//                   <HiOutlineCheckCircle />
//                   Encrypted
//                 </span>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }


import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineXMark,
  HiOutlinePaperAirplane,
  HiOutlineUser,
  HiOutlineCheckCircle,
  HiOutlineGlobeAlt,
  HiOutlineQuestionMarkCircle,
  HiOutlineLightBulb,
  HiOutlineBuildingOffice,
  HiOutlineSparkles,
} from 'react-icons/hi2'
import './ChatBox.css'

const quickQuestions = [
  { id: 1, text: 'What services does Zeta-V offer?', icon: HiOutlineGlobeAlt, color: '#22a7f0' },
  { id: 2, text: 'How much do your services cost?', icon: HiOutlineQuestionMarkCircle, color: '#6366f1' },
  { id: 3, text: 'Do you work with small businesses?', icon: HiOutlineUser, color: '#34d399' },
  { id: 4, text: 'What industries do you specialize in?', icon: HiOutlineLightBulb, color: '#f59e0b' },
  { id: 5, text: 'How do I get started?', icon: HiOutlineCheckCircle, color: '#22c55e' },
  { id: 6, text: 'Where is Zeta-V located?', icon: HiOutlineBuildingOffice, color: '#ec4899' },
]

const botResponses = {
  'hi': 'Hello! 👋 Welcome to Zeta-V Technology Solutions. I\'m here to help you with information about our services, industries, careers, and more. How can I assist you today?',
  'hello': 'Hello! 👋 Welcome to Zeta-V Technology Solutions. I\'m here to help you with information about our services, industries, careers, and more. How can I assist you today?',
  'hey': 'Hello! 👋 Welcome to Zeta-V Technology Solutions. I\'m here to help you with information about our services, industries, careers, and more. How can I assist you today?',
  'good morning': 'Good morning! ☀️ Welcome to Zeta-V Technology Solutions. How can I help you today?',
  'good afternoon': 'Good afternoon! 🌤️ Welcome to Zeta-V Technology Solutions. How can I help you today?',
  'how are you': 'I\'m doing great, thank you for asking! 😊 I\'m here to help you explore what Zeta-V has to offer. What would you like to know?',
  'who are you': 'I\'m the Zeta-V virtual assistant 🤖. I can help you learn about our services, industries we serve, our team, office locations, career opportunities, and how to get in touch with us. Feel free to ask me anything!',
  'what is this chatbot': 'I\'m the Zeta-V virtual assistant 🤖. I can help you learn about our services, industries we serve, our team, office locations, career opportunities, and how to get in touch with us. Feel free to ask me anything!',
  'what is zeta-v': 'Zeta-V Technology Solutions is an AI-driven automation and IT services company founded in 2017 in Hong Kong. We empower organizations to accelerate digital transformation and unlock measurable value through strategic consulting, intelligent technology ecosystems, and our proprietary zVMF (Zeta Value Multiplier Framework). Our mantra is — Simplify Solutions, Multiply Value.',
  'tell me about zeta-v': 'Zeta-V Technology Solutions is an AI-driven automation and IT services company founded in 2017 in Hong Kong. We empower organizations to accelerate digital transformation and unlock measurable value through strategic consulting, intelligent technology ecosystems, and our proprietary zVMF (Zeta Value Multiplier Framework). Our mantra is — Simplify Solutions, Multiply Value.',
  'what does zeta-v do': 'Zeta-V Technology Solutions is an AI-driven automation and IT services company founded in 2017 in Hong Kong. We empower organizations to accelerate digital transformation and unlock measurable value through strategic consulting, intelligent technology ecosystems, and our proprietary zVMF (Zeta Value Multiplier Framework). Our mantra is — Simplify Solutions, Multiply Value.',
  'when was zeta-v founded': 'Zeta-V was founded in 2017 in Hong Kong, starting as a technology pioneer in Asia\'s financial hub. Since then, we have expanded across China, India, USA, Germany, and Europe. 🚀',
  'what is zvmf': 'zVMF stands for Zeta Value Multiplier Framework — our proprietary framework that ensures every technology decision is aligned with measurable business outcomes. It helps organizations move faster from strategy to implementation with clear, tangible results. 📊',
  'what is zeta-v vision': 'Our vision is to shape a future where businesses harness the power of AI, automation, and emerging technologies to unlock new possibilities, accelerate innovation, and create lasting value — making organizations more intelligent, agile, and resilient. 🌟',
  'what is zeta-v mission': 'Our mission is to empower mid-market enterprises with scalable offshore IT services that seamlessly harmonize human ingenuity with artificial intelligence, delivering secure, high-velocity solutions that respect strict data residency and sovereign compliance. 🎯',
  'what are zeta-v core values': 'Our five core values are — Innovation (Think Ahead, Deliver Now), Integrity (Say It. Mean It. Deliver It.), Adaptability (Change Is Our Constant), Inclusivity (Technology Without Borders), and Partnership (We Succeed When You Succeed). 💪',
  'how many years experience': 'Zeta-V has 9+ years of experience, with 50+ team members, 100+ deployments, and expertise across 15+ technologies. 📈',
  'how big is zeta-v': 'We have a team of 50+ professionals representing 18+ nationalities, with 52% women in the workforce and 73% diverse leadership across our global offices. 🌍',
  'where is zeta-v located': 'Zeta-V has offices across multiple global locations — Hong Kong, Mumbai, Pune (India), Shanghai (China), Gurugram (India), and Orlando (USA). Our India office is located at Gera\'s Imperium Rise, Hinjewadi, Pune. 🌍',
  'what are your office locations': 'Zeta-V has offices across multiple global locations — Hong Kong, Mumbai, Pune (India), Shanghai (China), Gurugram (India), and Orlando (USA). Our India office is located at Gera\'s Imperium Rise, Hinjewadi, Pune. 🌍',
  'how can i contact zeta-v': 'You can reach us through:\n\n📧 Email: contactus@zeta-v.com\n📞 Phone: +91 206-901-5402\n🌐 Website: www.zeta-v.com\n📍 Office: Gera\'s Imperium Rise, Hinjewadi, Pune\n\nWe are available Monday to Friday.',
  'do you have offices in india': 'Yes! 🇮🇳 We have offices in Mumbai, Pune (Gera\'s Imperium Rise, Hinjewadi), and Gurugram.',
  'do you have offices in usa': 'Yes! 🇺🇸 We have an office in Orlando, USA.',
  'what services does zeta-v offer': 'Zeta-V offers a wide range of IT and digital transformation services including:\n\n🚀 Digital Acceleration\n📊 Strategy Consulting\n🤖 Analytics & Automation\n🌐 Digital Footprint Management\n🏢 Enterprise Transformation\n⚙️ Engineering Solutions\n👥 Workforce Management (Staff Augmentation)\n📚 Shared Services (Bookkeeping, Compliance, Incorporation)\n☁️ Cloud Services\n🔒 Cybersecurity\n🧠 Generative AI Solutions\n🔄 Application Modernization\n🤖 RPA/Automation',
  'what do you provide': 'Zeta-V offers a wide range of IT and digital transformation services including:\n\n🚀 Digital Acceleration\n📊 Strategy Consulting\n🤖 Analytics & Automation\n🌐 Digital Footprint Management\n🏢 Enterprise Transformation\n⚙️ Engineering Solutions\n👥 Workforce Management (Staff Augmentation)\n📚 Shared Services (Bookkeeping, Compliance, Incorporation)\n☁️ Cloud Services\n🔒 Cybersecurity\n🧠 Generative AI Solutions\n🔄 Application Modernization\n🤖 RPA/Automation',
  'do you offer cloud services': 'Yes! ☁️ We provide end-to-end Cloud Services including Cloud Consulting, Infrastructure Migration, and Hybrid Cloud Architecture. We work with AWS, Microsoft Azure, and Google Cloud to help enterprises securely migrate and modernize their infrastructure.',
  'do you offer ai solutions': 'Absolutely! 🧠 We offer advanced Generative AI Solutions including AI Copilots, Enterprise AI Assistants, and Predictive Analytics platforms. We help businesses integrate AI into their core operations to drive intelligent automation and enterprise innovation.',
  'what is digital footprint management': 'Our Digital Footprint Management service covers your entire online presence under one roof — website maintenance, SEO, social media management, digital marketing, brand consistency, IT infrastructure, and compliance. It starts from $1,299 per month with 24/7 monitoring and support. 🌐',
  'do you offer bookkeeping services': 'Yes! 📚 We offer Professional Bookkeeping Services starting from $999 per month. This includes transaction tracking, accounts payable and receivable management, bank reconciliation, payroll management, financial reporting, and more — at 60% lower cost than hiring an in-house bookkeeper.',
  'do you provide staff augmentation': 'Yes! 👥 Through our IT Staff Augmentation model, we help organizations quickly access specialized technology talent in areas such as cloud, AI, cybersecurity, and software engineering.',
  'do you offer cybersecurity': 'Yes! 🔒 We provide end-to-end Cybersecurity services including security assessments, compliance audits, threat monitoring, and incident response to protect your business.',
  'do you offer rpa automation': 'Yes! 🤖 We offer Robotic Process Automation (RPA) services to automate repetitive tasks, improve efficiency, and reduce operational costs.',
  'what is digital acceleration': 'Digital Acceleration is our service to help businesses rapidly adopt digital technologies, optimize processes, and create new revenue streams through innovative solutions. 🚀',
  'do you offer enterprise transformation': 'Yes! 🏢 We help organizations transform their enterprise operations through digital technologies, process optimization, and organizational change management.',
  'do you offer shared services': 'Yes! 📚 We offer Shared Services including Bookkeeping, Compliance management, Incorporation services, and other back-office support to help businesses focus on core operations.',
  'what is bookkeeping services': 'Our Professional Bookkeeping Services include transaction tracking, accounts payable and receivable management, bank reconciliation, payroll management, financial reporting, and more — all at 60% lower cost than hiring an in-house bookkeeper. 📚',
  'how much do bookkeeping services cost': 'Our Professional Bookkeeping Services start from $999 per month. The exact pricing depends on your transaction volume, number of accounts, and any add-on services you need. 💰',
  'what is included in bookkeeping': 'Our bookkeeping services include:\n\n✅ Transaction tracking\n✅ Bank & credit card reconciliation\n✅ Accounts payable & receivable management\n✅ Payroll management\n✅ General ledger maintenance\n✅ Financial reporting (P&L, Balance Sheet, Cash Flow)\n✅ Expense categorization\n✅ Tax-ready financial statements',
  'what is digital footprint': 'Our Digital Footprint Management service covers your entire online presence under one roof — website maintenance, SEO, social media management, digital marketing, brand consistency, IT infrastructure, and compliance. 🌐',
  'how much does digital footprint cost': 'Our Digital Footprint Management starts from $1,299 per month with 24/7 monitoring and support. 💰',
  'which industries does zeta-v serve': 'We serve a range of industries including:\n\n🏦 Financial Services (Banking, Fintech, Insurance)\n🏭 Manufacturing (Industry 4.0, ERP, IIoT)\n🏥 Healthcare (Telemedicine, EHR, AI)\n🛒 Retail & E-commerce\n🏛️ Retail & Distribution\n🏨 Hotels & Hospitality\n🍽️ Food & Beverage\n🏠 Real Estate\n💻 IT & Tech Companies',
  'what industries do you specialize in': 'We serve a range of industries including:\n\n🏦 Financial Services (Banking, Fintech, Insurance)\n🏭 Manufacturing (Industry 4.0, ERP, IIoT)\n🏥 Healthcare (Telemedicine, EHR, AI)\n🛒 Retail & E-commerce\n🏛️ Retail & Distribution\n🏨 Hotels & Hospitality\n🍽️ Food & Beverage\n🏠 Real Estate\n💻 IT & Tech Companies',
  'do you work with healthcare companies': 'Yes! 🏥 We accelerate digital transformation in healthcare through telemedicine platforms, secure patient data systems, AI-driven healthcare analytics, and EHR (Electronic Health Record) solutions.',
  'do you work with financial services': 'Yes! 🏦 We have strong expertise in Financial Services including Banking, Fintech, and Insurance — delivering digital transformation, data analytics, and intelligent automation tailored for regulated financial environments.',
  'do you work with manufacturing': 'Yes! 🏭 We help manufacturing companies with Industry 4.0, ERP implementation, Industrial IoT, supply chain optimization, and smart factory solutions.',
  'do you work with small businesses': 'Yes! 💼 We work with businesses of all sizes including SMEs and startups. Our services are scalable and can be tailored to fit your budget and requirements. Contact us to discuss your needs!',
  'who are the founders of zeta-v': 'Zeta-V was co-founded by Sujit Chatterjee (Founder & CEO) who drives global digital transformation and enterprise innovation, and Ranga Vellamore (Founder & CTO) who leads cloud, SAP, and next-generation technology solutions. 👨‍💼👨‍💻',
  'who leads zeta-v': 'The Zeta-V leadership team includes — Sujit Chatterjee (CEO), Ranga Vellamore (CTO), Javvaji Srinivasa Rao (COO), Gagan Sabharwal (Chief Growth Officer), Archana Ambike (Chief People Officer), Aashish Shroff (Head of Operations India), Meggie Wang (Head of Operations China), and Neha Bhalla (Research & Advisory Head). 👥',
  'who is the ceo of zeta-v': 'Sujit Chatterjee is the Founder & CEO of Zeta-V Technology Solutions. He drives global digital transformation and enterprise innovation. 👨‍💼',
  'who is the cto of zeta-v': 'Ranga Vellamore is the Founder & CTO of Zeta-V Technology Solutions. He leads cloud, SAP, and next-generation technology solutions. 👨‍💻',
  'what is zeta-v client retention rate': 'We have a 95% client retention rate, reflecting the trust our clients place in us through consistent delivery and measurable long-term outcomes. We have delivered 242+ projects for 34+ enterprise clients. 📊',
  'how many clients does zeta-v have': 'We have delivered 242+ projects for 34+ enterprise clients with a 95% client retention rate. 🏢',
  'is zeta-v hiring': 'Yes! 🎯 We have 50+ open roles across various departments. Current openings include positions like Systems & IT Security Support Associate, Account Executive, Node.js Developer, and IT Business Analyst. Visit our careers page at zeta-v.com/careers or email us at contactus@zeta-v.com to apply.',
  'are there any job openings': 'Yes! 🎯 We have 50+ open roles across various departments. Current openings include positions like Systems & IT Security Support Associate, Account Executive, Node.js Developer, and IT Business Analyst. Visit our careers page at zeta-v.com/careers or email us at contactus@zeta-v.com to apply.',
  'how do i apply for a job at zeta-v': 'You can view all open positions and apply directly on our careers page at zeta-v.com/careers. You can also submit your resume proactively and we will keep it in our talent database for future opportunities. 📝',
  'do you offer remote work': 'Yes! We offer flexible work arrangements including remote work options for many positions. 🌐',
  'why should i choose zeta-v': 'There are several strong reasons to choose Zeta-V:\n\n✅ Proven proprietary zVMF framework\n✅ Single accountable partner for your entire technology journey\n✅ 10+ specialist technology partners\n✅ 95% client retention rate\n✅ Global expertise with local understanding across multilingual teams\n✅ 242+ successful project deliveries\n\nWe deliver measurable value for your business! 🚀',
  'how much do your services cost': 'Pricing varies depending on the service:\n\n📚 Bookkeeping: Starting from $999/month\n🌐 Digital Footprint Management: Starting from $1,299/month\n💻 IT Consulting & Digital Transformation: Custom pricing based on your requirements\n\nPlease contact us at contactus@zeta-v.com or call +91 206-901-5402 for a tailored quote. 💰',
  'what is the pricing': 'Pricing varies depending on the service:\n\n📚 Bookkeeping: Starting from $999/month\n🌐 Digital Footprint Management: Starting from $1,299/month\n💻 IT Consulting & Digital Transformation: Custom pricing based on your requirements\n\nPlease contact us at contactus@zeta-v.com or call +91 206-901-5402 for a tailored quote. 💰',
  'how do i get started with zeta-v': 'Getting started is simple! 📋\n\n1️⃣ Reach out to us via email at contactus@zeta-v.com\n2️⃣ Call us at +91 206-901-5402\n3️⃣ Fill out the contact form on our website at zeta-v.com\n\nWe will schedule a free consultation, assess your requirements, and recommend the right solution for your business.',
  'how do i get started': 'Getting started is simple! 📋\n\n1️⃣ Reach out to us via email at contactus@zeta-v.com\n2️⃣ Call us at +91 206-901-5402\n3️⃣ Fill out the contact form on our website at zeta-v.com\n\nWe will schedule a free consultation, assess your requirements, and recommend the right solution for your business.',
  'do you offer a free consultation': 'Yes! ✅ We offer a free initial consultation and assessment. Contact us at contactus@zeta-v.com or visit zeta-v.com to book your session. 🆓',
  'do you offer ongoing support': 'Yes! 🌟 We provide 24/7 support for all our services. Our team is always available to help with any issues, questions, or updates you need. 🕐',
  'default': 'Thank you for your question! 🙏 For anything not covered here, please reach out to our team directly:\n\n📧 Email: contactus@zeta-v.com\n📞 Phone: +91 206-901-5402\n🌐 Website: www.zeta-v.com\n\nOur team is available Monday to Friday and will be happy to help you. 💙'
}

const getResponse = (question) => {
  const normalized = question.toLowerCase().trim()
  for (const [key, value] of Object.entries(botResponses)) {
    if (key !== 'default' && (normalized === key || normalized.includes(key) || key.includes(normalized))) {
      return value
    }
  }
  const keywords = normalized.split(' ')
  for (const [key, value] of Object.entries(botResponses)) {
    if (key !== 'default' && keywords.some(word => word.length > 3 && (key.includes(word) || word.includes(key)))) {
      return value
    }
  }
  return botResponses.default
}

// Detect if user is on a touch/mobile device — used to skip auto-focus
const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth < 768
}

export default function ChatBox() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      type: 'bot',
      text: '👋 Hi there! Welcome to Zeta-V Technology Solutions.\n\nI\'m here to help you with information about our services, industries, careers, and more. How can I assist you today?',
      timestamp: new Date(),
    }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  // Quick questions stay visible until the BOT has replied to at least one message
  const [hasReceivedReply, setHasReceivedReply] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isTyping])

  // Only auto-focus on desktop — prevents keyboard pop-up on mobile
  useEffect(() => {
    if (isOpen && !isMinimized && !isMobile()) {
      setTimeout(() => inputRef.current?.focus(), 400)
    }
  }, [isOpen, isMinimized])

  const sendMessage = (text) => {
    if (!text.trim()) return

    const userMessage = {
      id: Date.now(),
      type: 'user',
      text: text.trim(),
      timestamp: new Date(),
    }

    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const response = getResponse(text.trim())
      const botMessage = {
        id: Date.now() + 1,
        type: 'bot',
        text: response,
        timestamp: new Date(),
      }
      setMessages(prev => [...prev, botMessage])
      setIsTyping(false)
      // Hide quick questions only AFTER bot has replied
      setHasReceivedReply(true)
    }, 800 + Math.random() * 600)
  }

  const handleSend = () => {
    sendMessage(input)
  }

  // Quick question: show the question as user message immediately, keep quick panel
  // until bot replies (handled by hasReceivedReply above)
  const handleQuickQuestion = (question) => {
    sendMessage(question)
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }

  const toggleMinimize = () => setIsMinimized(prev => !prev)

  // Show quick questions: only when chat is freshly opened and bot hasn't replied yet
  const showQuickQuestions = !hasReceivedReply && messages.length < 3

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.button
        className={`chat-toggle ${isOpen ? 'open' : ''}`}
        onClick={() => {
          setIsOpen(prev => !prev)
          setIsMinimized(false)
        }}
        aria-label="Toggle chat"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
      >
        {isOpen ? (
          <HiOutlineXMark />
        ) : (
          <>
            <HiOutlineChatBubbleLeftRight />
            <span className="chat-ripple" />
            <span className="chat-ripple" style={{ animationDelay: '1s' }} />
          </>
        )}
        {!isOpen && <span className="chat-badge-dot" />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`chat-window ${isMinimized ? 'minimized' : ''}`}
            initial={{ opacity: 0, y: 40, scale: 0.85 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.85 }}
            transition={{ duration: 0.3, type: 'spring', damping: 25 }}
          >
            {/* Header */}
            <div className="chat-header">
              <div className="chat-header-glow" />
              <div className="chat-header-left">
                <div className="chat-avatar">
                  <span className="chat-avatar-text">Z</span>
                  <div className="chat-avatar-ring" />
                </div>
                <div>
                  <h3>
                    Zeta-V Support
                    <span className="chat-verified-badge">
                      <HiOutlineCheckCircle />
                    </span>
                  </h3>
                  <p>
                    <span className="chat-status-dot" />
                    <span className="chat-status-text">Online • Available 24/7</span>
                  </p>
                </div>
              </div>
              <div className="chat-header-actions">
                <button
                  className="chat-header-btn chat-minimize"
                  onClick={toggleMinimize}
                  aria-label="Minimize chat"
                >
                  <HiOutlineXMark style={{ transform: 'rotate(90deg)' }} />
                </button>
                <button
                  className="chat-header-btn chat-close-btn"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat"
                >
                  <HiOutlineXMark />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="chat-messages">
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  className={`chat-message ${message.type}`}
                  initial={{ opacity: 0, y: 15, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ delay: index === messages.length - 1 ? 0 : 0, duration: 0.3 }}
                >
                  {message.type === 'bot' && (
                    <div className="chat-message-avatar">
                      <span>Z</span>
                    </div>
                  )}
                  <div className="chat-message-content">
                    <div className="chat-message-text">
                      {message.text.split('\n').map((line, i) => (
                        <p key={i}>{line}</p>
                      ))}
                    </div>
                    <span className="chat-message-time">
                      {formatTime(message.timestamp)}
                    </span>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  className="chat-message bot"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <div className="chat-message-avatar">
                    <span>Z</span>
                  </div>
                  <div className="chat-message-content">
                    <div className="chat-typing">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions — only shown before bot has replied */}
            <AnimatePresence>
              {showQuickQuestions && (
                <motion.div
                  className="chat-quick-questions"
                  initial={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25 }}
                >
                  <div className="chat-quick-header">
                    <HiOutlineSparkles />
                    <span>Quick Questions</span>
                  </div>
                  <div className="chat-quick-grid">
                    {quickQuestions.map((q) => {
                      const Icon = q.icon
                      return (
                        <motion.button
                          key={q.id}
                          className="chat-quick-btn"
                          onClick={() => handleQuickQuestion(q.text)}
                          style={{ '--btn-color': q.color }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Icon style={{ color: q.color }} />
                          <span>{q.text}</span>
                        </motion.button>
                      )
                    })}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Input */}
            <div className="chat-input-wrapper">
              <div className="chat-input-container">
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="Ask me anything about Zeta-V..."
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="chat-input"
                  // Prevent auto-focus on mobile by not autofocusing via attribute
                  autoFocus={false}
                />
                <motion.button
                  className={`chat-send ${input.trim() ? 'active' : ''}`}
                  onClick={handleSend}
                  disabled={!input.trim()}
                  aria-label="Send message"
                  whileHover={input.trim() ? { scale: 1.05 } : {}}
                  whileTap={input.trim() ? { scale: 0.95 } : {}}
                >
                  <HiOutlinePaperAirplane />
                </motion.button>
              </div>
              <div className="chat-footer">
                <span className="chat-footer-brand">⚡ Zeta-V Technology</span>
                <span className="chat-footer-dot">•</span>
                <span className="chat-footer-secure">
                  <HiOutlineCheckCircle />
                  Encrypted
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}