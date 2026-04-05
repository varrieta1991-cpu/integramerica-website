'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const PHONE_NUMBER = '(561) 317-9253';
const PHONE_HREF = 'tel:+15613179253';
const WHATSAPP_HREF = 'https://wa.me/15613179253';
const EMAIL = 'info@integramerica.org';
const ADDRESS = '1232 Indiantown Road, Jupiter, Florida 33458';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const mailtoHref = `mailto:${EMAIL}?subject=Service Inquiry: ${formData.service || 'General'}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\nService: ${formData.service}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="bg-[#F7F4EE]">
      <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left panel — dark navy */}
          <div className="bg-[#0C1628] px-8 sm:px-12 lg:px-20 xl:px-28 py-16 lg:py-24">
            <ScrollReveal>
              <div className="flex items-center gap-4 mb-4">
                <span className="block w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
                  Contact Us
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-10">
                Get in Touch
              </h2>
            </ScrollReveal>

            {/* Phone — big */}
            <ScrollReveal delay={100}>
              <a
                href={PHONE_HREF}
                className="block font-serif text-3xl sm:text-4xl font-bold text-[#C9A84C] hover:opacity-80 transition-opacity mb-2"
              >
                {PHONE_NUMBER}
              </a>
              <p className="text-white/40 text-sm mb-8">
                Mon–Fri, 9am–5pm · By Appointment Only
              </p>
            </ScrollReveal>

            {/* WhatsApp */}
            <ScrollReveal delay={150}>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#C9A84C] hover:bg-[#b8943e] text-[#0C1628] font-bold text-sm px-6 py-3 transition-colors mb-10"
              >
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Message on WhatsApp
              </a>
            </ScrollReveal>

            {/* Contact details */}
            <ScrollReveal delay={200}>
              <div className="space-y-5 border-t border-white/10 pt-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-0.5 shrink-0 text-[#C9A84C]">
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Email</p>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-white/80 hover:text-[#C9A84C] text-sm transition-colors"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-0.5 shrink-0 text-[#C9A84C]">
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Address</p>
                    <p className="text-white/80 text-sm leading-relaxed">{ADDRESS}</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-5 h-5 mt-0.5 shrink-0 text-[#C9A84C]">
                    <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-wide mb-0.5">Hours</p>
                    <p className="text-white/80 text-sm">Mon–Fri, 9am–5pm</p>
                    <p className="text-white/50 text-xs mt-0.5">By Appointment Only</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right panel — form */}
          <div className="bg-white px-8 sm:px-12 lg:px-20 xl:px-28 py-16 lg:py-24">
            <ScrollReveal>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#0C1628] mb-2">
                Send Us a Message
              </h3>
              <p className="text-[#0C1628]/50 text-sm mb-10">
                We respond within one business day.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={100}>
              <form
                action={mailtoHref}
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-[#0C1628] text-xs font-semibold tracking-wide uppercase mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#0C1628]/20 bg-[#F7F4EE] px-4 py-3 text-[#0C1628] text-sm placeholder:text-[#0C1628]/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#0C1628] text-xs font-semibold tracking-wide uppercase mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#0C1628]/20 bg-[#F7F4EE] px-4 py-3 text-[#0C1628] text-sm placeholder:text-[#0C1628]/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors"
                    placeholder="your@email.com"
                  />
                </div>

                {/* Service */}
                <div>
                  <label
                    htmlFor="service"
                    className="block text-[#0C1628] text-xs font-semibold tracking-wide uppercase mb-1.5"
                  >
                    Service Needed
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full border border-[#0C1628]/20 bg-[#F7F4EE] px-4 py-3 text-[#0C1628] text-sm focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option value="Apostille">Apostille</option>
                    <option value="Document Legalization">Document Legalization</option>
                    <option value="Certified Translation">Certified Translation</option>
                    <option value="Immigration Advisory">Immigration Advisory</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-[#0C1628] text-xs font-semibold tracking-wide uppercase mb-1.5"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full border border-[#0C1628]/20 bg-[#F7F4EE] px-4 py-3 text-[#0C1628] text-sm placeholder:text-[#0C1628]/30 focus:outline-none focus:border-[#C9A84C] focus:ring-1 focus:ring-[#C9A84C] transition-colors resize-none"
                    placeholder="Tell us about your document needs, urgency, and any relevant details..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#0C1628] hover:bg-[#C9A84C] text-white hover:text-[#0C1628] font-bold text-sm py-4 transition-all duration-300 tracking-wide"
                >
                  Send Message &rarr;
                </button>

                <p className="text-[#0C1628]/35 text-xs text-center">
                  By submitting, your email client will open with a pre-filled message.
                </p>
              </form>
            </ScrollReveal>
          </div>
      </div>
    </section>
  );
}
