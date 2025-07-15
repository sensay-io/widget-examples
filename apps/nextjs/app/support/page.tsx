import Image from "next/image";
import Section from "../../components/Section";
import Card from "../../components/Card";
import { getImage } from "../products/data";
import { Article, ARTICLES, Faq, FAQS } from "./data";
import Script from "next/script";
import CodeExample from "../../components/CodeExample";

const CategoryBadge = ({ category }: { category: string }) => (
  <span className="text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
    {category}
  </span>
);

const ArticleCard = ({
  article,
  index,
}: {
  article: Article;
  index: number;
}) => (
  <div className="flex gap-2 bg-white overflow-hidden rounded border border-gray-200 hover:shadow-md transition-shadow">
    <div className="min-w-32 flex-0 h-full bg-gray-200 flex items-center justify-center relative">
      <Image
        src={getImage(index)}
        alt={article.title}
        fill
        className="object-cover"
      />
    </div>
    <div className="flex flex-col gap-6 p-4">
      <div className="flex flex-col gap-2">
        <h3 className="font-semibold">{article.title}</h3>
        <p className="text-sm line-clamp-2">{article.description}</p>
      </div>
      <div className="flex items-center justify-end">
        <CategoryBadge category={article.category} />
      </div>
    </div>
  </div>
);

const FaqCard = ({ faq }: { faq: Faq }) => (
  <Card id={`faq-${faq.question}`} title={faq.question} className="p-4!">
    <div className="flex flex-col gap-2">
      <p className="text-sm line-clamp-3">{faq.answer}</p>
      <div className="flex items-center justify-end">
        <CategoryBadge category={faq.category} />
      </div>
    </div>
  </Card>
);

export default function CustomerServicePage() {
  return (
    <>
      <Script
        src="https://chat-widget.sensay.io/373a2499-c31b-42e4-a7a7-47feada5c7fa/embed-script.js"
        strategy="afterInteractive"
      />
      <div className="flex flex-col gap-20 py-8">
        <Section
          title="Customer Support Center"
          description="We're here to help! Get in touch with our customer service team for any questions, concerns, or assistance you need."
        />

        <Card
          id="contact-form"
          title="Send us a Message"
          description="We'll get back to you as soon as possible"
          className="lg:w-lg w-full mx-auto"
        >
          <form className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="block text-xs">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="text-sm w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Enter your email address"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="block text-xs">
                Message
              </label>
              <textarea
                id="message"
                rows={2}
                className="text-sm w-full p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Please describe your issue or question in detail..."
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                disabled
                className="text-sm bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </div>
          </form>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Section title="Support articles and guides" className="gap-4">
            {ARTICLES.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </Section>

          <Section title="Frequently Asked Questions" className="gap-4">
            {FAQS.map((faq, index) => (
              <FaqCard key={index} faq={faq} />
            ))}
          </Section>
        </div>
        <Section
          title="Page example"
          description="Add the widget script to a specific page component for page-specific functionality."
          className="border-t border-gray-200 pt-10"
        >
          <CodeExample filePath="app/support/page.tsx">{`import Script from 'next/script'

export default function SupportPage() {
  return (
    <div>
      <h1>Support Page</h1>
      <Script
          src="https://chat-widget.sensay.io/<chatbot-identifier>/embed-script.js"
          strategy="afterInteractive"
        />
    </div>
  )
}`}</CodeExample>
        </Section>
      </div>
    </>
  );
}
