import { useInView, revealCls } from "@/hooks/use-in-view";
import purposeImg from "@/assets/principle-purpose.jpg";
import promiseImg from "@/assets/interior.jpg";

export function Principles() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="bg-[#faf8f5] py-20 md:py-28">
      <div className="container-x">
        <div ref={ref} className="text-center max-w-none mx-auto">
          <h2
            {...revealCls(inView, 0)}
            className={`font-serif text-3xl md:text-4xl lg:text-5xl text-[#8b6a2f] leading-tight md:whitespace-nowrap ${revealCls(inView, 0).className}`}
          >
            The Principles That Shape Every Project.
          </h2>
          <p
            {...revealCls(inView, 160)}
            className={`mt-5 max-w-3xl mx-auto text-[#5b4a34] ${revealCls(inView, 160).className}`}
          >
            Two questions define every project we undertake. Why are we building it?
            And who are we building it for? Our answer remains the same—people.
          </p>
        </div>

        {/* Our Purpose */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            {...revealCls(inView, 200)}
            className={revealCls(inView, 200).className}
          >
            <img
              src={purposeImg}
              alt="Our Purpose — spaces designed for lasting moments"
              loading="lazy"
              className="w-full h-[380px] md:h-[460px] object-cover rounded-[2rem] shadow-sm"
            />
          </div>
          <div
            {...revealCls(inView, 280)}
            className={`md:pl-6 md:border-l md:border-[#e0d3b7] ${revealCls(inView, 280).className}`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[#b89968] font-medium">
              Our Purpose
            </p>
            <div className="mt-6 space-y-5 text-[#3a2f22] leading-[1.9] text-[15px] md:text-base">
              <p>
                We build for the moments that matter long after a project is
                completed. The family dinners that become traditions. The businesses
                that grow with confidence. The workplaces that inspire innovation. The
                homes that always feel like they belong. At Fortuners Group,
                construction is never just about concrete, steel, or design. It is
                about creating spaces where people live, work, celebrate, and build
                their future. Every development, every structure, and every interior
                is thoughtfully crafted to deliver comfort, functionality, and lasting
                value.
              </p>
              <p>
                Our purpose is simple—to create spaces that enrich lives today and
                continue serving generations tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Our Promise */}
        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div
            {...revealCls(inView, 200)}
            className={`md:order-2 ${revealCls(inView, 200).className}`}
          >
            <img
              src={promiseImg}
              alt="Our Promise — homes built on lasting trust"
              loading="lazy"
              className="w-full h-[380px] md:h-[460px] object-cover rounded-[2rem] shadow-sm"
            />
          </div>
          <div
            {...revealCls(inView, 280)}
            className={`md:order-1 md:pr-6 md:border-r md:border-[#e0d3b7] ${revealCls(inView, 280).className}`}
          >
            <p className="text-sm tracking-[0.3em] uppercase text-[#b89968] font-medium">
              Our Promise
            </p>
            <div className="mt-6 space-y-5 text-[#3a2f22] leading-[1.9] text-[15px] md:text-base">
              <p>
                Every Fortuners project is built on promises that are visible,
                measurable, and meaningful. We deliver what we commit. We ensure what
                you see is what you receive. We uphold uncompromising standards of
                quality, transparency, and craftsmanship at every stage.
              </p>
              <p>
                Our relationship doesn't end with project completion—it begins there.
                Because trust is not built through brochures or blueprints. It is built
                by consistently delivering on our word, project after project.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
