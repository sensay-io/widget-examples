export default function ImageCredits({ className }: { className?: string }) {
  return (
    <span className={`flex gap-1 text-xs text-gray-500 ${className}`}>
      Photos by{" "}
      <a
        className="underline"
        href="https://unsplash.com/@marekpiwnicki?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      >
        Marek Piwnicki
      </a>
      on
      <a
        className="underline"
        href="https://unsplash.com/photos/a-purple-flower-with-a-purple-background-0HGGZThXGp8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
      >
        Unsplash
      </a>
    </span>
  );
}
