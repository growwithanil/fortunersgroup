import { useEffect, useState } from "react";
import { X } from "lucide-react";

export function EnquireNow() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setOpen(false);
      setSubmitted(false);
      setForm({ name: "", email: "", phone: "", message: "" });
    }, 1600);
  };

  return (
    <>
      {/* Floating side tab */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Enquire Now"
        className="fixed right-0 top-1/2 -translate-y-1/2 z-40 [writing-mode:vertical-rl] px-2 py-3 text-base font-serif font-bold tracking-[0.22em] text-white bg-[#b89968] hover:bg-[#c9a97a] rounded-l-2xl shadow-[0_4px_20px_rgba(0,0,0,0.25)] transition-colors"
      >
        Enquire Now
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 bg-black/70 backdrop-blur-sm animate-in fade-in duration-300"
          onClick={(e) => e.target === e.currentTarget && setOpen(false)}
        >
          <div className="relative w-full max-w-md bg-background rounded-2xl shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-300">
            <button
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute right-4 top-4 text-foreground/60 hover:text-foreground transition"
            >
              <X className="w-5 h-5" />
            </button>

            <p className="text-xs tracking-[0.28em] uppercase text-[#8b7355] font-medium">
              Let's Connect
            </p>
            <h2 className="mt-2 font-serif text-3xl text-[#8b7355]">
              Come Home to Fortuners
            </h2>

            {submitted ? (
              <div className="mt-8 py-10 text-center">
                <div className="mx-auto w-14 h-14 rounded-full bg-gradient-to-br from-[#c9b99a] to-[#8b7355] flex items-center justify-center text-primary-foreground text-2xl">
                  ✓
                </div>
                <p className="mt-4 font-serif text-xl text-foreground">Thank you!</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  Our team will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <Field
                  label="Name"
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Your full name"
                  required
                  maxLength={100}
                />
                <Field
                  label="Email ID"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="you@email.com"
                  required
                  maxLength={255}
                />
                <Field
                  label="Contact Number"
                  type="tel"
                  value={form.phone}
                  onChange={(v) => setForm({ ...form, phone: v })}
                  placeholder="+91 98765 43210"
                  required
                  maxLength={20}
                />
                <div>
                  <label className="block text-sm text-foreground mb-1.5">Message</label>
                  <textarea
                    rows={3}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Tell us a little about what you're looking for…"
                    maxLength={1000}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#c9b99a] resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full py-3 text-sm font-medium text-primary-foreground bg-gradient-to-r from-[#c9b99a] to-[#8b7355] hover:from-[#d4c4a5] hover:to-[#9a8261] transition-all shadow-md"
                >
                  Submit
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  maxLength,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  maxLength?: number;
}) {
  return (
    <div>
      <label className="block text-sm text-foreground mb-1.5">{label}</label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        maxLength={maxLength}
        className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-[#c9b99a]"
      />
    </div>
  );
}
