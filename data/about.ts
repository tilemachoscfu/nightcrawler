export interface AboutCredential {
  title: string;
  issuer: string;
  type: "course" | "participation";
  issued?: string;
  skills?: readonly string[];
}

export const aboutSummary =
  "Developer and maker focused on backend engineering, network infrastructure, self-hosted systems and practical hardware projects.";

export const education = {
  degree: "BACHELOR IN COMPUTER SCIENCE",
  university: "Empire State University",
  college: "New York College, Greece",
} as const;

export const credentials: readonly AboutCredential[] = [
  {
    title: "PYTHON FOR DATA VISUALIZATION",
    issuer: "LinkedIn Learning",
    type: "course",
    issued: "JUL 2023",
    skills: ["Python", "Data Visualization"],
  },
  {
    title: "PYTHON QUICK START",
    issuer: "LinkedIn Learning",
    type: "course",
    issued: "JUL 2023",
    skills: ["Python"],
  },
  {
    title: "ADVANCED CSS CONCEPTS",
    issuer: "edX",
    type: "course",
    skills: ["CSS"],
  },
  {
    title: "29TH GREEK ECONOMY CONFERENCE — GREEK FACING THE FUTURE",
    issuer: "American-Hellenic Chamber of Commerce",
    type: "participation",
  },
  {
    title: "YOUTH TALKS — WE LISTEN | DATA ANALYTICS",
    issuer: "American-Hellenic Chamber of Commerce",
    type: "participation",
    skills: ["Data Analytics"],
  },
] as const;

