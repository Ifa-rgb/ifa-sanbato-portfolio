import { PersonalInfo, Project, Skill, EducationItem, Testimonial } from '../types/portfolio';
import agroAppImage from "../assets/images/project_agro_app_1792150483062.jpg";
import calculatorImage from "../assets/images/project_calculator_1792150482742.jpg";
import schoolSystemImage from "../assets/images/project_school_system_1792150482587.jpg";
export const personalInfo: PersonalInfo = {
  fullName: "IFA SANBATO",
  title: "Full-Stack Developer and Software Engineer",
  profileImage: "/src/assets/images/profile.jpg",
  email: "ifaasanbatoo@gmail.com",
  phone: "+251 915 241 208",
  location: "Dembi Dollo, Oromia, Ethiopia",
  region: "Dembi Dollo, West Oromia",
  country: "Ethiopia",
  careerObjective: "Passionate Full-Stack Developer and Software Engineer seeking a high-impact web development job. Dedicated to crafting fast, responsive, and maintainable web applications using modern React, JavaScript, PHP, and MySQL architectures. Ready to join a forward-looking team and deliver immediate product value.",
  bio: "I am a motivated Software Engineer based in Dembi, Ethiopia, with solid technical foundations across frontend engineering, backend integrations, and relational database systems. I specialize in building user-focused web applications with React, JavaScript (ES6+), modern CSS, Node.js, and developing secure backend APIs using PHP and MySQL. Driven by disciplined problem solving and continuous self-improvement, I aim to create robust software solutions that solve real community and business challenges.",
  languages: [
    { language: "Afan Oromo", proficiency: "Native / Mother Tongue" },
    { language: "English", proficiency: "Professional Working Proficiency" },
    { language: "Amharic", proficiency: "Fluent" }
  ],
  availability: "Open for Full-time Roles, Remote & Hybrid Web Development Opportunities",
  socialLinks: {
    github: "https://github.com/ifasanbato",
    linkedin: "https://linkedin.com/in/ifa-sanbato",
    telegram: "https://t.me/ifasanbato",
    email: "mailto:ifaasanbatoo@gmail.com",
    phone: "tel:+251915241208"
  }
};

export const skillsData: Skill[] = [
  {
    name: "React",
    category: "Frontend",
    level: 70,
    experience: "Modern SPAs, Hooks, State Management",
    description: "Component-driven development, custom hooks, reusable UI architectures, virtual DOM optimization, and responsive interfaces.",
    featured: true
  },
  {
    name: "JavaScript (ES6+)",
    category: "Frontend",
    level: 80,
    experience: "Async/Await, DOM APIs, Modular Code",
    description: "Deep knowledge of modern ECMAScript, promises, asynchronous event loops, array methods, and client-side data manipulation.",
    featured: true
  },
  {
    name: "HTML5",
    category: "Frontend",
    level: 90,
    experience: "Semantic Markup, Accessibility (a11y)",
    description: "Clean semantic markup, accessible forms, audio/video APIs, meta structures, and mobile-friendly document outlining.",
    featured: true
  },
  {
    name: "CSS3 & Modern Styling",
    category: "Frontend",
    level: 92,
    experience: "Flexbox, CSS Grid, Tailwind CSS",
    description: "Responsive layouts, mobile-first design, fluid typography, smooth CSS keyframe transitions, and custom utility systems.",
    featured: true
  },
  {
    name: "PHP",
    category: "Backend & Database",
    level: 82,
    experience: "Server-Side Scripting, REST APIs",
    description: "Server-side logic, object-oriented PHP, MVC structure patterns, secure request handling, session management, and API design.",
    featured: true
  },
  {
    name: "MySQL",
    category: "Backend & Database",
    level: 85,
    experience: "Relational Modeling, Query Optimization",
    description: "Relational schema design, normalization, foreign keys, index optimization, prepared statements, and CRUD database transactions.",
    featured: true
  },
  {
    name: "Node.js",
    category: "Backend & Database",
    level: 75,
    experience: "Express.js, API Routing, NPM",
    description: "Building lightweight web servers, asynchronous middleware, JSON API endpoints, and environment configurations.",
    featured: true
  },
  {
    name: "Problem Solving",
    category: "Core & Tools",
    level: 74,
    experience: "Algorithms, Analytical Thinking, Debugging",
    description: "Breaking complex engineering requirements into modular algorithmic steps, efficient data handling, and root-cause debugging.",
    featured: true
  },
  {
    name: "Git & GitHub",
    category: "Core & Tools",
    level: 75,
    experience: "Version Control, Branching, Collaboration",
    description: "Code commit discipline, branch management, merge conflict resolution, open source collaboration, and repository management.",
    featured: false
  },
  {
    name: "RESTful APIs",
    category: "Backend & Database",
    level: 87,
    experience: "JSON Endpoints, HTTP Methods, Fetch/Axios",
    description: "Designing and consuming standard REST architectural endpoints, error handling, status codes, and asynchronous fetching.",
    featured: false
  },
  {
    name: "Responsive Web Design",
    category: "Frontend",
    level: 94,
    experience: "Mobile-First, Breakpoints, Cross-Browser",
    description: "Ensuring pixel-perfect fluid layouts across smartphones, tablets, laptops, and ultra-wide screens without overflow.",
    featured: false
  },
  {
    name: "Database Security & Auth",
    category: "Backend & Database",
    level: 80,
    experience: "SQL Injection Prevention, Hash & Salt",
    description: "Using PDO prepared statements, password hashing (bcrypt), sanitized user input validation, and access control patterns.",
    featured: false
  }
];

