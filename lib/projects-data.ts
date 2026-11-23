import { type Project } from "@/components/project-card"

// Order of this array = display order on "All Projects".
export const projects: Project[] = [
  {
    title: "Growtheon | White-Label CRM & SaaS Automation",
    category: "SaaS & MVPs",
    description:
      "A white-label CRM and marketing platform for agencies managing multiple client accounts. It brings contacts, sales pipelines, follow-ups, calendars and campaign workflows into one product, with automation and AI capabilities that support everyday agency operations across separate client workspaces.",
    techStack: ["CRM", "Multi-Tenant SaaS", "Workflow Automation", "API Integrations", "AI Integration"],
    image: "/covers/growtheon.jpg",
    liveLink: "https://www.growtheon.com/",
  },
  {
    title: "AI Voice Agents | Inbound & Outbound Call Automation",
    category: "AI & Automation",
    description:
      "An English- and Arabic-language voice assistant for inbound and outbound business calls. The workflow turns speech into text, uses an LLM and business knowledge to respond, and speaks the response back to the caller. It supports booking-related conversations, CRM handoffs and escalation to a person, with a React dashboard for operational review.",
    techStack: ["React", "Speech-to-Text", "LLM APIs", "RAG", "Text-to-Speech", "CRM APIs", "AWS (UAT)"],
    image: "/covers/ai-voice-agents.jpg",
  },
  {
    title: "AI Medicaid Form Assistant | Voice AI & Document Automation",
    category: "AI & Automation",
    description:
      "A voice-first assistant that helps users complete complex Medicaid forms without navigating every field manually. Spoken answers are mapped into structured form fields, validated, reviewed and used to generate completed PDF documents. A Next.js interface connects to FastAPI services and LangGraph/LLM workflows for guided data capture and corrections.",
    techStack: ["Next.js", "FastAPI", "Python", "LangGraph", "PostgreSQL", "Speech-to-Text / Text-to-Speech", "PDF Generation"],
    image: "/covers/medicaid-assistant.jpg",
  },
  {
    title: "AI Assistant Suite | RAG, Reception & Lead Capture Bots",
    category: "AI & Automation",
    description:
      "A business AI assistant suite combining five workflows in one platform: document question-answering, virtual reception, reminder calls, lead capture and guided intake forms. Businesses can place assistants into customer touchpoints and handle routine conversations and information gathering through a shared SaaS experience.",
    techStack: ["RAG", "Voice AI", "Conversational AI", "Workflow Automation", "Multi-Tenant SaaS"],
    image: "/covers/ai-assistant-suite.jpg",
    liveLink: "https://ai-assistant-psi-six.vercel.app/",
  },
  {
    title: "DenialFlow | AI-Assisted Insurance Denial Management",
    category: "AI & Automation",
    description:
      "A web application for reviewing and managing insurance claim denials. Staff can track cases and denial reasons, review alerts, and use AI-assisted recommendations to plan the next action. Secure role-based access, dashboards and backend workflows help teams handle rework systematically rather than relying on disconnected spreadsheets.",
    techStack: ["React", "TypeScript", "Node.js", "Microsoft SQL Server", "Redis", "AWS", "AI/LLM Integrations"],
    image: "/covers/denial-management.jpg",
  },
  {
    title: "Cleaning Service Booking | Full-Stack Web Platform",
    category: "Full-Stack Applications",
    description:
      "A booking application that lets customers choose a cleaning service, submit scheduling details and pay online. The frontend guides users through booking and checkout, while the backend stores service requests, customer details and operational status for staff, covering the full customer journey from request to payment.",
    techStack: ["React", "Node.js", "MySQL", "Stripe"],
    image: "/covers/cleaning-booking.jpg",
  },
  {
    title: "Healthcare Workflow Automation | AI-Assisted Operations",
    category: "AI & Automation",
    description:
      "A healthcare operations platform supporting clinical documentation, forms, reminders and staff-reviewed workflow automation. It connects patient information with recurring administrative processes and helps teams track tasks and follow-ups. Where AI is involved, it supports staff with information and drafting while final decisions stay with people.",
    techStack: ["React", "Next.js", "TypeScript", "Node.js", "REST APIs", "SQL", "LLM / Workflow Integration"],
    image: "/covers/healthcare-workflow.jpg",
  },
  {
    title: "Field Management SaaS | Scheduling & Technician Workflows",
    category: "SaaS & MVPs",
    description:
      "A field-service application for coordinating daily jobs, appointments, technicians and inventory. Teams can organize scheduled work, review operational information and update job progress through practical, role-specific screens that connect office staff with technicians in the field.",
    techStack: ["Vue.js", "Field Service Workflows", "Scheduling", "Inventory Management"],
  },
  {
    title: "Roadrunner Freight | Customer Shipping & Logistics Portal",
    category: "Full-Stack Applications",
    description:
      "A customer-facing freight portal that helps shippers request quotes, book shipments, track deliveries and manage documents. The product includes customer dashboards and workflows for freight calculations, bills of lading, pickups and reports, built as one connected business application.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/covers/roadrunner.jpg",
    caseStudyLink: "/docs/Roadrunner-Case-Study.pdf",
  },
  {
    title: "18stays | Golf Stay & Play Booking Platform",
    category: "Full-Stack Applications",
    description:
      "A golf travel platform for browsing and comparing stay-and-play packages that combine accommodation and golf experiences. Users can search by destination, travel dates and group details, compare property options and save suitable stays. The application brings several discovery and booking-related flows into one responsive product.",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Booking APIs", "SEO"],
    image: "/covers/18stays.jpg",
    liveLink: "https://18stays.vercel.app/",
  },
  {
    title: "Saudi Healthcare Portal | Public-Service Modernization",
    category: "Full-Stack Applications",
    description:
      "Modernization work for a large public healthcare information portal serving different audiences and service journeys. The project involved improving the interface, backend-driven content and application flows in a bilingual environment, as practical full-stack work on a complex public platform.",
    techStack: ["Vue.js", "Laravel", "PHP", "MySQL"],
    image: "/covers/saudi-healthcare-portal.jpg",
  },
  {
    title: "Sticky.io | Subscription CRM & Merchant Portals",
    category: "SaaS & MVPs",
    description:
      "A subscription-commerce platform with customer management, offers, subscription billing, payment recovery and merchant operations. Contributed to the CRM, merchant portal and member portal modules that support these day-to-day workflows for merchants and their customers.",
    techStack: ["React", "Laravel", "MySQL", "Node.js", "PostgreSQL", "Azure"],
    image: "/covers/sticky.jpg",
    liveLink: "https://www.sticky.io/",
  },
  {
    title: "Travel Agency Platform | End-to-End Laravel Development",
    category: "Full-Stack Applications",
    description:
      "A travel agency web platform developed end to end in Laravel, covering customer-facing pages, backend application logic and administrative tools. It supports presenting travel services and managing website content and inquiries through a connected interface, across frontend delivery, backend functionality and ongoing site management.",
    techStack: ["Laravel", "PHP", "Frontend Integration", "Admin Dashboard"],
    image: "/covers/travel-agency-platform.jpg",
  },
  {
    title: "StaffViz | Workforce & Project Management SaaS",
    category: "SaaS & MVPs",
    description:
      "A workforce management platform for companies organizing client accounts, projects, staff information and time-related operations. Contributed to client management, project tracking and HR workflows, covering the operational screens and backend functionality behind them.",
    techStack: ["Next.js", "NestJS", "MongoDB", "AWS", "CI/CD"],
    image: "/covers/staffviz.jpg",
    liveLink: "https://www.staffviz.com/",
  },
  {
    title: "Gardening E-commerce | Laravel Storefront",
    category: "Full-Stack Applications",
    description:
      "A Laravel-based e-commerce storefront for gardening products, organized around clear product categories, discovery and product details. The work focused on making the catalog easy to browse and manage while supporting the core website experience.",
    techStack: ["Laravel", "PHP", "Product Catalog", "Category Navigation"],
  },
  {
    title: "Tashi | Travel Booking & Property Management Platform",
    category: "Full-Stack Applications",
    description:
      "A travel booking and property management platform for accommodation and tour businesses. Its workflows connect availability, reservations, property information and payment-related operations. Contributed to the website builder, payment gateway and property management modules.",
    techStack: ["Laravel", "PHP", "React", "MySQL", "Stripe", "REST APIs"],
    image: "/covers/tashi.jpg",
    liveLink: "https://tashi.travel/",
  },
]
