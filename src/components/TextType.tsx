'use client';

import { useEffect, useRef, useState, createElement, useMemo, useCallback } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './TextType.css';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TextTypeProps {
  text: string | string[];
  as?: string;
  typingSpeed?: number;
  initialDelay?: number;
  pauseDuration?: number;
  deletingSpeed?: number;
  loop?: boolean;
  className?: string;
  showCursor?: boolean;
  hideCursorWhileTyping?: boolean;
  cursorCharacter?: string;
  cursorClassName?: string;
  cursorBlinkDuration?: number;
  textColors?: string[];
  variableSpeed?: { min: number; max: number };
  onSentenceComplete?: (text: string, index: number) => void;
  startOnVisible?: boolean;
  reverseMode?: boolean;
  bidirectional?: boolean; // New prop for scroll-based reveal/unreveal
  [key: string]: any;
}

const TextType = ({
  text,
  as: Component = 'div',
  typingSpeed = 50,
  initialDelay = 0,
  pauseDuration = 2000,
  deletingSpeed = 30,
  loop = true,
  className = '',
  showCursor = true,
  hideCursorWhileTyping = false,
  cursorCharacter = '|',
  cursorClassName = '',
  cursorBlinkDuration = 0.5,
  textColors = [],
  variableSpeed,
  onSentenceComplete,
  startOnVisible = false,
  reverseMode = false,
  bidirectional = false,
  ...props
}: TextTypeProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(!startOnVisible);
  const cursorRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLElement>(null);
  const animationRef = useRef<any>(null);

  const textArray = useMemo(() => (Array.isArray(text) ? text : [text]), [text]);

  const getRandomSpeed = useCallback(() => {
    if (!variableSpeed) return typingSpeed;
    const { min, max } = variableSpeed;
    return Math.random() * (max - min) + min;
  }, [variableSpeed, typingSpeed]);

  const getCurrentTextColor = () => {
    if (textColors.length === 0) return;
    return textColors[currentTextIndex % textColors.length];
  };

  // Reset to initial state
  const resetToInitial = useCallback(() => {
    setDisplayedText('');
    setCurrentCharIndex(0);
    setIsDeleting(false);
    setCurrentTextIndex(0);
    if (animationRef.current) {
      clearTimeout(animationRef.current);
    }
  }, []);

  // Start typing animation
  const startTyping = useCallback(() => {
    if (!isVisible) return;
    
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const typeNextChar = () => {
      if (currentCharIndex < processedText.length) {
        setDisplayedText(prev => prev + processedText[currentCharIndex]);
        setCurrentCharIndex(prev => prev + 1);
        
        animationRef.current = setTimeout(
          typeNextChar,
          variableSpeed ? getRandomSpeed() : typingSpeed
        );
      }
    };

    animationRef.current = setTimeout(typeNextChar, initialDelay);
  }, [isVisible, textArray, currentTextIndex, reverseMode, currentCharIndex, variableSpeed, getRandomSpeed, typingSpeed, initialDelay]);

  // Handle bidirectional scroll reveal
  useEffect(() => {
    if (!bidirectional || !containerRef.current) return;

    const element = containerRef.current;

    ScrollTrigger.create({
      trigger: element,
      start: "top 80%",
      end: "bottom 20%",
      onEnter: () => {
        setIsVisible(true);
        resetToInitial();
        // Small delay to ensure state is reset before starting
        setTimeout(startTyping, 50);
      },
      onLeave: () => {
        // Animate text deletion when leaving viewport
        const deleteText = () => {
          setDisplayedText(prev => {
            if (prev.length > 0) {
              const newText = prev.slice(0, -1);
              if (newText.length > 0) {
                setTimeout(deleteText, deletingSpeed / 2);
              }
              return newText;
            }
            return prev;
          });
        };
        deleteText();
      },
      onEnterBack: () => {
        setIsVisible(true);
        resetToInitial();
        setTimeout(startTyping, 50);
      },
      onLeaveBack: () => {
        const deleteText = () => {
          setDisplayedText(prev => {
            if (prev.length > 0) {
              const newText = prev.slice(0, -1);
              if (newText.length > 0) {
                setTimeout(deleteText, deletingSpeed / 2);
              }
              return newText;
            }
            return prev;
          });
        };
        deleteText();
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach((scrollTriggerInstance: ScrollTrigger) => {
        if (scrollTriggerInstance.trigger === element) {
          scrollTriggerInstance.kill();
        }
      });
    };
  }, [bidirectional, startTyping, resetToInitial, deletingSpeed]);

  // Handle regular intersection observer for non-bidirectional mode
  useEffect(() => {
    if (bidirectional || !startOnVisible || !containerRef.current) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, [startOnVisible, bidirectional]);

  // Handle cursor blinking animation
  useEffect(() => {
    if (showCursor && cursorRef.current) {
      gsap.set(cursorRef.current, { opacity: 1 });
      gsap.to(cursorRef.current, {
        opacity: 0,
        duration: cursorBlinkDuration,
        repeat: -1,
        yoyo: true,
        ease: 'power2.inOut'
      });
    }
  }, [showCursor, cursorBlinkDuration]);

  // Handle typing animation for non-bidirectional mode
  useEffect(() => {
    if (bidirectional || !isVisible) return;

    let timeout: NodeJS.Timeout;
    const currentText = textArray[currentTextIndex];
    const processedText = reverseMode ? currentText.split('').reverse().join('') : currentText;

    const executeTypingAnimation = () => {
      if (isDeleting) {
        if (displayedText === '') {
          setIsDeleting(false);
          if (currentTextIndex === textArray.length - 1 && !loop) {
            return;
          }

          if (onSentenceComplete) {
            onSentenceComplete(textArray[currentTextIndex], currentTextIndex);
          }

          setCurrentTextIndex(prev => (prev + 1) % textArray.length);
          setCurrentCharIndex(0);
          timeout = setTimeout(() => {}, pauseDuration);
        } else {
          timeout = setTimeout(() => {
            setDisplayedText(prev => prev.slice(0, -1));
          }, deletingSpeed);
        }
      } else {
        if (currentCharIndex < processedText.length) {
          timeout = setTimeout(
            () => {
              setDisplayedText(prev => prev + processedText[currentCharIndex]);
              setCurrentCharIndex(prev => prev + 1);
            },
            variableSpeed ? getRandomSpeed() : typingSpeed
          );
        } else if (textArray.length > 1) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
          }, pauseDuration);
        }
      }
    };

    if (currentCharIndex === 0 && !isDeleting && displayedText === '') {
      timeout = setTimeout(executeTypingAnimation, initialDelay);
    } else {
      executeTypingAnimation();
    }

    return () => clearTimeout(timeout);
  }, [
    bidirectional,
    currentCharIndex,
    displayedText,
    isDeleting,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    textArray,
    currentTextIndex,
    loop,
    initialDelay,
    isVisible,
    reverseMode,
    variableSpeed,
    onSentenceComplete,
    getRandomSpeed
  ]);

  const shouldHideCursor =
    hideCursorWhileTyping && (currentCharIndex < textArray[currentTextIndex]?.length || isDeleting);

  return createElement(
    Component as any,
    {
      ref: containerRef,
      className: `text-type ${className}`,
      ...props
    },
    <>
      <span className="text-type__content" style={{ color: getCurrentTextColor() || 'inherit' }}>
        {displayedText}
      </span>
      {showCursor && (
        <span
          ref={cursorRef}
          className={`text-type__cursor ${cursorClassName} ${shouldHideCursor ? 'text-type__cursor--hidden' : ''}`}
        >
          {cursorCharacter}
        </span>
      )}
    </>
  );
};

export default TextType;
