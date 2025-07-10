import React, { useState, useEffect } from 'react';
import { FaDiscord } from 'react-icons/fa';
import { Menu, X, Home, Download, LayoutDashboard } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleDownload = () => {
    const downloadButton = document.querySelector('[data-download-trigger]') as HTMLButtonElement;
    if (downloadButton) {
      downloadButton.click();
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-3xl px-4">
        <div className={`bg-illusion-dark/80 backdrop-blur-xl border border-illusion-primary/20 rounded-full px-8 sm:px-10 py-3 transition-all duration-300 ${
          isScrolled ? 'shadow-2xl shadow-illusion-primary/10' : 'shadow-lg shadow-black/20'
        }`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <img 
                  src="https://files.catbox.moe/dlmfx4.webp" 
                  alt="Illusion Logo" 
                  className="w-6 h-6 object-contain"
                />
              </div>
              <h1 className="text-lg font-bold bg-gradient-to-r from-illusion-primary to-purple-400 bg-clip-text text-transparent">
                Illusion
              </h1>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection('home')}
                className="nav-link-hover flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-full hover:bg-illusion-primary/10"
              >
                <Home size={14} />
                <span className="font-medium text-sm">Home</span>
              </button>
              <button
                onClick={handleDownload}
                className="nav-link-hover flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300 px-3 py-2 rounded-full hover:bg-illusion-primary/10"
              >
                <Download size={14} />
                <span className="font-medium text-sm">Download</span>
              </button>
            </div>

            <div className="hidden md:flex items-center ml-6">
              <div className="discord-tooltip-trigger relative">
                <a 
                href="https://discord.gg/XZWTFr3cHt" 
                target="_blank" 
                rel="noopener noreferrer"
                  className="group flex items-center justify-center w-9 h-9 bg-[#5865F2] hover:bg-[#4752C4] text-white rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#5865F2]/30"
                >
                <FaDiscord size={16} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
                <div className="discord-tooltip">
                  Join our Discord
                </div>
              </div>
            </div>

            <button
              onClick={toggleMobileMenu}
              className="md:hidden flex items-center justify-center w-9 h-9 text-white hover:text-illusion-primary transition-colors duration-300 rounded-full hover:bg-illusion-primary/10"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 bg-illusion-dark/95 backdrop-blur-xl border border-illusion-primary/20 rounded-2xl p-6 shadow-2xl shadow-illusion-primary/10 mobile-menu-enter">
            <div className="flex flex-col space-y-4">
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection('home')}
                  className="w-full flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 px-4 py-3 rounded-xl hover:bg-illusion-primary/10 text-left"
                >
                  <Home size={16} />
                  <span className="font-medium">Home</span>
                </button>
                <button
                  onClick={handleDownload}
                  className="w-full flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-300 px-4 py-3 rounded-xl hover:bg-illusion-primary/10 text-left"
                >
                  <Download size={16} />
                  <span className="font-medium">Download</span>
                </button>
              </div>
              
              <div className="w-full h-px bg-gradient-to-r from-transparent via-illusion-primary/30 to-transparent"></div>
              
              <a 
                href="https://discord.gg/XZWTFr3cHt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center justify-center space-x-3 w-full py-4 bg-gradient-to-r from-[#5865F2] to-[#4752C4] hover:from-[#4752C4] hover:to-[#3c4399] text-white rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#5865F2]/30"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <FaDiscord size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <span className="font-semibold">Join Discord</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;