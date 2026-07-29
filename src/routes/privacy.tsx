import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Fortuners Group" },
      { name: "description", content: "How Fortuners Group collects, uses, and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Fortuners Group" },
      { property: "og:description", content: "Privacy practices at Fortuners Group." },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <section className="pt-32 pb-24 container-x max-w-4xl">
      <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Legal</p>
      <h1 className="font-serif text-5xl md:text-6xl mb-10">Privacy Policy</h1>

      <div className="space-y-8 text-foreground/75 leading-relaxed">
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">1. Information We Collect</h2>
          <p>We collect information you provide directly, such as your name, email address, phone number, and inquiry details when you fill out forms on our website. We may also collect basic technical information such as IP address, browser type, and pages visited.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">2. How We Use Information</h2>
          <p>Your information is used to respond to inquiries, share information about our projects, improve our services, and communicate with you regarding matters you have opted in for. We do not sell your data to third parties.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">3. Cookies</h2>
          <p>Our website may use cookies and similar technologies to enhance your browsing experience. You can control cookie preferences through your browser settings.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">4. Data Security</h2>
          <p>We take reasonable technical and organisational measures to protect your personal information from unauthorised access, alteration, or disclosure.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">5. Your Rights</h2>
          <p>You may request access to, correction of, or deletion of your personal data by writing to <a href="mailto:privacy@fortunersgroup.com" className="text-[#b89968] hover:underline">privacy@fortunersgroup.com</a>.</p>
        </div>
        <div>
          <h2 className="font-serif text-2xl text-foreground mb-3">6. Updates</h2>
          <p>This policy may be updated periodically. Continued use of the website after any changes indicates acceptance of the updated policy.</p>
        </div>
      </div>
    </section>
  );
}
