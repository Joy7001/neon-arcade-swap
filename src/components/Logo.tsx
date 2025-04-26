
import React from 'react';

interface LogoProps {
  isRetro?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isRetro = false }) => {
  return (
    <div className={`logo ${isRetro ? 'font-pixel text-xl' : 'font-future text-xl'}`}>
      <span className="text-white">Skill</span>
      <span className="text-skill-purple">S</span>
      <span className="text-skill-cyan">S</span>
      <span className="text-white">wap</span>
    </div>
  );
};

export default Logo;
