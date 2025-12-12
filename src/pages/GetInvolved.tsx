import { useLanguage } from '@/contexts/LanguageContext';
import { useState } from 'react';
import { 
  Users, GraduationCap, Stethoscope, Wheat, Building2, Landmark, 
  Phone, Mail, MessageCircle, Send, CheckCircle, Star, Heart
} from 'lucide-react';
import PaddyField from '@/components/PaddyField';
import bangladeshLogo from '@/assets/bangladesh-logo.png';

const GetInvolved = () => {
  const { t, language } = useLanguage();
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [championForm, setChampionForm] = useState({
    name: '',
    phone: '',
    district: '',
    motivation: ''
  });

  const roles = [
    { id: 'citizen', icon: <Users className="w-10 h-10" />, labelBn: 'নাগরিক', labelEn: 'Citizen' },
    { id: 'student', icon: <GraduationCap className="w-10 h-10" />, labelBn: 'শিক্ষার্থী', labelEn: 'Student' },
    { id: 'doctor', icon: <Stethoscope className="w-10 h-10" />, labelBn: 'ডাক্তার', labelEn: 'Doctor' },
    { id: 'farmer', icon: <Wheat className="w-10 h-10" />, labelBn: 'কৃষক', labelEn: 'Farmer' },
    { id: 'business', icon: <Building2 className="w-10 h-10" />, labelBn: 'ব্যবসায়ী', labelEn: 'Business Owner' },
    { id: 'government', icon: <Landmark className="w-10 h-10" />, labelBn: 'সরকারি কর্মকর্তা', labelEn: 'Government Official' },
  ];

  const handleChampionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background pt-20 page-enter">
      {/* Hero Section */}
      <section className="relative py-16 px-4 bg-gradient-to-br from-primary/10 via-background to-secondary/10 overflow-hidden">
        <div className="absolute bottom-0 left-0 opacity-20">
          <PaddyField count={4} />
        </div>
        <div className="absolute bottom-0 right-0 opacity-20">
          <PaddyField count={4} />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-6">🤝</div>
          <h1 className="text-3xl md:text-5xl font-bold text-primary mb-4">
            {language === 'bn' ? 'যুক্ত হন' : 'Get Involved'}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'bn' 
              ? 'বাংলাদেশ ২.০ গড়তে আপনার অংশগ্রহণ প্রয়োজন'
              : 'Your participation is essential to build Bangladesh 2.0'}
          </p>
        </div>
      </section>

      {/* Role-Based Sign Up */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
            {language === 'bn' ? 'আপনার ভূমিকা বেছে নিন' : 'Choose Your Role'}
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            {language === 'bn' ? 'আপনি কে? আমাদের জানান' : 'Tell us who you are'}
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 mb-8">
            {roles.map((role) => (
              <button
                key={role.id}
                onClick={() => setSelectedRole(role.id)}
                className={`bg-card border-2 rounded-2xl p-6 text-center transition-all transform hover:scale-105 ${
                  selectedRole === role.id 
                    ? 'border-primary shadow-lg bg-primary/5' 
                    : 'border-border hover:border-primary/50'
                }`}
              >
                <div className={`mb-3 flex justify-center ${selectedRole === role.id ? 'text-primary' : 'text-muted-foreground'}`}>
                  {role.icon}
                </div>
                <div className="font-bold text-lg text-foreground">
                  {language === 'bn' ? role.labelBn : role.labelEn}
                </div>
                {selectedRole === role.id && (
                  <CheckCircle className="w-6 h-6 text-primary mx-auto mt-2" />
                )}
              </button>
            ))}
          </div>

          {selectedRole && (
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-primary/20 animate-fade-in max-w-md mx-auto">
              <h3 className="text-xl font-bold text-primary mb-4 text-center">
                {language === 'bn' ? 'নিবন্ধন করুন' : 'Register Now'}
              </h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder={language === 'bn' ? 'আপনার নাম' : 'Your Name'}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <input
                  type="tel"
                  placeholder={language === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder={language === 'bn' ? 'জেলা' : 'District'}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
                <button
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold hover:bg-primary/90 transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {language === 'bn' ? 'জমা দিন' : 'Submit'}
                </button>
              </form>
            </div>
          )}
        </div>
      </section>

      {/* Digital Champion Registration */}
      <section className="py-16 px-4 bg-gradient-to-br from-secondary/20 to-primary/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-4 py-2 rounded-full mb-4">
              <Star className="w-5 h-5" />
              <span className="font-bold">{language === 'bn' ? 'বিশেষ সুযোগ' : 'Special Opportunity'}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              {language === 'bn' ? 'ডিজিটাল চ্যাম্পিয়ন হন' : 'Become a Digital Champion'}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {language === 'bn' 
                ? 'আপনার এলাকায় বাংলাদেশ ২.০ এর প্রতিনিধি হিসেবে কাজ করুন এবং পরিবর্তনের অংশ হন'
                : 'Represent Bangladesh 2.0 in your area and be part of the transformation'}
            </p>
          </div>

          <div className="bg-card rounded-2xl p-6 md:p-8 shadow-xl border-2 border-secondary/30 max-w-lg mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-secondary/20 flex items-center justify-center">
                <Heart className="w-10 h-10 text-secondary" />
              </div>
            </div>

            {formSubmitted ? (
              <div className="text-center py-8 animate-fade-in">
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-2">
                  {language === 'bn' ? 'ধন্যবাদ!' : 'Thank You!'}
                </h3>
                <p className="text-muted-foreground">
                  {language === 'bn' ? 'আমরা শীঘ্রই যোগাযোগ করব' : 'We will contact you soon'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleChampionSubmit} className="space-y-4">
                <input
                  type="text"
                  value={championForm.name}
                  onChange={(e) => setChampionForm({...championForm, name: e.target.value})}
                  placeholder={language === 'bn' ? 'পুরো নাম' : 'Full Name'}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  required
                />
                <input
                  type="tel"
                  value={championForm.phone}
                  onChange={(e) => setChampionForm({...championForm, phone: e.target.value})}
                  placeholder={language === 'bn' ? 'মোবাইল নম্বর' : 'Mobile Number'}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  required
                />
                <input
                  type="text"
                  value={championForm.district}
                  onChange={(e) => setChampionForm({...championForm, district: e.target.value})}
                  placeholder={language === 'bn' ? 'জেলা / উপজেলা' : 'District / Upazila'}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all"
                  required
                />
                <textarea
                  value={championForm.motivation}
                  onChange={(e) => setChampionForm({...championForm, motivation: e.target.value})}
                  placeholder={language === 'bn' ? 'কেন আপনি ডিজিটাল চ্যাম্পিয়ন হতে চান?' : 'Why do you want to become a Digital Champion?'}
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:border-secondary focus:ring-2 focus:ring-secondary/20 outline-none transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground py-4 rounded-xl font-bold hover:bg-secondary/90 transition-all flex items-center justify-center gap-2 text-lg"
                >
                  <Star className="w-5 h-5" />
                  {language === 'bn' ? 'চ্যাম্পিয়ন হিসেবে আবেদন করুন' : 'Apply as Champion'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Contact Options - Including SMS for low-tech users */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
            {language === 'bn' ? 'যোগাযোগ করুন' : 'Contact Us'}
          </h2>
          <p className="text-center text-muted-foreground mb-10">
            {language === 'bn' ? 'যেকোনো উপায়ে আমাদের সাথে যোগাযোগ করুন' : 'Reach out to us through any method'}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SMS - Highlighted for low-tech users */}
            <div className="bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary-foreground/20 flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">SMS</h3>
              <p className="opacity-90 mb-4 text-sm">
                {language === 'bn' ? 'ইন্টারনেট ছাড়াই যোগাযোগ' : 'Contact without internet'}
              </p>
              <div className="bg-primary-foreground/10 rounded-xl p-3">
                <p className="font-mono font-bold text-lg">01XXX-XXXXXX</p>
                <p className="text-sm opacity-80 mt-1">
                  {language === 'bn' ? '"BD2 নাম জেলা" লিখে পাঠান' : 'Send "BD2 Name District"'}
                </p>
              </div>
            </div>

            {/* Phone Call */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {language === 'bn' ? 'ফোন করুন' : 'Call Us'}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {language === 'bn' ? 'সরাসরি কথা বলুন' : 'Talk to us directly'}
              </p>
              <div className="bg-muted rounded-xl p-3">
                <p className="font-mono font-bold text-lg text-primary">01XXX-XXXXXX</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {language === 'bn' ? 'সকাল ৯টা - রাত ৯টা' : '9 AM - 9 PM'}
                </p>
              </div>
            </div>

            {/* Email */}
            <div className="bg-card rounded-2xl p-6 shadow-lg border border-border text-center transform hover:scale-105 transition-all">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">
                {language === 'bn' ? 'ইমেইল' : 'Email'}
              </h3>
              <p className="text-muted-foreground mb-4 text-sm">
                {language === 'bn' ? 'বিস্তারিত জানাতে' : 'For detailed inquiries'}
              </p>
              <div className="bg-muted rounded-xl p-3">
                <p className="font-bold text-primary break-all">info@bangladesh2.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 px-4 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center">
          <img 
            src={bangladeshLogo} 
            alt="Bangladesh 2.0" 
            className="w-24 h-24 mx-auto mb-6"
          />
          <h2 className="text-2xl md:text-4xl font-bold mb-4">
            {language === 'bn' ? 'নিজেকে বদলান, বাংলাদেশ বদলাবে' : 'Change Yourself to Change Bangladesh'}
          </h2>
          <p className="text-lg opacity-90">
            {language === 'bn' ? 'একসাথে আমরা $1 ট্রিলিয়ন অর্থনীতি গড়ব' : 'Together we will build a $1 trillion economy'}
          </p>
        </div>
      </section>
    </div>
  );
};

export default GetInvolved;
