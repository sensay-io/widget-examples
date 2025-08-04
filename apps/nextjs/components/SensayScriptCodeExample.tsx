import CodeExample from "./CodeExample";

export default function SensayScriptCodeExample() {
  return (
    <CodeExample filePath="components/SensayScript.tsx">
      {`"use client";

import Script from "next/script";
import { useEffect, useId } from "react";

export default function SensayScript({ src }: { src: string }) {
  // Generate a unique ID for script so NextJS can run it on client side navigation.
  // NextJS Script component by default runs script only once based on the src value.
  const id = useId();
  const url = new URL(src);
  url.searchParams.set("id", id);

  // Destroy the chatbot when the component unmounts.
  // Destroy chatbot elements as NextJS doesn't clean up the Script component on client side navigation.
  useEffect(() => {
    return () => {
      window.SensayChatbot?.destroy();
    };
  }, []);

  return <Script src={url.toString()} strategy="afterInteractive" />;
}
`}
    </CodeExample>
  );
}
