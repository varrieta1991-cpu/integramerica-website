'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const PHONE_NUMBER = '(561) 317-9253';
const PHONE_HREF = 'tel:+15613179253';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Contact', href: '#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0C1628]/95 backdrop-blur-sm shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative shrink-0 w-12 h-12 lg:w-14 lg:h-14 overflow-hidden">
              <Image
                src="/logo.jpeg"
                alt="Integramerica"
                fill
                className="object-cover object-top"
                sizes="56px"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-white text-lg lg:text-xl tracking-wide">
                INTEGRAMERICA
              </span>
              <span className="text-[#C9A84C] text-[9px] lg:text-[10px] tracking-[0.25em] uppercase font-sans mt-0.5">
                Document Experts Since 2004
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link text-white/90 hover:text-white text-sm font-medium tracking-wide transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="bg-[#C9A84C] hover:bg-[#b8943e] text-[#0C1628] text-sm font-bold px-5 py-2.5 transition-colors duration-200 flex items-center gap-2"
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
              </svg>
              {PHONE_NUMBER}
            </a>
            <a
              href="#contact"
              className="border border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#C9A84C] hover:text-white text-sm font-bold px-5 py-2.5 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden bg-[#0C1628] border-t border-white/10 overflow-hidden transition-all duration-300 ${
          menuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="px-5 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-white/90 hover:text-[#C9A84C] font-medium text-base py-1 transition-colors border-b border-white/10 last:border-0"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 flex flex-col gap-3">
            <a
              href={PHONE_HREF}
              className="text-[#C9A84C] font-bold text-lg text-center py-3 border border-[#C9A84C]/40"
            >
              Call: {PHONE_NUMBER}
            </a>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="bg-[#C9A84C] text-[#0C1628] font-bold text-base text-center py-3"
            >
              Contact Us
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
