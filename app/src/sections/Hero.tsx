import { useEffect, useRef } from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const particles = particlesRef.current;
    if (!particles) return;

    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'absolute w-1 h-1 bg-hollow-blue-light rounded-full animate-float';
      particle.style.left = `${Math.random() * 100}%`;
      particle.style.top = `${Math.random() * 100}%`;
      particle.style.animationDelay = `${Math.random() * 6}s`;
      particle.style.animationDuration = `${4 + Math.random() * 4}s`;
      particle.style.opacity = `${0.3 + Math.random() * 0.5}`;
      particles.appendChild(particle);

      setTimeout(() => particle.remove(), 8000);
    };

    const interval = setInterval(createParticle, 300);
    for (let i = 0; i < 20; i++) createParticle();

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-hollow-dark/60 via-hollow-dark/40 to-hollow-dark" />
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          {/* Knight Image */}
          <div className="mb-8 flex justify-center">
            <img 
              src="/knight-hero.png" 
              alt="Knight" 
              className="h-48 md:h-64 w-auto object-contain drop-shadow-2xl animate-float"
            />
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-cinzel font-bold mb-4">
            <span className="gradient-text text-glow">Ingeniería en</span>
            <br />
            <span className="text-hollow-white">Software</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-hollow-blue-accent/80 max-w-2xl mx-auto mb-8 font-light">
            Explorando las profundidades del código, forjando soluciones 
            <span className="text-hollow-gold"> dignas de Hallownest</span>
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-hollow-gold/20 border border-hollow-gold/50 text-hollow-gold hover:bg-hollow-gold/30 hover:border-hollow-gold transition-all duration-300 font-cinzel"
              onClick={() => document.getElementById('proyectos')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Ver Proyectos
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-hollow-blue-light/50 text-hollow-blue-light hover:bg-hollow-blue-light/10 transition-all duration-300 font-cinzel"
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Contactar
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6">
            <a 
              href="https://github.com/Boost777" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-hollow-blue-accent/60 hover:text-hollow-gold transition-colors duration-300"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-hollow-blue-accent/60 hover:text-hollow-gold transition-colors duration-300"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="leonwea@hotmail.com"
              className="text-hollow-blue-accent/60 hover:text-hollow-gold transition-colors duration-300"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-hollow-gold/60" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 border border-hollow-gold/20 rounded-full animate-pulse-glow" />
      <div className="absolute bottom-32 right-16 w-24 h-24 border border-hollow-blue-light/20 rounded-full animate-pulse-glow" style={{ animationDelay: '1s' }} />
    </section>
  );
}
