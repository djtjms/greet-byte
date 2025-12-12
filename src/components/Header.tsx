import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import LanguageToggle from './LanguageToggle';
import bangladeshLogo from '@/assets/bangladesh-logo.png';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const { t } = useLanguage();
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { path: '/', labelBn: 'হোম', labelEn: 'Home' },
    { path: '/problems', labelBn: 'সমস্যা', labelEn: 'Problems' },
    { path: '/solutions', labelBn: 'সমাধান', labelEn: 'Solutions' },
    { path: '/get-involved', labelBn: 'যুক্ত হন', labelEn: 'Get Involved' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={bangladeshLogo}
            alt="Bangladesh 2.0"
            className="w-10 h-10 object-contain group-hover:scale-110 transition-transform"
          />
          <span className="font-bold text-primary text-lg hidden sm:block">
            {t('বাংলাদেশ ২.০', 'Bangladesh 2.0')}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-medium transition-colors hover:text-primary ${
                isActive(link.path)
                  ? 'text-primary border-b-2 border-primary pb-1'
                  : 'text-foreground/70'
              }`}
            >
              {t(link.labelBn, link.labelEn)}
            </Link>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-3">
          <LanguageToggle />
          
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border py-4 px-4 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`block py-3 px-4 rounded-lg font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-primary text-primary-foreground'
                  : 'text-foreground hover:bg-muted'
              }`}
            >
              {t(link.labelBn, link.labelEn)}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
