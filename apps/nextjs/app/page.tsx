import Link from "next/link";
import Card from "../components/Card";
import CodeExample from "../components/CodeExample";
import Section from "../components/Section";

export default function Home() {
  return (
    <div className="flex flex-col gap-6 py-8">
      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Section
          title="AI chatbot integration with Next.js"
          description="Three ways to add external widget scripts to your Next.js application using the Script component."
        >
          <ul className="flex flex-col gap-0 list-disc list-inside">
            <li>
              <Link className="underline" href="#root-layout-example">
                Root Layout
              </Link>
            </li>
            <li>
              <Link className="underline" href="#layout-example">
                Layout
              </Link>
            </li>
            <li>
              <Link className="underline" href="#page-example">
                Page
              </Link>
            </li>
          </ul>
        </Section>

        <div>
          <Card
            id="examples"
            title="See examples in action"
            description="Visit example pages with integrated chatbot"
            className="shadow-none"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Link
                href="/products"
                className="text-sm border border-gray-200 px-3 py-2 rounded-md text-center hover:bg-gray-100 transition-colors duration-200"
              >
                Layout example
              </Link>
              <Link
                href="/support"
                className="text-sm border border-gray-200 px-3 py-2 rounded-md text-center hover:bg-gray-100 transition-colors duration-200"
              >
                Page example
              </Link>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <Card
          id="root-layout-example"
          title="Add to root layout"
          description="Add the widget script to your root layout for global availability across all pages."
        >
          <CodeExample filePath="app/layout.tsx">{`import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {children}
        <Script
          src="https://chat-widget.sensay.io/<chatbot-identifier>/embed-script.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}`}</CodeExample>
        </Card>

        <Card
          id="layout-example"
          title="Add to Layout (Part of App)"
          description="Add the widget script to a specific layout for part of your application."
        >
          <CodeExample filePath="app/products/layout.tsx">{`import Script from 'next/script'

export default function ProductsLayout({ children }) {
  return (
    <div>
      {children}
      <Script
          src="https://chat-widget.sensay.io/<chatbot-identifier>/embed-script.js"
          strategy="afterInteractive"
        />
    </div>
  )
}`}</CodeExample>
        </Card>

        <Card
          id="page-example"
          title="Add to Page (Page-specific)"
          description="Add the widget script to a specific page component for page-specific functionality."
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
        </Card>
      </div>
    </div>
  );
}
