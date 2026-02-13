import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

export function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Mensaje enviado", {
      description: "Gracias por contactarme. Te responderé pronto.",
    });
    
    setFormData({ name: '', email: '', subject: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'leonwea@hotmail.com', href: 'mailto:leonwea@hotmail.com' },
    { icon: Phone, label: 'Teléfono', value: 'Solicitar al mail', href: 'tel:Solicitar al mail' },
    { icon: MapPin, label: 'Ubicación', value: 'Ciudad de México, México', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Boost777' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com' },
    { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
  ];

  return (
    <section 
      ref={sectionRef}
      id="contacto" 
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-hollow-blue via-hollow-dark to-hollow-darker" />
      
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hollow-gold/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-hollow-blue-light/20 to-transparent" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-hollow-gold/10 border border-hollow-gold/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-hollow-gold animate-pulse" />
            <span className="text-hollow-gold text-sm font-cinzel">Contacto</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-cinzel font-bold text-hollow-white mb-4">
            Envía tu <span className="gradient-text">Mensaje</span>
          </h2>

          <p className="text-hollow-blue-accent/70 max-w-2xl mx-auto">
            ¿Tienes un proyecto en mente o quieres colaborar? 
            Envíame un mensaje y comencemos esta aventura juntos.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'}`}>
            <div className="space-y-6">
              {contactInfo.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-hollow-blue/50 border border-hollow-gold/20 flex items-center justify-center
                    group-hover:border-hollow-gold/50 group-hover:bg-hollow-gold/10 transition-all duration-300">
                    <item.icon className="w-5 h-5 text-hollow-gold/70 group-hover:text-hollow-gold transition-colors" />
                  </div>
                  <div>
                    <div className="text-sm text-hollow-blue-accent/60">{item.label}</div>
                    <div className="text-hollow-white group-hover:text-hollow-gold transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-8 border-t border-hollow-gold/10">
              <h4 className="text-sm font-cinzel text-hollow-gold mb-4">Sígueme</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-hollow-blue/50 border border-hollow-gold/20 flex items-center justify-center
                      hover:border-hollow-gold/50 hover:bg-hollow-gold/10 transition-all duration-300 group"
                    title={social.label}
                  >
                    <social.icon className="w-5 h-5 text-hollow-blue-accent/60 group-hover:text-hollow-gold transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <div className="p-6 rounded-xl bg-hollow-gold/5 border border-hollow-gold/20">
              <p className="text-sm text-hollow-blue-accent/70 italic">
                "En la oscuridad de la cueva, incluso la más pequeña chispa 
                puede iluminar el camino."
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`lg:col-span-3 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'}`}>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm text-hollow-blue-accent/70">Nombre</label>
                  <Input
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-hollow-blue/50 border-hollow-gold/20 text-hollow-white placeholder:text-hollow-blue-accent/40
                      focus:border-hollow-gold/50 focus:ring-hollow-gold/20"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm text-hollow-blue-accent/70">Email</label>
                  <Input
                    type="email"
                    placeholder="tu@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-hollow-blue/50 border-hollow-gold/20 text-hollow-white placeholder:text-hollow-blue-accent/40
                      focus:border-hollow-gold/50 focus:ring-hollow-gold/20"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-hollow-blue-accent/70">Asunto</label>
                <Input
                  type="text"
                  placeholder="¿De qué se trata?"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                  className="bg-hollow-blue/50 border-hollow-gold/20 text-hollow-white placeholder:text-hollow-blue-accent/40
                    focus:border-hollow-gold/50 focus:ring-hollow-gold/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-hollow-blue-accent/70">Mensaje</label>
                <Textarea
                  placeholder="Escribe tu mensaje aquí..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="bg-hollow-blue/50 border-hollow-gold/20 text-hollow-white placeholder:text-hollow-blue-accent/40
                    focus:border-hollow-gold/50 focus:ring-hollow-gold/20 resize-none"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-hollow-gold/20 border border-hollow-gold/50 text-hollow-gold hover:bg-hollow-gold/30 
                  disabled:opacity-50 disabled:cursor-not-allowed font-cinzel py-6"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <span className="w-4 h-4 border-2 border-hollow-gold/30 border-t-hollow-gold rounded-full animate-spin" />
                    Enviando...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <Send className="w-4 h-4" />
                    Enviar Mensaje
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
