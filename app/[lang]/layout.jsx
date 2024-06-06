import "@styles/globals.css";
import Navbar from "@components/Navbar";


/*
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
  themeColor: 'white',
  verification: {
    google: ['google', '37th3wcIQWUV1kgeupcSRBdlCsFnzopaSv8btj0BJVA'],
  }
};
*/
export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'es' }]
}

export default async function RootLayout({ children, params }) {
  return (
    <html lang={params.lang}>
      <head>
        <title>MikeyRG</title>
        <link rel="icon" href="/assets/icons/favicon.ico" />
        <link rel="apple-touch-icon" href="/assets/icons/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Your Ideal Developer for Bringing Your Dream Software Project to Life." />
        <meta name="keywords" content="MikeyRG Portfolio, Creative Portfolio, MikeyRG, Modern Portfolio" />
        <meta name="creator" content="MikeyRG" />
        <meta name="publisher" content="MikeyRG" />
        <meta name="author" content="Jose Alberto" />
        <meta name="author" content="MikeyRG" />
        <link rel="author" href="https://www.mikeyrg.com" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="theme-color" content="white" />
        <meta name="google-site-verification" content="37th3wcIQWUV1kgeupcSRBdlCsFnzopaSv8btj0BJVA" />
      </head>
      <body>
        <Navbar lang={params.lang}></Navbar>
        {children}
      </body>
    </html>
  );
}
