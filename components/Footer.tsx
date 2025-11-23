import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full px-6 py-12 md:px-12 mt-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h3 className="font-mono text-xs text-neutral-500 uppercase tracking-widest mb-4">
            Contact
          </h3>
          <a 
            href="mailto:info@cloud9ers.com" 
            className="text-2xl md:text-3xl font-display hover:text-blue-400 transition-colors duration-300"
          >
            info@cloud9ers.com
          </a>
        </div>
        
        <div className="text-right">
          <p className="font-mono text-xs text-neutral-600">
            © {new Date().getFullYear()} Cloud Niners. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;