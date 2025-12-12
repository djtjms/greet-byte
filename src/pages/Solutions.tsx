import { useLanguage } from '@/contexts/LanguageContext';
import { GraduationCap, Stethoscope, Wheat, Building2, Landmark, Smartphone, Brain, Users, ArrowRight } from 'lucide-react';
import PaddyField from '@/components/PaddyField';
import { Link } from 'react-router-dom';

const Solutions = () => {
  const { language } = useLanguage();

  const pillars = [
    {
      icon: <GraduationCap className="w-10 h-10" />,
      titleBn: 'দক্ষতা সেতু',
      titleEn: 'Skills Bridge',
      descBn: 'শিক্ষা থেকে চাকরি পর্যন্ত AI গাইড',
      descEn: 'AI-guided education to employment',
      color: 'bg-blue-500',
    },
    {
      icon: <Stethoscope className="w-10 h-10" />,
      titleBn: 'স্বাস্থ্য সংযোগ',
      titleEn: 'Health Connect',
      descBn: 'টেলিমেডিসিন ও AI স্বাস্থ্য সেবা',
      descEn: 'Telemedicine & AI healthcare',
      color: 'bg-red-500',
    },
    {
      icon: <Wheat className="w-10 h-10" />,
      titleBn: 'কৃষি বুদ্ধিমত্তা',
      titleEn: 'Agri-Intelligence',
      descBn: 'স্মার্ট চাষ ও বাজার সংযোগ',
      descEn: 'Smart farming & market access',
      color: 'bg-green-500',
    },
    {
      icon: <Building2 className="w-10 h-10" />,
      titleBn: 'ব্যবসা ত্বরক',
      titleEn: 'Business Accelerator',
      descBn: 'SME ডিজিটাইজেশন ও ঋণ',
      descEn: 'SME digitization & credit',
      color: 'bg-purple-500',
    },
    {
      icon: <Landmark className="w-10 h-10" />,
      titleBn: 'আর্থিক অন্তর্ভুক্তি',
      titleEn: 'Financial Inclusion',
      descBn: 'মোবাইল ব্যাংকিং সবার জন্য',
      descEn: 'Mobile banking for everyone',
      color: 'bg-yellow-500',
    },
    {
      icon: <Smartphone className="w-10 h-10" />,
      titleBn: 'সরকার সংযোগ',
      titleEn: 'Gov Connect',
      descBn: 'সহজ সরকারি সেবা',
      descEn: 'Easy government services',
      color: 'bg-cyan-500',
    },
  ];

  const roles = [
    {
      icon: <Users className="w-8 h-8" />,
      roleBn: 'কৃষক',
      roleEn: 'Farmer',
      benefitBn: 'ফসলের দাম ৩০% বেশি পাবেন',
      benefitEn: 'Get 30% better crop prices',
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      roleBn: 'শিক্ষার্থী',
      roleEn: 'Student',
      benefitBn: 'চাকরি পাওয়ার সম্ভাবনা ৫ গুণ',
      benefitEn: '5x more likely to get jobs',
    },
    {
      icon: <Stethoscope className="w-8 h-8" />,
      roleBn: 'ডাক্তার',
      roleEn: 'Doctor',
      benefitBn: '৫০০০+ রোগী সেবা দিন',
      benefitEn: 'Serve 5000+ patients',
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      roleBn: 'ব্যবসায়ী',
      roleEn: 'Business Owner',
      benefitBn: 'বিক্রি ২০০% বৃদ্ধি',
      benefitEn: 'Increase sales by 200%',
    },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-30">
          <PaddyField count={5} />
        </div>
        <div className="absolute bottom-0 right-0 opacity-30">
          <PaddyField count={5} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-6">✨</div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {language === 'bn' ? 'সমাধান আছে!' : 'There Is A Solution!'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'bn'
              ? 'বাংলাদেশ ২.০ - একটি প্ল্যাটফর্ম যা সবার জীবন বদলে দেবে'
              : 'Bangladesh 2.0 - One platform that transforms every life'}
          </p>
        </div>
      </section>

      {/* AI Core Visualization */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
            {language === 'bn' ? 'প্ল্যাটফর্ম কীভাবে কাজ করে' : 'How The Platform Works'}
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            {language === 'bn'
              ? 'AI প্রযুক্তি দিয়ে ৬টি স্তম্ভ সংযুক্ত'
              : '6 pillars connected by AI technology'}
          </p>

          {/* Central AI Core */}
          <div className="relative flex flex-col items-center mb-12">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center shadow-2xl animate-pulse-slow">
              <Brain className="w-16 h-16 md:w-20 md:h-20 text-white" />
            </div>
            <p className="mt-4 font-bold text-primary text-xl">
              {language === 'bn' ? 'AI কোর' : 'AI Core'}
            </p>
          </div>

          {/* 6 Pillars */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-5 shadow-lg border border-border hover:shadow-xl transition-all hover:-translate-y-1 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-16 h-16 rounded-full ${pillar.color} flex items-center justify-center text-white mb-4 mx-auto`}>
                  {pillar.icon}
                </div>
                <h3 className="text-lg font-bold text-center text-foreground mb-2">
                  {language === 'bn' ? pillar.titleBn : pillar.titleEn}
                </h3>
                <p className="text-sm text-center text-muted-foreground">
                  {language === 'bn' ? pillar.descBn : pillar.descEn}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Role-Based Benefits */}
      <section className="py-16 px-4 bg-muted">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
            {language === 'bn' ? 'আপনার জন্য কী আছে?' : "What's In It For You?"}
          </h2>
          <p className="text-center text-muted-foreground mb-12">
            {language === 'bn' ? 'আপনার ভূমিকা অনুযায়ী সুবিধা' : 'Benefits based on your role'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {roles.map((role, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-lg border-2 border-primary/20 hover:border-primary transition-all flex items-center gap-4 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  {role.icon}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-foreground">
                    {language === 'bn' ? role.roleBn : role.roleEn}
                  </h3>
                  <p className="text-primary font-semibold flex items-center gap-2">
                    <ArrowRight className="w-4 h-4" />
                    {language === 'bn' ? role.benefitBn : role.benefitEn}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before → After */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-12">
            {language === 'bn' ? 'পরিবর্তন দেখুন' : 'See The Transformation'}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Before */}
            <div className="bg-destructive/10 rounded-2xl p-6 border-2 border-destructive/30">
              <h3 className="text-xl font-bold text-destructive mb-4 text-center">
                {language === 'bn' ? 'আগে 😔' : 'Before 😔'}
              </h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-2">❌ {language === 'bn' ? '৪৭% বেকার স্নাতক' : '47% unemployed graduates'}</li>
                <li className="flex items-center gap-2">❌ {language === 'bn' ? 'ডাক্তার পাওয়া কঠিন' : 'Hard to find doctors'}</li>
                <li className="flex items-center gap-2">❌ {language === 'bn' ? 'ফসল নষ্ট হয়' : 'Crops go to waste'}</li>
                <li className="flex items-center gap-2">❌ {language === 'bn' ? 'ব্যাংক সুবিধা নেই' : 'No banking access'}</li>
              </ul>
            </div>

            {/* After */}
            <div className="bg-primary/10 rounded-2xl p-6 border-2 border-primary/30">
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                {language === 'bn' ? 'পরে 🎉' : 'After 🎉'}
              </h3>
              <ul className="space-y-3 text-foreground">
                <li className="flex items-center gap-2">✅ {language === 'bn' ? '৯০%+ কর্মসংস্থান' : '90%+ employment'}</li>
                <li className="flex items-center gap-2">✅ {language === 'bn' ? 'AI টেলিমেডিসিন' : 'AI telemedicine'}</li>
                <li className="flex items-center gap-2">✅ {language === 'bn' ? 'স্মার্ট কৃষি' : 'Smart agriculture'}</li>
                <li className="flex items-center gap-2">✅ {language === 'bn' ? 'মোবাইল ব্যাংকিং' : 'Mobile banking'}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-6">
            {language === 'bn' ? 'যুক্ত হন এখনই!' : 'Join Us Now!'}
          </h2>
          <p className="text-lg mb-8 opacity-90">
            {language === 'bn'
              ? 'আপনার অংশগ্রহণ বাংলাদেশকে বদলে দেবে'
              : 'Your participation will transform Bangladesh'}
          </p>
          <Link
            to="/get-involved"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-xl text-xl font-bold hover:bg-secondary/90 transition-all transform hover:scale-105 shadow-xl"
          >
            {language === 'bn' ? 'শুরু করুন →' : 'Get Started →'}
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Solutions;
