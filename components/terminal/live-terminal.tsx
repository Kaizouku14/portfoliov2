"use client";

import { useCallback, useRef, useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
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
        ...COMMANDS.filter((c) => c !== "help" && c !== "clear").map(
          (c) => `  ${c}`,
        ),
      ].join("\n");

    default:
      return null;
  }
}

interface Line {
  text: string;
  isOutput: boolean;
}

export function LiveTerminal() {
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [lines, setLines] = useState<Line[]>([
    {
      text: "Welcome. Type 'help' to see available commands.",
      isOutput: true,
    },
  ]);
  const [typingText, setTypingText] = useState("");
  const [typingTarget, setTypingTarget] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isAIResponding, setIsAIResponding] = useState(false);
  const [aiStreamText, setAiStreamText] = useState("");

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
  }, [lines, typingText, aiStreamText, isAIResponding]);

  useEffect(() => {
    if (!isTyping || !typingTarget || reduce) {
      setTypingText("");
      setIsTyping(false);
      return;
    }
    if (typingText.length >= typingTarget.length) {
      setLines((prev) => [...prev, { text: typingTarget, isOutput: true }]);
      setTypingText("");
      setIsTyping(false);
      return;
    }
    typingTimerRef.current = setTimeout(() => {
      setTypingText(typingTarget.slice(0, typingText.length + 1));
    }, 18);
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
    };
  }, [isTyping, typingTarget, typingText, reduce]);

  useEffect(() => {
    return () => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (runTimeoutRef.current) clearTimeout(runTimeoutRef.current);
    };
  }, []);

  const typeLine = useCallback(
    (text: string) => {
      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (reduce) {
        setLines((prev) => [...prev, { text, isOutput: true }]);
        return;
      }
      setTypingText("");
      setTypingTarget(text);
      setIsTyping(true);
    },
    [reduce],
  );

  const askAI = useCallback(async (question: string) => {
    const startedAt = Date.now();
    isAIRespondingRef.current = true;
    setIsAIResponding(true);
    setAiStreamText("");

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
        setAiStreamText(text);
      }

      const elapsed = Date.now() - startedAt;
      const MIN_DISPLAY = 400;
      if (elapsed < MIN_DISPLAY) {
        await new Promise<void>((r) => setTimeout(r, MIN_DISPLAY - elapsed));
      }

      setLines((prev) => [...prev, { text, isOutput: true }]);
      setAiStreamText("");
    } catch {
      setLines((prev) => [
        ...prev,
        { text: "Error: failed to get response", isOutput: true },
      ]);
      setAiStreamText("");
    } finally {
      isAIRespondingRef.current = false;
      setIsAIResponding(false);
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

      setHistory((prev) => [...prev, trimmed]);
      setHistoryIdx(-1);
      setLines((prev) => [...prev, { text: `$ ${trimmed}`, isOutput: false }]);

      if (typingTimerRef.current) clearTimeout(typingTimerRef.current);
      if (runTimeoutRef.current) {
        clearTimeout(runTimeoutRef.current);
        runTimeoutRef.current = null;
      }
      setTypingText("");
      setIsTyping(false);

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
            { text: "Usage: ask <question>", isOutput: true },
          ]);
          return;
        }
        if (isAIRespondingRef.current) {
          setLines((prev) => [
            ...prev,
            { text: "Already processing...", isOutput: true },
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
      if (e.key === "Enter") {
        run(input);
        setInput("");
        return;
      }

      if (e.key === "ArrowUp") {
        e.preventDefault();
        if (history.length === 0) return;
        const nextIdx =
          historyIdx === -1 ? history.length - 1 : Math.max(0, historyIdx - 1);
        setHistoryIdx(nextIdx);
        setInput(history[nextIdx]);
        return;
      }

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (historyIdx === -1) return;
        const nextIdx = historyIdx + 1;
        if (nextIdx >= history.length) {
          setHistoryIdx(-1);
          setInput("");
        } else {
          setHistoryIdx(nextIdx);
          setInput(history[nextIdx]);
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
    [input, history, historyIdx, run],
  );

  return (
    <div
      className="relative rounded-xl border border-border bg-card/50 overflow-hidden cursor-text
         transition-colors duration-300"
      onClick={() => inputRef.current?.focus()}
    >
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

      <div ref={containerRef}>
        <ScrollArea className="h-75">
          <div className="p-4 font-mono text-[13px] leading-relaxed space-y-1">
            {lines.map((line, i) => (
              <motion.div
                key={i}
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
                    a: ({ ...props }) => (
                      <a
                        {...props}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:underline font-bold"
                      />
                    ),
                  }}
                >
                  {line.text}
                </ReactMarkdown>
              </motion.div>
            ))}

            {isTyping && (
              <div className="text-muted-foreground">
                {typingText}
                <span className="inline-block w-[3px] h-[1em] bg-career-highlight/70 animate-pulse ml-px align-middle" />
              </div>
            )}

            {isAIResponding && (
              <div className="text-muted-foreground">
                {aiStreamText || (
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
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={onKeyDown}
                className="flex-1 bg-transparent outline-none text-foreground/80 disabled:opacity-50"
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal input"
                disabled={isAIResponding}
              />
              <span className="inline-block w-0.5 h-[1em] bg-career-highlight/70 animate-pulse" />
            </div>
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
