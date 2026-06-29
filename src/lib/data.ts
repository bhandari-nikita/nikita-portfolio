import type { Project, SkillCategory, TimelineItem, Stat } from "@/types";

export const projects: Project[] = [
  {
    id: "ecommerce-api",
    title: "E-Commerce Backend API",
    description: "Production-ready FastAPI backend with JWT authentication, product, cart, and order management powered by PostgreSQL.",
    overview:
      "A comprehensive e-commerce backend built with FastAPI and PostgreSQL. Features JWT-based authentication, product catalog management, order processing, inventory tracking, and payment integration hooks.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "JWT", "Pydantic", "Docker"],
    category: "backend",
    features: [
      "JWT authentication & role-based access control",
      "Product catalog with full CRUD & search",
      "Order management & inventory tracking",
      "RESTful API with OpenAPI docs",
      "Dockerized for easy deployment",
    ],
    problemSolved:
      "Built to demonstrate a scalable backend architecture for modern e-commerce applications using FastAPI and PostgreSQL.",
    image: "/projects/ecommerce.png",
    githubUrl: "https://github.com/bhandari-nikita/ecommerce-backend-fastapi",
    liveUrl: "https://ecommerce-backend-fastapi-syfl.onrender.com",
    docsUrl: "https://ecommerce-backend-fastapi-syfl.onrender.com/docs",
    gradient: "from-blue-500/20 to-purple-500/20",
    icon: "🛒",
  },
  {
    id: "warehouse-management",
    title: "Warehouse Management System",
    description: "Production-ready warehouse management backend with inventory tracking, stock transfers, RBAC, and PostgreSQL.",
    overview:
      "A full-featured Warehouse Management System designed for manufacturing companies. Tracks stock levels across multiple locations, manages inbound/outbound shipments, and generates operational reports.",
    tech: ["Python", "FastAPI", "PostgreSQL", "SQLAlchemy", "REST APIs", "Pydantic"],
    category: "backend",
    features: [
      "Real-time inventory tracking across locations",
      "Inbound & outbound shipment management",
      "Low-stock alerts & reorder workflows",
      "Operational analytics dashboard",
      "Barcode scanning integration",
    ],
    problemSolved:
      "Created to streamline inventory management, stock movement, and warehouse operations using role-based access control.",
    image: "/projects/warehouse.png",
    githubUrl: "https://github.com/bhandari-nikita/warehouse-management-backend",
    docsUrl: "https://warehouse-management-backend-joh9.onrender.com/docs",
    liveUrl: "https://warehouse-management-backend-joh9.onrender.com",
    gradient: "from-cyan-500/20 to-blue-500/20",
    icon: "🏭",
  },
  {
    id: "excel-dashboard",
    title: "Excel Business Dashboard",
    description: "Interactive Excel dashboard for sales analytics featuring KPIs, Pivot Tables, Power Query, and dynamic charts.",
    overview:
      "A sophisticated Excel-based business intelligence dashboard that automates KPI reporting for small to medium businesses. Uses advanced formulas, pivot tables, and dynamic charts to present financial and operational data.",
    tech: ["Excel", "Power Query", "VBA", "Pivot Tables", "Data Modeling"],
    category: "analytics",
    features: [
      "Dynamic pivot tables & interactive charts",
      "Automated data refresh via Power Query",
      "KPI cards with conditional formatting",
      "Month-over-month trend analysis",
      "One-click PDF report generation",
    ],
    problemSolved:
      "Built to simplify business reporting by converting raw sales data into interactive dashboards for faster decision making.",
    image: "/projects/excel-dashboard.png",
    githubUrl: "https://github.com/bhandari-nikita/sales-analytics-dashboard-excel",
    liveUrl: "https://view.officeapps.live.com/op/view.aspx?src=https%3A%2F%2Fraw.githubusercontent.com%2Fbhandari-nikita%2Fsales-analytics-dashboard-excel%2Frefs%2Fheads%2Fmain%2FDashboard.xlsx&wdOrigin=BROWSELINK",
    gradient: "from-green-500/20 to-cyan-500/20",
    icon: "📊",
  },
  {
    id: "powerbi-manufacturing",
    title: "Manufacturing Efficiency Dashboard",
    description: "Power BI dashboard for monitoring OEE, downtime, production efficiency, and manufacturing KPIs.",
    overview:
      "A comprehensive Power BI solution for manufacturing efficiency monitoring. Tracks Overall Equipment Effectiveness (OEE), production line performance, quality metrics, and downtime analysis across multiple facilities.",
    tech: ["Power BI", "DAX", "Power Query", "SQL", "Excel"],
    category: "analytics",
    features: [
      "OEE tracking (Availability × Performance × Quality)",
      "Real-time production line monitoring",
      "Downtime root-cause analysis",
      "Quality defect trend visualization",
      "Multi-facility comparative reports",
    ],
    problemSolved:
      "Designed to help manufacturing teams identify production bottlenecks and improve operational efficiency through real-time KPI visualization.",
    githubUrl: "https://github.com/bhandari-nikita/manufacturing-efficiency-dashboard-powerbi",
    image: "/projects/powerbi-dashboard.png",
    gradient: "from-yellow-500/20 to-orange-500/20",
    icon: "⚙️",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    title: "Programming",
    color: "blue",
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 90 },
      { name: "Object Oriented Design", level: 85 },
      { name: "Data Structures", level: 80 },
    ],
  },
  {
    title: "Backend",
    color: "purple",
    skills: [
      { name: "FastAPI", level: 88 },
      { name: "REST APIs", level: 90 },
      { name: "SQLAlchemy", level: 82 },
      { name: "JWT Authentication", level: 85 },
    ],
  },
  {
    title: "Database",
    color: "cyan",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "Database Design", level: 76 },
      { name: "SQL Optimization", level: 80 },
    ],
  },
  {
    title: "Analytics",
    color: "blue",
    skills: [
      { name: "Power BI", level: 88 },
      { name: "Excel", level: 90 },
      { name: "DAX", level: 70 },
      { name: "Data Visualization", level: 80 },
    ],
  },
  {
    title: "Business Intelligence",
    color: "purple",
    skills: [
      { name: "TallyPrime ERP", level: 77 },
      { name: "Power Query", level: 70 },
      { name: "Business Reporting", level: 75 },
      { name: "Data Cleaning", level: 90 },
    ],
  },
  {
    title: "Developer Tools",
    color: "cyan",
    skills: [
      { name: "Git & GitHub", level: 88 },
      { name: "Docker", level: 75 },
      { name: "Postman", level: 88 },
      { name: "VS Code", level: 92 },
    ],
  },
];

