
import React from 'react';
import NavBar from '../components/NavBar';
import CategorySidebar from '../components/CategorySidebar';
import SkillCard from '../components/SkillCard';
import Footer from '../components/Footer';

// Sample skill data
const skills = [
  {
    id: 1,
    title: "React Development",
    icon: "⚛️",
    description: "Front-end web development with React, hooks, context API, and state management libraries.",
    level: "Advanced",
    color: "skill-purple",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    title: "Python for Data",
    icon: "🐍",
    description: "Data analysis using Python with pandas, numpy, and data visualization libraries.",
    level: "Intermediate",
    color: "skill-cyan",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: "🎨",
    description: "Creating beautiful user interfaces and experiences with Figma and Adobe XD.",
    level: "Expert",
    color: "skill-purple",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    title: "Guitar Lessons",
    icon: "🎸",
    description: "From basic chords to advanced techniques. Electric and acoustic styles.",
    level: "All Levels",
    color: "skill-cyan",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    title: "Spanish Language",
    icon: "🇪🇸",
    description: "Conversational Spanish for beginners and intermediate learners with focus on Latin American dialects.",
    level: "Beginner Friendly",
    color: "skill-purple",
    image: "https://images.unsplash.com/photo-1503455637927-730b260a6b15?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    title: "Photography Basics",
    icon: "📷",
    description: "Learn composition, lighting, and camera settings for stunning photos every time.",
    level: "Beginner",
    color: "skill-cyan",
    image: "https://images.unsplash.com/photo-1519389950473-47a04ca018e0?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 7,
    title: "Digital Marketing",
    icon: "📊",
    description: "Social media strategies, SEO basics, and content marketing techniques.",
    level: "Intermediate",
    color: "skill-purple",
    image: "https://images.unsplash.com/photo-1505373467743-644468773a79?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    title: "Machine Learning",
    icon: "🤖",
    description: "Introduction to ML algorithms, supervised and unsupervised learning with practical examples.",
    level: "Advanced",
    color: "skill-cyan",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80"
  }
];

const Home = () => {
  return (
    <div className="min-vh-100 d-flex flex-column" style={{ backgroundColor: '#070707' }}>
      <NavBar />
      
      <div className="d-flex flex-grow-1">
        <CategorySidebar />
        
        <main className="flex-grow-1 p-4">
          <div className="ps-2">
            <div 
              className="rounded-3 p-4 mb-5" 
              style={{ 
                background: 'linear-gradient(to right, rgba(155, 135, 245, 0.1), rgba(56, 178, 172, 0.1))',
                borderRadius: '16px', 
                border: '1px solid rgba(155, 135, 245, 0.2)'
              }}
            >
              <h1 className="text-white fw-light mb-3" style={{ fontSize: '2.25rem' }}>
                Discover & Share
                <span style={{ color: '#9b87f5', marginLeft: '8px', fontWeight: '400' }}>Skills</span>
              </h1>
              <p 
                className="mb-4 fw-light" 
                style={{ 
                  color: 'rgba(255, 255, 255, 0.7)',
                  fontSize: '1.125rem',
                  maxWidth: '42rem',
                  lineHeight: '1.7'
                }}
              >
                Join our community of passionate learners and experts. Share your expertise or discover new skills from professionals around the world.
              </p>
              <div className="d-flex flex-wrap gap-3">
                <a 
                  href="#skills" 
                  className="btn px-4 py-2" 
                  style={{ 
                    backgroundColor: 'rgba(155, 135, 245, 0.9)', 
                    color: 'white'
                  }}
                >
                  Explore Skills
                </a>
                <a 
                  href="#share" 
                  className="btn px-4 py-2" 
                  style={{ 
                    backgroundColor: 'transparent',
                    border: '1px solid rgba(155, 135, 245, 0.5)',
                    color: 'white'
                  }}
                >
                  Share Your Expertise
                </a>
              </div>
            </div>
            
            <div className="d-flex justify-content-between align-items-center mb-4">
              <div>
                <h2 className="text-white fw-light mb-2">Featured Skills</h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 'lighter' }}>
                  Top picks from our community this week
                </p>
              </div>
              <div className="d-none d-md-flex gap-2">
                <span 
                  className="px-3 py-1 rounded-pill" 
                  style={{ 
                    backgroundColor: 'rgba(155, 135, 245, 0.1)', 
                    border: '1px solid rgba(155, 135, 245, 0.3)', 
                    color: 'white', 
                    fontSize: '0.875rem' 
                  }}
                >
                  Programming
                </span>
                <span 
                  className="px-3 py-1 rounded-pill" 
                  style={{ 
                    backgroundColor: 'rgba(56, 178, 172, 0.1)', 
                    border: '1px solid rgba(56, 178, 172, 0.3)', 
                    color: 'white', 
                    fontSize: '0.875rem' 
                  }}
                >
                  Design
                </span>
                <span 
                  className="px-3 py-1 rounded-pill" 
                  style={{ 
                    backgroundColor: 'rgba(155, 135, 245, 0.1)', 
                    border: '1px solid rgba(155, 135, 245, 0.3)', 
                    color: 'white', 
                    fontSize: '0.875rem' 
                  }}
                >
                  Languages
                </span>
                <span 
                  className="px-3 py-1 rounded-pill" 
                  style={{ 
                    backgroundColor: 'rgba(56, 178, 172, 0.1)', 
                    border: '1px solid rgba(56, 178, 172, 0.3)', 
                    color: 'white', 
                    fontSize: '0.875rem' 
                  }}
                >
                  Music
                </span>
              </div>
            </div>
            
            <div className="row g-4 mb-5" id="skills">
              {skills.map((skill) => (
                <div key={skill.id} className="col-12 col-md-6 col-lg-4">
                  <SkillCard 
                    title={skill.title}
                    icon={skill.icon}
                    description={skill.description}
                    level={skill.level}
                    color={skill.color}
                    image={skill.image}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div 
            className="rounded p-4" 
            style={{ 
              background: 'linear-gradient(to right, rgba(155, 135, 245, 0.05), transparent)',
              border: '1px solid rgba(155, 135, 245, 0.2)'
            }}
          >
            <div className="row align-items-center">
              <div className="col-md-8 mb-3 mb-md-0">
                <h2 className="text-white fw-light mb-2">Ready to share your expertise?</h2>
                <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontWeight: 'lighter' }}>
                  Join our community of skill swappers and start teaching today
                </p>
              </div>
              <div className="col-md-4 text-md-end">
                <button 
                  className="btn px-4 py-2" 
                  style={{ 
                    backgroundColor: '#9b87f5',
                    color: 'white',
                    fontWeight: 'lighter',
                    letterSpacing: '0.5px'
                  }}
                >
                  Start Teaching
                </button>
              </div>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
