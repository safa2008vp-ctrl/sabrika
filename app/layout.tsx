import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.sabrika.com"),

  title: {
    default: "SABRIKA | وكالة إبداع وتسويق رقمي",
    template: "%s | SABRIKA",
  },

  description:
    "SABRIKA وكالة متخصصة في التصميم الجرافيكي، الهوية البصرية، إدارة وسائل التواصل الاجتماعي، تطوير المواقع الإلكترونية، صناعة المحتوى والإعلانات الرقمية.",

  keywords: [
    "SABRIKA",
    "تصميم جرافيك",
    "هوية بصرية",
    "تطوير مواقع",
    "إدارة صفحات",
    "التسويق الرقمي",
    "وكالة إعلانات",
    "Social Media",
    "Branding",
    "Web Design",
  ],

  authors: [
    {
      name: "SABRIKA",
    },
  ],

  creator: "SABRIKA",

  publisher: "SABRIKA",

  openGraph: {
    title: "SABRIKA | Creative Digital Agency",
    description:
      "وكالة إبداعية متخصصة في التصميم، التسويق الرقمي، تطوير المواقع الإلكترونية، وإدارة وسائل التواصل الاجتماعي.",
    url: "https://www.sabrika.com",
    siteName: "SABRIKA",
    locale: "ar_IQ",
    type: "website",

    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "SABRIKA",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SABRIKA",
    description:
      "Creative Digital Agency",

    images: ["/og-image.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-[#050505] text-white">
        {children}
      </body>
    </html>
  );
}