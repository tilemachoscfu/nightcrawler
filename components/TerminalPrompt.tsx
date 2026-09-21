import { TerminalCursor } from "./TerminalCursor";

type TerminalPromptProps = {
  path?: string;
  command?: string;
  cursor?: boolean;
  typing?: boolean;
};

export function TerminalPrompt({ path = "~", command, cursor = false, typing = false }: TerminalPromptProps) {
  return (
    <p className="terminal-prompt" aria-label={`nightcrawler at ${path}${command ? `, command ${command}` : ""}`}>
      <span className="prompt-user">nightcrawler@home</span>
      <span>:{path}$</span>
      {command ? (
        <span className={typing ? "typed-command" : "ml-[0.65rem] text-[var(--foreground)]"} aria-hidden="true">
          {command}
        </span>
      ) : null}
      {cursor ? <TerminalCursor /> : null}
    </p>
  );
}
