export interface PrivacyCapability {
  command: string;
  name: string;
  description: string;
}

export const privacyOverview =
  "A local-first toolkit for auditing a personal digital footprint. It checks public exposure, inspects files and produces private reports without uploading the collected data to a cloud service.";

export const privacyCapabilities: readonly PrivacyCapability[] = [
  { command: "username", name: "USERNAME AUDIT", description: "Heuristic public-profile discovery with manual ownership verification." },
  { command: "email", name: "EMAIL EXPOSURE", description: "Public exposure checks with optional, user-supplied breach lookup access." },
  { command: "github", name: "GITHUB AUDIT", description: "Read-only review of the authenticated account and public repository footprint." },
  { command: "metadata", name: "METADATA INSPECTION", description: "Local inspection of image, document, video and PDF metadata." },
  { command: "metadata-sanitize", name: "SANITIZED COPIES", description: "Creates cleaned copies while leaving every original file untouched." },
  { command: "email-export", name: "LOCAL MAIL ANALYSIS", description: "Processes local MBOX and EML exports without sending messages." },
] as const;

export const privacyFlow = [
  "identifiers / local exports",
  "passive audit engine",
  "local JSON + CSV results",
  "token-protected dashboard",
  "manual review",
] as const;

export const privacyGuarantees = [
  "No login attempts against discovered accounts",
  "No breach databases, credential dumps or cloud uploads",
  "Original media and documents remain read-only",
  "Sanitization always writes a separate copy",
  "Optional API credentials are process-only and never stored",
  "Identity configuration and dashboard tokens use restricted local permissions",
] as const;

export const supportedFormats = ["JPG", "PNG", "PDF", "DOCX", "MP4", "MBOX", "EML"] as const;

export const privacyStack = ["Python", "Sherlock", "Maigret", "ExifTool", "qpdf", "GitHub CLI", "systemd"] as const;
