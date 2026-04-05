import ScrollReveal from './ScrollReveal';

const WHATSAPP_HREF = 'https://wa.me/15613179253';
const EMAIL_HREF = 'mailto:info@integramerica.org';

const steps = [
  {
    number: '01',
    title: 'Send Your Document',
    description:
      'WhatsApp or email us your document. Tell us which country it\'s headed to and what it\'s for — we\'ll handle the rest.',
    detail: 'WhatsApp, email, or photo — we\'ll let you know exactly what we need.',
  },
  {
    number: '02',
    title: 'We Review & Quote',
    description:
      'Within hours, you\'ll receive a clear quote with the exact cost and timeline based on your specific document and destination. No hidden fees, no surprises.',
    detail: 'Same-day options available for urgent requests.',
  },
  {
    number: '03',
    title: 'Receive Your Certified Document',
    description:
      'We process, certify, and deliver your document — ready for international use, accepted by consulates, courts, and government agencies.',
    detail: 'Delivered by mail, courier, or digitally depending on your needs.',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#0C1628] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* Header */}
        <ScrollReveal className="mb-16 lg:mb-20">
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
              Simple Process
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-lg leading-tight">
              How It Works
            </h2>
            <p className="text-white/50 text-base lg:text-lg max-w-sm leading-relaxed">
              We guide you through every step and keep you informed throughout the process.
            </p>
          </div>
        </ScrollReveal>

        {/* Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 120} className="group px-0 lg:px-10 py-10 lg:py-0 first:pl-0 last:pr-0">
              {/* Number */}
              <div className="flex items-center gap-4 mb-6">
                <span className="font-serif text-6xl lg:text-7xl font-bold text-[#C9A84C]/20 leading-none select-none">
                  {step.number}
                </span>
                {/* Connector line — desktop only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-1/2 w-px h-16 bg-white/10 -translate-y-1/2" />
                )}
              </div>

              <h3 className="font-serif text-xl lg:text-2xl font-bold text-white mb-3 leading-tight">
                {step.title}
              </h3>
              <p className="text-white/60 text-base leading-relaxed mb-3">
                {step.description}
              </p>
              <p className="text-[#C9A84C]/70 text-sm font-medium">
                {step.detail}
              </p>
            </ScrollReveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <ScrollReveal delay={400} className="mt-16 pt-12 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <p className="text-white/60 text-base max-w-md">
            Ready to get started? Send us your document by WhatsApp or email — we'll get back to you within the hour.
          </p>
          <div className="shrink-0 flex flex-col sm:flex-row gap-3">
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8943e] text-[#0C1628] font-bold text-sm px-6 py-3.5 transition-colors duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp
            </a>
            <a
              href={EMAIL_HREF}
              className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#C9A84C] font-bold text-sm px-6 py-3.5 transition-colors duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              Email Us
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
