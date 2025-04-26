
import React from 'react';
import { Link } from 'react-router-dom';

interface RetroButtonProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

const RetroButton: React.FC<RetroButtonProps> = ({ to, children, className = '' }) => {
  return (
    <Link to={to} className={`group relative inline-block ${className}`}>
      <span className="absolute inset-0 border-2 border-skill-purple rounded translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-200"></span>
      <span className="relative block px-8 py-4 bg-skill-black border-2 border-skill-purple rounded font-pixel text-skill-purple group-hover:text-white group-hover:bg-skill-purple transition-colors duration-200 neon-text">
        {children}
        <span className="absolute right-3 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">▶</span>
      </span>
    </Link>
  );
};

export default RetroButton;
