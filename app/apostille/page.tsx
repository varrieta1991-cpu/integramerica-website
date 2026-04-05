import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'What Is an Apostille? — Apostille Services | Integramerica',
  description:
    'Learn what an apostille is, which countries accept it, what documents qualify, and how Integramerica handles the entire process across all 50 U.S. states. Trusted since 2004.',
  keywords: [
    'apostille',
    'what is an apostille',
    'hague convention apostille',
    'apostille services USA',
    'apostille Florida',
    'document authentication',
    'apostille birth certificate',
    'apostille FAQ',
  ],
  openGraph: {
    title: 'What Is an Apostille? — Apostille Services | Integramerica',
    description:
      'Everything you need to know about apostilles — what they are, which countries accept them, and how Integramerica handles the entire process for you.',
    type: 'website',
  },
};

const PHONE_HREF = 'tel:+15613179253';
const PHONE_NUMBER = '(561) 317-9253';
const HCCH_HREF = 'https://www.hcch.net/en/states/hcch-members';

const documents = [
  'Birth Certificates',
  'Marriage Certificates',
  'Death Certificates',
  'Divorce Decrees',
  'Adoption Documents',
  'Powers of Attorney',
  'Academic Diplomas & Transcripts',
  'Corporate Documents',
  'FBI Background Checks',
  'Court Documents',
  'Notarized Agreements',
  'Medical Records',
];

const faqs = [
  {
    q: 'What exactly is an apostille?',
    a: 'An apostille is an official certificate issued by a designated government authority that authenticates the origin of a public document. It verifies the signature, seal, or stamp on a document so that it will be recognized as valid in another country. Think of it as an internationally accepted stamp of legitimacy for your paperwork.',
  },
  {
    q: 'Which countries accept an apostille?',
    a: 'Apostilles are accepted by all member countries of the Hague Convention of 1961. As of today, over 120 countries participate — including most of Europe, Latin America, the United States, and many others. You can view the full official list of member countries on the Hague Conference website.',
  },
  {
    q: 'What documents can be apostilled in the United States?',
    a: 'Any U.S. public document can be apostilled, provided it carries an official signature or seal. Common examples include birth, marriage, and death certificates; court orders and judgments; powers of attorney; academic diplomas and transcripts; FBI background checks; corporate filings; and notarized agreements.',
  },
  {
    q: 'Does my document need to be notarized before getting an apostille?',
    a: 'It depends on the document type. Official government-issued documents (such as birth or marriage certificates issued by a government office) typically do not require prior notarization. However, privately prepared documents — such as powers of attorney, affidavits, or personal statements — usually must be notarized first. We review every document and advise you on exactly what is needed.',
  },
  {
    q: 'How long does the apostille process take?',
    a: 'Processing times vary depending on which Secretary of State or federal authority handles your document. Some states process apostilles within a few business days; others may take several weeks. We cannot control the government\'s processing time, but we handle all preparation, submission, and follow-up on your behalf so you don\'t have to navigate it alone.',
  },
  {
    q: 'What is the difference between an apostille and document legalization?',
    a: 'An apostille is used when the destination country is a member of the Hague Convention — it is a streamlined, single-step authentication. Document legalization (also called consular legalization) is required when the destination country is not a Hague member. It involves multiple steps: state authentication, U.S. Department of State certification, and then authentication by the destination country\'s embassy or consulate. Integramerica handles both.',
  },
  {
    q: 'What if the country I need my document for is not on the Hague list?',
    a: 'For non-Hague countries, you will need consular legalization instead of an apostille. This is a more involved multi-step process, but we handle it completely — coordinating with the relevant embassy or consulate on your behalf. Contact us and we will advise you on the correct process for your specific country.',
  },
  {
    q: 'Can I obtain an apostille myself, without using a service?',
    a: 'Technically, yes — you can contact your state\'s Secretary of State office directly. However, the process requires knowing exactly which office handles your document type, submitting the correct forms, paying the right fees, and often making in-person visits or navigating mail requirements. Many clients find the time, complexity, and risk of errors make professional handling well worth it, especially for time-sensitive or important documents.',
  },
  {
    q: 'Does Integramerica handle the entire process for me?',
    a: 'Yes. Once you send us your document and tell us where it is headed, we review it, advise on any pre-steps needed (such as notarization), submit it to the appropriate authority, track its progress, and return the completed apostille to you — by mail, courier, or digitally depending on your situation.',
  },
  {
    q: 'I need my document apostilled urgently. Can you help?',
    a: 'Contact us right away. While we cannot guarantee expedited processing by government offices, we prioritize urgent requests and will advise you on the fastest available path given your document type and destination state. Call or WhatsApp us at ' + PHONE_NUMBER + ' for immediate assistance.',
  },
];

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(({ q, a }) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  })),
};

