
import React from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import { Search } from 'lucide-react';

const NavBar = ({ isRetro = false }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark sticky-top border-bottom" style={{ 
      backgroundColor: 'rgba(7, 7, 7, 0.9)',
      borderColor: 'rgba(155, 135, 245, 0.2)',
      backdropFilter: 'blur(8px)'
    }}>
      <div className="container">
        <Link to={isRetro ? '/' : '/home'} className="navbar-brand">
          <Logo isRetro={isRetro} />
        </Link>
        
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {!isRetro && (
            <div className="d-none d-md-block mx-auto">
              <div className="position-relative" style={{ maxWidth: '400px' }}>
                <div className="position-absolute" style={{ left: '15px', top: '50%', transform: 'translateY(-50%)' }}>
                  <Search size={16} color="#9b87f5" />
                </div>
                <input 
                  type="search" 
                  placeholder="Search skills..." 
                  className="form-control ps-4" 
                  style={{ 
                    background: 'transparent', 
                    border: '1px solid rgba(155, 135, 245, 0.3)',
                    borderRadius: '50px',
                    paddingLeft: '35px'
                  }} 
                />
              </div>
            </div>
          )}
          
          <div className="ms-auto">
            {isRetro ? (
              <Link 
                to="/home" 
                className="btn" 
                style={{ 
                  backgroundColor: '#9b87f5', 
                  color: 'white',
                  fontWeight: 'lighter',
                  fontSize: '0.875rem'
                }}
              >
                GET STARTED
              </Link>
            ) : (
              <div className="d-flex align-items-center gap-3">
                <Link 
                  to="/" 
                  className="text-decoration-none" 
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                >
                  Back to Intro
                </Link>
                <Link 
                  to="#" 
                  className="btn"
                  style={{ 
                    backgroundColor: 'rgba(155, 135, 245, 0.9)',
                    color: 'white',
                    fontWeight: 'lighter'
                  }}
                >
                  Sign In
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
