import { createFileRoute, Link } from "@tanstack/react-router";
import { useInView, revealCls } from "@/hooks/use-in-view";
import { Sofa, Lamp, Palette, Ruler, Sparkles, PackageCheck, ArrowRight } from "lucide-react";
import heroImg from "@/assets/interior-hero.jpg";
import studioImg from "@/assets/interior-studio.jpg";
import signatureImg from "@/assets/interior-signature.jpg";
import offeringDesign from "@/assets/interior-offering-design.jpg";
import offeringModular from "@/assets/interior-offering-modular.jpg";
import offeringHomeOffice from "@/assets/interior-offering-homeoffice.jpg";
import offeringTurnkey from "@/assets/interior-offering-turnkey.jpg";

export const Route = createFileRoute("/services/interior")({
  head: () => ({
    meta: [
      { title: "Interior & Decor — Fortuners Group" },
      { name: "description", content: "Bespoke interior design and decor — timeless residences and workspaces shaped by material, light and proportion." },
      { property: "og:title", content: "Interior & Decor — Fortuners Group" },
      { property: "og:description", content: "Interior design and decor for residences and workspaces." },
    ],
  }),
  component: InteriorPage,
});

function InteriorPage() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Intro />
      <Offerings />
      <Services />
      <Process />
      <Signature />
      <Materials />
      <CTA />
    </div>
  );
}

