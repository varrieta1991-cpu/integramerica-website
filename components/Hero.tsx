'use client';

import { useEffect, useState } from 'react';

const PHONE_HREF = 'tel:+15613179253';

const reviews = [
  {
    text: 'Integramerica handled my apostille in record time. Truly professional.',
    author: 'Maria G.',
    location: 'Florida',
    stars: 5,
  },
  {
    text: 'They navigated the consular legalization for Argentina flawlessly.',
    author: 'Carlos R.',
    location: 'New York',
    stars: 5,
  },
  {
    text: 'Fast translations accepted by the embassy on first submission.',
    author: 'Ana P.',
    location: 'Texas',
    stars: 5,
  },
  {
    text: 'Immigration consultation was thorough and completely honest.',
    author: 'Jorge M.',
    location: 'California',
    stars: 5,
  },
];

export default function Hero() {
  const [activeReview, setActiveReview] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setActiveReview((prev) => (prev + 1) % reviews.length);
        setVisible(true);
      }, 400);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  const review = reviews[activeReview];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background photo — international flags / governmental */}
      <div className="absolute inset-0 z-0">
        {/* Real photo */}
        <img
          src="/images/global-city.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        {/* Light navy tint — just enough to cool the photo */}
        <div className="absolute inset-0 bg-[#0C1628]/40" />
      </div>

      {/* Left-heavy gradient: dark for text readability, fades to semi-transparent right */}
      <div
        className="absolute inset-0 z-10"
        style={{
          background:
            'linear-gradient(to right, rgba(12,22,40,0.92) 0%, rgba(12,22,40,0.75) 40%, rgba(12,22,40,0.25) 70%, rgba(12,22,40,0.1) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-20 lg:pt-36 lg:pb-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 opacity-0 animate-[fadeInUp_0.6s_cubic-bezier(0.22,1,0.36,1)_0.1s_forwards]">
            <span className="block w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
              Trusted Since 2004 · All 50 States
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.08] mb-6 opacity-0 animate-[fadeInUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.2s_forwards]">
            Apostille & Document Legalization. Fast, Accurate, Accepted.
          </h1>

          {/* Authority badges */}
          <div className="flex flex-wrap gap-2 mb-6 opacity-0 animate-[fadeInUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.3s_forwards]">
            {['USCIS-Compliant', 'Consulates', 'International Use', 'Bilingual Support'].map((badge) => (
              <span key={badge} className="text-[10px] font-bold tracking-[0.18em] uppercase text-[#0C1628] bg-[#C9A84C] px-3 py-1">
                {badge}
              </span>
            ))}
          </div>

          {/* Subheadline */}
          <p className="text-white/70 text-base sm:text-lg leading-relaxed mb-10 max-w-xl opacity-0 animate-[fadeInUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.4s_forwards]">
            Hague Apostille · Consular Legalization · Certified Translations · Immigration Advisory.{' '}
            <em className="text-[#C9A84C] not-italic font-medium">
              También Hablamos Español.
            </em>
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-[fadeInUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.5s_forwards]">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8943e] text-[#0C1628] font-bold text-sm sm:text-base px-7 py-4 transition-all duration-200 hover:shadow-[0_0_30px_rgba(201,168,76,0.3)]"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
              </svg>
              Call Now: (561) 317-9253
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0C1628] font-bold text-sm sm:text-base px-7 py-4 transition-all duration-200"
            >
              Contact Us
              <span>&rarr;</span>
            </a>
          </div>
        </div>

        {/* Floating review card */}
        <div className="hidden lg:block absolute bottom-12 right-12 w-80 opacity-0 animate-[fadeInUp_0.7s_cubic-bezier(0.22,1,0.36,1)_0.8s_forwards]">
          <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6">
            {/* Stars */}
            <div className="flex gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 fill-[#C9A84C]"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p
              className={`text-white/90 text-sm leading-relaxed mb-4 transition-all duration-400 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
              style={{ minHeight: '3.5rem' }}
            >
              &ldquo;{review.text}&rdquo;
            </p>
            <div
              className={`flex items-center gap-2 transition-all duration-400 ${
                visible ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="w-7 h-7 rounded-full bg-[#C9A84C]/30 flex items-center justify-center">
                <span className="text-[#C9A84C] text-xs font-bold">
                  {review.author[0]}
                </span>
              </div>
              <div>
                <p className="text-white text-xs font-semibold">{review.author}</p>
                <p className="text-white/50 text-xs">{review.location}</p>
              </div>
            </div>
            {/* Dots */}
            <div className="flex gap-1.5 mt-4">
              {reviews.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveReview(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-all duration-200 ${
                    i === activeReview ? 'bg-[#C9A84C] w-4' : 'bg-white/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 opacity-0 animate-[fadeIn_1s_ease_1.2s_forwards]">
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-[0.2em] uppercase">
            Scroll
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
