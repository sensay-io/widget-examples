import CodeExample from "./CodeExample";
import SensayScriptCodeExample from "./SensayScriptCodeExample";

export default function PageExample() {
  return (
    <>
      <SensayScriptCodeExample />
      <CodeExample filePath="app/support/page.tsx">{`import SensayScript from "@/components/SensayScript";

export default function SupportPage() {
  return (
    <div>
      <h1>Support Page</h1>
      <SensayScript src="https://chat-widget.sensay.io/<chatbot-identifier>/embed-script.js" />
    </div>
  )
}`}</CodeExample>
    </>
  );
}
