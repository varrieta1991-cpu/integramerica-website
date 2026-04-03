import Image from 'next/image';

const PHONE_NUMBER = '(561) 317-9253';
const PHONE_HREF = 'tel:+15613179253';
const WHATSAPP_HREF = 'https://wa.me/15613179253';
const EMAIL = 'info@integramerica.org';
const ADDRESS = '1232 Indiantown Road, Jupiter, Florida 33458';

const services = [
  { label: 'Apostille Services', href: '#services' },
  { label: 'Document Legalization', href: '#services' },
  { label: 'Certified Translations', href: '#services' },
  { label: 'Immigration Advisory', href: '#services' },
];

const quickLinks = [
  { label: 'Why Choose Us', href: '#why-us' },
  { label: 'Client Reviews', href: '#reviews' },
  { label: 'Service Areas', href: '#service-areas' },
  { label: 'Contact Us', href: '#contact' },
];

export default function Footer() {
  return (
    <footer className="bg-[#0C1628] border-t border-white/10">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Col 1 — Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-5 flex items-center gap-4">
              <div className="relative shrink-0 w-16 h-16 ring-1 ring-[#C9A84C]/30 overflow-hidden rounded-sm">
                <Image
                  src="/logo.jpeg"
                  alt="Integramerica"
                  fill
                  className="object-cover object-top scale-[1.08]"
                  sizes="64px"
                />
              </div>
              <div>
                <p className="font-serif font-bold text-white text-xl tracking-wide leading-tight">
                  INTEGRAMERICA
                </p>
                <p className="text-[#C9A84C] text-[10px] tracking-[0.22em] uppercase mt-1">
                  Since 2004
                </p>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Leaders in Document Legalization in the United States. Trusted by
              clients nationwide for Apostille, consular legalization, certified
              translations, and immigration advisory.
            </p>
            <div className="flex gap-3">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center w-9 h-9 border border-white/20 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white/60 transition-colors"
                aria-label="Call us"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
                </svg>
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-9 h-9 border border-white/20 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white/60 transition-colors"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="inline-flex items-center justify-center w-9 h-9 border border-white/20 hover:border-[#C9A84C] hover:text-[#C9A84C] text-white/60 transition-colors"
                aria-label="Email us"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2 — Services */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              {services.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-5 mt-8">
              Company
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-white/50 hover:text-[#C9A84C] text-sm transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-5">
              Contact
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wide mb-1">Phone</p>
                <a
                  href={PHONE_HREF}
                  className="text-[#C9A84C] font-bold text-lg hover:opacity-80 transition-opacity"
                >
                  {PHONE_NUMBER}
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wide mb-1">WhatsApp</p>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors"
                >
                  +1 561 317 9253
                </a>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wide mb-1">Email</p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-white/70 hover:text-[#C9A84C] text-sm transition-colors break-all"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>

          {/* Col 4 — Location & Spanish */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-[0.15em] mb-5">
              Office
            </h4>
            <div className="space-y-4">
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wide mb-1">Address</p>
                <p className="text-white/70 text-sm leading-relaxed">{ADDRESS}</p>
              </div>
              <div>
                <p className="text-white/30 text-xs uppercase tracking-wide mb-1">Hours</p>
                <p className="text-white/70 text-sm">Monday – Friday</p>
                <p className="text-white/70 text-sm">9:00am – 5:00pm</p>
                <p className="text-white/40 text-xs mt-1">By Appointment Only</p>
              </div>
            </div>

            {/* Spanish note */}
            <div className="mt-8 border border-[#C9A84C]/30 p-4">
              <p className="text-[#C9A84C] font-serif font-bold text-lg mb-1">
                También Hablamos Español
              </p>
              <p className="text-white/50 text-xs leading-relaxed">
                All services available in English and Spanish.
                No language barriers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs">
            &copy; {new Date().getFullYear()} Integramerica. All rights reserved.
          </p>
          <p className="text-white/20 text-xs">
            Leaders in Document Legalization in the United States since 2004.
          </p>
        </div>
      </div>
    </footer>
  );
}