export const educationData: EducationItem[] = [
  {
    degree: "B.Sc. in Software Engineering",
    institution: "University Level Higher Education",
    location: "Ethiopia",
    period: "Higher Education",
    field: "Software Engineering & Computer Science",
    status: "Completed / Degree Program",
    description: "Rigorous academic and practical study focused on software engineering principles, full-stack systems design, algorithm analysis, relational databases, and modern software development life cycles.",
    achievements: [
      "Acquired strong foundations in Object-Oriented Programming (OOP) and Software System Architecture",
      "Built multi-tier database-driven web applications and interactive software prototypes",
      "Collaborated on software engineering capstone projects utilizing Git and agile methodologies",
      "Mastered data structures, algorithm optimization, and secure software development practices"
    ],
    courses: [
      "Data Structures & Algorithms",
      "Object-Oriented Programming",
      "Database Management Systems (RDBMS)",
      "Web Technologies & Systems",
      "Software Engineering & Architecture",
      "Computer Networks & Security",
      "Operating Systems & Systems Programming"
    ]
  },
  {
    degree: "Preparatory & College Education",
    institution: "Preparatory Secondary & College Institute",
    location: "Oromia, Ethiopia",
    period: "College / Preparatory Phase",
    field: "Natural Sciences & Pre-Engineering",
    status: "Completed with Distinction",
    description: "Intensive preparatory science education emphasizing advanced mathematics, analytical physics, logic, and introductory computational fundamentals that formed the groundwork for engineering studies.",
    achievements: [
      "Demonstrated outstanding academic performance in advanced Mathematics and Physics",
      "Selected for national higher education entrance with top percentiles in quantitative problem-solving",
      "Active participant in academic science clubs and technology workshops"
    ],
    courses: [
      "Advanced Mathematics & Calculus",
      "Analytical Physics",
      "Logic & Reasoning",
      "Introductory Information Technology"
    ]
  },
  {
    degree: "General Secondary Education",
    institution: "Secondary High School",
    location: "Dembi Dollo, Oromia, Ethiopia",
    period: "Secondary School Phase",
    field: "General Sciences & Academic Foundations",
    status: "Completed",
    description: "Foundational secondary school education establishing strong linguistic competence in Afan Oromo, English, and Amharic alongside primary science and mathematical skills.",
    achievements: [
      "Graduated with top academic standing in scientific and mathematical disciplines",
      "Built initial passion for computer programming and digital technologies"
    ],
    courses: [
      "General Mathematics",
      "Natural Sciences",
      "English Language & Communication",
      "Social Sciences"
    ]
  }
];

