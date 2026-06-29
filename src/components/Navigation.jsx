import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#work' },
  { name: 'Education', href: '#education' },
  { name: 'Projects', href: '#blog' },
  { name: 'Drone', href: '#drone' },
  { name: 'Skills', href: '#skills' },
  { name: 'Guides', href: '/guides' },
  { name: 'Contact', href: '#contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      if (location.pathname === '/') {
        const sections = navLinks
          .filter((l) => l.href.startsWith('#'))
          .map((l) => l.href.substring(1));
        const scrollPosition = window.scrollY + 200;
        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;
            if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              setActiveSection(section);
            }
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    if (href.startsWith('#')) {
      if (location.pathname === '/') {
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.querySelector(href);
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 bg-canvas/95 backdrop-blur-sm border-b border-border transition-shadow duration-300 ${
        isScrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container-edge">
        <div className="flex justify-between items-center h-16">
          {/* Monogram + wordmark */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <span className="flex items-center justify-center w-9 h-9 border border-emerald text-emerald font-display font-bold text-base tracking-tight group-hover:bg-emerald group-hover:text-white transition-colors duration-300">
              BH
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-display font-bold text-sm text-ink">
                Brandon Henrickson
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-emerald">
                Portfolio · 2026
              </span>
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const active = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative"
                >
                  <span
                    className={`font-mono text-sm transition-colors ${
                      active ? 'text-emerald' : 'text-inkMuted group-hover:text-emerald'
                    }`}
                  >
                    {link.name}
                  </span>
                  <span
                    className={`absolute left-0 -bottom-1.5 h-px bg-emerald transition-all duration-300 ${
                      active ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="https://github.com/BrandonHenrickson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-inkMuted hover:text-emerald transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/brandon-henrickson-470052167/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-inkMuted hover:text-emerald transition-colors"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="/Brandon-Henrickson-Resume.pdf"
              download
              className="border border-emerald text-emerald text-sm px-4 py-1.5 rounded font-mono transition-colors duration-300 hover:bg-emerald hover:text-white"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-ink p-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-canvas border-t border-border"
          >
            <div className="container-edge py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="block py-3 border-b border-border font-display text-2xl text-ink hover:text-emerald transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="/Brandon-Henrickson-Resume.pdf"
                download
                className="block mt-4 text-center border border-emerald text-emerald px-4 py-3 rounded font-mono text-sm transition-colors duration-300 hover:bg-emerald hover:text-white"
              >
                Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
