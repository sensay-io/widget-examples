import Section from "@/components/Section";
import LayoutCodeExample from "@/components/LayoutCodeExample";
import SensayScript from "@/components/SensayScript";

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
        <LayoutCodeExample />
      </Section>

      <SensayScript src="https://chat-widget.sensay.io/69c8b146-9542-4596-a632-a1ce41d5407e/embed-script.js" />
    </div>
  );
}