export const projectsData: Project[] = [
  {
    image: "agroAppImage,",
    id: "agro-app",
    title: "Agro App",
    subtitle: "Smart Agriculture Management & Farmers Market Platform",
    description: "A specialized agricultural web application designed to empower Ethiopian farmers with crop tracking, regional commodity market price insights, harvest scheduling, and direct buyer connections.",
    longDescription: "Agro App addresses critical challenges faced by local farmers and agricultural distributors in Ethiopia. By providing transparent, real-time commodity pricing for staples like Teff, Maize, Wheat, and Coffee across major regional trading hubs (Addis Ababa, Adama, Jimma, Bahir Dar), the application prevents price exploitation. It includes intuitive crop harvest recording, weather-informed advisory alerts, and an inventory tracker that works smoothly even on low-bandwidth mobile connections.",
    image: "/src/assets/images/project_agro_app_1792150483062.jpg",
    tags: ["React", "JavaScript", "PHP / MySQL Ready", "Tailwind CSS", "Data Analytics"],
    category: "Full-Stack",
    categories: ["Web", "Mobile", "API"],
    features: [
      "Regional market commodity price index for Teff, Wheat, Maize, and Coffee with trend tracking",
      "Farmer crop cycle logger with planting dates, harvest volume forecasts, and yield metrics",
      "Interactive regional market distribution map identifying high-volume trade centers",
      "Mobile-optimized responsive UI tailored for rural and urban farmers on handheld devices",
      "Structured PHP & MySQL backend readiness for centralized warehouse inventory management"
    ],
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "PHP REST API", "MySQL", "Lucide Icons"],
    role: "Lead Full-Stack Developer",
    highlights: [
      "Designed specifically for Ethiopian agricultural market contexts and crop varieties",
      "Sub-second client rendering and lightweight bundle optimized for 3G/4G connectivity",
      "Normalized relational schema for harvests, markets, and crop varieties ready for MySQL"
    ],
    backendReadiness: "Equipped with complete PHP endpoints and MySQL schema for farmer authentication, crop harvest submissions, and market price updates."
  },
  {
    image: "calculatorImage",
    id: "modern-calculator",
    title: "Interactive Web Calculator",
    subtitle: "Precision Scientific & Financial Calculation Suite",
    description: "A fast, sleek web calculator featuring real-time arithmetic, financial calculation modules, an OLED-style display with cyan glows, and persistent calculation history.",
    longDescription: "More than a basic arithmetic tool, this project showcases clean state-machine architecture in React. It features error-free handling of floating-point mathematics, order of operations precedence, keyboard shortcut bindings, a persistent calculation log, memory storage (M+, M-, MR), and financial estimation mini-tools (interest and currency estimations). Built with a modern dark slate glassmorphism look with cyan neon indicators.",
    image: "/src/assets/images/project_calculator_1792150482742.jpg",
    tags: ["React", "JavaScript", "Algorithms", "CSS3 / Tailwind", "State Management"],
    category: "Frontend",
    categories: ["Web", "Mobile"],
    features: [
      "Full standard and scientific arithmetic operations (+, -, ×, ÷, %, exponents, square root)",
      "Clean OLED-inspired digital display with expression preview and instant result calculation",
      "Calculation history log allowing users to review, reuse, or clear past mathematical entries",
      "Full keyboard support (numpad, enter, backspace, escape) for rapid desktop input",
      "Memory bank operations (MC, MR, M+, M-) and zero division safeguards"
    ],
    technologies: ["React", "JavaScript ES6+", "Tailwind CSS", "Local Storage", "Sound & Keyboard APIs"],
    role: "Frontend Engineer & UI Architect",
    highlights: [
      "Zero floating point rounding anomalies using precision formatting algorithms",
      "Fluid tactile button press animations and dark navy glassmorphic surface",
      "Fully responsive keypad adapting from compact mobile touchscreens to wide monitors"
    ]
  },
  {
    image: "schoolSystemImage",
    id: "school-management",
    title: "School Management Website",
    subtitle: "Comprehensive Academic Administration & Student Portal",
    description: "An end-to-end web system for educational institutions featuring student enrollment registries, academic grade breakdowns, class timetables, and teacher rosters.",
    longDescription: "The School Management Website is an enterprise-grade administration portal built to streamline institutional workflows for schools and colleges. Administrators and teachers can register students, assign classes, monitor attendance records, enter semester examination marks, and generate automated GPA/grade analytics. Built with a modular React frontend connected to an architectural PHP and MySQL database model with role-based access control.",
    image: "/src/assets/images/project_school_system_1792150482587.jpg",
    tags: ["React", "PHP", "MySQL", "JavaScript", "Enterprise UI", "Role-Based Access"],
    category: "Full-Stack",
    categories: ["Web", "API"],
    features: [
      "Student enrollment system with profile cards, student IDs, and enrollment status tracking",
      "Weekly interactive timetable visualizer for multi-period class scheduling across grade levels",
      "Academic performance records and automated GPA calculations with grade status indicators",
      "Teacher roster directory showing assigned departments, subjects, and contact information",
      "Secure backend architecture utilizing PHP sessions, prepared SQL statements, and MySQL tables"
    ],
    technologies: ["React", "PHP", "MySQL", "JavaScript", "Tailwind CSS", "RESTful Architecture"],
    role: "Full-Stack Software Engineer",
    highlights: [
      "Normalized relational schema linking students, courses, grades, and instructors",
      "Clean tabular dashboards with instant multi-field search and filter capability",
      "Role-tailored interfaces for administrators, educators, and academic advisors"
    ],
    backendReadiness: "Designed with normalized MySQL tables (students, teachers, courses, enrollments, grades) and robust PHP CRUD handlers."
  }
];

