import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Github, Layers, Database, Globe, Smartphone } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  category: string;
  icon: React.ElementType;
  githubUrl?: string;
  demoUrl?: string;
  color: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Proyectos de AOPSW',
    description: 'Trabajos para la materia de Administración de proyectos.',
    fullDescription: 'Aquí se podrán visualizar mis trabajos y proyectos de Administración de Proyectos.',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Express', 'JWT'],
    category: 'Web App',
    icon: Layers,
    githubUrl: 'https://github.com/Boost777/Proyectos-AOPSW.git',
    demoUrl: 'https://demo.com',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Proyectos de RESFW',
    description: 'Trabajos para la materia de Requisitos y Especificaciones de Software.',
    fullDescription: 'Aquí se podrán visualizar mis trabajos de Requisitos y Especificaciones de Software.',
    technologies: ['Node.js', 'MongoDB', 'Express', 'Stripe API', 'Redis'],
    category: 'Backend',
    icon: Database,
    githubUrl: 'https://github.com/Boost777/Proyectos-RESFW.git',
    color: 'from-green-500 to-emerald-500'
  },
];

export function Projects() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="proyectos" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hollow-dark via-hollow-blue to-hollow-dark" />
      
      {/* Decorative Lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hollow-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hollow-gold/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hollow-gold/10 border border-hollow-gold/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-hollow-gold animate-pulse" />
            <span className="text-hollow-gold text-sm font-cinzel">Proyectos</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-hollow-white mb-4">
            Reliquias del <span className="gradient-text">Conocimiento</span>
          </h2>

          <p className="text-hollow-blue-accent/70 max-w-2xl mx-auto">
            Cada proyecto es una reliquia forjada con dedicación, representando 
            los desafíos superados y las habilidades adquiridas en mi viaje.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className={`group relative bg-hollow-blue/60 backdrop-blur-sm border border-hollow-gold/20 rounded-xl p-6 cursor-pointer 
                    hover:border-hollow-gold/50 hover:bg-hollow-blue/80 transition-all duration-500
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Glow on hover */}
                  <div className={`absolute -inset-px bg-gradient-to-r ${project.color} rounded-xl opacity-0 group-hover:opacity-20 blur-lg transition-opacity duration-500`} />
                  
                  <div className="relative">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                        <project.icon className="w-6 h-6 text-white" />
                      </div>
                      <Badge variant="outline" className="border-hollow-gold/30 text-hollow-gold text-xs">
                        {project.category}
                      </Badge>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-cinzel font-bold text-hollow-white mb-2 group-hover:text-hollow-gold transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-hollow-blue-accent/70 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-2 py-1 rounded bg-hollow-dark/50 text-hollow-blue-accent/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded bg-hollow-dark/50 text-hollow-blue-accent/60">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Arrow indicator */}
                    <div className="absolute top-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity">
                      <ExternalLink className="w-4 h-4 text-hollow-gold" />
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="bg-hollow-blue/95 backdrop-blur-xl border-hollow-gold/30 max-w-2xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${project.color} flex items-center justify-center`}>
                      <project.icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <DialogTitle className="text-2xl font-cinzel text-hollow-white">
                        {project.title}
                      </DialogTitle>
                      <Badge variant="outline" className="border-hollow-gold/30 text-hollow-gold mt-1">
                        {project.category}
                      </Badge>
                    </div>
                  </div>
                  <DialogDescription className="text-hollow-blue-accent/80 text-base leading-relaxed">
                    {project.fullDescription}
                  </DialogDescription>
                </DialogHeader>

                <div className="mt-6">
                  <h4 className="text-sm font-cinzel text-hollow-gold mb-3">Tecnologías Utilizadas</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1.5 rounded-full bg-hollow-dark/70 border border-hollow-gold/20 text-hollow-blue-accent text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-8">
                  {project.githubUrl && (
                    <Button 
                      variant="outline" 
                      className="flex-1 border-hollow-gold/30 text-hollow-gold hover:bg-hollow-gold/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Ver Código
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button 
                      className="flex-1 bg-hollow-gold/20 border border-hollow-gold/50 text-hollow-gold hover:bg-hollow-gold/30"
                      onClick={() => window.open(project.demoUrl, '_blank')}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Ver Demo
                    </Button>
                  )}
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* View More */}
        <div className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Button 
            variant="outline" 
            size="lg"
            className="border-hollow-gold/30 text-hollow-gold hover:bg-hollow-gold/10 font-cinzel"
            onClick={() => window.open('https://github.com/Boost777', '_blank')}
          >
            <Github className="w-5 h-5 mr-2" />
            Ver más en GitHub
          </Button>
        </div>
      </div>
    </section>
  );
}
