import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { fieldsFromForm, submitLead } from "@/lib/submit-lead";

export const Route = createFileRoute("/channel-partner")({
  head: () => ({
    meta: [
      { title: "Channel Partner — Fortuners Group" },
      { name: "description", content: "Partner with Fortuners Group. Register as a channel partner and grow with a trusted premium real estate brand." },
      { property: "og:title", content: "Channel Partner — Fortuners Group" },
      { property: "og:description", content: "Join the Fortuners channel partner network." },
    ],
  }),
  component: ChannelPartnerPage,
});

function ChannelPartnerPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "sending") return;

    const form = e.currentTarget;
    setStatus("sending");
    try {
      await submitLead(fieldsFromForm(form), "Channel partner registration — website");
      form.reset();
      setStatus("sent");
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section className="pt-32 pb-24 container-x">
      <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Grow with us</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-6">Become a Channel Partner</h1>
      <p className="text-foreground/70 max-w-2xl mb-14">Join a curated network of channel partners representing Fortuners Group. Attractive commissions, transparent processes, and a portfolio worth selling.</p>

      <div className="grid gap-8 md:grid-cols-3 mb-16">
        {[
          { t: "Premium Inventory", d: "Represent a portfolio of landmark residences and commercial spaces across Hyderabad and Bengaluru." },
          { t: "Best-in-class Payouts", d: "Industry-leading commission structures with clear, on-time settlements." },
          { t: "Marketing Support", d: "Ready collateral, walkthroughs, and dedicated relationship managers for your clients." },
        ].map((c) => (
          <div key={c.t} className="rounded-3xl border border-foreground/10 p-8">
            <h3 className="font-serif text-2xl mb-3">{c.t}</h3>
            <p className="text-foreground/70">{c.d}</p>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="max-w-2xl rounded-3xl border border-foreground/10 p-8 space-y-5">
        <h2 className="font-serif text-3xl mb-4">Register your interest</h2>
        <div className="grid gap-4 md:grid-cols-2">
          <input name="Name" autoComplete="name" required placeholder="Full name" className="w-full rounded-full border border-foreground/15 bg-transparent px-5 py-3 text-sm outline-none focus:border-[#b89968]" />
          <input name="Company" placeholder="Company / RERA ID" className="w-full rounded-full border border-foreground/15 bg-transparent px-5 py-3 text-sm outline-none focus:border-[#b89968]" />
          <input name="Email" type="email" autoComplete="email" required placeholder="Email" className="w-full rounded-full border border-foreground/15 bg-transparent px-5 py-3 text-sm outline-none focus:border-[#b89968]" />
          <input name="Phone" type="tel" autoComplete="tel" required placeholder="Phone" className="w-full rounded-full border border-foreground/15 bg-transparent px-5 py-3 text-sm outline-none focus:border-[#b89968]" />
        </div>
        <textarea name="About" placeholder="Tell us about your business" rows={4} className="w-full rounded-3xl border border-foreground/15 bg-transparent px-5 py-3 text-sm outline-none focus:border-[#b89968]" />
        <button type="submit" disabled={status === "sending"} className="rounded-full bg-[#b89968] text-background px-7 py-3 text-sm hover:bg-[#a48757] transition-colors disabled:opacity-60">
          {status === "sending" ? "Sending…" : status === "sent" ? "Registration received" : "Submit Registration"}
        </button>
        {status === "error" && (
          <p role="alert" className="text-sm text-destructive">
            Couldn't send that. Please email{" "}
            <a href="mailto:hello@fortunersgroup.com" className="underline">hello@fortunersgroup.com</a>.
          </p>
        )}
      </form>
    </section>
  );
}
