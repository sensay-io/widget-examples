import { PropsWithChildren } from "react";

export default function Section({
  title,
  description,
  children,
  className,
}: PropsWithChildren<{
  title: string;
  description?: string;
  className?: string;
}>) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <h1 className="text-xl font-bold">{title}</h1>
      {description && <p className="text-lg">{description}</p>}
      {children}
    </div>
  );
}
