import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();

  return (
    <button
      onClick={() => setLanguage(language === 'bn' ? 'en' : 'bn')}
      className="flex items-center gap-2 px-4 py-2 bg-card border-2 border-primary/30 rounded-full hover:border-primary transition-all shadow-md hover:shadow-lg"
      aria-label={language === 'bn' ? 'Switch to English' : 'বাংলায় পড়ুন'}
    >
      {language === 'bn' ? (
        <>
          <span className="text-lg">🇬🇧</span>
          <span className="font-semibold text-foreground text-sm">English</span>
        </>
      ) : (
        <>
          <span className="text-lg">🇧🇩</span>
          <span className="font-semibold text-foreground text-sm">বাংলা</span>
        </>
      )}
    </button>
  );
};

export default LanguageToggle;