function Offerings() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const items = [
    { img: offeringDesign, t: "Interior Design", d: "Bespoke concepts, layouts and material stories tailored to how you live." },
    { img: offeringModular, t: "Modular Interiors", d: "Precision-engineered kitchens and wardrobes with concealed hardware and clean lines." },
    { img: offeringHomeOffice, t: "Home & Office Interior Solutions", d: "Residential warmth and workplace clarity — designed and delivered under one roof." },
    { img: offeringTurnkey, t: "Turnkey Interior Projects", d: "Concept to keys — design, build, style and handover managed end to end." },
  ];
  return (
    <section ref={ref} className="py-24 bg-[#0b0b0b] text-white">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-[#b89968] " + revealCls(inView, 0).className}>Our Offerings</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl " + revealCls(inView, 150).className}>
          Four ways we shape your space.
        </h2>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <div
              key={it.t}
              {...revealCls(inView, 300 + i * 120)}
              className={"group relative overflow-hidden rounded-3xl border border-white/10 bg-[#141414] transition hover:-translate-y-1 hover:border-[#b89968]/60 " + revealCls(inView, 300 + i * 120).className}
            >
              <div className="relative h-56 overflow-hidden">
                <img src={it.img} alt={it.t} loading="lazy" width={1024} height={1024} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl text-white">{it.t}</h3>
                <p className="mt-3 text-sm text-white/70 leading-relaxed">{it.d}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#b89968] text-[#0b0b0b] px-8 py-3 text-sm font-medium hover:bg-[#c9aa78] transition">
            Enquire Now <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function Hero() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <section ref={ref} className="relative pt-40 pb-24 bg-[#0b0b0b] text-white">
      <div
        className="absolute inset-0 opacity-45"
        style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/70 via-[#0b0b0b]/60 to-[#0b0b0b]" aria-hidden />
      <div className="container-x relative">
        <p {...revealCls(inView, 0)} className={"text-xl md:text-2xl tracking-[0.3em] uppercase text-[#b89968] " + revealCls(inView, 0).className}>Fortuners Decor</p>
        <h1 {...revealCls(inView, 150)} className={"mt-4 font-serif text-2xl md:text-3xl leading-[1.1] max-w-4xl " + revealCls(inView, 150).className}>
          <span className="text-[#b89968]">Interior & Decor</span>
        </h1>
        <p {...revealCls(inView, 300)} className={"mt-6 max-w-2xl text-base md:text-lg text-white/75 leading-relaxed " + revealCls(inView, 300).className}>
          Interiors that feel considered, not decorated. We shape material, light and proportion
          into homes and workspaces that age with grace — delivered with a curator's eye.
        </p>
        <div {...revealCls(inView, 450)} className={"mt-10 flex flex-wrap gap-3 " + revealCls(inView, 450).className}>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#b89968] text-[#0b0b0b] px-6 py-3 text-sm font-medium hover:bg-[#c9aa78] transition">
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-white/30 px-6 py-3 text-sm hover:border-[#b89968] hover:text-[#b89968] transition">
            View Interiors
          </Link>
        </div>
      </div>
    </section>
  );
}

function Intro() {
  const { ref, inView } = useInView<HTMLDivElement>(0.15);
  const stats = [
    { n: "300+", l: "Interiors Delivered" },
    { n: "18", l: "In-House Designers" },
    { n: "60+", l: "Trusted Ateliers" },
    { n: "12wk", l: "Avg. Turnaround" },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-x grid gap-14 md:grid-cols-2 items-center">
        <div>
          <p {...revealCls(inView, 0)} className={"text-base md:text-lg tracking-[0.3em] uppercase text-primary " + revealCls(inView, 0).className}>Fortuners Decor</p>
          <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-xl md:text-2xl leading-tight " + revealCls(inView, 150).className}>
            A studio for spaces that quietly hold their own.
          </h2>
          <p {...revealCls(inView, 300)} className={"mt-6 text-foreground/75 leading-relaxed " + revealCls(inView, 300).className}>
            Our in-house studio partners with residents, corporates and hospitality clients to
            design interiors that are personal, poised and precisely built. From layout planning
            to the final styled shelf, one team owns the outcome.
          </p>
          <p {...revealCls(inView, 450)} className={"mt-4 text-foreground/75 leading-relaxed " + revealCls(inView, 450).className}>
            We work in a language of natural stone, warm woods, tactile textiles and calibrated
            light — never trend-first, always timeless.
          </p>
        </div>
        <div {...revealCls(inView, 300)} className={revealCls(inView, 300).className}>
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <img src={studioImg} alt="Fortuners bespoke interior" className="w-full h-[520px] object-cover" />
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

function Services() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const items = [
    { Icon: Sofa, t: "Bespoke Residential", d: "Homes designed around your rituals, rhythms and cherished objects." },
    { Icon: Ruler, t: "Workspace Interiors", d: "Offices that hold focus and hospitality in balance." },
    { Icon: Lamp, t: "Lighting Design", d: "Layered ambient, task and accent light — calibrated room by room." },
    { Icon: Palette, t: "Material & Colour", d: "Palettes rooted in natural material and the way it ages." },
    { Icon: PackageCheck, t: "Furniture & Curation", d: "Sourced, custom-made and quietly perfect for each space." },
    { Icon: Sparkles, t: "Styling & Handover", d: "Every corner set, every finish signed off, keys handed styled." },
  ];
  return (
    <section ref={ref} className="py-24 bg-[#faf8f5]">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-primary " + revealCls(inView, 0).className}>What We Design</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl " + revealCls(inView, 150).className}>
          Considered interiors, end to end.
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
    { n: "01", t: "Discover", d: "Listen deeply, walk the site, capture how you want to live or work." },
    { n: "02", t: "Concept", d: "Mood, plan, palette and material board — the design's north star." },
    { n: "03", t: "Design", d: "Detailed drawings, lighting, joinery specs and 3D visualisation." },
    { n: "04", t: "Procure", d: "Sourcing, custom fabrication and material sign-offs on site." },
    { n: "05", t: "Execute", d: "On-site build with a dedicated project manager and QC checks." },
    { n: "06", t: "Style & Handover", d: "Art, textiles and objects placed — you walk in, everything ready." },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-primary " + revealCls(inView, 0).className}>How We Work</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight whitespace-nowrap " + revealCls(inView, 150).className}>
          Six unhurried steps from brief to move-in.
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

function Signature() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  return (
    <section ref={ref} className="py-24 bg-[#0b0b0b] text-white">
      <div className="container-x grid gap-14 md:grid-cols-2 items-center">
        <div {...revealCls(inView, 0)} className={revealCls(inView, 0).className}>
          <div className="relative rounded-[2.5rem] overflow-hidden">
            <img src={signatureImg} alt="Signature interior detail" className="w-full h-[520px] object-cover" />
          </div>
        </div>
        <div>
          <p {...revealCls(inView, 150)} className={"text-xs tracking-[0.35em] uppercase text-[#b89968] " + revealCls(inView, 150).className}>Our Signature</p>
          <h2 {...revealCls(inView, 300)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight " + revealCls(inView, 300).className}>
            Warm. Grounded. Timelessly composed.
          </h2>
          <p {...revealCls(inView, 450)} className={"mt-6 text-white/70 leading-relaxed " + revealCls(inView, 450).className}>
            Every Fortuners interior carries a quiet through-line — honest materials, generous
            proportions, layered light and moments of craft you notice only on the second look.
          </p>
          <ul className="mt-8 space-y-3 text-sm text-white/80">
            {[
              "Natural stone, solid wood, hand-troweled plaster.",
              "Bespoke joinery built in our vetted ateliers.",
              "Layered lighting scenes designed room by room.",
              "Art and object curation as part of the brief.",
            ].map((n, i) => (
              <li key={n} {...revealCls(inView, 600 + i * 100)} className={"flex items-center gap-3 " + revealCls(inView, 600 + i * 100).className}>
                <span className="h-1.5 w-1.5 rounded-full bg-[#b89968]" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Materials() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const points = [
    { t: "Stone", d: "Italian marble, Indian granite and quartzite — matched slab by slab." },
    { t: "Wood", d: "Solid teak, oak and walnut — grain-matched and hand-finished." },
    { t: "Textile", d: "Linen, wool and hand-woven silk — sourced from craft clusters." },
    { t: "Metal", d: "Brushed brass, patinated bronze and blackened steel detailing." },
  ];
  return (
    <section ref={ref} className="py-24">
      <div className="container-x">
        <p {...revealCls(inView, 0)} className={"text-xs tracking-[0.35em] uppercase text-primary " + revealCls(inView, 0).className}>Materials We Love</p>
        <h2 {...revealCls(inView, 150)} className={"mt-4 font-serif text-4xl md:text-5xl leading-tight max-w-3xl " + revealCls(inView, 150).className}>
          A palette that only gets better with time.
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
          Let's design an interior that feels like you.
        </h2>
        <p {...revealCls(inView, 200)} className={"mt-6 text-foreground/70 leading-relaxed " + revealCls(inView, 200).className}>
          Share a floor plan, a mood or a memory — our studio will reach out within one working
          day to schedule a discovery conversation.
        </p>
        <div {...revealCls(inView, 400)} className={"mt-10 flex flex-wrap justify-center gap-3 " + revealCls(inView, 400).className}>
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#b89968] text-white px-8 py-3 text-sm font-medium hover:bg-[#a3855a] transition">
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/gallery" className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-8 py-3 text-sm hover:border-[#b89968] hover:text-[#b89968] transition">
            Browse Our Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}
