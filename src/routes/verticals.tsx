import { createFileRoute } from "@tanstack/react-router";
import { Verticals } from "@/components/site/Verticals";

export const Route = createFileRoute("/verticals")({
  head: () => ({
    meta: [
      { title: "Verticals — Fortuners Group" },
      { name: "description", content: "Residential, commercial, plotted development and logistics — every vertical carries the same promise: excellence without compromise." },
      { property: "og:title", content: "Verticals — Fortuners Group" },
      { property: "og:description", content: "Residential, commercial, plotted and logistics verticals from Fortuners Group." },
    ],
  }),
  component: () => (
    <>
      <div className="pt-24" />
      <Verticals />
    </>
  ),
});
