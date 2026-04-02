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
        {/* Section header */}
        <ScrollReveal className="mb-16 lg:mb-20">
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

        {/* Numbered editorial rows */}
        <div className="space-y-0 divide-y divide-[#0C1628]/10">
          {reasons.map((reason, index) => (
            <ScrollReveal
              key={reason.number}
              delay={index * 100}
              className="group grid grid-cols-1 lg:grid-cols-[120px_1fr_1fr] gap-4 lg:gap-8 py-10 lg:py-12 hover:bg-[#0C1628]/[0.02] transition-colors duration-200"
            >
              {/* Number */}
              <div className="flex items-start">
                <span className="font-serif text-5xl lg:text-6xl font-bold text-[#C9A84C] leading-none">
                  {reason.number}
                </span>
              </div>

              {/* Title */}
              <div className="flex items-start">
                <h3 className="font-serif text-xl lg:text-2xl xl:text-3xl font-bold text-[#0C1628] leading-tight">
                  {reason.title}
                </h3>
              </div>

              {/* Description */}
              <div className="flex items-start">
                <p className="text-[#0C1628]/65 text-base lg:text-lg leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
