import CodeExample from "./CodeExample";
import SensayScriptCodeExample from "./SensayScriptCodeExample";

export default function LayoutExample() {
  return (
    <>
      <SensayScriptCodeExample />
      <CodeExample filePath="app/products/layout.tsx">{`import SensayScript from "@/components/SensayScript";

export default function ProductsLayout({ children }) {
  return (
    <div>
      {children}
      <SensayScript src="https://chat-widget.sensay.io/<chatbot-identifier>/embed-script.js" />
    </div>
  )
}`}</CodeExample>
    </>
  );
}
