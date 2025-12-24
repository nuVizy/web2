type JsonLdOrganizationProps = {
  name: string;
  url: string;
  description: string;
  location: string; // keep your current prop (we’ll use it as “based in”)
  logoUrl?: string;
  sameAs?: string[];

  // New SEO-rich props (optional)
  foundedIn?: string; // "United Kingdom"
  basedIn?: string; // "Paphos, Cyprus"
  areaServed?: string[]; // ["Cyprus", "United Kingdom", "Europe"]
  services?: string[]; // keywords
};

export default function JsonLdOrganization(props: JsonLdOrganizationProps) {
  const {
    name,
    url,
    description,
    location,
    logoUrl,
    sameAs,
    foundedIn,
    basedIn,
    areaServed,
    services,
  } = props;

  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${url}#org`,
    name,
    url,
    description,
    ...(logoUrl ? { logo: logoUrl } : {}),
    ...(sameAs?.length ? { sameAs } : {}),
    // Signals: UK origin + Cyprus base
    ...(foundedIn ? { foundingLocation: foundedIn } : {}),
    ...(basedIn || location
      ? {
          location: {
            "@type": "Place",
            name: basedIn || location,
          },
        }
      : {}),
    ...(areaServed?.length ? { areaServed } : {}),
    ...(services?.length ? { knowsAbout: services } : {}),
  };

  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
