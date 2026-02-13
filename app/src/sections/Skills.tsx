import { useEffect, useRef, useState } from 'react';
import { 
  Code2, 
  Database, 
  Layout, 
  Server, 
  Terminal, 
  GitBranch, 
  Cpu,
  Smartphone,
  Cloud,
  TestTube,
  Box
} from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ElementType;
  category: string;
}

const skills: Skill[] = [
  // Frontend
  { name: 'React', level: 90, icon: Code2, category: 'Frontend' },
  { name: 'TypeScript', level: 85, icon: Code2, category: 'Frontend' },
  { name: 'JavaScript', level: 95, icon: Code2, category: 'Frontend' },
  { name: 'Tailwind CSS', level: 90, icon: Layout, category: 'Frontend' },
  { name: 'HTML/CSS', level: 95, icon: Layout, category: 'Frontend' },
  
  // Backend
  { name: 'Node.js', level: 85, icon: Server, category: 'Backend' },
  { name: 'Python', level: 80, icon: Terminal, category: 'Backend' },
  { name: 'Java', level: 75, icon: Cpu, category: 'Backend' },
  { name: 'C#', level: 70, icon: Cpu, category: 'Backend' },
  { name: 'Express', level: 85, icon: Server, category: 'Backend' },
  
  // Database
  { name: 'PostgreSQL', level: 80, icon: Database, category: 'Database' },
  { name: 'MongoDB', level: 75, icon: Database, category: 'Database' },
  { name: 'MySQL', level: 80, icon: Database, category: 'Database' },
  { name: 'Redis', level: 65, icon: Database, category: 'Database' },
  
  // Mobile & Tools
  { name: 'React Native', level: 70, icon: Smartphone, category: 'Mobile' },
  { name: 'Git', level: 90, icon: GitBranch, category: 'Tools' },
  { name: 'Docker', level: 70, icon: Box, category: 'Tools' },
  { name: 'AWS', level: 65, icon: Cloud, category: 'Tools' },
  { name: 'Jest', level: 75, icon: TestTube, category: 'Tools' },
];

const categories = ['Todos', 'Frontend', 'Backend', 'Database', 'Mobile', 'Tools'];

export function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [animatedSkills, setAnimatedSkills] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const filtered = activeCategory === 'Todos' 
        ? skills 
        : skills.filter(s => s.category === activeCategory);
      
      filtered.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills(prev => new Set([...prev, skill.name]));
        }, index * 100);
      });
    }
  }, [isVisible, activeCategory]);

  const filteredSkills = activeCategory === 'Todos' 
    ? skills 
    : skills.filter(s => s.category === activeCategory);

  return (
    <section 
      ref={sectionRef}
      id="habilidades" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hollow-dark" />
      
      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-hollow-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-hollow-blue-light/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hollow-gold/10 border border-hollow-gold/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-hollow-gold animate-pulse" />
            <span className="text-hollow-gold text-sm font-cinzel">Habilidades</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-hollow-white mb-4">
            Amuletos de <span className="gradient-text">Poder</span>
          </h2>

          <p className="text-hollow-blue-accent/70 max-w-2xl mx-auto">
            Cada habilidad es un amuleto que he recolectado en mi viaje, 
            otorgándome el poder de enfrentar cualquier desafío.
          </p>
        </div>

        {/* Category Filter */}
        <div className={`flex flex-wrap justify-center gap-2 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setActiveCategory(category);
                setAnimatedSkills(new Set());
              }}
              className={`px-4 py-2 rounded-full text-sm font-cinzel transition-all duration-300
                ${activeCategory === category 
                  ? 'bg-hollow-gold/20 border border-hollow-gold text-hollow-gold' 
                  : 'bg-hollow-blue/50 border border-hollow-gold/20 text-hollow-blue-accent/70 hover:border-hollow-gold/50 hover:text-hollow-gold/70'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill, index) => (
            <div 
              key={skill.name}
              className={`group relative bg-hollow-blue/40 backdrop-blur-sm border border-hollow-gold/10 rounded-lg p-5
                hover:border-hollow-gold/40 hover:bg-hollow-blue/60 transition-all duration-500
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-4">
                {/* Icon */}
                <div className="w-10 h-10 rounded-lg bg-hollow-dark/70 border border-hollow-gold/20 flex items-center justify-center
                  group-hover:border-hollow-gold/50 group-hover:bg-hollow-gold/10 transition-all duration-300">
                  <skill.icon className="w-5 h-5 text-hollow-gold/70 group-hover:text-hollow-gold transition-colors" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-hollow-white font-medium">{skill.name}</span>
                    <span className="text-hollow-gold text-sm font-cinzel">{skill.level}%</span>
                  </div>
                  
                  {/* Progress Bar */}
                  <div className="h-1.5 bg-hollow-dark rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-hollow-gold to-hollow-gold-light rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: animatedSkills.has(skill.name) ? `${skill.level}%` : '0%'
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-hollow-gold/0 via-hollow-gold/5 to-hollow-gold/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className={`mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {[
            { label: 'Años de Estudio', value: '2+' },
            { label: 'Proyectos Completados', value: '2' },
            { label: 'Tecnologías', value: 'En desarrollo' },
            { label: 'Certificaciones', value: '1' },
          ].map((stat) => (
            <div 
              key={stat.label}
              className="text-center p-6 rounded-xl bg-hollow-blue/30 border border-hollow-gold/10 hover:border-hollow-gold/30 transition-all duration-300"
            >
              <div className="text-3xl md:text-4xl font-cinzel font-bold gradient-text mb-2">{stat.value}</div>
              <div className="text-sm text-hollow-blue-accent/60">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
