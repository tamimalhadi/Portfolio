
import React from 'react';
import { Facebook, Instagram, Send, Code, Layout, Smartphone } from 'lucide-react';
import { SocialLink, Project } from './types';

export const SOCIAL_LINKS: SocialLink[] = [
  {
    name: 'Facebook',
    url: 'https://www.facebook.com/link.diya.ki.hobe.bro',
    icon: <Facebook size={24} />,
    color: 'hover:bg-blue-600'
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/ig_tamimmm',
    icon: <Instagram size={24} />,
    color: 'hover:bg-pink-600'
  },
  {
    name: 'Telegram',
    url: 'https://t.me/father_teresa',
    icon: <Send size={24} />,
    color: 'hover:bg-sky-500'
  }
];

export const PROJECTS: Project[] = [
  {
    title: "Modern UI Experience",
    description: "Crafting beautiful and functional user interfaces with React and Tailwind CSS.",
    tags: ["React", "Design", "Frontend"],
    image: "https://picsum.photos/seed/ui/600/400"
  },
  {
    title: "Digital Branding",
    description: "Helping individuals build their digital presence across social platforms.",
    tags: ["Branding", "Social", "Strategy"],
    image: "https://picsum.photos/seed/brand/600/400"
  },
  {
    title: "Content Creation",
    description: "Developing engaging content that resonates with modern audiences.",
    tags: ["Creative", "Marketing", "Video"],
    image: "https://picsum.photos/seed/content/600/400"
  }
];

export const SERVICES = [
  {
    title: "Web Development",
    description: "Building responsive and lightning-fast websites.",
    icon: <Code size={32} className="text-indigo-500" />
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive user flows and beautiful visuals.",
    icon: <Layout size={32} className="text-purple-500" />
  },
  {
    title: "App Design",
    description: "Designing sleek mobile experiences for iOS and Android.",
    icon: <Smartphone size={32} className="text-pink-500" />
  }
];
