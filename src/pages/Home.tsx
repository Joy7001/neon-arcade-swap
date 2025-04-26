
import React from 'react';
import NavBar from '@/components/NavBar';
import CategorySidebar from '@/components/CategorySidebar';
import SkillCard from '@/components/SkillCard';
import Footer from '@/components/Footer';
import { Code, Music, Camera, Book, Edit, Video } from 'lucide-react';

// Sample skill data
const skills = [
  {
    id: 1,
    title: "React Development",
    icon: "⚛️",
    description: "Front-end web development with React, hooks, context API, and state management libraries.",
    level: "Advanced",
    color: "skill-purple"
  },
  {
    id: 2,
    title: "Python for Data",
    icon: "🐍",
    description: "Data analysis using Python with pandas, numpy, and data visualization libraries.",
    level: "Intermediate",
    color: "skill-cyan"
  },
  {
    id: 3,
    title: "UI/UX Design",
    icon: "🎨",
    description: "Creating beautiful user interfaces and experiences with Figma and Adobe XD.",
    level: "Expert",
    color: "skill-purple"
  },
  {
    id: 4,
    title: "Guitar Lessons",
    icon: "🎸",
    description: "From basic chords to advanced techniques. Electric and acoustic styles.",
    level: "All Levels",
    color: "skill-cyan"
  },
  {
    id: 5,
    title: "Spanish Language",
    icon: "🇪🇸",
    description: "Conversational Spanish for beginners and intermediate learners with focus on Latin American dialects.",
    level: "Beginner Friendly",
    color: "skill-purple"
  },
  {
    id: 6,
    title: "Photography Basics",
    icon: "📷",
    description: "Learn composition, lighting, and camera settings for stunning photos every time.",
    level: "Beginner",
    color: "skill-cyan"
  },
  {
    id: 7,
    title: "Digital Marketing",
    icon: "📊",
    description: "Social media strategies, SEO basics, and content marketing techniques.",
    level: "Intermediate",
    color: "skill-purple"
  },
  {
    id: 8,
    title: "Machine Learning",
    icon: "🤖",
    description: "Introduction to ML algorithms, supervised and unsupervised learning with practical examples.",
    level: "Advanced",
    color: "skill-cyan"
  }
];

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-skill-black">
      <NavBar />
      
      <div className="flex flex-grow">
        <CategorySidebar />
        
        <main className="flex-grow p-6">
          <div className="mb-8 ml-2">
            <h1 className="font-future text-3xl text-white mb-2">Explore Skills</h1>
            <p className="text-white/70">Discover skills you want to learn, or share your own expertise</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <div className="col-span-full">
              <div className="bg-gradient-to-r from-skill-purple/20 to-skill-cyan/20 rounded-lg p-6 border border-skill-purple/30">
                <h2 className="font-future text-xl text-white mb-4">Featured Skills</h2>
                <p className="text-white/70 mb-4">Top picks from our community this week</p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-skill-purple/20 border border-skill-purple/50 rounded-full text-white text-sm">Programming</span>
                  <span className="px-3 py-1 bg-skill-cyan/20 border border-skill-cyan/50 rounded-full text-white text-sm">Design</span>
                  <span className="px-3 py-1 bg-skill-purple/20 border border-skill-purple/50 rounded-full text-white text-sm">Languages</span>
                  <span className="px-3 py-1 bg-skill-cyan/20 border border-skill-cyan/50 rounded-full text-white text-sm">Music</span>
                </div>
              </div>
            </div>
            
            {skills.map((skill) => (
              <SkillCard 
                key={skill.id}
                title={skill.title}
                icon={skill.icon}
                description={skill.description}
                level={skill.level}
                color={skill.color}
              />
            ))}
          </div>
          
          <div className="bg-skill-black border border-skill-purple/30 rounded-lg p-6 mb-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div>
                <h2 className="font-future text-xl text-white mb-2">Ready to share your skills?</h2>
                <p className="text-white/70">Join our community of skill swappers and start teaching today</p>
              </div>
              <button className="mt-4 md:mt-0 px-6 py-3 bg-skill-purple hover:bg-skill-purple-light text-white rounded-lg transition-colors font-future">
                Offer Your Skills
              </button>
            </div>
          </div>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default Home;
