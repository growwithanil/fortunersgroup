import { useChat } from "@ai-sdk/react";
import { DefaultChatTransport, type UIMessage } from "ai";
import { useEffect, useRef, useState } from "react";
import ReactMarkdown from "react-markdown";
import { MessageCircle, Send, X } from "lucide-react";

const STORAGE_KEY = "fortuners-chat-history-v1";

const WELCOME: UIMessage = {
  id: "welcome",
  role: "assistant",
  parts: [
    {
      type: "text",
      text: "Hi! I'm the Fortuners Group assistant. Are you exploring a **home, plot, construction project, or interiors** today?",
    },
  ],
};

function loadMessages(): UIMessage[] {
  if (typeof window === "undefined") return [WELCOME];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [WELCOME];
    const parsed = JSON.parse(raw) as UIMessage[];
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : [WELCOME];
  } catch {
    return [WELCOME];
  }
}

export function ChatBot() {
  const [open, setOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);
  const [initialMessages, setInitialMessages] = useState<UIMessage[]>([WELCOME]);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setInitialMessages(loadMessages());
    setHydrated(true);
  }, []);

  const { messages, sendMessage, status } = useChat({
    id: "fortuners-chat",
    messages: initialMessages,
    transport: new DefaultChatTransport({ api: "/api/chat" }),
  });

  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(messages));
    } catch {}
  }, [messages, hydrated]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, open]);

  const isLoading = status === "submitted" || status === "streaming";

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || isLoading) return;
    sendMessage({ text });
    setInput("");
  }

  function clearChat() {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {}
    window.location.reload();
  }

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close chat" : "Open chat"}
        className="fixed bottom-6 right-6 z-[60] h-14 w-14 rounded-full bg-[#b89968] text-black shadow-2xl flex items-center justify-center hover:bg-[#c9aa78] transition-all hover:scale-105"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-44 right-6 z-[60] w-[calc(100vw-3rem)] sm:w-[380px] h-[540px] max-h-[calc(100vh-13rem)] flex flex-col rounded-2xl overflow-hidden shadow-2xl border border-[#b89968]/30 bg-gradient-to-b from-[#0f0f0f] to-[#0b0b0b] text-white">
          {/* Header */}
          <div className="px-5 py-4 border-b border-[#b89968]/20 bg-black/40 flex items-center justify-between">
            <div>
              <div className="font-serif text-lg text-[#b89968] leading-tight">Fortuners Assistant</div>
              <div className="text-[10px] uppercase tracking-widest text-white/50 mt-0.5">
                {isLoading ? "Typing…" : "Online"}
              </div>
            </div>
            <button
              onClick={clearChat}
              className="text-[10px] uppercase tracking-widest text-white/40 hover:text-[#b89968] transition"
            >
              New chat
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m) => {
              const text = m.parts
                .map((p) => (p.type === "text" ? p.text : ""))
                .join("");
              const isUser = m.role === "user";
              return (
                <div
                  key={m.id}
                  className={"flex " + (isUser ? "justify-end" : "justify-start")}
                >
                  <div
                    className={
                      "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed " +
                      (isUser
                        ? "bg-[#b89968] text-black rounded-br-sm"
                        : "bg-white/5 border border-white/10 text-white/90 rounded-bl-sm")
                    }
                  >
                    {isUser ? (
                      <p className="whitespace-pre-wrap">{text}</p>
                    ) : (
                      <div className="prose prose-sm prose-invert max-w-none prose-p:my-1 prose-strong:text-[#c9aa78]">
                        <ReactMarkdown>{text}</ReactMarkdown>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
            {status === "submitted" && (
              <div className="flex justify-start">
                <div className="bg-white/5 border border-white/10 rounded-2xl rounded-bl-sm px-4 py-3">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 rounded-full bg-[#b89968] animate-bounce [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 rounded-full bg-[#b89968] animate-bounce [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 rounded-full bg-[#b89968] animate-bounce" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Composer */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-[#b89968]/20 bg-black/40 p-3 flex gap-2 items-end"
          >
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSubmit(e);
                }
              }}
              rows={1}
              placeholder="Type your message…"
              className="flex-1 resize-none bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-[#b89968]/60 max-h-24"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="h-10 w-10 shrink-0 rounded-xl bg-[#b89968] text-black flex items-center justify-center hover:bg-[#c9aa78] transition disabled:opacity-40 disabled:cursor-not-allowed"
              aria-label="Send"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
