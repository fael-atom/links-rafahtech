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
  description: 'Especialista en Automatización. Soluciones Innovadoras con Inteligencia artificial.',
  keywords: 'Rafael Mota, CEO, Rafah Tech, tecnología, innovación, automatización, inteligencia artificial, soluciones tecnológicas',
  authors: [{ name: 'Rafael Mota' }],
  openGraph: {
    title: 'Rafael Mota - CEO Rafah Tech',
    description: 'Especialista en Automatización. Soluciones Innovadoras con Inteligencia artificial.',
    type: 'profile',
    locale: 'es_PE',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rafael Mota - CEO Rafah Tech',
    description: 'Especialista en Automatización. Soluciones Innovadoras con Inteligencia artificial.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es_PE">
      <body className={`${inter.className} ${poppins.variable} font-sans antialiased`}>
      {children}
      </body>
    </html>
  );
}
