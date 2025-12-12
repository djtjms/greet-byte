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
    sm: { width: 50, height: 100 },
    md: { width: 70, height: 140 },
    lg: { width: 90, height: 180 },
  };

  const { width, height } = sizeMap[size];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 80 160"
      className={`${className} transition-all duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(20px)' }}
    >
      <defs>
        {/* Golden gradient for grains */}
        <linearGradient id={`grain-gradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F4D03F" />
          <stop offset="50%" stopColor="#DAA520" />
          <stop offset="100%" stopColor="#B8860B" />
        </linearGradient>
        {/* Green gradient for stem and leaves */}
        <linearGradient id={`stem-gradient-${delay}`} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#228B22" />
          <stop offset="50%" stopColor="#32CD32" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
        {/* Leaf gradient */}
        <linearGradient id={`leaf-gradient-${delay}`} x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#2E8B57" />
          <stop offset="50%" stopColor="#3CB371" />
          <stop offset="100%" stopColor="#228B22" />
        </linearGradient>
      </defs>

      {/* Main curved stem going up and bending right with grain weight */}
      <path
        d="M40 160 Q38 120 42 80 Q48 50 60 30"
        stroke={`url(#stem-gradient-${delay})`}
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        className="animate-paddy-sway"
        style={{ animationDelay: `${delay}ms`, transformOrigin: '40px 160px' }}
      />

      {/* Left leaf - long and curved */}
      <path
        d="M40 130 Q20 115 8 125 Q18 120 40 130"
        fill={`url(#leaf-gradient-${delay})`}
        className="animate-paddy-sway"
        style={{ animationDelay: `${delay + 100}ms`, transformOrigin: '40px 130px' }}
      />
      
      {/* Right leaf - curved elegantly */}
      <path
        d="M42 110 Q62 95 72 105 Q60 98 42 110"
        fill={`url(#leaf-gradient-${delay})`}
        className="animate-paddy-sway"
        style={{ animationDelay: `${delay + 150}ms`, transformOrigin: '42px 110px' }}
      />

      {/* Bottom golden leaf (mature) */}
      <path
        d="M38 145 Q22 140 15 150 Q25 142 38 145"
        fill="#DAA520"
        opacity="0.8"
        className="animate-paddy-sway"
        style={{ animationDelay: `${delay + 200}ms`, transformOrigin: '38px 145px' }}
      />

      {/* Grain cluster - arranged along the curved stem top */}
      <g className="animate-paddy-sway" style={{ animationDelay: `${delay + 50}ms`, transformOrigin: '55px 40px' }}>
        {/* Top grains - drooping arrangement */}
        <ellipse cx="62" cy="28" rx="4" ry="7" fill={`url(#grain-gradient-${delay})`} transform="rotate(30 62 28)" />
        <ellipse cx="58" cy="22" rx="3.5" ry="6" fill={`url(#grain-gradient-${delay})`} transform="rotate(25 58 22)" />
        <ellipse cx="54" cy="18" rx="3" ry="5.5" fill={`url(#grain-gradient-${delay})`} transform="rotate(15 54 18)" />
        
        {/* Middle row grains */}
        <ellipse cx="64" cy="38" rx="4" ry="7" fill={`url(#grain-gradient-${delay})`} transform="rotate(35 64 38)" />
        <ellipse cx="60" cy="32" rx="3.5" ry="6.5" fill={`url(#grain-gradient-${delay})`} transform="rotate(30 60 32)" />
        <ellipse cx="56" cy="27" rx="3" ry="6" fill={`url(#grain-gradient-${delay})`} transform="rotate(20 56 27)" />
        
        {/* Lower row grains */}
        <ellipse cx="58" cy="45" rx="4" ry="7" fill={`url(#grain-gradient-${delay})`} transform="rotate(25 58 45)" />
        <ellipse cx="54" cy="40" rx="3.5" ry="6.5" fill={`url(#grain-gradient-${delay})`} transform="rotate(20 54 40)" />
        <ellipse cx="50" cy="36" rx="3" ry="6" fill={`url(#grain-gradient-${delay})`} transform="rotate(10 50 36)" />
        
        {/* Additional detail grains */}
        <ellipse cx="52" cy="52" rx="3.5" ry="6" fill={`url(#grain-gradient-${delay})`} transform="rotate(15 52 52)" />
        <ellipse cx="48" cy="48" rx="3" ry="5.5" fill={`url(#grain-gradient-${delay})`} transform="rotate(10 48 48)" />
        <ellipse cx="46" cy="58" rx="3" ry="5" fill={`url(#grain-gradient-${delay})`} transform="rotate(5 46 58)" />
        
        {/* Tip grains */}
        <ellipse cx="66" cy="32" rx="3" ry="5" fill={`url(#grain-gradient-${delay})`} transform="rotate(40 66 32)" />
        <ellipse cx="68" cy="42" rx="3" ry="5.5" fill={`url(#grain-gradient-${delay})`} transform="rotate(45 68 42)" />
      </g>

      {/* Small awns (whiskers) on grains */}
      <g stroke="#B8860B" strokeWidth="0.5" fill="none" opacity="0.7"
         className="animate-paddy-sway" style={{ animationDelay: `${delay + 80}ms`, transformOrigin: '55px 35px' }}>
        <path d="M62 21 L65 15" />
        <path d="M58 16 L60 10" />
        <path d="M54 13 L55 8" />
        <path d="M66 26 L70 22" />
        <path d="M68 36 L72 32" />
      </g>
    </svg>
  );
};

export default PaddyAnimation;
