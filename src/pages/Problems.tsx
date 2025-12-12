import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Stethoscope, Wallet, Wheat, Briefcase, Wifi, TrendingDown } from 'lucide-react';
import { useEffect, useState } from 'react';
import PaddyField from '@/components/PaddyField';

const Problems = () => {
  const { language } = useLanguage();
  const [costCounter, setCostCounter] = useState(0);

  // Simulated "Cost of Inaction" counter
  useEffect(() => {
    const interval = setInterval(() => {
      setCostCounter((prev) => prev + Math.floor(Math.random() * 1000) + 500);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const problems = [
    {
      icon: <GraduationCap className="w-12 h-12" />,
      titleBn: 'শিক্ষা সংকট',
      titleEn: 'Education Crisis',
      statBn: '৪৭% স্নাতক বেকার',
      statEn: '47% Graduates Unemployed',
      descBn: 'পড়াশোনা শেষ করেও কাজ নেই',
      descEn: 'Education doesn\'t lead to jobs',
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Stethoscope className="w-12 h-12" />,
      titleBn: 'স্বাস্থ্য সংকট',
      titleEn: 'Healthcare Crisis',
      statBn: '৪:২০০০ ডাক্তার-রোগী',
      statEn: '4:2000 Doctor Ratio',
      descBn: 'ডাক্তার পাওয়া কঠিন',
      descEn: 'Doctors hard to access',
      color: 'from-red-500 to-red-600',
    },
    {
      icon: <Wallet className="w-12 h-12" />,
      titleBn: 'আর্থিক বঞ্চনা',
      titleEn: 'Financial Exclusion',
      statBn: '৭১% ব্যাংকহীন',
      statEn: '71% Unbanked',
      descBn: 'ব্যাংক সুবিধা নেই',
      descEn: 'No banking access',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Wheat className="w-12 h-12" />,
      titleBn: 'কৃষি ক্ষতি',
      titleEn: 'Agricultural Loss',
      statBn: '৩০% ফসল নষ্ট',
      statEn: '30% Post-Harvest Loss',
      descBn: 'ফসল তোলার পর নষ্ট হয়',
      descEn: 'Crops wasted after harvest',
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Briefcase className="w-12 h-12" />,
      titleBn: 'বেকারত্ব',
      titleEn: 'Unemployment',
      statBn: '২.৫ কোটি বেকার যুবক',
      statEn: '25M Unemployed Youth',
      descBn: 'তরুণদের কাজ নেই',
      descEn: 'Youth without work',
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Wifi className="w-12 h-12" />,
      titleBn: 'ডিজিটাল বৈষম্য',
      titleEn: 'Digital Divide',
      statBn: '৬০% ইন্টারনেট বাইরে',
      statEn: '60% Without Internet',
      descBn: 'গ্রামে ইন্টারনেট নেই',
      descEn: 'Rural areas disconnected',
      color: 'from-cyan-500 to-cyan-600',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-destructive/10 via-background to-muted overflow-hidden">
        <div className="absolute bottom-0 right-0 opacity-20">
          <PaddyField count={5} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-6">😔</div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {language === 'bn' ? 'আমরা এই সমস্যাগুলো জানি' : 'We Know These Challenges'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'বাংলাদেশের মানুষ প্রতিদিন যে সমস্যার মুখোমুখি হয়'
              : 'The challenges Bangladeshi people face every day'}
          </p>
        </div>
      </section>

      {/* Cost of Inaction Counter */}
      <section className="py-8 px-4 bg-destructive text-destructive-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-2">
            <TrendingDown className="w-8 h-8 animate-pulse" />
            <h2 className="text-xl md:text-2xl font-bold">
              {language === 'bn' ? 'নিষ্ক্রিয়তার মূল্য' : 'Cost of Inaction'}
            </h2>
          </div>
          <div className="text-4xl md:text-6xl font-bold font-mono">
            ৳ {costCounter.toLocaleString()}
          </div>
          <p className="text-sm opacity-80 mt-2">
            {language === 'bn' ? 'প্রতি সেকেন্ডে ক্ষতি' : 'Lost every second'}
          </p>
        </div>
      </section>

      {/* Problem Cards */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
            {language === 'bn' ? '৬টি বড় সমস্যা' : '6 Major Challenges'}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${problem.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold text-center text-foreground mb-2">
                  {language === 'bn' ? problem.titleBn : problem.titleEn}
                </h3>
                <div className="text-2xl font-bold text-center text-primary mb-2">
                  {language === 'bn' ? problem.statBn : problem.statEn}
                </div>
                <p className="text-center text-muted-foreground">
                  {language === 'bn' ? problem.descBn : problem.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {language === 'bn' ? 'কিন্তু সমাধান আছে!' : 'But There Is A Solution!'}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {language === 'bn'
              ? 'বাংলাদেশ ২.০ এই সব সমস্যার সমাধান নিয়ে এসেছে'
              : 'Bangladesh 2.0 brings solutions to all these challenges'}
          </p>
          <a
            href="/solutions"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-xl font-bold hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-xl"
          >
            {language === 'bn' ? 'সমাধান দেখুন →' : 'See Solutions →'}
          </a>
        </div>
      </section>
    </div>
  );
};

export default Problems;
