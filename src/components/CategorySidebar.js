
import React from 'react';
import { User, Home, Search, Book, MessageSquare, Settings } from 'lucide-react';

const SidebarItem = ({ icon, label, isActive = false }) => {
  return (
    <button
      className={`btn btn-block text-start d-flex align-items-center gap-2 py-2 px-3 mb-2 ${
        isActive 
          ? 'bg-purple-100 text-purple' 
          : 'text-white-70 hover:bg-purple-50'
      }`}
      style={{ 
        backgroundColor: isActive ? 'rgba(155, 135, 245, 0.2)' : 'transparent',
        color: isActive ? '#9b87f5' : 'rgba(255, 255, 255, 0.7)',
        borderRadius: '8px'
      }}
    >
      {icon}
      <span style={{ fontWeight: 'lighter', fontSize: '0.875rem' }}>{label}</span>
    </button>
  );
};

const CategorySidebar = () => {
  return (
    <div className="border-end h-100 py-4 px-2" style={{ 
      width: '250px',
      borderColor: 'rgba(155, 135, 245, 0.2)', 
      backgroundColor: 'rgb(7, 7, 7)',
      position: 'sticky',
      top: 0
    }}>
      <div className="mb-4">
        <SidebarItem icon={<Home size={18} />} label="Home" isActive />
        <SidebarItem icon={<User size={18} />} label="Profile" />
        <SidebarItem icon={<Search size={18} />} label="Explore" />
        <SidebarItem icon={<MessageSquare size={18} />} label="Messages" />
        <SidebarItem icon={<Book size={18} />} label="My Skills" />
        <SidebarItem icon={<Settings size={18} />} label="Settings" />
      </div>
      
      <div className="mt-auto position-absolute bottom-0 start-0 end-0 px-3 mb-4">
        <div className="p-3 rounded" style={{ 
          border: '1px solid rgba(155, 135, 245, 0.3)',
          backgroundColor: 'rgba(155, 135, 245, 0.05)'
        }}>
          <p className="mb-3" style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem', fontWeight: 'lighter' }}>
            Ready to share your expertise?
          </p>
          <button 
            className="btn btn-block w-100" 
            style={{
              backgroundColor: 'rgba(155, 135, 245, 0.7)',
              color: 'white',
              fontSize: '0.875rem',
              fontWeight: 'lighter'
            }}
          >
            Share Skills
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategorySidebar;
