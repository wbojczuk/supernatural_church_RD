import './globals.css'
import type { Metadata } from 'next'
import "react-multi-carousel/lib/styles.css";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Inter } from 'next/font/google'
import Footer from './(mainsite)/components/misc/Footer/Footer';
import Navbar from './(mainsite)/components/misc/Navbar/Navbar';
import Script from 'next/script';

// BUTTON STYLES - .main-button
import "./(mainsite)/components/styling_sheets/links/mainlink.css"


const primaryFont = Inter({ subsets: ['latin'], weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"], display: "swap", variable: "--primary-font" })

export const metadata: Metadata = {
  title: 'Supernatural Church | Faith produces the Supernatural',
  description: 'Supernatural Church | Faith produces the Supernatural',

  openGraph: {
    title: "Supernatural Church | Faith produces the Supernatural",
    description: "We believe God has called us to serve.",
    type: "website",
    images: [
      {
        url: 'https://sncalamo.org/img/logo-placeholder.webp',
        width: 1280,
        height: 720,
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Supernatural Church | Faith produces the Supernatural",
    description: "We believe God has called us to serve.",
    images: ['https://sncalamo.org/img/logo-placeholder.webp']
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${primaryFont.variable}`}>

      {(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID != "0000000") && <><Script src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
        `}
      </Script></>}

        <Navbar />

        {children}

        <Footer />
        
        </body>
    </html>
  )
}
