import "@styles/globals.css";
import Nav from "@components/Nav";

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
        <Nav />
        <main className="main-container">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
