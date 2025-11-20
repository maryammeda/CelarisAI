import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] bg-transparent pointer-events-none px-1"
      style={{
        zIndex: 9999,
      }}
    >
      <div
        className="h-full transition-all duration-150 ease-out rounded-full"
        style={{
          width: `${scrollProgress}%`,
          background: 'rgba(255, 255, 255, 0.7)',
          boxShadow: '0 0 10px rgba(255, 255, 255, 0.3)',
        }}
      />
    </div>
  );
};

