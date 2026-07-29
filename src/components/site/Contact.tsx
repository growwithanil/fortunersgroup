import { useEffect, useRef, useState } from "react";
import { whatsappLink } from "@/components/site/WhatsAppButton";
import { fieldsFromForm, submitLead } from "@/lib/submit-lead";

export function Contact() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const ref = useRef<HTMLDivElement | null>(null);
  const [inView, setInView] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    setStatus("sending");
    try {
      await submitLead(fieldsFromForm(form), "Contact section — website");
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const rise = (delay: number) => ({
    style: { transitionDelay: `${delay}ms` },
    className:
      "transition-all duration-[900ms] ease-out " +
      (inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"),
  });

  const headWords = ["Let's"];
  const italicWords = ["Connect"];
  let idx = 0;

  return (
    <section id="contact" className="py-24 md:py-36 bg-secondary/50 overflow-hidden">
      <div ref={ref} className="container-x grid md:grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="text-5xl md:text-7xl leading-[1.1]">
            <span className="block overflow-hidden">
              {headWords.map((w, i) => {
                const d = 150 + idx * 90; idx++;
                return (
                  <span key={i} className="inline-block overflow-hidden align-baseline">
                    <span
                      style={{ transitionDelay: `${d}ms` }}
                      className={
                        "inline-block transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] " +
                        (inView ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0")
                      }
                    >
                      {w}
                    </span>
                  </span>
                );
              })}{" "}
              {italicWords.map((w, i) => {
                const d = 150 + idx * 90; idx++;
                return (
                  <span key={i} className="inline-block overflow-hidden align-baseline">
                    <span
                      style={{ transitionDelay: `${d}ms` }}
                      className={
                        "inline-block italic text-primary transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)] " +
                        (inView ? "translate-y-0 opacity-100" : "translate-y-[110%] opacity-0")
                      }
                    >
                      {w}
                    </span>
                  </span>
                );
              })}
            </span>
          </h2>
          <p {...rise(500)} className={"mt-6 text-foreground/70 leading-relaxed max-w-md " + rise(500).className}>
            Whether you're searching for a home, exploring an investment, or planning
            a partnership — our team is ready to help.
          </p>

          <div className="mt-10 space-y-6 text-sm">
            <div {...rise(600)} className={rise(600).className}>
              <div className="uppercase tracking-widest text-xs text-muted-foreground">Our Companies</div>
              <div className="mt-2 font-medium">Fortuners Group</div>
              <div className="mt-1 text-foreground/70">
                Fortuners Infraa <span className="text-primary">•</span> Fortuners BuildEdge <span className="text-primary">•</span> Fortuners Decor
              </div>
            </div>
            <div {...rise(750)} className={rise(750).className}>
              <div className="uppercase tracking-widest text-xs text-muted-foreground">Corporate Office</div>
              <div className="mt-2 leading-relaxed">
                #840, First Floor, 17th Main Road,<br />
                Sector 3, HSR Layout,<br />
                Bengaluru, Karnataka – 560102
              </div>
            </div>
            <div {...rise(900)} className={rise(900).className}>
              <div className="uppercase tracking-widest text-xs text-muted-foreground">Speak With Us</div>
              <a href="tel:+919611213181" className="mt-2 block hover:text-primary">+91 96112 13181</a>
              <a href="mailto:hello@fortunersgroup.com" className="hover:text-primary">hello@fortunersgroup.com</a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex items-center gap-2 text-sm hover:text-primary"
              >
                <svg viewBox="0 0 32 32" className="h-4 w-4 text-[#25D366]" fill="currentColor" aria-hidden="true">
                  <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.26.6 4.47 1.73 6.42L3.2 28.8l6.55-1.71a12.74 12.74 0 0 0 6.25 1.62h.01c7.06 0 12.79-5.74 12.79-12.8 0-3.42-1.33-6.63-3.75-9.05a12.71 12.71 0 0 0-9.05-3.66Zm0 23.32h-.01a10.6 10.6 0 0 1-5.4-1.48l-.39-.23-3.89 1.02 1.04-3.79-.25-.39a10.57 10.57 0 0 1-1.62-5.65c0-5.87 4.78-10.64 10.65-10.64 2.84 0 5.51 1.11 7.52 3.12a10.56 10.56 0 0 1 3.11 7.53c0 5.87-4.78 10.51-10.76 10.51Z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          style={{ transitionDelay: "300ms" }}
          className={
            "bg-card p-8 md:p-10 space-y-5 rounded-3xl border border-primary/10 transition-all duration-[1100ms] ease-out " +
            (inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")
          }
        >
          <div className="grid grid-cols-2 gap-4">
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Name</span>
              <input name="Name" autoComplete="name" required className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-widest text-muted-foreground">Phone</span>
              <input name="Phone" type="tel" autoComplete="tel" required className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Email</span>
            <input name="Email" type="email" autoComplete="email" required className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition" />
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Interest</span>
            <select name="Interest" className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition">
              <option>Residential</option>
              <option>Commercial</option>
              <option>Plotted Development</option>
              <option>Partnership</option>
            </select>
          </label>
          <label className="block">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Message</span>
            <textarea name="Message" rows={3} className="mt-2 w-full bg-transparent border-b border-border py-2 outline-none focus:border-primary transition resize-none" />
          </label>
          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full rounded-full bg-primary text-primary-foreground py-3.5 text-sm tracking-wide hover:bg-primary/90 transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:hover:scale-100"
          >
            {status === "sending"
              ? "Sending…"
              : status === "sent"
                ? "Thank you — we'll be in touch"
                : "Send Enquiry"}
          </button>
          {status === "error" && (
            <p role="alert" className="text-sm text-destructive">
              Something went wrong. Please call{" "}
              <a href="tel:+919611213181" className="underline">+91 96112 13181</a> or email{" "}
              <a href="mailto:hello@fortunersgroup.com" className="underline">hello@fortunersgroup.com</a>.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
