import "./globals.css";

import type { Metadata } from "next";
// import CookieBanner from "@/components/CookieBanner";
// import { Open_Sans, Poppins } from "next/font/google";
// import { Toaster } from "@/components/ui/toaster";

// const poppins = Poppins({
//   subsets: ["latin"],
//   display: "swap",
//   weight: ["300", "400", "500", "600", "700"],
// });

// const inter = Open_Sans({ subsets: ["latin"] });

import { cn } from "@/lib/utils";
import ToastContainer from "@/components/ui/ToastContainer";

export const metadata: Metadata = {
  title: {
    default: "GIAGENCY - Creative Digital Solutions",
    template: "%s | GIAgency",
  },
  description:
    "Professional web development, graphic design, video editing, content creation, sales copywriting, and social media management services. Transform your digital presence with our expert team.",
  keywords: [
    "web development",
    "graphic design",
    "video editing",
    "content creation",
    "sales copywriting",
    "social media management",
    "digital agency",
    "creative services",
  ],
  authors: [{ name: "GIAgency" }],
  creator: "GIAgency",
  publisher: "GIAgency",
  metadataBase: new URL("https://giagency.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://giagency.com",
    siteName: "GIAgency",
    title: "GIAgency - Creative Digital Solutions",
    description:
      "Professional web development, graphic design, video editing, and digital marketing services.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* <body className={cn(inter.className, "")}> */}
      <body className="">
        {/* <Toaster /> */}
        {children}
        {/* <CookieBanner /> */}
        <ToastContainer />
      </body>
    </html>
  );
}
