export interface Project {
  id: string;
  title: string;
  description: string;
  overview: string;
  tech: string[];
  category: "backend" | "analytics" | "fullstack";
  features: string[];
  githubUrl: string;
  problemSolved?: string;
  liveUrl?: string;
  docsUrl?: string;
  gradient: string;
  icon: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  title: string;
  color: string;
  skills: Skill[];
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  type: "education" | "work" | "achievement";
}

export interface Stat {
  value: string;
  label: string;
  description: string;
}
