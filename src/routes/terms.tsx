import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Fortuners Group" },
      { name: "description", content: "Terms and conditions governing the use of the Fortuners Group website and services." },
      { property: "og:title", content: "Terms & Conditions — Fortuners Group" },
      { property: "og:description", content: "Terms of use for Fortuners Group." },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <section className="pt-32 pb-24 container-x max-w-4xl">
      <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Legal</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-10">Terms & Conditions</h1>

      <div className="space-y-8 text-foreground/75 leading-relaxed">
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">1. Acceptance of Terms</h2>
          <p>By accessing and using the Fortuners Group website, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree, please discontinue use of this website.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">2. Use of Content</h2>
          <p>All content on this website — including text, images, videos, renderings, plans, and logos — is the property of Fortuners Group and is protected under applicable copyright and trademark laws. You may not reproduce, distribute, or modify any content without prior written permission.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">3. Project Information</h2>
          <p>Renderings, floor plans, specifications, and images are indicative and for illustrative purposes only. Final delivered products may vary. All communication regarding bookings, allotments, and payments will be governed by the specific agreement executed between the buyer and Fortuners Group.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">4. Third-Party Links</h2>
          <p>This website may contain links to third-party websites. Fortuners Group is not responsible for the content or practices of any linked sites.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">5. Limitation of Liability</h2>
          <p>Fortuners Group shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of, or inability to use, this website.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">6. Governing Law</h2>
          <p>These terms are governed by the laws of India. Any disputes will be subject to the exclusive jurisdiction of the courts of Hyderabad, Telangana.</p>
        </div>
      </div>
    </section>
  );
}
