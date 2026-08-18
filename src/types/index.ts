export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  link: string;
  github?: string;
}

export interface Skill {
  name: string;
  level: number;
  icon?: React.ReactNode;
}

export interface NavLink {
  label: string;
  href: string;
}
