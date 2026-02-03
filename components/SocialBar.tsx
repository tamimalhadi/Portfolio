
import React from 'react';
import { SOCIAL_LINKS } from '../constants';

export const SocialBar: React.FC = () => {
  return (
    <div className="fixed left-6 bottom-0 hidden lg:flex flex-col items-center space-y-6 after:content-[''] after:w-[1px] after:h-24 after:bg-slate-700">
      {SOCIAL_LINKS.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-indigo-400 hover:-translate-y-1 transition-all"
          title={social.name}
        >
          {social.icon}
        </a>
      ))}
    </div>
  );
};
