import { Inter } from "next/font/google";
import "./globals.css";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Providers from "@/lib/Providers/Providers";

const inter = Inter({ subsets: ["latin"] });

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
  description:
    "Asian It Inc provides custom web and mobile app solutions for businesses.",
  openGraph: {
    type: "website",
    url: "https://www.asianitinc.com",
    title: "Asian It Inc - Web and Mobile Solutions",
    description: "Custom Web and mobile app solutions tailored for businesses.",
    images: [
      {
        url: "https://www.asianitinc.com/images/1",
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
      <body className={`${inter.className} bg-[#fff]`}>
        <Providers>
          {children}
          <ToastContainer />
        </Providers>
        <div id="modal-root-content" />
      </body>
    </html>
  );
}
