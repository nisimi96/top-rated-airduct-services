export const getLocalBusinessSchema = (baseUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': baseUrl,
  name: 'Top Rated Air Duct Cleaning',
  description: "Atlanta's top-rated air duct cleaning service. Professional HVAC cleaning, dryer vent cleaning, and related services.",
  image: `${baseUrl}/images/top-airduct-logo.png`,
  url: baseUrl,
  telephone: '770-741-0615',
  email: 'info@topratedairduct.com',
  priceRange: '$$',
  areaServed: {
    '@type': 'City',
    name: 'Atlanta'
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Business Park Drive',
    addressLocality: 'Atlanta',
    addressRegion: 'GA',
    postalCode: '30303',
    addressCountry: 'US'
  },
  sameAs: [
    'https://www.facebook.com/topratedairduct',
    'https://www.google.com/maps'
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150'
  }
});

export const getOrganizationSchema = (baseUrl: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Top Rated Air Duct Cleaning',
  url: baseUrl,
  logo: `${baseUrl}/images/top-airduct-logo.png`,
  description: "Atlanta's top-rated air duct cleaning service",
  telephone: '770-741-0615',
  email: 'info@topratedairduct.com'
});

export const getServiceSchema = (
  serviceName: string,
  description: string,
  baseUrl: string,
  serviceUrl: string
) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: serviceName,
  description: description,
  provider: {
    '@type': 'LocalBusiness',
    name: 'Top Rated Air Duct Cleaning',
    url: baseUrl
  },
  url: `${baseUrl}${serviceUrl}`,
  areaServed: {
    '@type': 'City',
    name: 'Atlanta, Georgia'
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    ratingCount: '150'
  }
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url
  }))
});

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});
