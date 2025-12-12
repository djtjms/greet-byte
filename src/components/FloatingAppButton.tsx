import bangladeshLogo from '@/assets/bangladesh-logo.png';

const FloatingAppButton = () => {
  return (
    <a
      href="https://bangladeshai2app.netlify.app"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Open Bangladesh 2.0 App"
    >
      <div className="relative">
        {/* Pulse animation ring */}
        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" />
        
        {/* Main button */}
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-card shadow-2xl border-2 border-primary flex items-center justify-center transform group-hover:scale-110 transition-all duration-300 overflow-hidden">
          <img 
            src={bangladeshLogo} 
            alt="Bangladesh 2.0 App" 
            className="w-14 h-14 md:w-18 md:h-18 object-contain"
          />
        </div>
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap shadow-lg">
            Open App
            <div className="absolute top-full right-4 border-8 border-transparent border-t-foreground" />
          </div>
        </div>
      </div>
    </a>
  );
};

export default FloatingAppButton;
