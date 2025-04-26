
import React from 'react';

interface LogoProps {
  isRetro?: boolean;
}

const Logo: React.FC<LogoProps> = ({ isRetro = false }) => {
  return (
    <div className={`logo ${isRetro ? 'font-pixel text-xl' : 'font-light text-xl tracking-wide'}`}>
      <span className="text-white">Skill</span>
      <span className="text-skill-purple font-normal">S</span>
      <span className="text-skill-cyan font-normal">S</span>
      <span className="text-white">wap</span>
    </div>
  );
};

export default Logo;
