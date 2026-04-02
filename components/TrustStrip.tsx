import ScrollReveal from './ScrollReveal';

const stats = [
  {
    value: '20+',
    label: 'Years',
    sub: 'In Business Since 2004',
  },
  {
    value: 'All 50',
    label: 'States',
    sub: 'Nationwide Service',
  },
  {
    value: '4',
    label: 'Core Services',
    sub: 'One Trusted Partner',
  },
];

export default function TrustStrip() {
  return (
    <section className="bg-[#C9A84C] py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-0 divide-y sm:divide-y-0 sm:divide-x divide-[#0C1628]/20">
          {stats.map((stat, index) => (
            <ScrollReveal
              key={stat.value}
              delay={index * 100}
              className="px-8 py-8 sm:py-0 first:pl-0 last:pr-0 text-center sm:text-left"
            >
              <div className="flex flex-col gap-1">
                <div className="flex items-baseline gap-2 justify-center sm:justify-start">
                  <span className="font-serif text-5xl lg:text-6xl font-bold text-[#0C1628] leading-none">
                    {stat.value}
                  </span>
                  <span className="font-serif text-2xl lg:text-3xl font-bold text-[#0C1628] leading-none">
                    {stat.label}
                  </span>
                </div>
                <p className="text-[#0C1628]/70 text-sm font-medium tracking-wide uppercase">
                  {stat.sub}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
