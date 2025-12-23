import { useEffect, useRef, useState } from 'react';

interface SimpleTextTypeProps {
  text: string;
  className?: string;
  typingSpeed?: number;
  startOnVisible?: boolean;
}

const SimpleTextType = ({ 
  text, 
  className = '',
  typingSpeed = 75,
  startOnVisible = true
}: SimpleTextTypeProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle intersection observer
  useEffect(() => {
    if (!startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  // Handle typing animation
  useEffect(() => {
    if (!isVisible || currentIndex >= text.length) return;

    const timeout = setTimeout(() => {
      setDisplayedText(prev => prev + text[currentIndex]);
      setCurrentIndex(prev => prev + 1);
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [isVisible, currentIndex, text, typingSpeed]);

  return (
    <div ref={containerRef} className={className}>
      {displayedText}
    </div>
  );
};

export default SimpleTextType;
