
import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

const Landing = () => {
  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#070707' }}>
      <div className="grid-bg position-fixed w-100 h-100" style={{ zIndex: 0 }}></div>
      <NavBar isRetro={true} />
      
      <main className="flex-grow-1 container position-relative" style={{ zIndex: 10 }}>
        <section className="py-5 text-center">
          <div className="position-relative d-inline-block mb-4">
            <h1 className="font-pixel text-white position-relative" style={{ fontSize: 'calc(2rem + 2vw)' }}>
              SKILL<span style={{ color: '#9b87f5' }}>SS</span>WAP
              <div 
                className="position-absolute" 
                style={{ 
                  top: '-16px', 
                  right: '-16px', 
                  width: '16px', 
                  height: '16px', 
                  backgroundColor: '#9b87f5', 
                  borderRadius: '50%',
                  animation: 'float 3s ease-in-out infinite'
                }}
              ></div>
            </h1>
            <div 
              className="position-absolute" 
              style={{ 
                bottom: '-8px', 
                left: '-8px', 
                width: '64px', 
                height: '4px', 
                backgroundColor: '#38B2AC' 
              }}
            ></div>
            <div 
              className="position-absolute" 
              style={{ 
                bottom: '-8px', 
                left: '56px', 
                width: '24px', 
                height: '4px', 
                backgroundColor: '#9b87f5',
                animation: 'pulse 2s ease-in-out infinite'
              }}
            ></div>
          </div>
          
          <p 
            className="font-pixel mx-auto mb-5" 
            style={{ 
              color: 'rgba(255, 255, 255, 0.8)', 
              maxWidth: '600px',
              fontSize: 'calc(0.75rem + 0.25vw)'
            }}
          >
            Exchange skills in our retro-futuristic marketplace.
            <span 
              className="d-block mt-2" 
              style={{ 
                color: '#38B2AC',
                animation: 'blink 1.5s step-end infinite'
              }}
            >
              PRESS START TO CONTINUE
            </span>
          </p>
          
          <div className="d-flex flex-column align-items-center">
            <Link 
              to="/home" 
              className="btn btn-lg mb-5" 
              style={{ 
                backgroundColor: '#9b87f5',
                color: 'white',
                padding: '0.75rem 2rem',
                fontFamily: "'Press Start 2P', cursive",
                fontSize: '0.875rem',
                animation: 'float 3s ease-in-out infinite',
                boxShadow: '0 0 15px rgba(155, 135, 245, 0.5)'
              }}
            >
              GET STARTED
            </Link>
            
            <div className="row g-4 mt-3 mb-5 justify-content-center">
              <div className="col-md-4">
                <div 
                  className="p-4 h-100 rounded" 
                  style={{ 
                    border: '1px solid rgba(155, 135, 245, 0.5)',
                    backgroundColor: 'rgba(7, 7, 7, 0.8)',
                    boxShadow: '0 0 15px rgba(155, 135, 245, 0.3)'
                  }}
                >
                  <div className="fs-2 mb-3">🎮</div>
                  <h3 className="font-pixel mb-3" style={{ color: '#9b87f5' }}>FIND</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                    Discover skills from coders, artists, and experts worldwide
                  </p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div 
                  className="p-4 h-100 rounded" 
                  style={{ 
                    border: '1px solid rgba(56, 178, 172, 0.5)',
                    backgroundColor: 'rgba(7, 7, 7, 0.8)',
                    boxShadow: '0 0 15px rgba(56, 178, 172, 0.3)'
                  }}
                >
                  <div className="fs-2 mb-3">🔄</div>
                  <h3 className="font-pixel mb-3" style={{ color: '#38B2AC' }}>SWAP</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                    Exchange your expertise for skills you want to learn
                  </p>
                </div>
              </div>
              
              <div className="col-md-4">
                <div 
                  className="p-4 h-100 rounded" 
                  style={{ 
                    border: '1px solid rgba(155, 135, 245, 0.5)',
                    backgroundColor: 'rgba(7, 7, 7, 0.8)',
                    boxShadow: '0 0 15px rgba(155, 135, 245, 0.3)'
                  }}
                >
                  <div className="fs-2 mb-3">📈</div>
                  <h3 className="font-pixel mb-3" style={{ color: '#9b87f5' }}>LEVEL UP</h3>
                  <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '0.875rem' }}>
                    Build your profile and gain new abilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-5">
          <div className="text-center mb-5">
            <h2 className="font-pixel text-white position-relative d-inline-block">
              HOW IT WORKS
              <div 
                style={{ 
                  position: 'absolute', 
                  bottom: 0, 
                  left: 0, 
                  right: 0, 
                  height: '4px', 
                  backgroundColor: 'rgba(155, 135, 245, 0.5)' 
                }}
              ></div>
            </h2>
          </div>
          
          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="position-relative">
                <div 
                  className="p-4 rounded-3" 
                  style={{ 
                    border: '2px solid rgba(155, 135, 245, 0.7)',
                    backgroundColor: 'rgba(7, 7, 7, 0.9)'
                  }}
                >
                  <span 
                    className="position-absolute d-flex align-items-center justify-content-center font-pixel" 
                    style={{
                      top: '-12px',
                      left: '-12px', 
                      width: '24px', 
                      height: '24px',
                      backgroundColor: '#070707',
                      border: '2px solid #9b87f5',
                      borderRadius: '50%',
                      color: '#9b87f5'
                    }}
                  >1</span>
                  <h3 className="font-pixel text-white mb-3">CREATE PROFILE</h3>
                  <p 
                    className="font-pixel m-0" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      fontSize: '0.65rem', 
                      lineHeight: '1.5' 
                    }}
                  >
                    Sign up and list the skills you want to share with the community. From coding to cooking, anything goes!
                  </p>
                </div>
                <div 
                  className="position-absolute" 
                  style={{ 
                    bottom: '-24px', 
                    right: '-24px', 
                    width: '48px', 
                    height: '48px',
                    border: '2px solid rgba(56, 178, 172, 0.5)',
                    borderRadius: '8px',
                    zIndex: -1
                  }}
                ></div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="position-relative">
                <div 
                  className="p-4 rounded-3" 
                  style={{ 
                    border: '2px solid rgba(56, 178, 172, 0.7)',
                    backgroundColor: 'rgba(7, 7, 7, 0.9)'
                  }}
                >
                  <span 
                    className="position-absolute d-flex align-items-center justify-content-center font-pixel" 
                    style={{
                      top: '-12px',
                      left: '-12px', 
                      width: '24px', 
                      height: '24px',
                      backgroundColor: '#070707',
                      border: '2px solid #38B2AC',
                      borderRadius: '50%',
                      color: '#38B2AC'
                    }}
                  >2</span>
                  <h3 className="font-pixel text-white mb-3">BROWSE SKILLS</h3>
                  <p 
                    className="font-pixel m-0" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      fontSize: '0.65rem', 
                      lineHeight: '1.5' 
                    }}
                  >
                    Explore our retro-futuristic marketplace of skills. Filter by category, level, and more.
                  </p>
                </div>
                <div 
                  className="position-absolute" 
                  style={{ 
                    bottom: '-24px', 
                    right: '-24px', 
                    width: '48px', 
                    height: '48px',
                    border: '2px solid rgba(155, 135, 245, 0.5)',
                    borderRadius: '8px',
                    zIndex: -1
                  }}
                ></div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="position-relative">
                <div 
                  className="p-4 rounded-3" 
                  style={{ 
                    border: '2px solid rgba(155, 135, 245, 0.7)',
                    backgroundColor: 'rgba(7, 7, 7, 0.9)'
                  }}
                >
                  <span 
                    className="position-absolute d-flex align-items-center justify-content-center font-pixel" 
                    style={{
                      top: '-12px',
                      left: '-12px', 
                      width: '24px', 
                      height: '24px',
                      backgroundColor: '#070707',
                      border: '2px solid #9b87f5',
                      borderRadius: '50%',
                      color: '#9b87f5'
                    }}
                  >3</span>
                  <h3 className="font-pixel text-white mb-3">CONNECT & SWAP</h3>
                  <p 
                    className="font-pixel m-0" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      fontSize: '0.65rem', 
                      lineHeight: '1.5' 
                    }}
                  >
                    When you find a skill you want to learn, connect with the teacher and offer one of your own skills in return.
                  </p>
                </div>
                <div 
                  className="position-absolute" 
                  style={{ 
                    bottom: '-24px', 
                    right: '-24px', 
                    width: '48px', 
                    height: '48px',
                    border: '2px solid rgba(56, 178, 172, 0.5)',
                    borderRadius: '8px',
                    zIndex: -1
                  }}
                ></div>
              </div>
            </div>
            
            <div className="col-md-6 col-lg-3">
              <div className="position-relative">
                <div 
                  className="p-4 rounded-3" 
                  style={{ 
                    border: '2px solid rgba(56, 178, 172, 0.7)',
                    backgroundColor: 'rgba(7, 7, 7, 0.9)'
                  }}
                >
                  <span 
                    className="position-absolute d-flex align-items-center justify-content-center font-pixel" 
                    style={{
                      top: '-12px',
                      left: '-12px', 
                      width: '24px', 
                      height: '24px',
                      backgroundColor: '#070707',
                      border: '2px solid #38B2AC',
                      borderRadius: '50%',
                      color: '#38B2AC'
                    }}
                  >4</span>
                  <h3 className="font-pixel text-white mb-3">LEARN & GROW</h3>
                  <p 
                    className="font-pixel m-0" 
                    style={{ 
                      color: 'rgba(255, 255, 255, 0.7)', 
                      fontSize: '0.65rem', 
                      lineHeight: '1.5' 
                    }}
                  >
                    Schedule sessions, exchange knowledge, and level up your skills. Rate each other after completion.
                  </p>
                </div>
                <div 
                  className="position-absolute" 
                  style={{ 
                    bottom: '-24px', 
                    right: '-24px', 
                    width: '48px', 
                    height: '48px',
                    border: '2px solid rgba(155, 135, 245, 0.5)',
                    borderRadius: '8px',
                    zIndex: -1
                  }}
                ></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer isRetro={true} />
    </div>
  );
};

export default Landing;
