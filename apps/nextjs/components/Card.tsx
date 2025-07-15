import { PropsWithChildren } from "react";

export default function Card({
  id,
  title,
  description,
  children,
  className,
}: PropsWithChildren<{
  id?: string;
  title: string;
  description?: string;
  className?: string;
}>) {
  return (
    <div
      id={id}
      className={`bg-white border border-gray-200 shadow rounded-lg flex flex-col gap-4 p-6 ${className}`}
    >
      <div className="flex flex-col gap-1">
        <h2 className="font-semibold">{title}</h2>
        {description && <p className="text-sm">{description}</p>}
      </div>
      {children}
    </div>
  );
}
