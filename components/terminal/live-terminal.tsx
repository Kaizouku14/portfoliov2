"use client";

import { useCallback, useRef, useEffect, useState, useReducer } from "react";
import { m, useReducedMotion } from "motion/react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { SITE_CONFIG } from "@/constants";
import ReactMarkdown from "react-markdown";

const COMMANDS = [
  "whoami",
  "skills",
  "projects",
  "contact",
  "neofetch",
  "quote",
  "weather",
  "sudo",
  "date",
  "echo",
  "ls",
  "ask",
  "clear",
  "help",
] as const;

const QUOTES = [
  `"Any fool can write code that a computer can understand. Good programmers write code that humans can understand." — Martin Fowler`,
  `"First, solve the problem. Then, write the code." — John Johnson`,
  `"Make it work, make it right, make it fast." — Kent Beck`,
  `"Simplicity is the soul of efficiency." — Austin Freeman`,
  `"The best way to predict the future is to invent it." — Alan Kay`,
  `"Code is like humor. When you have to explain it, it's bad." — Cory House`,
];

const PORTFOLIO_FILES = ["about/", "projects/", "skills/", "contact/", "chat/"];

function evalCommand(base: string, rest: string): string | null {
  switch (base) {
    case "whoami":
      return `${SITE_CONFIG.name} — ${SITE_CONFIG.profession}, Philippines`;

    case "skills":
      return "React  ·  Next.js  ·  TypeScript  ·  Node.js  ·  PostgreSQL  ·  Redis  ·  Tailwind  ·  Docker";

    case "projects":
      return "Scroll down to the projects section \u2193";

    case "contact":
      return SITE_CONFIG.email;

    case "neofetch":
      return [
        `${SITE_CONFIG.name}@portfolio`,
        "\u2500".repeat(30),
        "OS:      Portfolio v2",
        "Host:    " + SITE_CONFIG.name,
        "Kernel:  Full-Stack TypeScript",
        "Shell:   bash 5.2",
        "Uptime:  building since 2024",
      ].join("\n");

    case "quote":
      return QUOTES[Math.floor(Math.random() * QUOTES.length)];

    case "weather":
      return [
        "Bulacan, PH",
        "\u2600\ufe0f  32\u00b0C",
        "Feels like: coding weather",
        "Humidity: 100% (tropical)",
      ].join("\n");

    case "sudo":
      return "\u26d4  Nice try. No root access on this machine.";

    case "date":
      return new Date().toLocaleString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        timeZone: "Asia/Manila",
      });

    case "echo":
      return rest || "say something...";

    case "ls":
      return PORTFOLIO_FILES.join("  ");

    case "help":
      return [
        "Available commands:",
        ...COMMANDS.reduce<string[]>((acc, c) => {
          if (c !== "help" && c !== "clear") acc.push(`  ${c}`);
          return acc;
        }, []),
      ].join("\n");

    default:
      return null;
  }
}

interface Line {
  id: number;
  text: string;
  isOutput: boolean;
}

let nextLineId = 0;
function createLine(text: string, isOutput: boolean): Line {
  return { id: nextLineId++, text, isOutput };
}

type TerminalUIState = {
  typingText: string;
  isTyping: boolean;
  isAIResponding: boolean;
  aiStreamText: string;
};

type TerminalUIAction =
  | { type: "START_TYPING" }
  | { type: "ADVANCE_TYPING"; text: string }
  | { type: "COMPLETE_TYPING" }
  | { type: "CANCEL_TYPING" }
  | { type: "START_AI" }
  | { type: "STREAM_AI"; text: string }
  | { type: "STOP_AI" };

function terminalUIReducer(
  state: TerminalUIState,
  action: TerminalUIAction,
): TerminalUIState {
  switch (action.type) {
    case "START_TYPING":
      return { ...state, isTyping: true, typingText: "" };
    case "ADVANCE_TYPING":
      return { ...state, typingText: action.text };
    case "COMPLETE_TYPING":
      return { ...state, isTyping: false, typingText: "" };
    case "CANCEL_TYPING":
      return { ...state, isTyping: false, typingText: "" };
    case "START_AI":
      return { ...state, isAIResponding: true, aiStreamText: "" };
    case "STREAM_AI":
      return { ...state, aiStreamText: action.text };
    case "STOP_AI":
      return { ...state, isAIResponding: false, aiStreamText: "" };
    default:
      return state;
  }
}

