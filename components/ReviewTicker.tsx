const reviews = [
  {
    text: 'Integramerica handled my apostille in record time. Professional and responsive from start to finish.',
    author: 'Maria G.',
    location: 'Florida',
  },
  {
    text: 'They helped me navigate the consular legalization process for Argentina. Couldn\'t have done it without them.',
    author: 'Carlos R.',
    location: 'New York',
  },
  {
    text: 'Fast, accurate translations accepted by the embassy on the first submission. Highly recommend.',
    author: 'Ana P.',
    location: 'Texas',
  },
  {
    text: 'Immigration consultation was thorough and honest. They told me exactly what my options were.',
    author: 'Jorge M.',
    location: 'California',
  },
  {
    text: 'Been using their apostille service for corporate documents for 3 years. Always reliable.',
    author: 'Sofia L.',
    location: 'Miami',
  },
  {
    text: 'Excellent bilingual service. They explained everything clearly in Spanish and handled everything.',
    author: 'Roberto V.',
    location: 'New Jersey',
  },
];

// Duplicate for seamless loop
const allReviews = [...reviews, ...reviews];

export default function ReviewTicker() {
  return (
    <section className="bg-[#F7F4EE] py-12 lg:py-16 overflow-hidden border-y border-[#0C1628]/10">
      <div className="mb-8 text-center">
        <p className="text-[#0C1628]/40 text-xs font-semibold tracking-[0.3em] uppercase">
          What Clients Say
        </p>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#F7F4EE] to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#F7F4EE] to-transparent z-10 pointer-events-none" />

        <div
          className="marquee-track flex gap-6 w-max"
          style={{ animation: 'marquee 40s linear infinite' }}
        >
          {allReviews.map((review, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 bg-white border border-[#0C1628]/10 p-6"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 fill-[#C9A84C]"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-[#0C1628]/70 text-sm leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </p>

              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center">
                  <span className="text-[#C9A84C] text-xs font-bold">
                    {review.author[0]}
                  </span>
                </div>
                <div>
                  <p className="text-[#0C1628] text-xs font-semibold">{review.author}</p>
                  <p className="text-[#0C1628]/40 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
