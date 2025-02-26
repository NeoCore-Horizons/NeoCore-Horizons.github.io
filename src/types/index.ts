export interface VisionCard {
  title: string;
  description: string;
}

export interface ServiceCard {
  title: string;
  description: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image?: string;
  technologies?: string[];
  impact?: string;
}