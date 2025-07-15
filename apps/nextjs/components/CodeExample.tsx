import { PropsWithChildren } from "react";

export default function CodeExample({ filePath, children }: PropsWithChildren<{ filePath: string }>) {
    return (
      <div className="border border-gray-200 bg-gray-50 rounded-md divide-y divide-gray-200">
          <div className="flex items-center gap-2 text-xs font-mono p-4">
            <span>File:</span><code className="border border-gray-200 px-2 py-1 rounded">{filePath}</code>
          </div>
          <pre className="p-4 text-xs text-gray-800 overflow-x-auto">
            {children}
          </pre>
        </div>
    );
  }