import Image from "next/image";

const counterUrl =
  "https://hits.sh/tilemachoscfu.github.io.svg?style=flat-square&label=&color=173d08&labelColor=020402";

export function VisitorCounter() {
  return (
    <span className="visitor-counter">
      <i aria-hidden="true" />
      <span>SYSTEM CONNECTIONS /</span>
      <span className="visitor-counter-value">
        <span aria-hidden="true">------</span>
        <Image
          src={counterUrl}
          alt=""
          width={52}
          height={20}
          unoptimized
        />
      </span>
    </span>
  );
}
