export interface HardeningModule {
  name: string;
  scope: string;
  description: string;
}

export interface HardeningCheck {
  command: string;
  purpose: string;
}

export const hardeningOverview =
  "A rollback-first Linux and Docker hardening toolkit for applying network, DNS and SSH controls without turning remote administration into a one-way operation.";

export const hardeningWorkflow = [
  "capture baseline",
  "arm timed rollback",
  "apply controls",
  "validate services",
  "accept or restore",
] as const;

export const hardeningModules: readonly HardeningModule[] = [
  {
    name: "FIREWALL BASELINE",
    scope: "UFW / IPv4 / IPv6",
    description: "Default-deny host policy with explicit trusted-network and private-overlay access.",
  },
  {
    name: "DOCKER BOUNDARY",
    scope: "DOCKER-USER",
    description: "Persistent filtering for published container ports, including rate-limited drop logging.",
  },
  {
    name: "SSH HARDENING",
    scope: "OPENSSH",
    description: "Key-based administration, disabled password prompts and configuration validation before reload.",
  },
  {
    name: "DNS PROFILE",
    scope: "ADGUARD HOME",
    description: "Encrypted upstream DNS, DNSSEC, controlled bootstrap resolvers and validated configuration updates.",
  },
  {
    name: "SYSTEM INVENTORY",
    scope: "DOCKER / HOST",
    description: "Reports network modes, privileges, capabilities, port bindings, mounts and restart policies.",
  },
  {
    name: "EXPOSURE CHECK",
    scope: "TCP",
    description: "Concurrent TCP verification used to compare reachable services before and after policy changes.",
  },
] as const;

export const hardeningChecks: readonly HardeningCheck[] = [
  { command: "sshd -t", purpose: "validate SSH configuration" },
  { command: "netplan generate", purpose: "validate network configuration" },
  { command: "resolvectl status", purpose: "confirm the active resolver path" },
  { command: "dig", purpose: "confirm DNS service after restart" },
  { command: "iptables -S", purpose: "inspect the effective Docker boundary" },
  { command: "tcp_scan.py", purpose: "compare reachable TCP services" },
] as const;

export const rollbackControls = [
  "Host firewall and Docker rules are captured before changes",
  "Firewall, DNS and SSH operations arm a short systemd rollback window",
  "AdGuard configuration is restored automatically when validation fails",
  "SSH is reloaded only after its effective configuration passes validation",
  "Rollback scripts remain separate from the apply path for recovery",
] as const;

export const hardeningStack = [
  "Shell",
  "Python",
  "UFW",
  "iptables",
  "ip6tables",
  "systemd",
  "OpenSSH",
  "Netplan",
  "AdGuard Home",
  "Docker",
] as const;
