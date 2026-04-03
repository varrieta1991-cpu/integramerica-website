import Image from 'next/image';
import ScrollReveal from './ScrollReveal';

const reasons = [
  {
    number: '01',
    title: 'Established Since 2004',
    description:
      'Two decades of navigating U.S. document legalization requirements with precision. We have processed thousands of documents across every scenario imaginable.',
  },
  {
    number: '02',
    title: 'Bilingual Team',
    description:
      'All services available in English and Spanish. No language barriers, no confusion — just clear, direct communication in the language you are most comfortable with.',
  },
  {
    number: '03',
    title: 'End-to-End Handling',
    description:
      'We manage every step — verification, authentication, notarization, and submission — so you do not have to coordinate between multiple agencies or track your own documents.',
  },
  {
    number: '04',
    title: 'Nationwide Reach',
    description:
      'We process Apostilles and legalizations for documents originating from all 50 U.S. states, serving clients from Florida to California and everywhere in between.',
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="bg-[#F7F4EE] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 xl:gap-20 items-start">

          {/* Left — header + numbered rows */}
          <div>
            <ScrollReveal className="mb-14 lg:mb-16">
              <div className="flex items-center gap-4 mb-4">
                <span className="block w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
                  Why Integramerica
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1628] max-w-xl leading-tight">
                Experience That Cannot Be Replicated
              </h2>
            </ScrollReveal>

            <div className="space-y-0 divide-y divide-[#0C1628]/10">
              {reasons.map((reason, index) => (
                <ScrollReveal
                  key={reason.number}
                  delay={index * 100}
                  className="group grid grid-cols-[60px_1fr] gap-6 py-8 lg:py-10 hover:bg-[#0C1628]/[0.02] transition-colors duration-200"
                >
                  <span className="font-serif text-4xl lg:text-5xl font-bold text-[#C9A84C] leading-none">
                    {reason.number}
                  </span>
                  <div>
                    <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0C1628] leading-tight mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-[#0C1628]/65 text-base leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — sticky photo panel */}
          <ScrollReveal className="hidden lg:block lg:sticky lg:top-28">
            <div className="relative">
              {/* Main image */}
              <div className="relative h-[560px] overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=85"
                  alt="Professional consultation at Integramerica"
                  fill
                  className="object-cover object-center"
                  sizes="420px"
                />
                {/* Gold corner accent */}
                <div className="absolute top-0 left-0 w-12 h-12 border-t-4 border-l-4 border-[#C9A84C]" />
                <div className="absolute bottom-0 right-0 w-12 h-12 border-b-4 border-r-4 border-[#C9A84C]" />
              </div>
              {/* Caption bar */}
              <div className="bg-[#0C1628] px-6 py-4 flex items-center justify-between">
                <span className="text-white/60 text-xs tracking-[0.2em] uppercase font-semibold">
                  Jupiter, Florida
                </span>
                <span className="text-[#C9A84C] text-xs font-bold tracking-widest uppercase">
                  Est. 2004
                </span>
              </div>
              {/* Second small image offset */}
              <div className="absolute -bottom-8 -left-8 w-40 h-40 overflow-hidden border-4 border-[#F7F4EE] shadow-xl hidden xl:block">
                <Image
                  src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=400&q=80"
                  alt="Official document with seal"
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
