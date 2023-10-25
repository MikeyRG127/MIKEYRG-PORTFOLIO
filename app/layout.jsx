import "@styles/globals.css"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer";
import AboutMe from "@components/AboutMe";

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

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <AboutMe></AboutMe>
        <Footer></Footer>
      </body>
    </html>
  );
}

export default RootLayout;
