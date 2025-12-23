import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  stagger?: number;
  duration?: number;
  triggerOnView?: boolean;
  bidirectional?: boolean; // New prop for bidirectional scroll reveal
}

export default function TextReveal({ 
  text, 
  className = "text-4xl font-bold", 
  delay = 0,
  stagger = 0.1,
  duration = 0.6,
  triggerOnView = true,
  bidirectional = false
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!textRef.current) return;

    const letters = textRef.current.querySelectorAll("span");
    
    // Set initial state
    gsap.set(letters, { opacity: 0, y: 30 });

    if (bidirectional && triggerOnView) {
      // Bidirectional scroll reveal using ScrollTrigger
      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(
            letters,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: duration,
              stagger: stagger,
              ease: "power3.out",
              delay: delay
            }
          );
        },
        onLeave: () => {
          gsap.to(letters, {
            opacity: 0,
            y: -30,
            duration: duration * 0.7,
            stagger: stagger * 0.5,
            ease: "power3.in"
          });
        },
        onEnterBack: () => {
          gsap.fromTo(
            letters,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: duration,
              stagger: stagger,
              ease: "power3.out"
            }
          );
        },
        onLeaveBack: () => {
          gsap.to(letters, {
            opacity: 0,
            y: 30,
            duration: duration * 0.7,
            stagger: stagger * 0.5,
            ease: "power3.in"
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((scrollTriggerInstance: ScrollTrigger) => {
          if (scrollTriggerInstance.trigger === textRef.current) {
            scrollTriggerInstance.kill();
          }
        });
      };
    } else {
      // Original behavior for non-bidirectional
      const animateText = () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        
        gsap.fromTo(
          letters,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: stagger,
            ease: "power3.out",
            delay: delay
          }
        );
      };

      if (triggerOnView) {
        // Use Intersection Observer for viewport triggering
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                animateText();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(textRef.current);

        return () => {
          observer.disconnect();
        };
      } else {
        // Immediate animation
        animateText();
      }
    }
  }, [delay, stagger, duration, triggerOnView, bidirectional]);

  return (
    <div className={className} ref={textRef}>
      {text.split("").map((char, index) => (
        <span key={index} className="inline-block">
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
}

// Alternative component for word-based animation
export function TextRevealWords({ 
  text, 
  className = "text-4xl font-bold", 
  delay = 0,
  stagger = 0.15,
  duration = 0.8,
  triggerOnView = true,
  bidirectional = false
}: TextRevealProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!textRef.current) return;

    const words = textRef.current.querySelectorAll("span");
    
    // Set initial state
    gsap.set(words, { opacity: 0, y: 30 });

    if (bidirectional && triggerOnView) {
      // Bidirectional scroll reveal using ScrollTrigger
      ScrollTrigger.create({
        trigger: textRef.current,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
          gsap.fromTo(
            words,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: duration,
              stagger: stagger,
              ease: "power3.out",
              delay: delay
            }
          );
        },
        onLeave: () => {
          gsap.to(words, {
            opacity: 0,
            y: -30,
            duration: duration * 0.7,
            stagger: stagger * 0.5,
            ease: "power3.in"
          });
        },
        onEnterBack: () => {
          gsap.fromTo(
            words,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: duration,
              stagger: stagger,
              ease: "power3.out"
            }
          );
        },
        onLeaveBack: () => {
          gsap.to(words, {
            opacity: 0,
            y: 30,
            duration: duration * 0.7,
            stagger: stagger * 0.5,
            ease: "power3.in"
          });
        }
      });

      return () => {
        ScrollTrigger.getAll().forEach((scrollTriggerInstance: ScrollTrigger) => {
          if (scrollTriggerInstance.trigger === textRef.current) {
            scrollTriggerInstance.kill();
          }
        });
      };
    } else {
      // Original behavior for non-bidirectional
      const animateText = () => {
        if (hasAnimated.current) return;
        hasAnimated.current = true;
        
        gsap.fromTo(
          words,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: duration,
            stagger: stagger,
            ease: "power3.out",
            delay: delay
          }
        );
      };

      if (triggerOnView) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting && entry.intersectionRatio > 0.1) {
                animateText();
                observer.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.1 }
        );

        observer.observe(textRef.current);

        return () => {
          observer.disconnect();
        };
      } else {
        animateText();
      }
    }
  }, [delay, stagger, duration, triggerOnView, bidirectional]);

  return (
    <div className={className} ref={textRef}>
      {text.split(" ").map((word, index) => (
        <span key={index} className="inline-block mr-2">
          {word}
        </span>
      ))}
    </div>
  );
}
