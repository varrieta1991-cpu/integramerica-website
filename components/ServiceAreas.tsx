import ScrollReveal from './ScrollReveal';

const primaryStates = [
  'Florida',
  'New York',
  'California',
  'Texas',
  'New Jersey',
  'Georgia',
  'Illinois',
  'North Carolina',
  'Virginia',
  'Maryland',
];

export default function ServiceAreas() {
  return (
    <section id="service-areas" className="bg-[#F7F4EE] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <ScrollReveal>
            <div className="flex items-center gap-4 mb-4">
              <span className="block w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
                Service Areas
              </span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0C1628] leading-tight mb-6">
              We Serve Clients Across the United States
            </h2>
            <p className="text-[#0C1628]/65 text-base lg:text-lg leading-relaxed mb-8">
              Documents processed from every U.S. state. Clients located
              nationwide and internationally — our physical office in Florida
              serves as the hub for all state-level Apostille and
              legalization processing.
            </p>

            {/* Highlight box */}
            <div className="border-l-4 border-[#C9A84C] pl-6 py-1">
              <p className="text-[#0C1628] font-semibold text-lg">
                All 50 U.S. States Served
              </p>
              <p className="text-[#0C1628]/55 text-sm mt-1">
                No matter where your documents originate, we handle the
                authentication process.
              </p>
            </div>
          </ScrollReveal>

          {/* Right — state list */}
          <ScrollReveal delay={150}>
            <div className="grid grid-cols-2 gap-0 divide-y divide-[#0C1628]/10 border-t border-b border-[#0C1628]/10">
              {primaryStates.map((state, index) => (
                <div
                  key={state}
                  className={`flex items-center gap-3 py-4 px-2 group hover:bg-[#0C1628]/[0.03] transition-colors ${
                    index % 2 === 0 ? 'border-r border-[#0C1628]/10' : ''
                  }`}
                >
                  <span className="w-1.5 h-1.5 bg-[#C9A84C] rounded-full shrink-0" />
                  <span className="text-[#0C1628] text-sm font-medium">{state}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-[#C9A84C]/50 rounded-full shrink-0" />
              <span className="text-[#0C1628]/55 text-sm italic">
                And all 50 states — contact us regardless of your location.
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
