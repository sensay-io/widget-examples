import Link from "next/link";
import { PropsWithChildren } from "react";

export function LinkButton({ children, href, className }: PropsWithChildren<{ href: string, className?: string }>) {
  return <Link
  href={href}
  className={`text-sm border border-gray-200 px-3 py-2 rounded-md text-center hover:bg-gray-100 transition-colors duration-200 ${className}`}
>
    {children}
</Link>
}