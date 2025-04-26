
import React from 'react';
import { Book, Code, Music, Camera, Database, Edit, Video, Compass, Image } from 'lucide-react';

interface CategoryItemProps {
  icon: React.ReactNode;
  name: string;
  isActive?: boolean;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, name, isActive = false }) => {
  return (
    <div 
      className={`flex items-center py-2 px-4 rounded-lg cursor-pointer transition-colors ${
        isActive 
          ? 'bg-skill-purple/20 text-skill-purple' 
          : 'hover:bg-skill-purple/10 text-white/70 hover:text-white'
      }`}
    >
      <div className="mr-3">{icon}</div>
      <span className="font-future text-sm">{name}</span>
    </div>
  );
};

const CategorySidebar = () => {
  return (
    <div className="w-64 border-r border-skill-purple/20 h-screen sticky top-0 py-6 px-2 bg-skill-black">
      <div className="px-4 mb-6">
        <h2 className="font-future text-lg text-white">Categories</h2>
      </div>
      
      <div className="space-y-1">
        <CategoryItem icon={<Code size={18} />} name="Programming" isActive />
        <CategoryItem icon={<Book size={18} />} name="Languages" />
        <CategoryItem icon={<Music size={18} />} name="Music" />
        <CategoryItem icon={<Camera size={18} />} name="Photography" />
        <CategoryItem icon={<Database size={18} />} name="Data Science" />
        <CategoryItem icon={<Edit size={18} />} name="Writing" />
        <CategoryItem icon={<Video size={18} />} name="Video Editing" />
        <CategoryItem icon={<Compass size={18} />} name="Navigation" />
        <CategoryItem icon={<Image size={18} />} name="Design" />
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 px-6">
        <div className="p-4 rounded-lg border border-skill-purple/30 bg-skill-purple/5">
          <p className="text-white/70 text-sm mb-3">Need help finding the right skill?</p>
          <button className="w-full py-2 bg-skill-purple/70 hover:bg-skill-purple text-white rounded-md text-sm font-future transition-colors">
            Skill Finder
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
