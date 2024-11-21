import { Poppins } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/lib/Providers/Providers";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Asian It Inc",
    template: `%s | Asian It Inc`,
  },
  keywords: [
    "Asian It Inc",
    "Web development services",
    "Next.js solutions",
    "Custom web solutions",
    "Mobile app development",
    "WordPress themes",
  ],
  icons: {
    icon: `https://i.ibb.co.com/w7HRw2Q/logo.webp`, 
  },
  description:
    "Asian It Inc provides custom web and mobile app solutions for businesses.",
  openGraph: {
    type: "website",
    url: "https://www.asianitinc.com",
    title: "Asian It Inc - Web and Mobile Solutions",
    description: "Custom Web and mobile app solutions tailored for businesses.",
    images: [
      {
        url: "https://i.ibb.co.com/w7HRw2Q/logo.webp",
        width: 800,
        height: 600,
        alt: "Asian It Inc Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Asian It Inc - Web and Mobile Solutions",
    description: "Custom web and mobile app solutions tailored for businesses.",
    image: "https://www.asianitinc.com/images/twitter",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-[#fff]`}>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
