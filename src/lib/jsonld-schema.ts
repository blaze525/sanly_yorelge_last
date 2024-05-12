import type { FAQType } from '../components/FAQs/FAQs.astro';

type ArticleSchemaProps = {
  url: string;
  headline: string;
  description: string;
  imageUrl: string;
  datePublished: string;
  dateModified: string;
};

export function generateArticleSchema(article: ArticleSchemaProps) {
  const { url, headline, description, imageUrl, datePublished, dateModified } =
    article;

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': url,
    },
    headline: headline,
    description: description,
    image: imageUrl,
    author: {
      '@type': 'Person',
      name: 'B.B',
      url: 'https://github.com/blaze525/sanly_yorelge_last',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sanly Ýörelge',
      logo: {
        '@type': 'ImageObject',
        url: 'http://localhost:3000/public/images/Logo.png',
      },
    },
    datePublished: datePublished,
    dateModified: dateModified,
  };
}

export function generateFAQSchema(faqs: FAQType[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer.join(' '),
      },
    })),
  };
}
