import type { Metadata, Viewport } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { professional } from "@/content/site-data";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
});

const siteUrl = "https://www.drjosecarlosfontenele.com.br"; // TODO: atualizar para o domínio real

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${professional.name} | ${professional.role} em ${professional.location.neighborhoodCity}`,
    template: `%s | ${professional.name}`,
  },
  description: professional.shortBio,
  keywords: [
    "tricologista",
    "biomédico tricologista",
    "queda de cabelo",
    "tratamento capilar",
    "alopecia",
    "mesoterapia capilar",
    "tricoscopia",
    professional.location.neighborhoodCity,
  ],
  authors: [{ name: professional.name }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: professional.name,
    title: `${professional.name} | ${professional.role}`,
    description: professional.shortBio,
    images: [{ url: "/images/hero-portrait.svg", width: 900, height: 1125 }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${professional.name} | ${professional.role}`,
    description: professional.shortBio,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0a0c0d",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: professional.location.clinicName,
  description: professional.shortBio,
  image: `${siteUrl}/images/hero-portrait.svg`,
  url: siteUrl,
  telephone: professional.phoneDisplay,
  email: professional.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: professional.location.addressLine,
    addressLocality: professional.location.neighborhoodCity,
    postalCode: professional.location.cep,
    addressCountry: "BR",
  },
  medicalSpecialty: "Tricologia",
  physician: {
    "@type": "Physician",
    name: professional.name,
    jobTitle: professional.role,
  },
  sameAs: [professional.instagramUrl],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${manrope.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
