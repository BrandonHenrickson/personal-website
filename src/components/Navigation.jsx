import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const navLinks = [
  { name: 'About', href: '#about', n: '02' },
  { name: 'Experience', href: '#work', n: '03' },
  { name: 'Education', href: '#education', n: '04' },
  { name: 'Work', href: '#blog', n: '05' },
  { name: 'Drone', href: '#drone', n: '06' },
  { name: 'Skills', href: '#skills', n: '07' },
  { name: 'Contact', href: '#contact', n: '09' },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-paper/90 backdrop-blur-md border-b border-rule'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="container-edge">
        <div className="flex justify-between items-center h-16">
          {/* Monogram */}
          <a
            href="/"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-3 group"
          >
            <span className="flex items-center justify-center w-9 h-9 border border-ink text-ink font-display text-base tracking-tight group-hover:bg-ink group-hover:text-paper transition-colors duration-300">
              BH
            </span>
            <span className="hidden sm:flex flex-col leading-tight">
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-inkMuted">
                Brandon Henrickson
              </span>
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-editorial">
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
                  className="group flex items-baseline gap-1.5"
                >
                  <span
                    className={`font-mono text-[10px] tracking-[0.2em] transition-colors ${
                      active ? 'text-editorial' : 'text-inkMuted group-hover:text-editorial'
                    }`}
                  >
                    {link.n}
                  </span>
                  <span
                    className={`font-sans text-sm tracking-tight transition-colors relative ${
                      active ? 'text-ink' : 'text-inkSoft group-hover:text-ink'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-px bg-ink transition-all duration-500 ${
                        active ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </span>
                </a>
              );
            })}
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
            className="lg:hidden bg-paper border-t border-rule"
          >
            <div className="container-edge py-6 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="flex items-baseline gap-3 py-3 border-b border-rule"
                >
                  <span className="font-mono text-[10px] tracking-[0.25em] text-editorial w-8">
                    {link.n}
                  </span>
                  <span className="font-display text-2xl text-ink">{link.name}</span>
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navigation;
