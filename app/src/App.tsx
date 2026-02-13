import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Hero } from './sections/Hero';
import { About } from './sections/About';
import { Projects } from './sections/Projects';
import { Skills } from './sections/Skills';
import { Contact } from './sections/Contact';
import { Footer } from './sections/Footer';
import { Toaster } from '@/components/ui/sonner';
import './App.css';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-hollow-dark text-hollow-white overflow-x-hidden">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isScrolled 
            ? 'bg-hollow-dark/90 backdrop-blur-md border-b border-hollow-gold/20 py-3' 
            : 'bg-transparent py-5'
          }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a 
              href="#" 
              onClick={(e) => { e.preventDefault(); scrollToSection('#'); }}
              className="flex items-center gap-2 group"
            >
              <div className="w-8 h-8 rounded bg-gradient-to-br from-hollow-gold to-hollow-gold-light flex items-center justify-center
                group-hover:shadow-glow transition-shadow duration-300">
                <span className="text-sm font-cinzel font-bold text-hollow-dark">IS</span>
              </div>
              <span className={`font-cinzel font-bold transition-colors duration-300
                ${isScrolled ? 'text-hollow-white' : 'text-hollow-white/90'}`}>
                Portafolio
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="px-4 py-2 text-sm text-hollow-blue-accent/80 hover:text-hollow-gold 
                    rounded-lg hover:bg-hollow-gold/10 transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 rounded-lg bg-hollow-blue/50 border border-hollow-gold/20 
                flex items-center justify-center hover:border-hollow-gold/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-hollow-gold" />
              ) : (
                <Menu className="w-5 h-5 text-hollow-blue-accent" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden overflow-hidden transition-all duration-300
              ${isMobileMenuOpen ? 'max-h-80 mt-4' : 'max-h-0'}`}
          >
            <div className="py-4 space-y-2 border-t border-hollow-gold/20">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                  className="block px-4 py-3 text-hollow-blue-accent/80 hover:text-hollow-gold 
                    hover:bg-hollow-gold/10 rounded-lg transition-all duration-300"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <Footer />

      {/* Toast notifications */}
      <Toaster 
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'hsl(230 20% 6%)',
            border: '1px solid hsl(45 80% 52% / 0.3)',
            color: 'hsl(220 20% 90%)',
          },
        }}
      />
    </div>
  );
}

export default App;
