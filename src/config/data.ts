// ===== PERSONAL INFO =====
export const personalInfo = {
  name: "Likith",
  title: "Full Stack Developer",
  location: "Bengaluru, India",
  phone: "+91 9538279547",
  email: "itsmelikithreddy@gmail.com",
  github: "https://github.com/LikithReddy07",
  linkedin: "https://linkedin.com/in/likithreddys",
  website: "https://likithreddy07.github.io/portfolio/",
};

// ===== HERO SECTION =====
export const heroData = {
  roles: [
    "Full Stack Developer",
    "Cloud Architect",
    "System Designer",
    "Performance Engineer",
    "AI-Augmented Developer",
  ],
  tagline:
    "Building systems that scale at 30,000 feet. Microservices, serverless APIs, and cloud-native architectures — optimized for performance, observability, and developer velocity.",
};

// ===== ABOUT SECTION =====
export const aboutData = {
  bio: `Software Developer with 4 years of experience building fault-tolerant, highly scalable systems. My expertise lies in designing microservices architectures, deploying serverless solutions on AWS, and driving cloud-native modernization across airline and agriculture technology. I focus on performance optimization, observability, and using AI-powered development tools to ship better code faster.`,
  highlightedKeywords: [
    "microservices",
    "serverless",
    "cloud-native",
    "performance optimization",
    "observability",
    "AI-powered development tools",
  ],
  stats: [
    { value: "4+", label: "Years Exp" },
    { value: "2", label: "Industries" },
    // { value: "10+", label: "Systems Built" },
    // { value: "6", label: "Awards Won" },
  ],
};

// ===== EXPERIENCE SECTION =====
export interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  subtitle: string;
  icon: string;
  chipStyle: "cyan" | "violet";
  achievements: string[];
  chips: string[];
  awards?: string;
}

export const experienceData: ExperienceEntry[] = [
  {
    company: "Delta Airlines",
    role: "Software Development Engineer",
    period: "Jul 2025 – Present",
    subtitle: "Check-In Platform",
    icon: "✈",
    chipStyle: "cyan",
    achievements: [
      "Migrated check-in APIs from ROSA (OpenShift) to serverless AWS Lambda behind API Gateway, improving scalability and cutting infra costs.",
      "Built automated reporting tool tracking API success rates across partner airlines with real-time visibility.",
      "Cut CloudWatch EMF costs by 70% by removing redundant metric dimensions without losing observability.",
      "Worked across multi-carrier check-in flows (OA*/DL and DL*/OA) - PNR processing, travel doc validation, boarding pass generation.",
      "Set up AI-augmented dev workflows using agentic AI tools with custom rules and domain-specific knowledge base, cutting ramp-up time for new devs.",
    ],
    chips: [
      "AWS Lambda",
      "DynamoDB",
      "API Gateway",
      "Microservices",
      "AI Dev Workflows",
      "CloudWatch",
    ],
  },
  {
    company: "Bayer Crop Science",
    role: "Software Development Engineer",
    period: "Aug 2022 – Jul 2025",
    subtitle: "Precision Genomics Platform",
    icon: "🧬",
    chipStyle: "violet",
    achievements: [
      "Replaced Hellfire (legacy platform) with modern web app - 20% faster DNA sample reaction processing.",
      "Delivered MABC Workflow to production in 7 months, increasing sample processing efficiency by 30%.",
      "Integrated Auto Scoring model to cut manual scoring effort by 50%. Designed KPI data pipelines using AWS Lambda.",
      "Built ETL job automating a fully manual workflow, reducing that team's workload by 99%.",
      "Developed Insect Control Lab app using MS Power Apps + Node.js Express API backed by DynamoDB.",
      "Automated data sync between lab systems and AWS S3 with secure multi-hop file transfer.",
      "Built Python bot integrated with GPT-3.5 for document Q&A, cutting manual lookup time significantly.",
    ],
    chips: [
      "Java Spring Boot",
      "PostgreSQL",
      "AWS S3/Lambda",
      "Node.js",
      "Power Apps",
      "GPT Integration",
    ],
    awards:
      "6 Awards: Top Performer, Passion in Action, Walk the Extra Mile, Star of BRC, Making a Difference, Bayspot",
  },
];

// ===== EDUCATION SECTION =====
export interface EducationEntry {
  icon: string;
  degree: string;
  major?: string;
  institution: string;
  period: string;
  location?: string;
}

export const educationData: EducationEntry[] = [
  {
    icon: "🎓",
    degree: "Bachelor of Engineering",
    major: "Computers",
    institution: "Sir M Visvesvaraya Institute of Technology",
    period: "2018 – 2022",
    location: "Bengaluru",
  },
  {
    icon: "📚",
    degree: "Pre University",
    institution: "VBR PU College",
    period: "2016 – 2018",
  },
  {
    icon: "🏫",
    degree: "School",
    institution: "Jyothi School",
    period: "2010 – 2016",
  },
];

// ===== TECH STACK =====
export interface TechItem {
  name: string;
  logoFile: string; // filename in assets/vectors/
}

export const techStackData: TechItem[] = [
  { name: "Java", logoFile: "java.svg" },
  { name: "Spring Boot", logoFile: "spring.svg" },
  { name: "React", logoFile: "react.svg" },
  { name: "TypeScript", logoFile: "typescript.svg" },
  { name: "Python", logoFile: "python.svg" },
  { name: "Node.js", logoFile: "nodejs.svg" },
  { name: "AWS", logoFile: "aws.svg" },
  { name: "Docker", logoFile: "docker.svg" },
  { name: "GitHub Actions", logoFile: "githubActions.svg" },
  { name: "PostgreSQL", logoFile: "postgreSQL.svg" },
  { name: "Bash", logoFile: "bash.svg" },
  { name: "Git", logoFile: "git.svg" },
  { name: "Power Platform", logoFile: "powerPlatform.svg" },
];

// ===== NAV LINKS =====
export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Tech", href: "#tech" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];
