import React from 'react';
import NavBar from '@/components/NavBar';
import CategorySidebar from '@/components/CategorySidebar';
import SkillCard from '@/components/SkillCard';
import Footer from '@/components/Footer';
import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';

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
    <div className="min-h-screen flex flex-col bg-skill-black">
      <NavBar />
      
      <div className="flex flex-grow">
        <CategorySidebar />
        
        <main className="flex-grow p-6">
          <div className="mb-12 ml-2">
            <div className="bg-gradient-to-r from-skill-purple/10 to-skill-cyan/10 rounded-2xl p-8 border border-skill-purple/20 backdrop-blur-sm mb-8">
              <h1 className="text-4xl text-white font-light tracking-wide mb-4">
                Discover & Share
                <span className="text-skill-purple ml-2 font-normal">Skills</span>
              </h1>
              <p className="text-white/70 font-light text-lg max-w-2xl leading-relaxed mb-6">
                Join our community of passionate learners and experts. Share your expertise or discover new skills from professionals around the world.
              </p>
              <div className="flex flex-wrap gap-4">
                <a href="#skills" className={cn(buttonVariants({ variant: "default" }), 
                  "bg-skill-purple/90 hover:bg-skill-purple text-white px-6 py-3")}>
                  Explore Skills
                </a>
                <a href="#share" className={cn(buttonVariants({ variant: "outline" }), 
                  "border-skill-purple/50 text-white hover:bg-skill-purple/10")}>
                  Share Your Expertise
                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl text-white font-light tracking-wide mb-2">Featured Skills</h2>
                <p className="text-white/70 font-light">Top picks from our community this week</p>
              </div>
              <div className="flex gap-3">
                <span className="px-3 py-1 bg-skill-purple/10 border border-skill-purple/30 rounded-full text-white text-sm">Programming</span>
                <span className="px-3 py-1 bg-skill-cyan/10 border border-skill-cyan/30 rounded-full text-white text-sm">Design</span>
                <span className="px-3 py-1 bg-skill-purple/10 border border-skill-purple/30 rounded-full text-white text-sm">Languages</span>
                <span className="px-3 py-1 bg-skill-cyan/10 border border-skill-cyan/30 rounded-full text-white text-sm">Music</span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12" id="skills">
              {skills.map((skill) => (
                <SkillCard 
                  key={skill.id}
                  title={skill.title}
                  icon={skill.icon}
                  description={skill.description}
                  level={skill.level}
                  color={skill.color}
                  image={skill.image}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-skill-purple/5 via-skill-purple/10 to-transparent rounded-lg p-8 backdrop-blur-sm border border-skill-purple/20">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl text-white font-light tracking-wide mb-2">Ready to share your expertise?</h2>
                <p className="text-white/70 font-light">Join our community of skill swappers and start teaching today</p>
              </div>
              <button className="px-6 py-3 bg-skill-purple text-white rounded-lg transition-colors hover:bg-skill-purple-light font-light tracking-wide whitespace-nowrap">
                Start Teaching
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
