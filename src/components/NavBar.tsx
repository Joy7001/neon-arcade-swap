
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';

interface NavBarProps {
  isRetro?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ isRetro = false }) => {
  return (
    <nav className={`w-full py-4 px-6 ${isRetro ? 'border-b border-skill-purple/30' : ''}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Link to={isRetro ? '/' : '/home'}>
            <Logo isRetro={isRetro} />
          </Link>
        </div>
        
        {!isRetro && (
          <div className="hidden md:flex items-center w-1/3">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-skill-purple h-4 w-4" />
              <Input 
                type="search" 
                placeholder="Search skills..." 
                className="w-full pl-10 bg-transparent border border-skill-purple/50 focus:border-skill-purple rounded-full" 
              />
            </div>
          </div>
        )}
        
        <div className="flex items-center space-x-4">
          {isRetro ? (
            <Link 
              to="/home" 
              className="px-4 py-2 bg-skill-purple text-white font-pixel text-xs rounded hover:bg-skill-purple-light transition-colors neon-border"
            >
              GET STARTED
            </Link>
          ) : (
            <>
              <Link to="/" className="text-white/70 hover:text-white transition-colors font-future">Back to Intro</Link>
              <Link 
                to="#" 
                className="px-4 py-2 bg-skill-purple text-white font-future rounded hover:bg-skill-purple-light transition-colors"
              >
                Sign In
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
