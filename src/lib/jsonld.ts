export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Cocor Tech",
    alternateName: "Cocor Tech — Build. Acquire. Scale.",
    url: "https://cocor.tech",
    logo: "https://cocor.tech/og-image.jpg",
    sameAs: [
      "https://x.com/cocortech",
      "https://github.com/cocor-tech",
    ],
    description: "An operating company that builds, acquires, and scales digital assets for profit.",
  }
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Cocor Tech",
    url: "https://cocor.tech",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://cocor.tech/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `https://cocor.tech${item.url}`,
    })),
  }
}

export function articleSchema({
  title,
  description,
  url,
  image,
  publishedTime,
  author,
  category,
}: {
  title: string
  description: string
  url: string
  image?: string
  publishedTime: string
  author: string
  category?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: `https://cocor.tech${url}`,
    image: image || "https://cocor.tech/og-image.jpg",
    datePublished: publishedTime,
    author: {
      "@type": "Person",
      name: author,
    },
    publisher: {
      "@type": "Organization",
      name: "Cocor Tech",
      logo: {
        "@type": "ImageObject",
        url: "https://cocor.tech/og-image.jpg",
      },
    },
    ...(category ? { articleSection: category } : {}),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://cocor.tech${url}`,
    },
  }
}

export function serviceSchema({
  name,
  description,
  url,
}: {
  name: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://cocor.tech${url}`,
    provider: {
      "@type": "Organization",
      name: "Cocor Tech",
    },
  }
}