function TerminalHeader({ isAIResponding }: { isAIResponding: boolean }) {
  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-border bg-card/30 select-none">
      <span className="text-[11px] font-mono text-muted-foreground/60">
        ~/portfolio
      </span>
      <div className="flex items-center gap-2">
        {isAIResponding && (
          <span className="flex items-center gap-1.5 text-[11px] font-mono text-career-highlight/90">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-career-highlight animate-pulse" />
            thinking
          </span>
        )}
        <span className="text-[10px] font-mono text-muted-foreground/30">
          bash
        </span>
      </div>
    </div>
  );
}

function TerminalLines({
  lines,
  uiState,
  input,
  onInputChange,
  onKeyDown,
  inputRef,
  reduce,
}: {
  lines: Line[];
  uiState: TerminalUIState;
  input: string;
  onInputChange: (v: string) => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  reduce: boolean | null;
}) {
  return (
    <div className="p-4 font-mono text-[13px] leading-relaxed space-y-1">
      {lines.map((line) => (
        <m.div
          key={line.id}
          initial={reduce ? false : { opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.12, ease: [0.16, 1, 0.3, 1] }}
          className={
            line.isOutput ? "text-muted-foreground" : "text-foreground/80"
          }
          style={{ whiteSpace: "pre-wrap" }}
        >
          <ReactMarkdown
            components={{
              a: ({ children, ...props }) => (
                <a
                  {...props}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline font-bold"
                >
                  {children}
                </a>
              ),
            }}
          >
            {line.text}
          </ReactMarkdown>
        </m.div>
      ))}

      {uiState.isTyping && (
        <div className="text-muted-foreground">
          {uiState.typingText}
          <span className="inline-block w-[3px] h-[1em] bg-career-highlight/70 animate-pulse ml-px align-middle" />
        </div>
      )}

      {uiState.isAIResponding && (
        <div className="text-muted-foreground">
          {uiState.aiStreamText || (
            <span className="inline-block w-0.5 h-[1em] bg-career-highlight/70 animate-pulse" />
          )}
        </div>
      )}

      <div className="flex items-center gap-2 pt-0.5">
        <span className="text-career-highlight shrink-0">$</span>
        <input
          ref={inputRef}
          type="text"
          value={input}
          onChange={(e) => onInputChange(e.target.value)}
          onKeyDown={onKeyDown}
          className="flex-1 bg-transparent outline-none text-foreground/80 disabled:opacity-50"
          spellCheck={false}
          autoComplete="off"
          aria-label="Terminal input"
          disabled={uiState.isAIResponding}
        />
        <span className="inline-block w-0.5 h-[1em] bg-career-highlight/70 animate-pulse" />
      </div>
    </div>
  );
}

