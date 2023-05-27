import "@styles/globals.css"
import Navbar from "@components/Navbar"
import Footer from "@components/Footer";


export const metadata = {
  title: "MikeyRG",
  icons: {
    icon: ["/assets/icons/favicon.ico"],
    apple: ["/assets/icons/favicon.ico"],
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}

export default RootLayout;
