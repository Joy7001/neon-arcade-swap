
import React from 'react';
import { Card } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  icon: string;
  description: string;
  level: string;
  color?: string;
  image?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  icon, 
  description, 
  level,
  color = 'skill-purple',
  image
}) => {
  return (
    <Card className="bg-gradient-to-br from-skill-black via-skill-black/95 to-skill-black/90 border border-skill-purple/20 hover:border-skill-purple/40 transition-all duration-300 hover:translate-y-[-2px] cursor-pointer overflow-hidden group backdrop-blur-sm">
      {image && (
        <div className="w-full h-40 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover object-center opacity-70 group-hover:opacity-90 transition-opacity duration-300"
          />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xl text-white font-light tracking-wide">{title}</span>
          <span className={`text-${color} text-xl`}>{icon}</span>
        </div>
        <p className="text-white/70 mb-4 line-clamp-2 group-hover:line-clamp-none font-light">{description}</p>
        <div className={`inline-block px-3 py-1 rounded-full text-${color} border border-${color}/30 text-sm font-light tracking-wide`}>
          {level}
        </div>
      </div>
      <div className={`h-[1px] w-full bg-gradient-to-r from-transparent via-${color}/40 to-transparent`}></div>
    </Card>
  );
};

export default SkillCard;
