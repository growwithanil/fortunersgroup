import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/qhes-policy")({
  head: () => ({
    meta: [
      { title: "QHES Policy — Fortuners Group" },
      { name: "description", content: "Quality, Health, Environment, and Safety commitments at Fortuners Group." },
      { property: "og:title", content: "QHES Policy — Fortuners Group" },
      { property: "og:description", content: "Quality, health, environment, and safety at Fortuners Group." },
    ],
  }),
  component: QhesPage,
});

function QhesPage() {
  return (
    <section className="pt-32 pb-24 container-x max-w-4xl">
      <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Our Commitments</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-10">QHES Policy</h1>
      <p className="text-foreground/75 leading-relaxed mb-10">At Fortuners Group, Quality, Health, Environment, and Safety (QHES) is the foundation of every project we deliver. Our policy defines the standards our teams, contractors, and partners must uphold on every site.</p>

      <div className="space-y-8 text-foreground/75 leading-relaxed">
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">Quality</h2>
          <p>We adhere to rigorous quality benchmarks across design, materials, workmanship, and finishing. Independent quality audits are conducted at every key stage of construction.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">Health</h2>
          <p>The health of our workforce, residents, and neighbouring communities is non-negotiable. Regular health checks, hygiene protocols, and awareness programmes are integral to our operations.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">Environment</h2>
          <p>We minimise environmental impact through IGBC-aligned design, responsible sourcing, water and energy conservation, waste reduction, and preservation of existing green cover wherever possible.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">Safety</h2>
          <p>Zero-harm is our target. Every site enforces strict PPE compliance, safety inductions, hazard identification protocols, and continuous training.</p>
        </div>
      </div>
    </section>
  );
}
