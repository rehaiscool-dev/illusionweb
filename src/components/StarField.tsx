import React, { useEffect, useRef } from 'react';

const StarField: React.FC = () => {
  const starfieldRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const starfield = starfieldRef.current;
    if (!starfield) return;
    
    const createStars = () => {
      const fragment = document.createDocumentFragment();
      const starCount = window.innerWidth < 768 ? 50 : 100; // Fewer stars on mobile
      
      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        fragment.appendChild(star);
      }
      
      starfield.appendChild(fragment);
    };

    createStars();

    // Cleanup on unmount
    return () => {
      if (starfield) {
        starfield.innerHTML = '';
      }
    };
  }, []);

  return <div ref={starfieldRef} className="starfield" />;
};

export default StarField;
