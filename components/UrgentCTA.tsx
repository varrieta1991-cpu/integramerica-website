import ScrollReveal from './ScrollReveal';

const PHONE_NUMBER = '(561) 317-9253';
const PHONE_HREF = 'tel:+15613179253';
const WHATSAPP_HREF = 'https://wa.me/15613179253';

export default function UrgentCTA() {
  return (
    <section className="bg-[#C9A84C] py-20 lg:py-28 overflow-hidden relative">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            #0C1628,
            #0C1628 1px,
            transparent 1px,
            transparent 12px
          )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
        <ScrollReveal>
          <div className="inline-block bg-[#0C1628]/15 px-4 py-1.5 mb-6">
            <span className="text-[#0C1628] text-xs font-bold tracking-[0.3em] uppercase">
              Rush Processing Available
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-[#0C1628] leading-tight mb-5">
            Need an Apostille Urgently?
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <p className="text-[#0C1628]/75 text-lg lg:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Rush processing available. Contact us immediately and we will walk
            you through your options — same-day guidance, expedited handling.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <a
            href={PHONE_HREF}
            className="block font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#0C1628] mb-10 hover:opacity-80 transition-opacity duration-200 tracking-tight"
          >
            {PHONE_NUMBER}
          </a>
        </ScrollReveal>

        <ScrollReveal delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center gap-2 bg-[#0C1628] hover:bg-[#12213a] text-white font-bold text-base px-8 py-4 transition-colors duration-200"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
              </svg>
              Call Now
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white/30 hover:bg-white/50 text-[#0C1628] font-bold text-base px-8 py-4 transition-colors duration-200 border-2 border-[#0C1628]/20"
            >
              <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 00-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              WhatsApp Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
