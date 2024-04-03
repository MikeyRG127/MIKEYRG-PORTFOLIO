import "@styles/globals.css"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer";
import localFont from 'next/font/local';

const AntonRegular = localFont({
  src: '../public/assets/fonts/Anton-Regular.ttf',
  display: 'swap',
})

const ArchitectsDaughterRegular = localFont({
  src: '../public/assets/fonts/ArchitectsDaughter-Regular.ttf',
  display: 'swap',
})

const BebasNeueRegular = localFont({
  src: '../public/assets/fonts/BebasNeue-Regular.ttf',
  display: 'swap',
})

const KhulaRegular = localFont({
  src: '../public/assets/fonts/Khula-Regular.ttf',
  display: 'swap',
})

const PermanentMarkerRegular = localFont({
  src: '../public/assets/fonts/PermanentMarker-Regular.ttf',
  display: 'swap',
})


export const metadata = {
  title: "MikeyRG",
  icons: {
    icon: ["/assets/icons/favicon.ico"],
    apple: ["/assets/icons/favicon.ico"],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  description: 'MikeyRG portfolio website.',
  keywords: ['MikeyRG Portfolio', 'Creative Portfolio', 'MikeyRG', 'Modern Portfolio'],
  creator: 'MikeyRG',
  publisher: 'MikeyRG',
  authors: [{ name: 'Jose Alberto' }, { name: 'MikeyRG', url: 'https://www.mikeyrg.com' }],
  referrer: 'origin-when-cross-origin',
  themeColor: 'black',
  verification: {
    google: ['google', '37th3wcIQWUV1kgeupcSRBdlCsFnzopaSv8btj0BJVA'],
  }
};



function RootLayout({ children, showNavbar }) {
  return (
    <html lang="en" className={`${AntonRegular.className} ${ArchitectsDaughterRegular.className} ${BebasNeueRegular.className} ${PermanentMarkerRegular.className} ${KhulaRegular.className}`}>
      <head>
        <title>Title</title>
        <meta name='description' content='Description' />
      </head>
      <body>
        <div className="vertical-lines-container"></div>
        {showNavbar ? <Navbar></Navbar> : <></>}
        {children}
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
