import type { Metadata } from "next";
import { Inter, PT_Sans } from "next/font/google";
import "./globals.css";
import {
  MobileApplication,
  WithContext,
} from "schema-dts";

const inter = Inter({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Pixelix - A Pixelfed Client",
  description: "Homepage of the Pixelfed client Pixelix",
  alternates: {
    canonical: "https://app.pixelix.social",
  },
};

const jsonLd: WithContext<MobileApplication> = {
  "@context": "https://schema.org",
  "@type": "MobileApplication",
  name: "Pixelix",
  offers: {
    "@type": "Offer",
    price: 2.0,
    priceCurrency: "EUR",
  },
  image: [
    "https://github.com/daniebeler/pixelix/blob/59fa74d084bb78aea16d5a7ef5321b10bd8ff352/github-image.png"
  ],
  applicationCategory: ["social media", ""],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingCount: 70,
    ratingValue: 4.5,
    bestRating: 5,
    itemReviewed: "Pixelix"
  },
  operatingSystem: "Android",
  installUrl: "https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix",
  url: "https://app.pixelix.social",
  author: [
    {
      "@type": "Person",
      name: "Daniel Hiebeler"
    },
    {
      "@type": "Person",
      name: "Emanuel Hiebeler"
    },
  ],
  sameAs: [
    "https://github.com/daniebeler/pixelix",
    "https://mastodon.social/@Pixelix",
    "https://f-droid.org/de/packages/com.daniebeler.pfpixelix/",
    "https://apt.izzysoft.de/fdroid/index/apk/com.daniebeler.pfpixelix"
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
