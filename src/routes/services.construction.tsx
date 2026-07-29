import { createFileRoute, Link } from "@tanstack/react-router";
import { useInView, revealCls } from "@/hooks/use-in-view";
import { HardHat, Ruler, Zap, Wrench, ShieldCheck, ClipboardCheck, ArrowRight } from "lucide-react";
import gallery3 from "@/assets/gallery-3.jpg.asset.json";
import gallery4 from "@/assets/gallery-4.jpg.asset.json";
import gallery5 from "@/assets/gallery-5.jpg.asset.json";
import practiceImg from "@/assets/construction-practice.jpg";
import offeringTurnkey from "@/assets/construction-turnkey.jpg";
import offeringHome from "@/assets/offering-villas.jpg";
import offeringRescom from "@/assets/construction-rescom.jpg";
import offeringIndustrial from "@/assets/construction-industrial.jpg";


export const Route = createFileRoute("/services/construction")({
  head: () => ({
    meta: [
      { title: "Construction — Fortuners Group" },
      { name: "description", content: "Precision construction — structural engineering, MEP, finishes and turnkey delivery for landmark residential and commercial projects." },
      { property: "og:title", content: "Construction — Fortuners Group" },
      { property: "og:description", content: "Precision construction from foundation to finish." },
    ],
  }),
  component: ConstructionPage,
});

function ConstructionPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Intro />
      <Offerings />
      <Capabilities />

      <Process />
      <Quality />
      <Safety />
      <CTA />
    </div>
  );
}

