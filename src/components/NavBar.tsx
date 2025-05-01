
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
    <nav className="w-full border-b border-skill-purple/20 bg-skill-black/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-4">
            <Link to={isRetro ? '/' : '/home'}>
              <Logo isRetro={isRetro} />
            </Link>
          </div>
          
          {!isRetro && (
            <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-skill-purple h-4 w-4" />
                <Input 
                  type="search" 
                  placeholder="Search skills..." 
                  className="w-full pl-10 bg-transparent border border-skill-purple/30 focus:border-skill-purple rounded-full" 
                />
              </div>
            </div>
          )}
          
          <div className="flex items-center space-x-4">
            {isRetro ? (
              <Link 
                to="/home" 
                className="px-4 py-2 bg-skill-purple text-white font-light text-sm rounded hover:bg-skill-purple-light transition-colors"
              >
                GET STARTED
              </Link>
            ) : (
              <>
                <Link to="/" className="text-white/70 hover:text-white transition-colors font-light">Back to Intro</Link>
                <Link 
                  to="#" 
                  className="px-4 py-2 bg-skill-purple/90 hover:bg-skill-purple text-white font-light rounded transition-colors"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
