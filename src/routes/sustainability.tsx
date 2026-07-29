import { createFileRoute } from "@tanstack/react-router";
import { Sustainability } from "@/components/site/Sustainability";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — Fortuners Group" },
      { name: "description", content: "Less footprint, more life. How Fortuners Group builds to consume less, conserve more, and age responsibly." },
      { property: "og:title", content: "Sustainability — Fortuners Group" },
      { property: "og:description", content: "Green standards and sustainable practices behind every Fortuners community." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24" />
      <Sustainability />
    </>
  ),
});
