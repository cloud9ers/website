import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="w-full px-6 md:px-12 max-w-7xl mx-auto flex flex-col justify-center items-start">
      <div className="overflow-hidden">
        <h2 className="font-mono text-sm md:text-base text-blue-400 mb-6 tracking-wider uppercase animate-slide-up" style={{ animationDelay: '0.2s' }}>
          Digital Architects
        </h2>
      </div>

      <div className="max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium leading-[0.9] tracking-tight text-white mb-8">
          <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            We craft&nbsp;
          </span>
          <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
            exceptional
          </span>
          <br />
          <span className="inline-block text-neutral-500 animate-slide-up opacity-0" style={{ animationDelay: '0.6s' }}>
            Web & Mobile
          </span>
          <br />
          <span className="inline-block animate-slide-up opacity-0" style={{ animationDelay: '0.7s' }}>
            experiences.
          </span>
        </h1>
      </div>

      <div className="mt-12 max-w-xl animate-fade-in opacity-0" style={{ animationDelay: '1.2s' }}>
        <p className="text-neutral-400 text-lg md:text-xl font-light leading-relaxed">
          Cloud Niners is a premium development agency focused on building robust, scalable, and aesthetically pleasing applications for the modern web and mobile devices.
        </p>
      </div>

      <div className="mt-16 animate-fade-in opacity-0" style={{ animationDelay: '1.4s' }}>
        <a 
          href="mailto:info@cloud9ers.com"
          className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all duration-300 hover:bg-neutral-200 hover:pr-10"
        >
          <span className="relative z-10 font-medium tracking-wide">Start a Project</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="20" 
            height="20" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
            className="relative z-10 transition-transform duration-300 group-hover:translate-x-1"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;