import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
const poppins = Poppins({ 
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Rafael Mota - CEO Rafah Tech',
  description: 'CEO e Fundador da Rafah Tech. Transformando ideias em soluções tecnológicas inovadoras.',
  keywords: 'Rafael Mota, CEO, Rafah Tech, tecnologia, inovação, desenvolvimento',
  authors: [{ name: 'Rafael Mota' }],
  openGraph: {
    title: 'Rafael Mota - CEO Rafah Tech',
    description: 'CEO e Fundador da Rafah Tech. Transformando ideias em soluções tecnológicas inovadoras.',
    type: 'profile',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Mota - CEO Rafah Tech',
    description: 'CEO e Fundador da Rafah Tech. Transformando ideias em soluções tecnológicas inovadoras.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt_BR">
      <body className={`${inter.className} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