export function LiveTerminal() {
  const [input, setInput] = useState("");
  const historyRef = useRef<string[]>([]);
  const historyIdxRef = useRef(-1);

  const [lines, setLines] = useState<Line[]>([
    createLine("Welcome. Type 'help' to see available commands.", true),
  ]);
  const [uiState, dispatch] = useReducer(terminalUIReducer, {
    typingText: "",
    isTyping: false,
    isAIResponding: false,
    aiStreamText: "",
  });
  const typingTargetRef = useRef("");

  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const typingTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const runTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isAIRespondingRef = useRef(false);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (containerRef.current) {
      const viewport = containerRef.current.querySelector<HTMLElement>(
        '[data-slot="scroll-area-viewport"]',
      );
      if (viewport) {
        viewport.scrollTop = viewport.scrollHeight;
      }
    }
  }, [lines, uiState.typingText, uiState.aiStreamText, uiState.isAIResponding]);

  useEffect(() => {
    if (!uiState.isTyping || !typingTargetRef.current || reduce) {
      dispatch({ type: "CANCEL_TYPING" });
      return;
    }
    if (uiState.typingText.length >= typingTargetRef.current.length) {
      setLines((prev) => [
        ...prev,
        createLine(typingTargetRef.current, true),
      ]);
      dispatch({ type: "COMPLETE_TYPING" });
      return;
    }
    typingTimerRef.current = setTimeout(() => {
      dispatch({
        type: "ADVANCE_TYPING",
        text: typingTargetRef.current.slice(0, uiState.typingText.length + 1),
      });
    }, 18);
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [uiState.isTyping, uiState.typingText, reduce]);

  // Cleanup handled inline in run() and the typing effect's return callback

  const typeLine = useCallback(
    (text: string) => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (reduce) {
        setLines((prev) => [...prev, createLine(text, true)]);
        return;
      }
      typingTargetRef.current = text;
      dispatch({ type: "START_TYPING" });
    },
    [reduce],
  );

  const askAI = useCallback(async (question: string) => {
    const startedAt = Date.now();
    isAIRespondingRef.current = true;
    dispatch({ type: "START_AI" });

    try {
      const res = await fetch("/api/terminal-chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: question }),
      });

      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value, { stream: true });
        dispatch({ type: "STREAM_AI", text });
      }

      const elapsed = Date.now() - startedAt;
      const MIN_DISPLAY = 400;
      if (elapsed < MIN_DISPLAY) {
        await new Promise<void>((r) => setTimeout(r, MIN_DISPLAY - elapsed));
      }

      setLines((prev) => [...prev, createLine(text, true)]);
    } catch {
      setLines((prev) => [
        ...prev,
        createLine("Error: failed to get response", true),
      ]);
    } finally {
      isAIRespondingRef.current = false;
      dispatch({ type: "STOP_AI" });
    }
  }, []);

  const fetchWeather = useCallback(async () => {
    try {
      const res = await fetch("/api/weather");
      const data = await res.json();
      if (data.error) return "Could not fetch weather data.";

      return [
        `${data.area}, PH`,
        `\u2600\ufe0f  ${data.temp}\u00b0C  ${data.desc}`,
        `Feels like: ${data.feelsLike}\u00b0C`,
        `Humidity: ${data.humidity}%`,
        `Wind: ${data.windSpeed} km/h`,
      ].join("\n");
    } catch {
      return "Could not fetch weather data.";
    }
  }, []);

  const run = useCallback(
    async (raw: string) => {
      const trimmed = raw.trim();
      if (!trimmed) return;

      historyRef.current = [...historyRef.current, trimmed];
      historyIdxRef.current = -1;
      setLines((prev) => [...prev, createLine(`$ ${trimmed}`, false)]);

      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (runTimeoutRef.current) {
        clearTimeout(runTimeoutRef.current);
        runTimeoutRef.current = null;
      }
      dispatch({ type: "CANCEL_TYPING" });

      if (trimmed.toLowerCase() === "clear") {
        setLines([]);
        return;
      }

      const args = trimmed.split(" ");
      const base = args[0].toLowerCase();
      const rest = args.slice(1).join(" ");

      if (base === "ask") {
        if (!rest) {
          setLines((prev) => [
            ...prev,
            createLine("Usage: ask <question>", true),
          ]);
          return;
        }
        if (isAIRespondingRef.current) {
          setLines((prev) => [
            ...prev,
            createLine("Already processing...", true),
          ]);
          return;
        }
        await askAI(rest);
        return;
      }

      if (base === "weather") {
        const output = await fetchWeather();
        typeLine(output);
        return;
      }

      const output = evalCommand(base, rest);
      if (output !== null) {
        runTimeoutRef.current = setTimeout(() => typeLine(output), 80);
      } else {
        runTimeoutRef.current = setTimeout(
          () =>
            typeLine(
              `${raw}: command not found. Type 'help' to see available commands.`,
            ),
          80,
        );
      }
    },
    [typeLine, askAI, fetchWeather],
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const h = historyRef.current;
      if (e.key === "Enter") {
        run(input);
        setInput("");
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (h.length === 0) return;
        const nextIdx =
          historyIdxRef.current === -1
            ? h.length - 1
            : Math.max(0, historyIdxRef.current - 1);
        historyIdxRef.current = nextIdx;
        setInput(h[nextIdx]);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIdxRef.current === -1) return;
        const nextIdx = historyIdxRef.current + 1;
        if (nextIdx >= h.length) {
          historyIdxRef.current = -1;
          setInput("");
        } else {
          historyIdxRef.current = nextIdx;
          setInput(h[nextIdx]);
        }
        return;
      }

      if (e.key === "Tab") {
        e.preventDefault();
        const partial = input.toLowerCase();
        const match = COMMANDS.find(
          (c) => c.startsWith(partial) && c !== partial,
        );
        if (match) setInput(match);
        return;
      }
    },
    [input, run],
  );

  return (
    <div
      className="relative rounded-xl border border-border bg-card/50 overflow-hidden cursor-text
         transition-colors duration-300"
      onClick={() => inputRef.current?.focus()}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ")
          inputRef.current?.focus();
      }}
      role="application"
      tabIndex={-1}
    >
      <TerminalHeader isAIResponding={uiState.isAIResponding} />

      <div ref={containerRef}>
        <ScrollArea className="h-75">
          <TerminalLines
            lines={lines}
            uiState={uiState}
            input={input}
            onInputChange={setInput}
            onKeyDown={onKeyDown}
            inputRef={inputRef}
            reduce={reduce}
          />
        </ScrollArea>
      </div>
    </div>
  );
}
