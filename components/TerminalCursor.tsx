type TerminalCursorProps = { label?: string };

export function TerminalCursor({ label = "Terminal ready" }: TerminalCursorProps) {
  return <span className="terminal-cursor" role="status" aria-label={label} />;
}
