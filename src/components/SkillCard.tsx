
import React from 'react';
import { Card } from '@/components/ui/card';

interface SkillCardProps {
  title: string;
  icon: string;
  description: string;
  level: string;
  color?: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ 
  title, 
  icon, 
  description, 
  level,
  color = 'skill-purple'
}) => {
  return (
    <Card className={`bg-skill-black border border-${color}/50 hover:border-${color} transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden group`}>
      <div className="p-5">
        <div className="flex items-center justify-between mb-4">
          <span className="font-future text-xl text-white">{title}</span>
          <span className={`text-${color} text-xl`}>{icon}</span>
        </div>
        <p className="text-white/70 mb-4 line-clamp-2 group-hover:line-clamp-none">{description}</p>
        <div className={`inline-block px-3 py-1 rounded-full text-${color} border border-${color}/50 text-sm font-future`}>
          {level}
        </div>
      </div>
      <div className={`h-1 w-full bg-${color}/70`}></div>
    </Card>
  );
};

export default SkillCard;
