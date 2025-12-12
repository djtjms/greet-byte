import bangladeshLogo from "@/assets/bangladesh-logo.png";
import tariqueRahman from "@/assets/tarique-rahman.webp";
import { Users, GraduationCap, Stethoscope, Wheat, Building2, Landmark, TrendingUp, Wifi, Heart, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        
        {/* Logo */}
        <div className="relative z-10 animate-float mb-8">
          <img 
            src={bangladeshLogo} 
            alt="বাংলাদেশ ২.০ লোগো - Change Yourself to Change Bangladesh" 
            className="w-40 h-40 md:w-56 md:h-56 object-contain drop-shadow-2xl"
          />
        </div>
        
        {/* Title */}
        <h1 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-4 animate-fade-in">
          বাংলাদেশ ২.০
        </h1>
        <p className="relative z-10 text-xl md:text-2xl lg:text-3xl font-semibold text-center text-foreground/90 mb-2 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Bangladesh 2.0
        </p>
        <p className="relative z-10 text-lg md:text-xl text-center text-muted-foreground max-w-2xl mb-12 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          নিজেকে বদলান, বাংলাদেশ বদলাবে
          <br />
          <span className="text-base">Change Yourself to Change Bangladesh</span>
        </p>

        {/* Leader Section */}
        <div className="relative z-10 bg-card rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto animate-fade-in border-2 border-primary/20" style={{ animationDelay: '0.6s' }}>
          <div className="flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-secondary shadow-xl mb-4">
              <img 
                src={tariqueRahman} 
                alt="জনাব তারেক রহমান - Mr. Tarique Rahman" 
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-primary text-center">
              জনাব তারেক রহমান
            </h2>
            <p className="text-base text-muted-foreground text-center">
              Mr. Tarique Rahman
            </p>
          </div>
        </div>
      </section>

      {/* Vision Statement - Simple & Visual */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            🇧🇩 আমাদের স্বপ্ন / Our Dream
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <VisionCard icon="💰" label="$1 Trillion" sublabel="অর্থনীতি / Economy" />
            <VisionCard icon="💼" label="কর্মসংস্থান" sublabel="Jobs for All" />
            <VisionCard icon="🏥" label="স্বাস্থ্যসেবা" sublabel="Healthcare" />
            <VisionCard icon="📚" label="শিক্ষা" sublabel="Education" />
          </div>
        </div>
      </section>

      {/* Role Selector - Icon-Based for All Literacy Levels */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
            আপনি কে? / Who Are You?
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            আপনার জন্য কী আছে দেখুন / See what's for you
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <RoleCard icon={<Users className="w-12 h-12" />} label="নাগরিক" sublabel="Citizen" />
            <RoleCard icon={<GraduationCap className="w-12 h-12" />} label="শিক্ষার্থী" sublabel="Student" />
            <RoleCard icon={<Stethoscope className="w-12 h-12" />} label="ডাক্তার" sublabel="Doctor" />
            <RoleCard icon={<Wheat className="w-12 h-12" />} label="কৃষক" sublabel="Farmer" />
            <RoleCard icon={<Building2 className="w-12 h-12" />} label="ব্যবসায়ী" sublabel="Business" />
            <RoleCard icon={<Landmark className="w-12 h-12" />} label="সরকারি" sublabel="Government" />
          </div>
        </div>
      </section>

      {/* Live Progress Meters - Visual Counters */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">
            📊 অগ্রগতি / Progress
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProgressCard 
              icon={<TrendingUp className="w-8 h-8 text-primary" />}
              label="জিডিপি অগ্রগতি / GDP Progress"
              value={450}
              max={1000}
              unit="$B"
            />
            <ProgressCard 
              icon={<Wifi className="w-8 h-8 text-primary" />}
              label="ডিজিটাল কাজ / Digital Jobs"
              value={125000}
              max={500000}
              unit=""
            />
            <ProgressCard 
              icon={<Heart className="w-8 h-8 text-primary" />}
              label="কৃষক সংযুক্ত / Farmers Connected"
              value={2500000}
              max={10000000}
              unit=""
            />
            <ProgressCard 
              icon={<BookOpen className="w-8 h-8 text-primary" />}
              label="শিক্ষার্থী শিখছে / Students Learning"
              value={500000}
              max={2000000}
              unit=""
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            🤝 যুক্ত হন / Join Us
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            একসাথে বাংলাদেশ গড়ি
            <br />
            <span className="text-base">Let's Build Bangladesh Together</span>
          </p>
          <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-xl font-bold hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-xl">
            শুরু করুন / Get Started
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 bg-foreground text-background">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={bangladeshLogo} 
            alt="Bangladesh 2.0" 
            className="w-16 h-16 mx-auto mb-4 opacity-80"
          />
          <p className="text-sm opacity-70">
            © 2024 Bangladesh 2.0 - Change Yourself to Change Bangladesh
          </p>
        </div>
      </footer>
    </div>
  );
};

// Simple Vision Card Component
const VisionCard = ({ icon, label, sublabel }: { icon: string; label: string; sublabel: string }) => (
  <div className="bg-primary-foreground/10 rounded-xl p-4 text-center hover:bg-primary-foreground/20 transition-colors">
    <div className="text-4xl mb-2">{icon}</div>
    <div className="font-bold text-lg">{label}</div>
    <div className="text-sm opacity-80">{sublabel}</div>
  </div>
);

// Role Selection Card
const RoleCard = ({ icon, label, sublabel }: { icon: React.ReactNode; label: string; sublabel: string }) => (
  <button className="bg-card border-2 border-primary/20 rounded-2xl p-6 text-center hover:border-primary hover:shadow-lg transition-all transform hover:scale-105 group">
    <div className="text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <div className="font-bold text-lg text-foreground">{label}</div>
    <div className="text-sm text-muted-foreground">{sublabel}</div>
  </button>
);

// Progress Bar Card
const ProgressCard = ({ icon, label, value, max, unit }: { icon: React.ReactNode; label: string; value: number; max: number; unit: string }) => {
  const percentage = (value / max) * 100;
  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(0)}K`;
    return num.toString();
  };
  
  return (
    <div className="bg-card rounded-xl p-6 shadow-md">
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <span className="font-semibold text-foreground">{label}</span>
      </div>
      <div className="h-4 bg-muted rounded-full overflow-hidden mb-2">
        <div 
          className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
          style={{ width: `${percentage}%` }}
        />
      </div>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>{formatNumber(value)}{unit}</span>
        <span>{formatNumber(max)}{unit}</span>
      </div>
    </div>
  );
};

export default Index;
