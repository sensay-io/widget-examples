import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function CodeExample({
  filePath,
  children,
}: {
  filePath: string;
  children: string;
}) {
  return (
    <div className="border border-gray-200 bg-gray-50 rounded-md divide-y divide-gray-200">
      <div className="flex items-center gap-2 text-xs font-mono p-4">
        <span>File:</span>
        <code className="border border-gray-200 px-2 py-1 rounded">
          {filePath}
        </code>
      </div>
      <pre className="text-xs">
        <SyntaxHighlighter
          language="typescript"
          style={oneLight}
          customStyle={{
            padding: "1rem",
            margin: 0,
          }}
        >
          {children}
        </SyntaxHighlighter>
      </pre>
    </div>
  );
}
