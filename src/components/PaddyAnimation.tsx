import { useEffect, useState } from 'react';

interface PaddyAnimationProps {
  className?: string;
  delay?: number;
  size?: 'sm' | 'md' | 'lg';
}

const PaddyAnimation = ({ className = '', delay = 0, size = 'md' }: PaddyAnimationProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const sizeMap = {
    sm: { width: 40, height: 80 },
    md: { width: 60, height: 120 },
    lg: { width: 80, height: 160 },
  };

  const { width, height } = sizeMap[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 120"
      className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
    >
      {/* Main Stem */}
      <path
        d="M30 120 Q28 80 30 40"
        stroke="hsl(var(--primary))"
        strokeWidth="3"
        fill="none"
        className="animate-paddy-sway"
        style={{ animationDelay: `${delay}ms` }}
      />
      
      {/* Paddy Grains - Left Side */}
      <g className="animate-paddy-sway" style={{ animationDelay: `${delay + 100}ms` }}>
        <ellipse cx="22" cy="35" rx="4" ry="8" fill="hsl(var(--secondary))" />
        <ellipse cx="18" cy="45" rx="4" ry="8" fill="hsl(var(--secondary))" />
        <ellipse cx="20" cy="55" rx="4" ry="8" fill="hsl(var(--secondary))" />
      </g>
      
      {/* Paddy Grains - Right Side */}
      <g className="animate-paddy-sway" style={{ animationDelay: `${delay + 200}ms` }}>
        <ellipse cx="38" cy="30" rx="4" ry="8" fill="hsl(var(--secondary))" />
        <ellipse cx="42" cy="40" rx="4" ry="8" fill="hsl(var(--secondary))" />
        <ellipse cx="40" cy="50" rx="4" ry="8" fill="hsl(var(--secondary))" />
      </g>
      
      {/* Top Grain Cluster */}
      <g className="animate-paddy-sway" style={{ animationDelay: `${delay + 300}ms` }}>
        <ellipse cx="30" cy="20" rx="5" ry="10" fill="hsl(var(--secondary))" />
        <ellipse cx="25" cy="25" rx="4" ry="8" fill="hsl(var(--secondary))" />
        <ellipse cx="35" cy="25" rx="4" ry="8" fill="hsl(var(--secondary))" />
      </g>
      
      {/* Leaves */}
      <path
        d="M30 70 Q15 60 10 70"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        fill="none"
        className="animate-paddy-sway"
        style={{ animationDelay: `${delay + 150}ms` }}
      />
      <path
        d="M30 85 Q45 75 50 85"
        stroke="hsl(var(--primary))"
        strokeWidth="2"
        fill="none"
        className="animate-paddy-sway"
        style={{ animationDelay: `${delay + 250}ms` }}
      />
    </svg>
  );
};

export default PaddyAnimation;
