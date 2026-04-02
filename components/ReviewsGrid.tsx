import ScrollReveal from './ScrollReveal';

const reviews = [
  {
    text: 'Integramerica handled my apostille in record time. Professional and responsive from start to finish. I will absolutely use them again for any future document needs.',
    author: 'Maria G.',
    location: 'Florida',
    service: 'Apostille',
  },
  {
    text: 'They helped me navigate the consular legalization process for Argentina. The team knew exactly what documents were needed and kept me informed at every step.',
    author: 'Carlos R.',
    location: 'New York',
    service: 'Document Legalization',
  },
  {
    text: 'Fast, accurate translations accepted by the embassy on the first submission. Their attention to legal terminology is exceptional. Highly recommend.',
    author: 'Ana P.',
    location: 'Texas',
    service: 'Certified Translations',
  },
  {
    text: 'Immigration consultation was thorough and completely honest. They told me exactly what my options were without sugar-coating anything. That transparency meant everything.',
    author: 'Jorge M.',
    location: 'California',
    service: 'Immigration Advisory',
  },
  {
    text: 'Been using their apostille service for corporate documents for 3 years. Always reliable, always on time. They are an essential partner for our international business.',
    author: 'Sofia L.',
    location: 'Miami',
    service: 'Apostille',
  },
  {
    text: 'Excellent bilingual service. They explained every detail clearly in Spanish and handled all the paperwork without any stress on my end. Very grateful.',
    author: 'Roberto V.',
    location: 'New Jersey',
    service: 'Document Legalization',
  },
];

function StarRating() {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-[#C9A84C]" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsGrid() {
  return (
    <section id="reviews" className="bg-[#0C1628] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Section header */}
        <ScrollReveal className="mb-14 lg:mb-18">
          <div className="flex items-center gap-4 mb-4">
            <span className="block w-8 h-px bg-[#C9A84C]" />
            <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
              Client Reviews
            </span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white max-w-lg leading-tight">
              Trusted by Clients Across the Country
            </h2>
            <div className="flex items-center gap-3">
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 fill-[#C9A84C]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-white/60 text-sm">5.0 · Verified Reviews</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Reviews grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10">
          {reviews.map((review, index) => (
            <ScrollReveal
              key={index}
              delay={index * 80}
              className="bg-[#0C1628] p-8 hover:bg-[#12213a] transition-colors duration-300"
            >
              <StarRating />
              <p className="text-white/75 text-sm lg:text-base leading-relaxed my-5">
                &ldquo;{review.text}&rdquo;
              </p>
              <div className="flex items-center justify-between border-t border-white/10 pt-5">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-[#C9A84C]/20 flex items-center justify-center shrink-0">
                    <span className="text-[#C9A84C] text-xs font-bold">
                      {review.author[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">{review.author}</p>
                    <p className="text-white/40 text-xs">{review.location}</p>
                  </div>
                </div>
                <span className="text-[#C9A84C]/60 text-xs font-medium border border-[#C9A84C]/20 px-2 py-1">
                  {review.service}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
