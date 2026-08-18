export interface FaqJsonLdItem {
  question: string;
  answer: string;
}

interface FaqJsonLdProps {
  faqs: FaqJsonLdItem[];
}

/**
 * Renders FAQPage structured data for a set of FAQs that are already visible
 * on the page. Only pass FAQs whose question/answer text is actually rendered
 * nearby — schema that doesn't match visible content violates Google's
 * structured data guidelines.
 */
export function FaqJsonLd({ faqs }: FaqJsonLdProps) {
  if (!faqs.length) return null;

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}
