import { createFileRoute, Link } from "@tanstack/react-router";
import { useInView, revealCls } from "@/hooks/use-in-view";
import { Building2, Compass, HardHat, ShieldCheck, Sparkles, Trees, ArrowRight } from "lucide-react";
import gallery1 from "@/assets/gallery-1.jpg.asset.json";
import gallery2 from "@/assets/gallery-2.jpg.asset.json";
import gallery3 from "@/assets/gallery-3.jpg.asset.json";
import gallery4 from "@/assets/gallery-4.jpg.asset.json";
import offeringApartment from "@/assets/offering-apartment.jpg";
import offeringLayout from "@/assets/offering-layout.jpg";
import offeringVillas from "@/assets/offering-villas.jpg";
import offeringRowhouse from "@/assets/offering-rowhouse.jpg";

export const Route = createFileRoute("/services/builders")({
  head: () => ({
    meta: [
      { title: "Builders & Developers — Fortuners Group" },
      { name: "description", content: "Fortuners Group — builders and developers of residential, commercial and mixed-use landmarks crafted with precision, integrity and legacy." },
      { property: "og:title", content: "Builders & Developers — Fortuners Group" },
      { property: "og:description", content: "Residential, commercial and mixed-use developments." },
    ],
  }),
  component: BuildersPage,
});

function BuildersPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Intro />
      <Offerings />
      <Capabilities />
      <Process />
      <Portfolio />
      <Why />
      <CTA />
    </div>
  );
}