export const timelineItems: TimelineItem[] = [
  {
    year: "2026",
    title: "Portfolio & Data Analytics Projects",
    company: "Personal Projects",
    description:
      "Built interactive Excel and Power BI dashboards, created a professional portfolio, and prepared for Python Backend Developer and Data Analyst roles.",
    type: "work",
  },
  {
    year: "2025",
    title: "Python Backend Projects",
    company: "Personal Projects",
    description:
      "Built production-ready FastAPI REST APIs with PostgreSQL, JWT authentication, SQLAlchemy, and deployed backend applications including E-Commerce and Warehouse Management systems.",
    type: "work",
  },
  {
    year: "2024",
    title: "Backend & Data Analytics Learning",
    company: "Learning Journey",
    description:
      "Strengthened Python programming, SQL, Excel, and data analysis skills while building projects and exploring backend development.",
    type: "work",
  },
  {
    year: "2023",
    title: "Started B.Sc. Information Technology",
    company: "Mumbai University",
    description:
      "Began undergraduate studies in Information Technology and built a strong foundation in programming, databases, and software development.",
    type: "education",
  },
];

export const stats: Stat[] = [
  {
    value: "4+",
    label: "Projects",
    description: "Backend APIs & Analytics",
  },
  {
    value: "2+",
    label: "Backend APIs",
    description: "FastAPI & PostgreSQL",
  },
  {
    value: "2+",
    label: "Analytics Dashboards",
    description: "Excel & Power BI",
  },
  {
    value: "12+",
    label: "Technologies",
    description: "Python, SQL & More",
  },
];
