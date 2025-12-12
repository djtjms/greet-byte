import bangladeshLogo from "@/assets/bangladesh-logo.png";
import tariqueRahman from "@/assets/tarique-rahman.webp";
import { Users, GraduationCap, Stethoscope, Wheat, Building2, Landmark, TrendingUp, Wifi, Heart, BookOpen } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import PaddyField from "@/components/PaddyField";
import { Link } from "react-router-dom";

const Index = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background pt-16">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-4 py-12 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-secondary/10" />
        
        {/* Paddy Field Background */}
        <div className="absolute bottom-0 left-0 right-0 flex justify-between items-end opacity-40 pointer-events-none">
          <PaddyField count={4} className="hidden md:flex" />
          <PaddyField count={4} className="hidden md:flex" />
        </div>
        
        {/* Logo */}
        <div className="relative z-10 animate-float mb-6">
          <img 
            src={bangladeshLogo} 
            alt={t('বাংলাদেশ ২.০ লোগো', 'Bangladesh 2.0 Logo')}
            className="w-36 h-36 md:w-48 md:h-48 object-contain drop-shadow-2xl"
          />
        </div>
        
        {/* Title */}
        <h1 className="relative z-10 text-3xl md:text-5xl lg:text-6xl font-bold text-center text-primary mb-3 animate-fade-in">
          {t('বাংলাদেশ ২.০', 'Bangladesh 2.0')}
        </h1>
        <p className="relative z-10 text-lg md:text-xl text-center text-muted-foreground max-w-2xl mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          {t('নিজেকে বদলান, বাংলাদেশ বদলাবে', 'Change Yourself to Change Bangladesh')}
        </p>

        {/* Leader Section */}
        <div className="relative z-10 bg-card rounded-2xl shadow-2xl p-6 md:p-8 max-w-md mx-auto animate-fade-in border-2 border-primary/20" style={{ animationDelay: '0.4s' }}>
          <div className="flex flex-col items-center">
            <div className="w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-secondary shadow-xl mb-4">
              <img 
                src={tariqueRahman} 
                alt={t('জনাব তারেক রহমান', 'Mr. Tarique Rahman')}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-primary text-center">
              {t('জনাব তারেক রহমান', 'Mr. Tarique Rahman')}
            </h2>
            <p className="text-sm text-muted-foreground text-center">
              {t('নেতা ও পথপ্রদর্শক', 'Leader & Visionary')}
            </p>
          </div>
        </div>

        {/* Mobile Paddy */}
        <div className="md:hidden mt-8 opacity-50">
          <PaddyField count={5} />
        </div>
      </section>

      {/* Vision Statement - Simple & Visual */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            🇧🇩 {t('আমাদের স্বপ্ন', 'Our Dream')}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            <VisionCard icon="💰" label={t('$1 ট্রিলিয়ন', '$1 Trillion')} sublabel={t('অর্থনীতি', 'Economy')} />
            <VisionCard icon="💼" label={t('কর্মসংস্থান', 'Jobs for All')} sublabel={t('সবার জন্য', 'Employment')} />
            <VisionCard icon="🏥" label={t('স্বাস্থ্যসেবা', 'Healthcare')} sublabel={t('সবার জন্য', 'For All')} />
            <VisionCard icon="📚" label={t('শিক্ষা', 'Education')} sublabel={t('মানসম্মত', 'Quality')} />
          </div>
        </div>
      </section>

      {/* Role Selector - Icon-Based for All Literacy Levels */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
            {t('আপনি কে?', 'Who Are You?')}
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            {t('আপনার জন্য কী আছে দেখুন', 'See what\'s for you')}
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            <RoleCard icon={<Users className="w-12 h-12" />} label={t('নাগরিক', 'Citizen')} sublabel={t('সাধারণ মানুষ', 'General Public')} />
            <RoleCard icon={<GraduationCap className="w-12 h-12" />} label={t('শিক্ষার্থী', 'Student')} sublabel={t('ছাত্র-ছাত্রী', 'Learners')} />
            <RoleCard icon={<Stethoscope className="w-12 h-12" />} label={t('ডাক্তার', 'Doctor')} sublabel={t('স্বাস্থ্যকর্মী', 'Healthcare')} />
            <RoleCard icon={<Wheat className="w-12 h-12" />} label={t('কৃষক', 'Farmer')} sublabel={t('চাষী', 'Agriculture')} />
            <RoleCard icon={<Building2 className="w-12 h-12" />} label={t('ব্যবসায়ী', 'Business')} sublabel={t('উদ্যোক্তা', 'Entrepreneur')} />
            <RoleCard icon={<Landmark className="w-12 h-12" />} label={t('সরকারি', 'Government')} sublabel={t('কর্মকর্তা', 'Official')} />
          </div>
        </div>
      </section>

      {/* Live Progress Meters - Visual Counters */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">
            📊 {t('অগ্রগতি', 'Progress')}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ProgressCard 
              icon={<TrendingUp className="w-8 h-8 text-primary" />}
              label={t('জিডিপি অগ্রগতি', 'GDP Progress')}
              value={450}
              max={1000}
              unit="$B"
            />
            <ProgressCard 
              icon={<Wifi className="w-8 h-8 text-primary" />}
              label={t('ডিজিটাল কাজ', 'Digital Jobs')}
              value={125000}
              max={500000}
              unit=""
            />
            <ProgressCard 
              icon={<Heart className="w-8 h-8 text-primary" />}
              label={t('কৃষক সংযুক্ত', 'Farmers Connected')}
              value={2500000}
              max={10000000}
              unit=""
            />
            <ProgressCard 
              icon={<BookOpen className="w-8 h-8 text-primary" />}
              label={t('শিক্ষার্থী শিখছে', 'Students Learning')}
              value={500000}
              max={2000000}
              unit=""
            />
          </div>
        </div>
      </section>

      {/* Quick Links to Other Pages */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">
            {t('আরও জানুন', 'Learn More')}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link 
              to="/problems"
              className="bg-destructive/10 border-2 border-destructive/30 rounded-2xl p-6 text-center hover:bg-destructive/20 transition-all group"
            >
              <div className="text-4xl mb-3">😔</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('সমস্যাগুলো দেখুন', 'See The Problems')}
              </h3>
              <p className="text-muted-foreground">
                {t('বাংলাদেশের চ্যালেঞ্জ জানুন', 'Understand Bangladesh\'s challenges')}
              </p>
            </Link>
            <Link 
              to="/solutions"
              className="bg-primary/10 border-2 border-primary/30 rounded-2xl p-6 text-center hover:bg-primary/20 transition-all group"
            >
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {t('সমাধান দেখুন', 'See The Solutions')}
              </h3>
              <p className="text-muted-foreground">
                {t('বাংলাদেশ ২.০ কীভাবে সাহায্য করবে', 'How Bangladesh 2.0 helps')}
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            🤝 {t('যুক্ত হন', 'Join Us')}
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            {t('একসাথে বাংলাদেশ গড়ি', 'Let\'s Build Bangladesh Together')}
          </p>
          <button className="bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-xl font-bold hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-xl">
            {t('শুরু করুন', 'Get Started')}
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
            © 2024 {t('বাংলাদেশ ২.০ - নিজেকে বদলান, বাংলাদেশ বদলাবে', 'Bangladesh 2.0 - Change Yourself to Change Bangladesh')}
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
