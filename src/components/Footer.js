
import React from 'react';
import Logo from './Logo';
import { Link } from 'react-router-dom';

const Footer = ({ isRetro = false }) => {
  return (
    <footer className={`py-4 mt-5 border-top ${isRetro ? 'border-skill-purple/30' : 'border-skill-purple/20'}`} style={{ borderColor: 'rgba(155, 135, 245, 0.2)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 mb-4 mb-md-0">
            <Logo isRetro={isRetro} />
            <p className={`mt-2 ${isRetro ? 'font-pixel text-xs' : 'font-future text-sm'}`} style={{ color: 'rgba(255, 255, 255, 0.6)' }}>
              Exchange skills. Grow together.
            </p>
          </div>
          
          <div className="col-md-6">
            <div className="d-flex flex-wrap justify-content-center justify-content-md-end gap-3">
              <Link to="#" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>About</Link>
              <Link to="#" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Contact</Link>
              <Link to="#" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Privacy</Link>
              <Link to="#" className="text-decoration-none" style={{ color: 'rgba(255, 255, 255, 0.7)' }}>Terms</Link>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-4">
          <p style={{ color: 'rgba(255, 255, 255, 0.4)', fontSize: isRetro ? '10px' : '12px' }}>
            © 2025 SkillSwap. All rights reserved.
            {isRetro && <span className="animate-blink ms-1">_</span>}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
