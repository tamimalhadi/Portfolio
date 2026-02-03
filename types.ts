
export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
  color: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
}