export default function ApostillePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />

      <main className="bg-[#0C1628]">

        {/* ── Hero ── */}
        <section className="relative pt-36 pb-20 lg:pt-44 lg:pb-28 overflow-hidden">
          <div className="absolute inset-0 opacity-[0.07]"
            style={{ backgroundImage: 'radial-gradient(circle at 70% 50%, #C9A84C 0%, transparent 60%)' }} />
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-white/30 text-xs tracking-wide mb-8">
              <a href="/" className="hover:text-[#C9A84C] transition-colors">Home</a>
              <span>/</span>
              <span className="text-[#C9A84C]">Apostille</span>
            </nav>

            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">
                Apostille Services
              </span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight max-w-4xl mb-6">
              What Is an Apostille — and Do You Need One?
            </h1>
            <p className="text-white/60 text-lg leading-relaxed max-w-2xl mb-10">
              If you need a U.S. document recognized abroad, an apostille is likely required.
              We handle the entire process — so you don&rsquo;t have to navigate government offices,
              filing requirements, or confusing procedures on your own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8943e] text-[#0C1628] font-bold px-7 py-4 transition-colors duration-200">
                Get a Free Quote
              </a>
              <a href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#C9A84C] font-bold px-7 py-4 transition-colors duration-200">
                <svg className="w-4 h-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1C9.39 21 3 14.61 3 7a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.25 1.01l-2.2 2.22z" />
                </svg>
                {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </section>

        {/* ── What Is an Apostille ── */}
        <section className="py-20 lg:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-8 h-px bg-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">The Basics</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                  What Is an Apostille?
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    An apostille is an official certificate that authenticates the origin of a public document —
                    verifying its signature, seal, or stamp so it will be legally recognized in another country.
                    It is the internationally agreed-upon method for document authentication between member nations.
                  </p>
                  <p>
                    The apostille system was established by the{' '}
                    <strong className="text-white/80">Hague Convention of October 5, 1961</strong>,
                    an international treaty that simplified cross-border document recognition for its member countries.
                    Before the Convention, authenticating a document for use abroad required a long chain of
                    government certifications — the apostille replaced all of that with a single certificate.
                  </p>
                  <p>
                    In the United States, apostilles are issued by each state&rsquo;s Secretary of State for
                    state-level documents, and by the U.S. Department of State for federal documents such as
                    FBI background checks.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="border border-white/10 p-6">
                  <p className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase mb-2">In Plain Terms</p>
                  <p className="font-serif text-white text-xl leading-snug">
                    &ldquo;An apostille is the international equivalent of a notary stamp — it tells a foreign
                    government that your document is authentic and legally issued.&rdquo;
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Countries Participating', value: '120+' },
                    { label: 'U.S. States Covered', value: 'All 50' },
                    { label: 'Years of Experience', value: '20+' },
                    { label: 'Languages Served', value: 'EN / ES' },
                  ].map(({ label, value }) => (
                    <div key={label} className="border border-white/10 p-5">
                      <p className="font-serif text-3xl font-bold text-[#C9A84C] mb-1">{value}</p>
                      <p className="text-white/40 text-xs uppercase tracking-wide">{label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Documents ── */}
        <section className="py-20 lg:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">Eligible Documents</span>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight max-w-lg">
                What Documents Can Be Apostilled?
              </h2>
              <p className="text-white/50 max-w-sm leading-relaxed">
                Any official U.S. public document bearing an authorized signature or government seal is eligible.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {documents.map((doc) => (
                <div key={doc}
                  className="border border-white/10 px-4 py-3 flex items-center gap-3 group hover:border-[#C9A84C]/40 transition-colors duration-200">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] shrink-0" />
                  <span className="text-white/70 text-sm group-hover:text-white/90 transition-colors">{doc}</span>
                </div>
              ))}
            </div>
            <p className="text-white/30 text-sm mt-6">
              Not sure if your document qualifies?{' '}
              <a href="/#contact" className="text-[#C9A84C] hover:underline">Contact us</a>{' '}
              and we will advise you at no charge.
            </p>
          </div>
        </section>

        {/* ── Countries ── */}
        <section className="py-20 lg:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <span className="block w-8 h-px bg-[#C9A84C]" />
                  <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">Hague Convention</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-6">
                  Which Countries Accept an Apostille?
                </h2>
                <div className="space-y-4 text-white/60 leading-relaxed">
                  <p>
                    Apostilles are valid in all member countries of the Hague Convention of 1961. This includes
                    over 120 nations across Europe, the Americas, Asia, Africa, and Oceania — covering the vast
                    majority of international document use cases.
                  </p>
                  <p>
                    Common destination countries include Mexico, Spain, Colombia, Argentina, Brazil, Italy,
                    Germany, France, the United Kingdom, Australia, and many more.
                  </p>
                  <p>
                    If the country you are sending documents to is <em>not</em> a Hague member,
                    you will need <strong className="text-white/80">consular legalization</strong> instead —
                    a separate process we also handle in full.
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <a href={HCCH_HREF} target="_blank" rel="noopener noreferrer"
                  className="group flex items-center justify-between border border-[#C9A84C]/30 hover:border-[#C9A84C] p-6 transition-colors duration-200">
                  <div>
                    <p className="text-white font-semibold mb-1 group-hover:text-[#C9A84C] transition-colors">
                      Official List of Countries Accepting Apostille
                    </p>
                    <p className="text-white/40 text-sm">
                      Hague Conference on Private International Law (HCCH)
                    </p>
                  </div>
                  <svg className="w-5 h-5 text-[#C9A84C] shrink-0 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
                <div className="border border-white/10 p-6">
                  <p className="text-white/40 text-xs uppercase tracking-wide mb-2">Not on the Hague list?</p>
                  <p className="text-white/70 text-sm leading-relaxed">
                    We offer full <strong className="text-white">consular legalization</strong> for countries
                    outside the Hague Convention — coordinating directly with the relevant embassy or consulate.{' '}
                    <a href="/#contact" className="text-[#C9A84C] hover:underline">Ask us about your country.</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Process ── */}
        <section className="py-20 lg:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">How We Handle It</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl mb-14">
              What Happens After You Contact Us
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 divide-y lg:divide-y-0 lg:divide-x divide-white/10">
              {[
                {
                  n: '01',
                  title: 'Send Us Your Document',
                  body: 'WhatsApp, email, or upload a photo of your document. Tell us which country it\'s headed to and what purpose it serves — we take it from there.',
                },
                {
                  n: '02',
                  title: 'We Review, Advise & Submit',
                  body: 'We review the document, confirm what is needed (notarization, state vs. federal processing, etc.), provide a clear quote, and submit to the appropriate authority on your behalf.',
                },
                {
                  n: '03',
                  title: 'Receive Your Apostilled Document',
                  body: 'Once issued, we return your certified document by mail, courier, or digitally — ready for international use and accepted by governments, consulates, and courts worldwide.',
                },
              ].map((step) => (
                <div key={step.n} className="px-0 lg:px-10 py-10 lg:py-0 first:pl-0 last:pr-0">
                  <span className="font-serif text-6xl font-bold text-[#C9A84C]/20 leading-none block mb-6 select-none">
                    {step.n}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white mb-3">{step.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-20 lg:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
            <div className="flex items-center gap-3 mb-5">
              <span className="block w-8 h-px bg-[#C9A84C]" />
              <span className="text-[#C9A84C] text-xs font-semibold tracking-[0.3em] uppercase">FAQ</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight max-w-xl mb-12">
              Frequently Asked Questions
            </h2>
            <div className="divide-y divide-white/10">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-1">
                  <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none">
                    <span className="font-serif text-lg font-semibold text-white group-open:text-[#C9A84C] transition-colors pr-4">
                      {q}
                    </span>
                    <span className="shrink-0 w-5 h-5 flex items-center justify-center border border-white/20 group-open:border-[#C9A84C] text-white/50 group-open:text-[#C9A84C] transition-colors text-sm font-light">
                      <span className="group-open:hidden">+</span>
                      <span className="hidden group-open:block">−</span>
                    </span>
                  </summary>
                  <p className="text-white/55 text-base leading-relaxed pb-6 max-w-3xl">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-20 lg:py-28 border-t border-white/10">
          <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight mb-3">
                Ready to Get Your Document Apostilled?
              </h2>
              <p className="text-white/50 max-w-lg leading-relaxed">
                Send us your document and destination country — we&rsquo;ll review it and respond with
                exactly what is needed and what it will cost. No surprises.
              </p>
            </div>
            <div className="shrink-0 flex flex-col sm:flex-row gap-3">
              <a href="/#contact"
                className="inline-flex items-center justify-center gap-2 bg-[#C9A84C] hover:bg-[#b8943e] text-[#0C1628] font-bold px-7 py-4 transition-colors duration-200">
                Get a Free Quote
              </a>
              <a href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 border border-[#C9A84C]/60 hover:border-[#C9A84C] text-[#C9A84C] font-bold px-7 py-4 transition-colors duration-200">
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
