import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const PHONE_HREF = 'tel:+15613179253';

const services = [
  {
    number: '01',
    name: 'Apostille',
    description: 'Federal & state-level authentication for Hague Convention countries',
    detail:
      'We are leaders in Hague Apostille certification across all 50 states. Common documents include birth and death certificates, powers of attorney, corporate certifications, and educational diplomas. Swift turnaround, cost-effective processing.',
    href: PHONE_HREF,
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=500&q=80',
    imageAlt: 'Legal document with official seal',
  },
  {
    number: '02',
    name: 'Document Legalization',
    description: 'Consular certification for non-Hague nations worldwide',
    detail:
      'For countries not party to the Hague Convention, we handle full consular legalization — coordinating with the relevant embassy or consulate on your behalf from start to finish.',
    href: PHONE_HREF,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=500&q=80',
    imageAlt: 'Official documents and paperwork',
  },
  {
    number: '03',
    name: 'Certified Translations',
    description: 'Legally precise translations for courts, embassies, and businesses',
    detail:
      'Our team of expert translators delivers culturally accurate, legally recognized certified translations for personal, legal, medical, and technical documents — accepted by courts, consulates, and government agencies.',
    href: PHONE_HREF,
    image: 'https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?auto=format&fit=crop&w=500&q=80',
    imageAlt: 'Open books representing translation and languages',
  },
  {
    number: '04',
    name: 'Immigration Advisory',
    description: 'Expert guidance on all pathways to U.S. legal residency',
    detail:
      'We help you understand available options and connect you with the right process. Our team covers family-based, employment-based, asylum, diversity lottery, EB-5, U Visa, TPS, and more — guiding you every step of the way.',
    href: PHONE_HREF,
    image: 'https://images.unsplash.com/photo-1485081669829-bacb8c7bb1f3?auto=format&fit=crop&w=500&q=80',
    imageAlt: 'Passport and travel documents',
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative bg-[#0C1628] py-20 lg:py-28 overflow-hidden"
    >
      {/* Atmospheric background photo with heavy overlay */}
      <img
        src="https://images.unsplash.com/photo-1568393691622-c7ba131d63b4?auto=format&fit=crop&w=2400&q=60"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center opacity-[0.18]"
      />
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <ScrollReveal className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
              What We Do
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-xl leading-tight">
              Four Services. One Trusted Partner.
            </h2>
            <p className="text-white/50 text-base lg:text-lg max-w-sm leading-relaxed">
              Every service handled with the same commitment to accuracy and
              speed that has defined us since 2004.
            </p>
          </div>
        </ScrollReveal>

        {/* Vertical list */}
        <div className="divide-y divide-white/10">
          {services.map((service, index) => (
            <ScrollReveal key={service.number} delay={index * 80}>
              <div className="service-item group pl-6 py-10 lg:py-12 hover:pl-8 transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_160px] gap-4 lg:gap-8 items-center">
                  {/* Number */}
                  <span className="text-[#C9A84C]/60 font-mono text-sm font-semibold tracking-widest mt-1">
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="space-y-3">
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white group-hover:text-[#C9A84C] transition-colors duration-300 leading-tight">
                      {service.name}
                    </h3>
                    <p className="text-white/50 text-base lg:text-lg font-medium">
                      {service.description}
                    </p>
                    <p className="text-white/40 text-sm lg:text-base leading-relaxed max-w-2xl">
                      {service.detail}
                    </p>
                    <a
                      href={service.href}
                      className="inline-flex items-center gap-2 text-[#C9A84C] text-sm font-semibold hover:gap-3 transition-all duration-200 group/link"
                    >
                      Get a quote
                      <span className="transform group-hover/link:translate-x-1 transition-transform duration-200">
                        &rarr;
                      </span>
                    </a>
                  </div>

                  {/* Thumbnail image */}
                  <div className="hidden lg:block relative h-28 w-full overflow-hidden opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                    <Image
                      src={service.image}
                      alt={service.imageAlt}
                      fill
                      className="object-cover"
                      sizes="160px"
                    />
                    <div className="absolute inset-0 bg-[#0C1628]/40 group-hover:bg-[#0C1628]/10 transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