function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <section ref={ref} className="relative pt-40 pb-24 bg-[#0b0b0b] text-background">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          backgroundImage: `url(${gallery1.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/70 via-[#0b0b0b]/60 to-[#0b0b0b]" aria-hidden />
      <div className="container-x relative">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-[#b89968] " + revealCls(inView, 0).className}>Builders & Developers</p>
        <h1 {...revealCls(inView, 150)} className={"mt-4 font-serif text-6xl md:text-8xl leading-[1.02] max-w-5xl text-white " + revealCls(inView, 150).className}>
          Fortuners <span className="text-[#b89968]">Infraa</span>
        </h1>
        <p {...revealCls(inView, 300)} className={"mt-6 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed " + revealCls(inView, 300).className}>
          For over two decades, we have shaped skylines across Hyderabad and Bengaluru — designing,
          building and delivering residences and workplaces that stand as quiet landmarks of quality.
        </p>
        <div {...revealCls(inView, 450)} className={"mt-10 flex flex-wrap gap-3 " + revealCls(inView, 450).className}>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 rounded-full bg-[#b89968] text-[#0b0b0b] px-6 py-3 text-sm font-medium hover:bg-[#c9aa78] transition"
          >
            View Portfolio <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full border border-white/30 text-white px-6 py-3 text-sm hover:border-[#b89968] hover:text-[#b89968] transition"
          >
            Partner With Us
          </Link>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const stats = [
    { n: "20+", l: "Years of Legacy" },
    { n: "12M+", l: "Sq. Ft. Delivered" },
    { n: "40+", l: "Landmark Projects" },
    { n: "8,000+", l: "Happy Families" },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-x grid gap-14 md:grid-cols-2 items-center">
        <div>
          <p {...revealCls(inView, 0)} className={"font-serif text-3xl md:text-5xl tracking-wide text-primary " + revealCls(inView, 0).className}>Fortuners Infraa</p>
          <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-2xl md:text-3xl leading-tight whitespace-nowrap " + revealCls(inView, 150).className}>
            Builders of enduring value —<br />developers of considered communities.
          </h2>
          <p {...revealCls(inView, 300)} className={"mt-6 text-foreground/75 leading-relaxed " + revealCls(inView, 300).className}>
            As a fully integrated builder and developer, Fortuners Group takes end-to-end
            ownership — from land acquisition and master planning to design, construction and
            handover. Every project is engineered for longevity, designed for daily delight, and
            delivered on time.
          </p>
          <p {...revealCls(inView, 450)} className={"mt-4 text-foreground/75 leading-relaxed " + revealCls(inView, 450).className}>
            We build homes families are proud to inherit and workspaces institutions trust to
            occupy — always with a bias for craft, transparency and long-term stewardship.
          </p>
        </div>
        <div {...revealCls(inView, 300)} className={revealCls(inView, 300).className}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src={gallery2.url} alt="Fortuners flagship residential development" className="w-full h-[520px] object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
        </div>
      </div>
      <div className="container-x mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10">
        {stats.map((s, i) => (
          <div key={s.l} {...revealCls(inView, 500 + i * 120)} className={"text-center " + revealCls(inView, 500 + i * 120).className}>
            <div className="font-serif text-4xl md:text-5xl text-[#b89968]">{s.n}</div>
            <div className="mt-2 text-xs tracking-[0.25em] uppercase text-foreground/60">{s.l}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function Offerings() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const items = [
    { t: "Apartment Development", d: "Thoughtfully planned residential towers designed for light, air and lasting comfort.", img: offeringApartment },
    { t: "Layout Development", d: "Master-planned plotted layouts with infrastructure engineered for generations.", img: offeringLayout },
    { t: "Villas Development", d: "Private villa communities crafted with restraint, privacy and enduring materials.", img: offeringVillas },
    { t: "Row House Development", d: "Considered row houses that balance individuality with a shared sense of place.", img: offeringRowhouse },
  ];
  return (
    <section ref={ref} className="py-24 bg-[#0b0b0b] text-white">
      <div className="container-x">
        <div>
          <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-[#b89968] " + revealCls(inView, 0).className}>Our Offerings</p>
          {/* Fluid size + nowrap keeps this on one line from md up; it wraps below that. */}
          <h2
            {...revealCls(inView, 150)}
            className={"mt-4 font-serif leading-tight md:whitespace-nowrap " + revealCls(inView, 150).className}
            style={{ fontSize: "clamp(1.75rem, 3.9vw, 3rem)" }}
          >
            Building Every Lifestyle with One Standard of Excellence
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={it.t} {...revealCls(inView, 200 + i * 120)} className={"group relative overflow-hidden rounded-2xl bg-black/40 border border-white/10 " + revealCls(inView, 200 + i * 120).className}>
              <div className="relative h-64 overflow-hidden">
                <img src={it.img} alt={it.t} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-[#b89968]">{it.t}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div {...revealCls(inView, 800)} className={"mt-14 flex justify-center " + revealCls(inView, 800).className}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#b89968] text-[#0b0b0b] px-8 py-3 text-sm font-medium hover:bg-[#c9aa78] transition"
          >
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}

function Capabilities() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const items = [
    { Icon: Building2, t: "Residential Towers", d: "High-rise and mid-rise homes engineered for longevity, comfort and light." },
    { Icon: Compass, t: "Commercial Complexes", d: "Grade-A workspaces built to institutional standards and green benchmarks." },
    { Icon: Trees, t: "Mixed-Use Developments", d: "Integrated neighbourhoods where living, working and leisure sit in balance." },
    { Icon: HardHat, t: "Plotted Communities", d: "Master-planned plotted developments with infrastructure that lasts generations." },
    { Icon: ShieldCheck, t: "Redevelopment", d: "Society and land-owner redevelopment with transparent, trust-first processes." },
    { Icon: Sparkles, t: "Turnkey Delivery", d: "Design, build and finish — a single accountable partner from vision to keys." },
  ];
  return (
    <section ref={ref} className="py-24 bg-[#faf8f5]">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-primary " + revealCls(inView, 0).className}>What We Build</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl " + revealCls(inView, 150).className}>
          A full-spectrum development practice.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map(({ Icon, t, d }, i) => (
            <div
              key={t}
              {...revealCls(inView, 300 + i * 100)}
              className={"group rounded-3xl border border-border bg-card p-8 transition hover:-translate-y-1 hover:shadow-xl hover:border-[#b89968]/50 " + revealCls(inView, 300 + i * 100).className}
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b89968]/10 text-[#b89968] group-hover:bg-[#b89968] group-hover:text-white transition">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="mt-6 font-serif text-2xl">{t}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const steps = [
    { n: "01", t: "Land & Vision", d: "Site selection, feasibility, master planning and product-market fit." },
    { n: "02", t: "Design & Approvals", d: "Architecture, engineering, statutory approvals and value engineering." },
    { n: "03", t: "Build & Quality", d: "Disciplined execution with layered quality checkpoints at every stage." },
    { n: "04", t: "Handover & Care", d: "On-time possession, facility onboarding and long-term community stewardship." },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-primary " + revealCls(inView, 0).className}>How We Deliver</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-6xl " + revealCls(inView, 150).className}>
          A disciplined path from ground to handover.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.n}
              {...revealCls(inView, 300 + i * 120)}
              className={"relative rounded-3xl border border-border p-8 bg-card " + revealCls(inView, 300 + i * 120).className}
            >
              <div className="font-serif text-5xl text-[#b89968]/40">{s.n}</div>
              <h3 className="mt-4 font-serif text-2xl">{s.t}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <section ref={ref} className="py-24 bg-[#0b0b0b] text-white">
      <div className="container-x grid gap-14 md:grid-cols-2 items-center">
        <div {...revealCls(inView, 0)} className={revealCls(inView, 0).className}>
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <img src={gallery3.url} alt="Fortuners development portfolio" className="w-full h-[520px] object-cover" />
          </div>
        </div>
        <div>
          <p {...revealCls(inView, 150)} className={"text-xs tracking-[0.35em] uppercase text-[#b89968] " + revealCls(inView, 150).className}>Signature Portfolio</p>
          <h2 {...revealCls(inView, 300)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight " + revealCls(inView, 300).className}>
            Landmarks that quietly stand the test of time.
          </h2>
          <p {...revealCls(inView, 450)} className={"mt-6 text-white/70 leading-relaxed " + revealCls(inView, 450).className}>
            Apartment Development, Layout Development, Villas Development & Row House Development — Real Estate Development.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/80">
            {["Fortuners Infraa — Elixir"].map((n, i) => (
              <li key={n} {...revealCls(inView, 600 + i * 100)} className={"flex items-center gap-3 " + revealCls(inView, 600 + i * 100).className}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#b89968]" />
                {n}
              </li>
            ))}
          </ul>
          <Link
            to="/projects"
            className="mt-10 inline-flex items-center gap-2 rounded-full border border-[#b89968] text-[#b89968] px-6 py-3 text-sm hover:bg-[#b89968] hover:text-[#0b0b0b] transition"
          >
            Explore Every Project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Why() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const points = [
    { t: "Timely Delivery", d: "Milestone-driven execution with a track record of on-time possession." },
    { t: "Transparent Dealings", d: "RERA-compliant, paperwork-first, no surprises at any stage." },
    { t: "Craft-Grade Finish", d: "Materials sourced with care, finishes signed off inch by inch." },
    { t: "Long-Term Care", d: "Post-handover community management that protects value for decades." },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-primary " + revealCls(inView, 0).className}>Why Fortuners</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-6xl " + revealCls(inView, 150).className}>
          Four commitments that shape every decision.
        </h2>
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {points.map((p, i) => (
            <div key={p.t} {...revealCls(inView, 300 + i * 120)} className={"border-t border-[#b89968]/50 pt-6 " + revealCls(inView, 300 + i * 120).className}>
              <h3 className="font-serif text-xl">{p.t}</h3>
              <p className="mt-3 text-sm text-foreground/70 leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  const { ref, inView } = useInView<HTMLDivElement>(0.2);
  return (
    <section ref={ref} className="py-24 bg-[#faf8f5]">
      <div className="container-x text-center max-w-3xl mx-auto">
        <h2 {...revealCls(inView, 0)} className={"font-serif text-4xl md:text-5xl leading-tight " + revealCls(inView, 0).className}>
          Have a plot, a partnership or a project in mind?
        </h2>
        <p {...revealCls(inView, 200)} className={"mt-6 text-foreground/70 leading-relaxed " + revealCls(inView, 200).className}>
          Let's talk about building something meaningful together — a family home, a landmark
          tower, or a joint development. Our team will get back to you within one working day.
        </p>
        <div {...revealCls(inView, 400)} className={"mt-10 flex flex-wrap justify-center gap-3 " + revealCls(inView, 400).className}>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-[#b89968] text-white px-8 py-3 text-sm font-medium hover:bg-[#a3855a] transition"
          >
            Start a Conversation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/channel-partner"
            className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-3 text-sm hover:border-[#b89968] hover:text-[#b89968] transition"
          >
            Become a Channel Partner
          </Link>
        </div>
      </div>
    </section>
  );
}
