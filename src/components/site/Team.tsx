import { Award, CalendarCheck, MessagesSquare, ShieldCheck } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const strengths = [
  { title: "Qualified Industry Experts", Icon: Award },
  { title: "Uncompromising Quality Standards", Icon: ShieldCheck },
  { title: "Transparent Communication", Icon: MessagesSquare },
  { title: "Timely Project Execution", Icon: CalendarCheck },
];

export function Team() {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section className="w-full bg-white py-20 md:py-28">
      <div
        ref={ref}
        className={`mx-auto max-w-7xl px-6 transition-all duration-1000 ${
          inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="text-center">
          <h2
            className="font-serif tracking-tight leading-[1.05]"
            style={{ fontSize: "clamp(2rem, 4vw, 3.25rem)", color: "#b89968" }}
          >
            Where Great Projects Begin—with Great People
          </h2>
          <p
            className="mx-auto mt-4 max-w-2xl font-sans text-base md:text-lg"
            style={{ color: "#4a4038" }}
          >
            Behind every Fortuners Group project is a team driven by expertise, passion, and a
            shared commitment to excellence.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 md:gap-10">
          {strengths.map(({ title, Icon }, i) => (
            <div
              key={title}
              className={`border-t pt-6 transition-all duration-700 ${
                inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
              style={{
                borderColor: "rgba(184,153,104,0.5)",
                transitionDelay: `${150 + i * 120}ms`,
              }}
            >
              <span
                className="flex h-12 w-12 items-center justify-center rounded-full"
                style={{ backgroundColor: "rgba(184,153,104,0.12)" }}
              >
                <Icon className="h-6 w-6" strokeWidth={1.5} style={{ color: "#b89968" }} />
              </span>
              <h3
                className="mt-4 font-serif text-xl md:text-2xl leading-snug"
                style={{ color: "#2a2520" }}
              >
                {title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
