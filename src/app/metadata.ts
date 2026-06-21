import { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/constants";

export const generateMetadata = (): Metadata => {
  return {
    metadataBase: new URL(SITE_CONFIG.url),
    title: {
      default: `${SITE_CONFIG.name} - Full Stack Developer Portfolio`,
      template: `%s | ${SITE_CONFIG.name}`,
    },
    description: SITE_CONFIG.description,
    keywords: [
      "Dipendra Joshi",
      "Portfolio",
      "Full Stack Developer",
      "MERN Stack",
      "Graphic Era Hill University",
      "Computer Applications",
      "React",
      "Node.js",
      "MongoDB",
      "Python",
      "Machine Learning",
      "JavaScript",
      "C++",
    ],
    authors: [
      {
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
    ],
    creator: SITE_CONFIG.name,
    icons: {
      icon: '/favicon2.ico?v=2',
      shortcut: '/favicon2.ico?v=2',
      apple: '/favicon2.ico?v=2',
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: SITE_CONFIG.url,
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: SITE_CONFIG.ogImage,
          width: 1200,
          height: 630,
          alt: SITE_CONFIG.name,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: SITE_CONFIG.name,
      description: SITE_CONFIG.description,
      images: [SITE_CONFIG.ogImage],
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
    alternates: {
      canonical: SITE_CONFIG.url,
    },
    // TODO: once you set up Google Search Console / Yandex Webmaster for your
    // real domain, paste your real verification codes below. Leaving these
    // unset is safer than shipping placeholder strings as if they were real.
    // verification: {
    //   google: "your-google-verification-code",
    //   yandex: "your-yandex-verification-code",
    // },
  };
};