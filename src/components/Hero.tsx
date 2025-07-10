import React, { useState } from 'react';
import { Download, Shield, LayoutDashboard } from 'lucide-react';
import DownloadModal from './DownloadModal';

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDownload = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-illusion-primary/3 rounded-full blur-3xl"></div>
          <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-illusion-purple/3 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto text-center relative z-10 max-w-3xl">
          <div className="fade-in-up">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <img 
                src="https://files.catbox.moe/dlmfx4.webp" 
                alt="Illusion Logo" 
                className="w-20 h-20 object-contain"
              />
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-illusion-primary via-purple-400 to-illusion-primary bg-clip-text text-transparent">
              Illusion
            </h1>
            
            <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto delay-100 px-4">
              A Roblox Windows Executor.
            </p>

            <div className="flex flex-col items-center delay-200">
              <div className="flex flex-col sm:flex-row items-center gap-3 mb-4">
                <button
                  data-download-trigger
                  onClick={handleDownload}
                  className="bg-gradient-to-r from-illusion-primary to-purple-500 text-white px-6 py-3 rounded-full text-base font-semibold hover:shadow-lg hover:shadow-illusion-primary/30 transition-all duration-500 ease-out flex items-center space-x-2 hover:scale-105 hover:shadow-2xl hover:shadow-illusion-primary/40"
                >
                  <Download size={18} />
                  <span>Download</span>
                </button>
                
                <button
                  disabled
                  className="bg-gradient-to-r from-gray-600 to-gray-700 text-gray-400 px-6 py-3 rounded-full text-base font-semibold cursor-not-allowed opacity-40 flex items-center space-x-2 transition-all duration-300"
                  title="Coming Soon"
                >
                  <LayoutDashboard size={18} />
                  <span>Dashboard</span>
                </button>
              </div>
              
              <div className="flex items-center space-x-2 text-gray-500 text-sm">
                <Shield size={14} />
                <span>Safe & Secure</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DownloadModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default Hero;