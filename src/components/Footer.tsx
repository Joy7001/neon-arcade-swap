
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

interface FooterProps {
  isRetro?: boolean;
}

const Footer: React.FC<FooterProps> = ({ isRetro = false }) => {
  return (
    <footer className={`py-8 mt-12 border-t ${isRetro ? 'border-skill-purple/30' : 'border-skill-purple/20'}`}>
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Logo isRetro={isRetro} />
            <p className={`mt-2 text-white/60 ${isRetro ? 'font-pixel text-xs' : 'font-future text-sm'}`}>
              Exchange skills. Grow together.
            </p>
          </div>
          
          <div className={`flex flex-wrap justify-center gap-x-6 gap-y-2 ${isRetro ? 'font-pixel text-xs' : 'font-future text-sm'}`}>
            <Link to="#" className="text-white/70 hover:text-skill-purple transition-colors">About</Link>
            <Link to="#" className="text-white/70 hover:text-skill-purple transition-colors">Contact</Link>
            <Link to="#" className="text-white/70 hover:text-skill-purple transition-colors">Privacy</Link>
            <Link to="#" className="text-white/70 hover:text-skill-purple transition-colors">Terms</Link>
          </div>
        </div>
        
        <div className="mt-8 text-center">
          <p className={`text-white/40 ${isRetro ? 'font-pixel text-[10px]' : 'font-future text-xs'}`}>
            © 2025 SkillSwap. All rights reserved.
            {isRetro && (
              <span className="animate-blink ml-1">_</span>
            )}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
