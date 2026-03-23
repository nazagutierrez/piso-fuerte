import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  type?: string;
  path: string;
}

export const SEO = ({
  title,
  description,
  type = "website",
  path,
}: SEOProps) => {
  const siteUrl = "https://pisofuerte.com.ar";
  const fullTitle = `${title} | Piso Fuerte Junín`;

    const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ConstructionBusiness",
    "name": "Piso Fuerte",
    "image": "https://pisofuerte.com.ar/logo.png",
    "@id": "https://pisofuerte.com.ar",
    "url": "https://pisofuerte.com.ar",
    "telephone": "+542364525588",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Cabrera 358",
        "addressLocality": "Junín",
        "addressRegion": "Buenos Aires",
        "postalCode": "6000",
        "addressCountry": "AR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -34.58543491173498,
        "longitude": -60.94594446051777
    },
    "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:00",
        "closes": "08:00"
    },
    "sameAs": [
        "https://www.instagram.com/constructorapisofuerte",
        "https://wa.me/542364525588"
    ]
    };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(localBusinessSchema)}
      </script>
      {/* Standard Metadata */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={`${siteUrl}${path}`} />
      <meta
        property="og:image"
        content={`${siteUrl}/piso-fuerte-redes.jpg`}
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  );
};
