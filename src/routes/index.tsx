import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Verticals } from "@/components/site/Verticals";
import { Projects } from "@/components/site/Projects";
import { Sustainability } from "@/components/site/Sustainability";
import { Standard } from "@/components/site/Standard";
import { Gallery } from "@/components/site/Gallery";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fortuners Group — Premium Residences & Commercial Spaces" },
      { name: "description", content: "Fortuners Group builds premium residences, future-ready workspaces and thoughtfully planned communities across Hyderabad and Bangalore." },
      { property: "og:title", content: "Fortuners Group — Premium Residences & Commercial Spaces" },
      { property: "og:description", content: "Homes crafted with honesty and enduring quality." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Verticals />
      <Projects />
      <Gallery />
      <Sustainability />
      <Standard />
    </>
  );
}
