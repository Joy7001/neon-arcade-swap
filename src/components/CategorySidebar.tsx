
import React from 'react';
import { User, Home, Search, Book, MessageSquare, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, isActive = false }) => {
  return (
    <Button
      variant="ghost"
      className={`w-full flex items-center gap-3 py-2 px-4 rounded-lg transition-colors ${
        isActive 
          ? 'bg-skill-purple/20 text-skill-purple' 
          : 'hover:bg-skill-purple/10 text-white/70 hover:text-white'
      }`}
    >
      {icon}
      <span className="font-light text-sm">{label}</span>
    </Button>
  );
};

const CategorySidebar = () => {
  return (
    <div className="w-64 border-r border-skill-purple/20 h-screen sticky top-0 py-6 px-2 bg-skill-black">
      <div className="space-y-1">
        <SidebarItem icon={<Home size={18} />} label="Home" isActive />
        <SidebarItem icon={<User size={18} />} label="Profile" />
        <SidebarItem icon={<Search size={18} />} label="Explore" />
        <SidebarItem icon={<MessageSquare size={18} />} label="Messages" />
        <SidebarItem icon={<Book size={18} />} label="My Skills" />
        <SidebarItem icon={<Settings size={18} />} label="Settings" />
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="p-4 rounded-lg border border-skill-purple/30 bg-skill-purple/5 backdrop-blur-sm">
          <p className="text-white/70 text-sm mb-3 font-light">Ready to share your expertise?</p>
          <Button 
            className="w-full py-2 bg-skill-purple/70 hover:bg-skill-purple text-white rounded-md text-sm font-light transition-colors"
          >
            Share Skills
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
