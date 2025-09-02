import './globals.css';
import type { Metadata } from 'next';
import { Inter, Poppins } from 'next/font/google';
import Script from 'next/script';
import Image from 'next/image';

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
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {children}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '2162842897543163');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          {/* Decorative tracking pixel, optimized with Next.js Image */}
          <Image
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2162842897543163&ev=PageView&noscript=1"
            alt=""
            unoptimized
            priority
          />
        </noscript>
      </body>
    </html>
  );
}
