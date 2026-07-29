import { createFileRoute } from "@tanstack/react-router";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Fortuners Group" },
      { name: "description", content: "On-site photography of Fortuners Group developments — architecture, elevations, landscape and community vantage points." },
      { property: "og:title", content: "Gallery — Fortuners Group" },
      { property: "og:description", content: "A closer look at addresses delivered by Fortuners Group." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24" />
      <Gallery />
    </>
  ),
});
