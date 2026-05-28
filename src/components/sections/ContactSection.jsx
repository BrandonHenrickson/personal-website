import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, Phone, MapPin, ArrowUpRight, Send, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const contactLines = [
  {
    label: 'Email',
    value: 'b.henrickson17@gmail.com',
    href: 'mailto:b.henrickson17@gmail.com',
    icon: Mail,
  },
  {
    label: 'Phone',
    value: '(218) 390-4619',
    href: 'tel:+12183904619',
    icon: Phone,
  },
  {
    label: 'LinkedIn',
    value: 'brandon-henrickson',
    href: 'https://www.linkedin.com/in/brandon-henrickson-470052167/',
    icon: Linkedin,
    external: true,
  },
  {
    label: 'GitHub',
    value: 'BrandonHenrickson',
    href: 'https://github.com/BrandonHenrickson',
    icon: Github,
    external: true,
  },
];

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: 'destructive',
        title: 'Missing fields',
        description: 'Please complete all fields before sending.',
      });
      return;
    }
    toast({
      title: 'Message received',
      description: "Thank you for reaching out — I'll respond shortly.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section-pad relative">
      <div className="container-edge">
        {/* Header */}
        <div className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mb-20">
          <div className="col-span-12 lg:col-span-7">
            <p className="section-marker mb-4">09 / Contact</p>
            <h2 className="display text-6xl lg:text-7xl xl:text-8xl text-ink leading-[0.95]">
              Let&apos;s
              <br />
              <span className="italic text-editorial">talk shop.</span>
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-5 flex flex-col justify-end">
            <p className="text-inkSoft text-lg leading-relaxed text-pretty mb-6">
              Open to full-time roles, contract work, automation projects, and
              drone-videography collaborations. Based in Duluth, MN — happy to
              work remote.
            </p>
            <a
              href="/Brandon-Henrickson-Resume.pdf"
              download
              className="btn-primary w-fit"
            >
              <FileText size={14} />
              Download Resume (PDF)
            </a>
          </div>
        </div>

        {/* Contact lines (the centerpiece) */}
        <div className="border-t border-ink/15">
          {contactLines.map((line, i) => (
            <motion.a
              key={line.label}
              href={line.href}
              target={line.external ? '_blank' : undefined}
              rel={line.external ? 'noopener noreferrer' : undefined}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="grid grid-cols-12 gap-y-2 lg:gap-x-12 items-center border-b border-rule py-7 group cursor-pointer"
            >
              <div className="col-span-2 lg:col-span-1 flex items-center">
                <line.icon size={20} strokeWidth={1.25} className="text-editorial" />
              </div>
              <div className="col-span-10 lg:col-span-3">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-inkMuted">
                  {line.label}
                </p>
              </div>
              <div className="col-span-12 lg:col-span-7 lg:col-start-5 flex items-center justify-between gap-4">
                <span className="font-display text-2xl lg:text-4xl text-ink leading-tight tracking-tight group-hover:text-accentBlue transition-colors duration-500 break-all">
                  {line.value}
                </span>
                <ArrowUpRight
                  size={22}
                  className="text-inkMuted shrink-0 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-ink"
                />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-12 gap-y-8 lg:gap-x-12 mt-24"
        >
          <div className="col-span-12 lg:col-span-4">
            <p className="section-marker mb-4">Or send a note</p>
            <p className="font-display text-3xl text-ink leading-tight mb-4">
              Prefer to write?
            </p>
            <p className="text-inkSoft leading-relaxed text-pretty">
              Drop a quick message and I&apos;ll reply to the email you provide.
            </p>
            <div className="flex items-center gap-2 mt-6 text-inkMuted">
              <MapPin size={14} />
              <span className="font-mono text-xs tracking-[0.2em] uppercase">
                Duluth, MN — Available
              </span>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="col-span-12 lg:col-span-7 lg:col-start-6 space-y-6"
          >
            <div className="grid sm:grid-cols-2 gap-6">
              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-inkMuted block mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-ink/25 focus:border-ink py-2 text-ink placeholder:text-inkMuted/60 outline-none transition-colors font-sans"
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-inkMuted block mb-2">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-ink/25 focus:border-ink py-2 text-ink placeholder:text-inkMuted/60 outline-none transition-colors font-sans"
                  placeholder="jane@company.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-inkMuted block mb-2">
                Message
              </span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-ink/25 focus:border-ink py-2 text-ink placeholder:text-inkMuted/60 outline-none transition-colors resize-none font-sans"
                placeholder="Tell me about the role, project, or idea…"
              />
            </label>

            <Button type="submit" className="btn-primary mt-4">
              <Send size={14} />
              Send Message
            </Button>
          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-rule flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-inkMuted">
            © {new Date().getFullYear()} Brandon Henrickson · Duluth, MN
          </p>
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-editorial">
            Set in Fraunces &amp; IBM Plex
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
