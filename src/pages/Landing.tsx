
import React, { useEffect } from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import RetroGrid from '@/components/RetroGrid';
import RetroButton from '@/components/RetroButton';

const Landing = () => {
  useEffect(() => {
    document.body.classList.add('overflow-x-hidden');
    return () => {
      document.body.classList.remove('overflow-x-hidden');
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <RetroGrid />
      <NavBar isRetro={true} />
      
      <main className="flex-grow container mx-auto px-6 z-10 relative">
        <section className="py-16 md:py-24 text-center">
          <div className="relative inline-block mb-8">
            <h1 className="font-pixel text-4xl md:text-6xl text-white animate-glow relative">
              SKILL<span className="text-skill-purple">SS</span>WAP
              <div className="absolute -top-4 -right-4 w-4 h-4 bg-skill-purple rounded-full animate-float"></div>
            </h1>
            <div className="absolute -bottom-2 -left-2 w-16 h-1 bg-skill-cyan"></div>
            <div className="absolute -bottom-2 left-14 w-6 h-1 bg-skill-purple animate-pulse"></div>
          </div>
          
          <p className="font-pixel text-sm md:text-base text-white/80 max-w-xl mx-auto mb-12 leading-relaxed">
            Exchange skills in our retro-futuristic marketplace.
            <span className="block mt-2 text-skill-cyan animate-blink">PRESS START TO CONTINUE</span>
          </p>
          
          <div className="flex flex-col items-center justify-center space-y-6">
            <RetroButton to="/home" className="animate-float">
              GET STARTED
            </RetroButton>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-skill-black border border-skill-purple/50 p-6 rounded neon-border">
                <div className="text-2xl mb-4">🎮</div>
                <h3 className="font-pixel text-skill-purple mb-3">FIND</h3>
                <p className="text-white/70 text-sm">Discover skills from coders, artists, and experts worldwide</p>
              </div>
              
              <div className="bg-skill-black border border-skill-cyan/50 p-6 rounded neon-border">
                <div className="text-2xl mb-4">🔄</div>
                <h3 className="font-pixel text-skill-cyan mb-3">SWAP</h3>
                <p className="text-white/70 text-sm">Exchange your expertise for skills you want to learn</p>
              </div>
              
              <div className="bg-skill-black border border-skill-purple/50 p-6 rounded neon-border">
                <div className="text-2xl mb-4">📈</div>
                <h3 className="font-pixel text-skill-purple mb-3">LEVEL UP</h3>
                <p className="text-white/70 text-sm">Build your profile and gain new abilities</p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="font-pixel text-2xl text-white inline-block relative">
              HOW IT WORKS
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-skill-purple/50"></div>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="relative">
              <div className="border-2 border-skill-purple/70 rounded-lg p-6 bg-skill-black">
                <span className="absolute -top-3 -left-3 w-6 h-6 bg-skill-black border-2 border-skill-purple rounded-full flex items-center justify-center font-pixel text-skill-purple">1</span>
                <h3 className="font-pixel text-white mb-4">CREATE PROFILE</h3>
                <p className="text-white/70 font-pixel text-xs leading-relaxed">
                  Sign up and list the skills you want to share with the community. From coding to cooking, anything goes!
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-skill-cyan/50 rounded-lg"></div>
            </div>
            
            <div className="relative">
              <div className="border-2 border-skill-cyan/70 rounded-lg p-6 bg-skill-black">
                <span className="absolute -top-3 -left-3 w-6 h-6 bg-skill-black border-2 border-skill-cyan rounded-full flex items-center justify-center font-pixel text-skill-cyan">2</span>
                <h3 className="font-pixel text-white mb-4">BROWSE SKILLS</h3>
                <p className="text-white/70 font-pixel text-xs leading-relaxed">
                  Explore our retro-futuristic marketplace of skills. Filter by category, level, and more.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-skill-purple/50 rounded-lg"></div>
            </div>
            
            <div className="relative">
              <div className="border-2 border-skill-purple/70 rounded-lg p-6 bg-skill-black">
                <span className="absolute -top-3 -left-3 w-6 h-6 bg-skill-black border-2 border-skill-purple rounded-full flex items-center justify-center font-pixel text-skill-purple">3</span>
                <h3 className="font-pixel text-white mb-4">CONNECT & SWAP</h3>
                <p className="text-white/70 font-pixel text-xs leading-relaxed">
                  When you find a skill you want to learn, connect with the teacher and offer one of your own skills in return.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-skill-cyan/50 rounded-lg"></div>
            </div>
            
            <div className="relative">
              <div className="border-2 border-skill-cyan/70 rounded-lg p-6 bg-skill-black">
                <span className="absolute -top-3 -left-3 w-6 h-6 bg-skill-black border-2 border-skill-cyan rounded-full flex items-center justify-center font-pixel text-skill-cyan">4</span>
                <h3 className="font-pixel text-white mb-4">LEARN & GROW</h3>
                <p className="text-white/70 font-pixel text-xs leading-relaxed">
                  Schedule sessions, exchange knowledge, and level up your skills. Rate each other after completion.
                </p>
              </div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 border-2 border-skill-purple/50 rounded-lg"></div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer isRetro={true} />
    </div>
  );
};

export default Landing;
