import { useEffect, useRef, useState } from 'react';
import { Code2, GraduationCap, Lightbulb, Terminal } from 'lucide-react';

export function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { icon: Code2, label: 'Proyectos', value: '2' },
    { icon: GraduationCap, label: 'Semestre', value: '4°' },
    { icon: Terminal, label: 'Lenguajes', value: '4' },
    { icon: Lightbulb, label: 'Tecnologías', value: '10' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="sobre-mi" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #d4af37 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hollow-gold/10 border border-hollow-gold/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-hollow-gold animate-pulse" />
              <span className="text-hollow-gold text-sm font-cinzel">Sobre Mí</span>
            </div>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-hollow-white mb-6">
              Forjando mi camino en el 
              <span className="gradient-text"> reino del código</span>
            </h2>

            <div className="space-y-4 text-hollow-blue-accent/80 leading-relaxed">
              <p>
                Soy estudiante de Ingeniería en Software, apasionado por crear soluciones 
                tecnológicas que impacten positivamente.
              </p>
              <p>
                La idea nació de la necesidad de crear un portafolio web para que mis proyectos
                actuales y los que se den a futuro, tengan una visibilidad dentro del campo
                tecnológico laboral.
              </p>
              <p>
                Cada proyecto es una nueva área por descubrir, un nuevo desafío que 
                superar. Me motiva aprender constantemente y aplicar las mejores 
                prácticas en cada línea de código que escribo.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-10">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label}
                  className="text-center p-4 rounded-lg bg-hollow-blue/50 border border-hollow-gold/20 hover:border-hollow-gold/50 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-6 h-6 mx-auto mb-2 text-hollow-gold group-hover:scale-110 transition-transform" />
                  <div className="text-2xl font-cinzel font-bold text-hollow-white">{stat.value}</div>
                  <div className="text-xs text-hollow-blue-accent/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <div className="relative">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-hollow-gold/20 to-hollow-blue-light/20 rounded-2xl blur-2xl" />
              
              {/* Main Card */}
              <div className="relative bg-hollow-blue/80 backdrop-blur-sm border border-hollow-gold/30 rounded-2xl p-8 gradient-border">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-hollow-gold to-hollow-gold-light flex items-center justify-center">
                      <span className="text-2xl font-cinzel font-bold text-hollow-dark">IS</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-cinzel font-bold text-hollow-white">Estudiante de Software</h3>
                      <p className="text-hollow-blue-accent/60">Universidad</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-hollow-blue-accent/60">Progreso de Carrera</span>
                      <span className="text-hollow-gold">40%</span>
                    </div>
                    <div className="h-2 bg-hollow-dark rounded-full overflow-hidden">
                      <div className="h-full w-[40%] bg-gradient-to-r from-hollow-gold to-hollow-gold-light rounded-full" />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-lg bg-hollow-dark/50 border border-hollow-blue-light/20">
                      <div className="text-hollow-gold text-sm mb-1">Especialidad</div>
                      <div className="text-hollow-white font-cinzel">Abstracción</div>
                    </div>
                    <div className="p-4 rounded-lg bg-hollow-dark/50 border border-hollow-blue-light/20">
                      <div className="text-hollow-gold text-sm mb-1">Enfoque</div>
                      <div className="text-hollow-white font-cinzel">Web</div>
                    </div>
                  </div>

                  <div className="p-4 rounded-lg bg-hollow-gold/10 border border-hollow-gold/30">
                    <p className="text-sm text-hollow-blue-accent/80 italic">
                      "No importa cuán oscuro sea el camino, siempre hay una luz que guía 
                      al valiente que se atreve a seguir adelante."
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-t-2 border-l-2 border-hollow-gold" />
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-b-2 border-r-2 border-hollow-gold" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
