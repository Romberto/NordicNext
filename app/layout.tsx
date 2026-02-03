import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Nordic SIP — дома из SIP-панелей",
    template: "%s | Nordic SIP",
  },
  keywords:[  "строительство домов из SIP панелей",
    "дома из SIP панелей под ключ",
    "SIP дома под ключ",
    "проекты домов из SIP панелей",
    "проекты SIP домов",
    "строительство SIP домов",
    "быстровозводимые дома SIP",
    "энергоэффективные SIP дома",
    "каркасно SIP дома",
    "современные дома из SIP панелей",
    "загородные дома из SIP панелей",
    "строительство частных домов SIP",
    "стоимость дома из SIP панелей",
    "цена строительства SIP дома",
  
    "дома из SIP панелей Саратов",
    "строительство SIP домов Саратов",
    "SIP дома под ключ Саратов",
  
    "дома из SIP панелей Краснодар",
    "строительство SIP домов Краснодар",
    "SIP дома под ключ Краснодар",
  
    "дома из SIP панелей Самара",
    "строительство SIP домов Самара",
    "SIP дома под ключ Самара",
  
    "технология строительства SIP домов",
    "преимущества SIP домов",
    "срок строительства SIP дома"],
  description:
    "Проектирование и строительство современных домов из SIP-панелей. Nordic SIP — энергоэффективные дома под ключ.",
  metadataBase: new URL("https://nordicsip.ru"),
  openGraph: {
    title: "Nordic SIP",
    description:
      "Современные дома из SIP-панелей. Проектирование и строительство.",
    url: "https://nordicsip.ru",
    siteName: "Nordic SIP",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Nordic SIP — дома из SIP-панелей",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    images: ["/og.jpg"],
  },
};

const navItems = [
  { label: "Главная", path: "/" },
  { label: "Проекты", path: "/catalog" },
  { label: "Блог", path: "/blog" },
  { label: "Контакты", path: "/contacts" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header navItems={navItems} />
        {children}
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
