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
    <section id="why-us" className="bg-[#F7F4EE] py-20 lg:py-28 overflow-hidden">
      {/* Decorative top rule */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="h-px bg-gradient-to-r from-[#C9A84C] via-[#C9A84C]/30 to-transparent mb-16 lg:mb-20" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] xl:grid-cols-[1fr_440px] gap-16 xl:gap-24 items-start">

          {/* Left — header + numbered rows */}
          <div>
            <ScrollReveal className="mb-12">
              <div className="flex items-center gap-4 mb-5">
                <span className="block w-8 h-px bg-[#C9A84C]" />
                <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
                  Why Integramerica
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-[#0C1628] leading-[1.1]">
                Experience That Cannot<br className="hidden sm:block" /> Be Replicated
              </h2>
            </ScrollReveal>

            <div className="divide-y divide-[#0C1628]/8">
              {reasons.map((reason, index) => (
                <ScrollReveal
                  key={reason.number}
                  delay={index * 80}
                >
                  <div className="group flex gap-7 py-7 lg:py-8">
                    {/* Number with vertical accent line */}
                    <div className="flex flex-col items-center gap-1 shrink-0 pt-1">
                      <span className="font-mono text-xs font-bold text-[#C9A84C] tracking-widest">
                        {reason.number}
                      </span>
                      <div className="w-px flex-1 bg-[#C9A84C]/20 group-hover:bg-[#C9A84C]/60 transition-colors duration-300 min-h-[40px]" />
                    </div>
                    {/* Content */}
                    <div className="pb-1">
                      <h3 className="font-serif text-xl lg:text-2xl font-bold text-[#0C1628] leading-snug mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-[#0C1628]/60 text-[0.9375rem] leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          {/* Right — two-image stacked panel */}
          <ScrollReveal className="hidden lg:block lg:sticky lg:top-24" delay={150}>
            <div className="flex flex-col gap-3">

              {/* Primary image — document on desk, cropped to document */}
              <div className="relative h-[340px] overflow-hidden">
                <Image
                  src="/images/document-sealed.png"
                  alt="Official sealed document on executive desk"
                  fill
                  className="object-cover object-[center_65%]"
                  sizes="440px"
                />
                {/* Gold top-left corner */}
                <div className="absolute top-0 left-0 w-10 h-10 border-t-[3px] border-l-[3px] border-[#C9A84C]" />
              </div>

              {/* Caption strip */}
              <div className="bg-[#0C1628] px-5 py-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="block w-1 h-1 rounded-full bg-[#C9A84C]" />
                  <span className="text-white/50 text-[10px] tracking-[0.22em] uppercase font-semibold">
                    Jupiter, Florida
                  </span>
                </div>
                <span className="text-[#C9A84C] text-[10px] font-bold tracking-[0.25em] uppercase">
                  Est. 2004
                </span>
              </div>

              {/* Secondary image — international flags */}
              <div className="relative h-[200px] overflow-hidden">
                <Image
                  src="/images/international-flags.png"
                  alt="International flags on conference table representing global reach"
                  fill
                  className="object-cover object-center"
                  sizes="440px"
                />
                {/* Dark overlay with text */}
                <div className="absolute inset-0 bg-[#0C1628]/50" />
                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-white/90 font-serif text-lg font-bold leading-tight">
                    Documents accepted in<br />190+ countries worldwide
                  </p>
                </div>
                {/* Gold bottom-right corner */}
                <div className="absolute bottom-0 right-0 w-10 h-10 border-b-[3px] border-r-[3px] border-[#C9A84C]" />
              </div>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
