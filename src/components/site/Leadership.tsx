import { useInView } from "@/hooks/use-in-view";
import chairmanImg from "@/assets/leader-chairman.jpg";
import mdImg from "@/assets/team-2.jpg";

const leaders = [
  {
    name: "Mr. Gowtam Naik",
    role: "Managing Director",
    image: chairmanImg,
  },
  {
    name: "Mr. Muheeb Ul Haq",
    role: "Managing Director",
    image: mdImg,
  },
];

export function Leadership() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section
      className="relative w-full overflow-hidden py-20 md:py-28"
      style={{ backgroundColor: "#faf8f5" }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #8b7355 0, #8b7355 1px, transparent 1px, transparent 24px), repeating-linear-gradient(-45deg, #8b7355 0, #8b7355 1px, transparent 1px, transparent 24px)",
        }}
      />
      <div
        ref={ref}
        className={`relative mx-auto grid max-w-7xl grid-cols-1 items-start gap-10 px-6 md:grid-cols-2 md:gap-16 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div>
          <h2
            className="font-serif tracking-tight leading-[1.05]"
            style={{
              fontSize: "clamp(2rem, 4vw, 3.25rem)",
              color: "#b89968",
            }}
          >
            The Minds Behind the Vision
          </h2>
          <p
            className="mt-6 md:mt-8 font-sans text-base md:text-lg leading-relaxed"
            style={{ color: "#4a4038" }}
          >
            As partners, we founded Fortuner's Group with a shared vision—to build
            spaces defined by quality, integrity, and lasting value. Every project
            reflects our commitment to transparency, innovation, and customer trust.
            We believe true success is measured not by the structures we create, but
            by the relationships we build and the lives we enrich.
          </p>
          <div
            className="mt-8 h-px w-full"
            style={{
              background:
                "linear-gradient(90deg, rgba(184,153,104,0.5), transparent)",
            }}
          />
        </div>

        {/* Both partners side by side */}
        <div className="relative">
          <div
            className="pointer-events-none absolute inset-x-4 top-4 bottom-12 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(184,153,104,0.35), transparent 70%)",
            }}
          />
          <div className="relative z-10 grid grid-cols-2 gap-4 md:gap-6">
            {leaders.map((leader) => (
              <figure key={leader.name} className="group m-0">
                <div
                  className="overflow-hidden rounded-2xl"
                  style={{
                    boxShadow:
                      "0 0 0 1px rgba(184,153,104,0.3), 0 18px 40px -18px rgba(42,37,32,0.4)",
                  }}
                >
                  <img
                    src={leader.image}
                    alt={`${leader.name}, ${leader.role}`}
                    loading="lazy"
                    className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <figcaption>
                  <p
                    className="mt-3 font-serif text-base md:text-lg leading-tight"
                    style={{ color: "#2a2520" }}
                  >
                    {leader.name}
                  </p>
                  <p className="font-sans text-xs md:text-sm" style={{ color: "#8b7355" }}>
                    {leader.role}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
