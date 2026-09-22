import type { Metadata } from "next";
import Image from "next/image";
import { SectionShell } from "@/components/SectionShell";
import { printProjects } from "@/data/prints";

export const metadata: Metadata = {
  title: "3d-printing",
  description: "MOD10 modular 10-inch 3D-printed homelab rack build.",
};

export default function PrintingPage() {
  const project = printProjects[0];

  return (
    <SectionShell path="3d-printing">
      <article className="print-project">
        <div className="print-project-grid">
          <figure className="print-visual">
            <Image
              src={project.imageUrls?.[0] ?? ""}
              alt="Assembled MOD10 modular 3D-printed homelab rack"
              width={1200}
              height={1600}
              sizes="(max-width: 760px) calc(100vw - 2rem), 34rem"
              unoptimized
            />
            <div className="print-visual-overlay" aria-hidden="true" />
            <span className="print-visual-label print-visual-label-top"><i /> BUILD_01 / ASSEMBLED</span>
            <span className="print-visual-label print-visual-label-bottom">MOD10 // 10-INCH SYSTEM</span>
            <figcaption>physical build / nightcrawler homelab</figcaption>
          </figure>

          <div className="print-copy">
            <p className="print-kicker">01 / COMPLETE BUILD</p>
            <h1>MOD10<br />HOMELAB RACK</h1>
            <p className="print-overview">{project.overview}</p>

            <dl className="print-specs">
              {project.specifications?.map((spec) => (
                <div key={spec.label}>
                  <dt>{spec.label}</dt>
                  <dd>{spec.value}</dd>
                </div>
              ))}
            </dl>

            <p className="print-credit">source design / {project.creator}</p>
            <a
              className="print-source-link"
              href={project.links?.[0]?.href}
              target="_blank"
              rel="noreferrer"
            >
              <span>&gt;</span> view model on printables ↗
            </a>
          </div>
        </div>

        <section className="print-features" aria-labelledby="print-features-title">
          <h2 id="print-features-title">SYSTEM NOTES</h2>
          <ul>
            {project.features?.map((feature, index) => (
              <li key={feature}><span>{String(index + 1).padStart(2, "0")}</span>{feature}</li>
            ))}
          </ul>
        </section>
      </article>
    </SectionShell>
  );
}
