import Script from "next/script";
import Section from "../../components/Section";
import CodeExample from "../../components/CodeExample";

export default function ProductsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col gap-6 py-8 divide-y divide-gray-200">
      <div className="min-h-[85vh]">{children}</div>
      <Section
        title="Layout example"
        description="Add the widget script to your layout for multiple pages."
      >
        <CodeExample filePath="app/products/layout.tsx">{`import Script from "next/script";

export default function ProductsLayout({ children }) {
  return (
    <div>
        {children}
        <Script src="https://chat-widget.sensay.io/<chatbot-identifier>/embed-script.js" strategy="afterInteractive"/>
    </div>
  );
}
`}</CodeExample>
      </Section>

      <Script
        src="https://chat-widget.sensay.io/69c8b146-9542-4596-a632-a1ce41d5407e/embed-script.js"
        strategy="afterInteractive"
      />
    </div>
  );
}
