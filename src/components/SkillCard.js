
import React from 'react';

const SkillCard = ({ 
  title, 
  icon, 
  description, 
  level,
  color = 'skill-purple',
  image
}) => {
  const cardStyle = { 
    borderColor: 'rgba(155, 135, 245, 0.2)',
    backgroundColor: 'rgba(7, 7, 7, 0.95)',
    transition: 'all 0.3s',
    overflow: 'hidden'
  };

  const levelStyle = {
    display: 'inline-block',
    padding: '4px 12px',
    borderRadius: '50px',
    fontSize: '0.875rem',
    fontWeight: 'lighter',
    color: color === 'skill-purple' ? '#9b87f5' : '#38B2AC',
    border: `1px solid ${color === 'skill-purple' ? 'rgba(155, 135, 245, 0.3)' : 'rgba(56, 178, 172, 0.3)'}`
  };
  
  return (
    <div 
      className="card h-100" 
      style={cardStyle}
      onMouseOver={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.borderColor = 'rgba(155, 135, 245, 0.4)';
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.borderColor = 'rgba(155, 135, 245, 0.2)';
      }}
    >
      {image && (
        <div style={{ height: '160px', overflow: 'hidden' }}>
          <img 
            src={image} 
            alt={title} 
            className="card-img-top" 
            style={{ 
              height: '100%', 
              objectFit: 'cover',
              objectPosition: 'center',
              opacity: '0.7',
              transition: 'opacity 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
            onMouseOut={(e) => e.currentTarget.style.opacity = '0.7'}
          />
        </div>
      )}
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="card-title mb-0" style={{ color: 'white', fontWeight: 'lighter' }}>
            {title}
          </h5>
          <span style={{ fontSize: '1.25rem' }}>{icon}</span>
        </div>
        <p 
          className="card-text mb-3" 
          style={{ 
            color: 'rgba(255, 255, 255, 0.7)',
            fontWeight: 'lighter',
            display: '-webkit-box',
            WebkitLineClamp: '2',
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {description}
        </p>
        <div className="mt-auto">
          <span style={levelStyle}>
            {level}
          </span>
        </div>
      </div>
      <div 
        style={{ 
          height: '1px', 
          background: color === 'skill-purple' 
            ? 'linear-gradient(to right, transparent, rgba(155, 135, 245, 0.4), transparent)'
            : 'linear-gradient(to right, transparent, rgba(56, 178, 172, 0.4), transparent)'
        }}
      ></div>
    </div>
  );
};

export default SkillCard;
