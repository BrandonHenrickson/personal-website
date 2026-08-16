import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Mail, ArrowUpRight, Send, FileText } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const contactLines = [
  {
    label: 'Email',
    value: 'b.henrickson17@gmail.com',
    href: 'mailto:b.henrickson17@gmail.com',
    icon: Mail,
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

const WEB3FORMS_ACCESS_KEY = 'b9840c50-b625-4376-b9af-3df16065aa79';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        variant: 'destructive',
        title: 'Missing fields',
        description: 'Please complete all fields before sending.',
      });
      return;
    }
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'New message from greatbrandino.com',
          from_name: 'greatbrandino.com contact form',
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      const data = await res.json();
      if (data.success) {
        toast({
          title: 'Message sent',
          description: "Thanks for reaching out — I'll respond shortly.",
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        toast({
          variant: 'destructive',
          title: 'Something went wrong',
          description: 'Please email me directly at b.henrickson17@gmail.com.',
        });
      }
    } catch (err) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong',
        description: 'Please email me directly at b.henrickson17@gmail.com.',
      });
    }
  };

  const inputClass =
    'w-full bg-canvas border border-border rounded px-3 py-2.5 text-ink placeholder:text-inkMuted/60 outline-none transition-colors focus:border-emerald focus:ring-1 focus:ring-emerald font-sans';

  return (
    <section id="contact" className="bg-canvas">
      {/* Banner */}
      <div className="w-full bg-emerald">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center gap-3">
          <Mail size={20} className="text-white" strokeWidth={2} />
          <h2 className="font-display font-bold text-xl tracking-wide text-white">
            Contact
          </h2>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <p className="text-inkSoft text-base md:text-lg leading-[1.75] text-pretty max-w-2xl">
            Open to full-time roles, contract work, automation projects, and
            drone-videography collaborations. Based in Duluth, MN — happy to
            work remote.
          </p>
          <a
            href="/Brandon-Henrickson-Resume.pdf"
            download
            className="inline-flex items-center gap-2 shrink-0 bg-emerald text-white px-6 py-3 rounded font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-emeraldHover"
          >
            <FileText size={14} />
            Download Resume (PDF)
          </a>
        </div>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-2 gap-4">
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
              className="group flex items-center gap-4 bg-surface border border-border rounded-lg p-5 transition-colors duration-300 hover:border-emerald"
            >
              <span className="flex items-center justify-center w-10 h-10 rounded-full bg-emeraldLight text-emerald shrink-0">
                <line.icon size={18} strokeWidth={2} />
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[10px] tracking-[0.25em] uppercase text-inkMuted">
                  {line.label}
                </p>
                <p className="font-sans text-ink break-all group-hover:text-emerald transition-colors">
                  {line.value}
                </p>
              </div>
              <ArrowUpRight
                size={18}
                className="text-inkMuted shrink-0 transition-colors duration-300 group-hover:text-emerald"
              />
            </motion.a>
          ))}
        </div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-surface border border-border rounded-lg p-6 md:p-8 mt-8"
        >
          <p className="font-display font-bold text-2xl text-ink leading-tight">
            Prefer to write?
          </p>
          <p className="text-inkSoft leading-[1.7] text-pretty mt-2 mb-6">
            Drop a quick message and I&apos;ll reply to the email you provide.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Web3Forms honeypot — bots fill this, humans don't see it */}
            <input
              type="checkbox"
              name="botcheck"
              className="hidden"
              style={{ display: 'none' }}
              tabIndex={-1}
              autoComplete="off"
            />
            <div className="grid sm:grid-cols-2 gap-5">
              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-inkMuted block mb-2">
                  Your Name
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Jane Doe"
                />
              </label>
              <label className="block">
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-inkMuted block mb-2">
                  Your Email
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="jane@company.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-inkMuted block mb-2">
                Message
              </span>
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className={`${inputClass} resize-none`}
                placeholder="Tell me about the role, project, or idea…"
              />
            </label>

            <button
              type="submit"
              className="inline-flex items-center gap-2 bg-emerald text-white px-8 py-3 rounded font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:bg-emeraldHover"
            >
              <Send size={14} />
              Send Message
            </button>
          </form>
        </motion.div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-inkMuted">
            © {new Date().getFullYear()} Brandon Henrickson · Duluth, MN
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/privacy"
              className="font-mono text-xs tracking-[0.2em] uppercase text-inkMuted hover:text-emerald transition-colors"
            >
              Privacy
            </a>
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-emerald">
              Set in Fraunces &amp; IBM Plex
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
