import { DM_Sans, DM_Serif_Display } from 'next/font/google';
import Global from '@/components/Global';
import './globals.css';
import { Analytics } from "@vercel/analytics/react"


export const metadata = {
  title: 'MichaelWeb',
  description:
    'MichaelWeb is a personal coder portfolio for Michael Tran a Senior at the University of Wisconsin - Madison.',
};

const fontHeading = DM_Serif_Display({
  weight: ['400'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});

const fontBody = DM_Sans({
  weight: ['300', '500'],
  style: 'normal',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

export default function RootLayout({ children }) {
  return (
    <html lang='en' className='hide-scrollbar'>
      <body
        className={`${fontHeading.variable} ${fontBody.variable} antialiased`}
      >
        <Global />
        {children}
        <Analytics />

      </body>
    </html>
  );
}
