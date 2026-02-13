import { Code2, Github, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { label: 'Inicio', href: '#' },
    { label: 'Sobre Mí', href: '#sobre-mi' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Habilidades', href: '#habilidades' },
    { label: 'Contacto', href: '#contacto' },
  ];

  const socialLinks = [
    { icon: Github, href: 'https://github.com/Boost777', label: 'GitHub' },
    { icon: Mail, href: 'leonwea@hotmail.com', label: 'Email' },
  ];

  return (
    <footer className="relative py-12 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-hollow-darker" />
      
      {/* Top Border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hollow-gold/30 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-2">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-hollow-gold to-hollow-gold-light flex items-center justify-center">
                <Code2 className="w-5 h-5 text-hollow-dark" />
              </div>
              <span className="text-xl font-cinzel font-bold text-hollow-white">
                Portafolio
              </span>
            </div>
            <p className="text-sm text-hollow-blue-accent/60">
              Forjando código en las profundidades
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-hollow-blue-accent/70 hover:text-hollow-gold transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-hollow-blue/50 border border-hollow-gold/20 flex items-center justify-center
                  hover:border-hollow-gold/50 hover:bg-hollow-gold/10 transition-all duration-300 group"
                title={social.label}
              >
                <social.icon className="w-4 h-4 text-hollow-blue-accent/60 group-hover:text-hollow-gold transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-hollow-gold/20 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-hollow-blue-accent/50">
          <p className="flex items-center gap-1">
            Hecho con determinación y de manera económica.
          </p>
          <p>
            © {currentYear} Ingeniería en Software.
          </p>
        </div>

        {/* Easter Egg */}
        <div className="mt-8 text-center">
          <p className="text-xs text-hollow-blue-accent/30 italic">
            "El vacío no es el final, sino el comienzo de algo nuevo..."
          </p>
        </div>
      </div>

      {/* Decorative Corner Elements */}
      <div className="absolute bottom-4 left-4 w-16 h-16 border-l border-b border-hollow-gold/10" />
      <div className="absolute bottom-4 right-4 w-16 h-16 border-r border-b border-hollow-gold/10" />
    </footer>
  );
}
