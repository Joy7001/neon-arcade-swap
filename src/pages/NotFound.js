
import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#070707' }}>
      <NavBar />
      
      <main className="flex-grow-1 d-flex align-items-center justify-content-center py-5">
        <div className="text-center">
          <h1 className="font-pixel text-white mb-4" style={{ fontSize: '4rem' }}>404</h1>
          <div 
            className="mb-4"
            style={{
              width: '80px',
              height: '4px',
              background: 'linear-gradient(to right, transparent, var(--skill-purple), transparent)',
              margin: '0 auto'
            }}
          ></div>
          <h2 className="text-white mb-4" style={{ fontWeight: 'lighter' }}>Page not found</h2>
          <p className="mb-5" style={{ color: 'rgba(255, 255, 255, 0.7)', maxWidth: '500px', margin: '0 auto' }}>
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link 
            to="/" 
            className="btn px-4 py-2" 
            style={{
              backgroundColor: 'var(--skill-purple)',
              color: 'white',
              fontWeight: 'lighter'
            }}
          >
            Back to Home
          </Link>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default NotFound;
