"use client";

import Image from "next/image";
import { useState } from "react";

const counterUrl =
  "https://hits.sh/tilemachoscfu.github.io.svg?style=flat-square&label=HITS&color=173d08&labelColor=020402";

export function VisitorCounter() {
  const [failed, setFailed] = useState(false);

  return (
    <span className="visitor-counter">
      <i aria-hidden="true" />
      <span>SYSTEM CONNECTIONS /</span>
      <span className="visitor-counter-value" aria-live="polite">
        <span>{failed ? "OFFLINE" : "------"}</span>
        {!failed ? (
          <Image
            src={counterUrl}
            alt=""
            width={74}
            height={20}
            unoptimized
            onError={() => setFailed(true)}
          />
        ) : null}
      </span>
    </span>
  );
}
