import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="w-full px-6 py-8 md:px-12 flex justify-between items-center mix-blend-difference">
      <div className="flex items-center gap-2 group cursor-default">
        <div className="w-4 h-4 bg-white rounded-full transition-transform duration-300 group-hover:scale-125" />
        <span className="font-display font-bold text-lg tracking-widest uppercase">
          Cloud Niners
        </span>
      </div>
      
      <div className="hidden md:block">
        <span className="text-xs font-mono text-neutral-400">
          EST. 2024
        </span>
      </div>
    </nav>
  );
};

export default Navbar;