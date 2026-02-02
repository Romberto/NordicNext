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
      <!-- Yandex.Metrika counter -->
      <script type="text/javascript">
        (function(m,e,t,r,i,k,a){
          m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments) };
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
        k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=106587428', 'ym');

        ym(106587428, 'init', {ssr:true, webvisor:true, clickmap:true, ecommerce:"dataLayer", referrer: document.referrer, url: location.href, accurateTrackBounce:true, trackLinks:true});
      </script>
      <noscript><div><img src="https://mc.yandex.ru/watch/106587428" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
      <!-- /Yandex.Metrika counter -->
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
