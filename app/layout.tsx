import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Integramerica — Leaders in Document Legalization Since 2004',
  description:
    'Apostille, document legalization, certified translations, and immigration advisory services across all 50 U.S. states. Serving clients since 2004. También Hablamos Español.',
  keywords: [
    'apostille',
    'document legalization',
    'certified translation',
    'immigration advisory',
    'Florida apostille',
    'consular legalization',
    'Hague Convention',
    'integramerica',
  ],
  openGraph: {
    title: 'Integramerica — Leaders in Document Legalization Since 2004',
    description:
      'Apostille, document legalization, certified translations, and immigration advisory across all 50 U.S. states.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans bg-cream text-navy">{children}</body>
    </html>
  );
}
