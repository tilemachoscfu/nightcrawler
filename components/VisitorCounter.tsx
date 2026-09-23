import Image from "next/image";

const counterUrl =
  "https://hits.sh/tilemachoscfu.github.io.svg?style=flat-square&label=CONNECTIONS&color=173d08&labelColor=020402";

export function VisitorCounter() {
  return (
    <span className="visitor-counter">
      <i aria-hidden="true" />
      <span className="sr-only">Total website visitors:</span>
      <Image
        src={counterUrl}
        alt="Total website visitors"
        width={112}
        height={20}
        unoptimized
      />
    </span>
  );
}