function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <section ref={ref} className="relative pt-40 pb-24 bg-[#0b0b0b] text-white">
      <div
        className="absolute inset-0 opacity-40"
        style={{ backgroundImage: `url(${gallery3.url})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/70 via-[#0b0b0b]/60 to-[#0b0b0b]" aria-hidden />
      <div className="container-x relative">
        <p {...revealCls(inView, 0)} className={"text-xl md:text-2xl tracking-[0.3em] uppercase text-[#b89968] " + revealCls(inView, 0).className}>Fortuners BuildEdge</p>
        <h1 {...revealCls(inView, 150)} className={"mt-4 font-serif text-2xl md:text-3xl leading-[1.1] max-w-4xl " + revealCls(inView, 150).className}>
          <span className="text-[#b89968]">Turnkey Construction</span>
        </h1>
        <p {...revealCls(inView, 300)} className={"mt-6 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed " + revealCls(inView, 300).className}>
          On-site discipline, structural rigor and craft-level finishing. From foundation to
          handover, our construction practice delivers with the precision every landmark deserves.
        </p>
        <div {...revealCls(inView, 450)} className={"mt-10 flex flex-wrap gap-3 " + revealCls(inView, 450).className}>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#b89968] text-[#0b0b0b] px-6 py-3 text-sm font-medium hover:bg-[#c9aa78] transition">
            Discuss Your Project <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/projects" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm hover:border-[#b89968] hover:text-[#b89968] transition">
            See Live Sites
          </Link>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const stats = [
    { n: "20+", l: "Years On-Site" },
    { n: "12M+", l: "Sq. Ft. Built" },
    { n: "500+", l: "Skilled Workforce" },
    { n: "ISO", l: "Certified Practice" },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-x grid gap-14 md:grid-cols-2 items-center">
        <div>
          <p {...revealCls(inView, 0)} className={"font-serif text-3xl md:text-5xl tracking-wide text-primary " + revealCls(inView, 0).className}>Fortuners BuildEdge</p>
          <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-2xl md:text-3xl leading-tight " + revealCls(inView, 150).className}>
            Structural rigor, MEP precision, finish-grade craft.
          </h2>
          <p {...revealCls(inView, 300)} className={"mt-6 text-foreground/75 leading-relaxed " + revealCls(inView, 300).className}>
            Our construction arm operates as a full-service general contractor — engineering the
            frame, coordinating every trade, and holding the line on quality, safety and schedule
            from breaking ground to keys in hand.
          </p>
          <p {...revealCls(inView, 450)} className={"mt-4 text-foreground/75 leading-relaxed " + revealCls(inView, 450).className}>
            We build for Fortuners developments and for select external clients who value
            transparent execution, disciplined milestones and finish work that reads as effortless.
          </p>
        </div>
        <div {...revealCls(inView, 300)} className={revealCls(inView, 300).className}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src={practiceImg} alt="Active Fortuners construction site" className="w-full h-[520px] object-cover" />
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
    { t: "Turnkey Construction", d: "One contract, one accountable partner — from design coordination to keys in hand.", img: offeringTurnkey },
    { t: "End-to-End Home Construction", d: "Complete home-building solutions on your plot — structure, MEP, interiors and finish.", img: offeringHome },
    { t: "Residential & Commercial", d: "High-rise homes and Grade-A workspaces engineered to institutional standards.", img: offeringRescom },
    { t: "Industrial & Infrastructure", d: "Warehouses, factories and infrastructure works built for scale and durability.", img: offeringIndustrial },
  ];
  return (
    <section ref={ref} className="py-24 bg-[#0b0b0b] text-white">
      <div className="container-x">
        <div className="max-w-5xl">
          <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-[#b89968] " + revealCls(inView, 0).className}>Our Offerings</p>
          <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl leading-tight " + revealCls(inView, 150).className}>
            Four construction disciplines. One standard of craft.
          </h2>
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div key={it.t} {...revealCls(inView, 200 + i * 120)} className={"group relative overflow-hidden rounded-2xl bg-black/40 border border-white/10 " + revealCls(inView, 200 + i * 120).className}>
              <div className="relative h-64 overflow-hidden">
                <img src={it.img} alt={it.t} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#b89968] text-[#0b0b0b] px-8 py-3 text-sm font-medium hover:bg-[#c9aa78] transition">
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
    { Icon: Ruler, t: "Structural Engineering", d: "Robust RCC and steel frames engineered for seismic and wind loads." },
    { Icon: Zap, t: "MEP Systems", d: "Mechanical, electrical, plumbing and fire — coordinated end to end." },
    { Icon: Wrench, t: "Facade & Envelope", d: "Curtain wall, cladding and waterproofing detailed for our climate." },
    { Icon: HardHat, t: "Interior Fit-out", d: "Finishes, joinery and stone work executed to bespoke tolerances." },
    { Icon: ClipboardCheck, t: "Project Management", d: "PMC-grade scheduling, cost control and stakeholder reporting." },
    { Icon: ShieldCheck, t: "Turnkey Delivery", d: "One contract, one point of accountability, one handover." },
  ];
  return (
    <section ref={ref} className="py-24 bg-[#faf8f5]">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-primary " + revealCls(inView, 0).className}>Capabilities</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl " + revealCls(inView, 150).className}>
          A full-stack construction practice.
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
    { n: "01", t: "Pre-Construction", d: "Site survey, soil investigation, methodology, budgeting and scheduling." },
    { n: "02", t: "Foundation & Structure", d: "Excavation, foundations and RCC/steel frame with layered QA/QC." },
    { n: "03", t: "MEP & Envelope", d: "Services rough-in, facade, waterproofing and fire compliance." },
    { n: "04", t: "Finishes & Fit-out", d: "Flooring, joinery, stone, paint and specialty finishes." },
    { n: "05", t: "Testing & Commissioning", d: "System testing, snagging, statutory clearances and safety audit." },
    { n: "06", t: "Handover & Warranty", d: "Owner walk-through, documentation and defect-liability care." },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-primary " + revealCls(inView, 0).className}>How We Build</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight whitespace-nowrap " + revealCls(inView, 150).className}>
          Six disciplined stages, one accountable partner.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={s.n}
              {...revealCls(inView, 300 + i * 100)}
              className={"relative rounded-3xl border border-border p-8 bg-card " + revealCls(inView, 300 + i * 100).className}
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

function Quality() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <section ref={ref} className="py-24 bg-[#0b0b0b] text-white">
      <div className="container-x grid gap-14 md:grid-cols-2 items-center">
        <div {...revealCls(inView, 0)} className={revealCls(inView, 0).className}>
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <img src={gallery5.url} alt="Quality controlled construction detail" className="w-full h-[520px] object-cover" />
          </div>
        </div>
        <div>
          <p {...revealCls(inView, 150)} className={"text-xs tracking-[0.35em] uppercase text-[#b89968] " + revealCls(inView, 150).className}>Quality Assurance</p>
          <h2 {...revealCls(inView, 300)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight " + revealCls(inView, 300).className}>
            Nothing leaves site until it earns its signature.
          </h2>
          <ul className="mt-8 space-y-5 text-sm text-white/80">
            {[
              { t: "Turnkey", d: "Single-point accountability from drawings to handover — one contract, one timeline, one signature of quality." },
              { t: "End-to-End Home", d: "Design, structure, MEP, interiors and finishes delivered as a seamless build with move-in-ready precision." },
              { t: "Residential & Commercial", d: "High-rise towers, gated communities and workplaces engineered for longevity, safety and aesthetic finish." },
              { t: "Industrial & Infrastructure", d: "Factories, warehouses and civil infrastructure built to load, compliance and operational-uptime standards." },
            ].map((n, i) => (
              <li key={n.t} {...revealCls(inView, 450 + i * 100)} className={"flex gap-3 " + revealCls(inView, 450 + i * 100).className}>
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#b89968] shrink-0" />
                <span><span className="text-white font-medium">{n.t}:</span> <span className="text-white/70">{n.d}</span></span>
              </li>
            ))}
          </ul>

        </div>
      </div>
    </section>
  );
}

function Safety() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const points = [
    { t: "Zero-Harm Culture", d: "Daily toolbox talks, PPE compliance and a stop-work-authority mindset." },
    { t: "Trained Workforce", d: "Skilled tradespeople with continuous upskilling and welfare support." },
    { t: "Sustainable Sites", d: "Water reuse, silt control, dust suppression and low-VOC materials." },
    { t: "Digital Oversight", d: "Site progress, safety and quality tracked on a single reporting platform." },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-primary " + revealCls(inView, 0).className}>Safety, People & Site</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight whitespace-nowrap " + revealCls(inView, 150).className}>
          A site is only as good as how it treats its people.
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
          Ready to break ground on something built to last?
        </h2>
        <p {...revealCls(inView, 200)} className={"mt-6 text-foreground/70 leading-relaxed " + revealCls(inView, 200).className}>
          Share your drawings, site or brief — our pre-construction team will revert with a
          preliminary approach and timeline within one working day.
        </p>
        <div {...revealCls(inView, 400)} className={"mt-10 flex flex-wrap justify-center gap-3 " + revealCls(inView, 400).className}>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#b89968] text-white px-8 py-3 text-sm font-medium hover:bg-[#a3855a] transition">
            Request a Proposal <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/services/builders" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-3 text-sm hover:border-[#b89968] hover:text-[#b89968] transition">
            Explore Builders & Developers
          </Link>
        </div>
      </div>
    </section>
  );
}