export const experienceHighlights = [
  { label: "Core Focus", value: "Full-Stack Web Dev" },
  { label: "Frontend", value: "React & Modern JS" },
  { label: "Backend Ready", value: "PHP & MySQL" },
  { label: "Location", value: "Dembi Dollo, Ethiopia" },
  { label: "Status", value: "Ready for Work" }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Dr. Getachew Tadesse",
    role: "Computer Science Faculty & Academic Advisor",
    companyOrOrg: "Higher Education / Software Dept",
    initials: "GT",
    relationship: "Academic Advisor & Software Engineering Mentor",
    content: "Ifa has demonstrated an exceptional grasp of software engineering fundamentals and web application architecture. During our advanced database and web development coursework, his diligence in normalizing MySQL schemas and integrating reactive interfaces with React set a high standard. He pairs technical acumen with rare discipline and intellectual curiosity.",
    contentOm: "Ifaan dandeettii ajaa'ibaa teeknoolojii weebii fi bu'uura injinarummaa sooftiweerii qaba. Qindeeffama deetaa-beezii MySQL fi fuula React saffisaa ijaaruun dandeettii guddaa agarsiiseera. Hojii fi naamusa olaanaa qaba.",
    rating: 5,
    date: "2024",
    projectRelation: "Database & Web Engineering"
  },
  {
    id: "test-2",
    name: "Tolera Daba",
    role: "Agricultural Distribution Lead",
    companyOrOrg: "Oromia Regional Produce Network",
    initials: "TD",
    relationship: "Client & Project Stakeholder",
    content: "Ifa developed the Agro Web Platform prototype for our regional agricultural community. The crop marketplace catalog, localized commodity price tracker, and clean mobile responsiveness exceeded our expectations. He listened patiently to farmers' and merchants' feedback, delivering a tool that solved real pain points.",
    contentOm: "Ifaan sirna weebii qonnaa keenyaaf fakkii qulqullina qabu nuuf hojjeteera. Gabaa oomisha qonnaa fi gatii oomishaa guyyaa guyyaan hordofuu dandeessisa. Dandeettii fi amanamummaa isaatiif baay'een galateeffadha.",
    rating: 5,
    date: "2024",
    projectRelation: "Agro Web Application"
  },
  {
    id: "test-3",
    name: "Biruk Alemayehu",
    role: "Senior Full-Stack Developer",
    companyOrOrg: "Fintech & Web Solutions",
    initials: "BA",
    relationship: "Technical Collaborator & Peer",
    content: "Collaborating with Ifa on full-stack web solutions was an absolute pleasure. He writes clean, predictable ES6+ JavaScript, approaches CSS responsive layouts with surgical precision, and embraces feedback constructively. Any engineering team looking for a dedicated and energetic full-stack developer will find him an immediate asset.",
    contentOm: "Ifaa wajjin pirojektoota teeknoolojii weebii irratti hojjechuun baay'ee nama gammachiisa. Koodii qulqullina qabu barreessa, rakkoolee teeknikaa saffisaan fura, dandeettii cimaa fi kaka'umsa guddaa qaba.",
    rating: 5,
    date: "2024",
    projectRelation: "Full-Stack Development"
  },
  {
    id: "test-4",
    name: "Hana Mekonnen",
    role: "Software Engineering Peer & Co-creator",
    companyOrOrg: "School Portal Project Team",
    initials: "HM",
    relationship: "Project Teammate",
    content: "Ifa’s attention to detail regarding user experience and role-based permissions was pivotal in our School Management System. He structured the PHP session handling and MySQL relational tables cleanly, enabling seamless student grade and schedule management without friction.",
    contentOm: "Xiyyeeffannaan Ifaan fuula fayyadamaa (UI/UX) qulqulluu fi salphaa ta'e ijaaruuf qabu baay'ee dinqisiisaadha. Sirna bulchiinsa mana barumsaa PHP fi MySQL fayyadamuun saffisaan akka hojjetu taasiseera.",
    rating: 5,
    date: "2023",
    projectRelation: "School Management System"
  }
];

