import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Fortuners Group" },
      { name: "description", content: "Speak with the Fortuners Group team about a home, workspace, or partnership." },
      { property: "og:title", content: "Contact — Fortuners Group" },
      { property: "og:description", content: "Get in touch with Fortuners Group." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24" />
      <Contact />
    </>
  ),
});
