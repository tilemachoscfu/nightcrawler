import type { Metadata } from "next";
import { SectionShell } from "@/components/SectionShell";
import { SocialLinks } from "@/components/SocialLinks";
import { aboutSummary, credentials, education } from "@/data/about";

export const metadata: Metadata = {
  title: "about",
  description: "NIGHTCRAWLER — background, education and selected certifications.",
};

export default function AboutPage() {
  return (
    <SectionShell path="about">
      <article className="about-profile">
        <header className="about-intro" aria-labelledby="about-title">
          <p className="about-kicker"><i /> 05 / PROFILE</p>
          <h1 id="about-title">NIGHTCRAWLER</h1>
          <p>{aboutSummary}</p>
          <dl className="about-readout">
            <div><dt>ROLE</dt><dd>developer / maker</dd></div>
            <div><dt>LOCATION</dt><dd>Athens, GR</dd></div>
            <div><dt>FOCUS</dt><dd>software / infrastructure / hardware</dd></div>
          </dl>
        </header>

        <section className="about-section" aria-labelledby="education-title">
          <div className="about-section-heading">
            <h2 id="education-title">EDUCATION</h2>
            <span>academic background</span>
          </div>
          <div className="education-entry">
            <span>01</span>
            <div>
              <h3>{education.degree}</h3>
              <p>{education.university}</p>
              <p>{education.college}</p>
            </div>
            <code>COMPUTER SCIENCE</code>
          </div>
        </section>

        <section className="about-section" aria-labelledby="credentials-title">
          <div className="about-section-heading">
            <h2 id="credentials-title">LEARNING / PARTICIPATION</h2>
            <span>{String(credentials.length).padStart(2, "0")} entries</span>
          </div>
          <ol className="credential-list">
            {credentials.map((credential, index) => (
              <li key={credential.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{credential.title}</h3>
                  <p>{credential.issuer}</p>
                  {credential.skills ? <small>{credential.skills.join(" / ")}</small> : null}
                </div>
                <div className="credential-meta">
                  <span>{credential.type}</span>
                  {credential.issued ? <time>{credential.issued}</time> : null}
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="social-section" aria-labelledby="social-title">
          <div className="directory-heading">
            <h2 id="social-title">~/connect</h2>
            <span>02 external links</span>
          </div>
          <SocialLinks />
        </section>
      </article>
    </SectionShell>
  );
}
