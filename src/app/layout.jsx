import Header from "../components/header/header";
import Footer from "../components/footer/footer";
import Script from "next/script";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://www.qfarmavacinas.com.br"),
  title: {
    default: "QFarma Vacinas | Proteção, Saúde e Atendimento Domiciliar em Curitiba",
    template: "%s | QFarma Vacinas Curitiba",
  },
  description:
    "Vacinas em Curitiba para toda a família. Atendimento domiciliar, equipe especializada e agendamento fácil. Proteja quem você ama!",
  keywords: [
    "vacinas",
    "Curitiba",
    "saúde",
    "atendimento domiciliar",
    "imunização",
    "QFarma",
    "clínica de vacinas",
  ],
  authors: [{ name: "QFarma Vacinas" }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "QFarma Vacinas | Proteção, Saúde e Atendimento Domiciliar em Curitiba",
    description:
      "Vacinas em Curitiba para toda a família. Atendimento domiciliar, equipe especializada e agendamento fácil.",
    url: "https://www.qfarmavacinas.com.br",
    siteName: "QFarma Vacinas",
    images: [
      {
        url: "/image/logo.webp",
        width: 1200,
        height: 630,
        alt: "QFarma Vacinas",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "QFarma Vacinas | Curitiba",
    description: "Atendimento domiciliar de vacinas com equipe especializada.",
    images: ["/image/logo.webp"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  "name": "QFarma Vacinas",
  "image": "https://www.qfarmavacinas.com.br/image/logo.webp",
  "@id": "https://www.qfarmavacinas.com.br/#medicalbusiness",
  "url": "https://www.qfarmavacinas.com.br",
  "telephone": "+55-41-3030-1777",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Av. República Argentina, 1115",
    "addressLocality": "Curitiba",
    "addressRegion": "PR",
    "postalCode": "80240-210",
    "addressCountry": "BR"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": -25.4542,
    "longitude": -49.2885
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "20:00"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/qfarmavacinas",
    "https://www.facebook.com/profile.php?id=61579829288531"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        {/* Google Tag Manager (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17510751913"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17510751913');
          `}
        </Script>

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
