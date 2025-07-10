import React from 'react';
import { FaDiscord } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-illusion-dark to-illusion-accent/30 border-t border-illusion-primary/10 py-12 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(174, 31, 250, 0.3) 1px, transparent 0)`,
          backgroundSize: '20px 20px'
        }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <div className="relative">
                <img 
                  src="https://files.catbox.moe/dlmfx4.webp" 
                  alt="Illusion Logo" 
                  className="w-8 h-8 object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-illusion-primary to-purple-400 bg-clip-text text-transparent">
                Illusion
              </h3>
            </div>
            
            <p className="text-gray-300 text-base leading-relaxed max-w-md">
              A Roblox Window Executor.
            </p>
          </div>
          
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-illusion-primary/30 to-transparent mt-4"></div>
          
          <div className="flex flex-col items-center text-center space-y-3">
            <div className="space-y-2">
              <p className="text-gray-300 text-sm">
                Design by <span className="text-illusion-primary font-medium text-xs">AdvanceFalling Team</span>
              </p>
              <p className="text-gray-400 text-base font-medium">
                © 2024 <span className="text-illusion-primary font-semibold">Illusion</span>. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;