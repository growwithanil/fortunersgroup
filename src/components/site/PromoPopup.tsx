import { useEffect, useState } from "react";
import { X, TrainFront, Briefcase, GraduationCap, MapPin } from "lucide-react";
import bg from "@/assets/project-2.jpg";

const features = [
  { icon: TrainFront, title: "Near Metro", desc: "Less commute" },
  { icon: Briefcase, title: "Close To Work", desc: "More time at home" },
  { icon: GraduationCap, title: "Near Schools", desc: "Brighter futures" },
  { icon: MapPin, title: "Prime Locations", desc: "Everything within reach" },
];

export function PromoPopup() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("fg_promo_dismissed") === "1") return;
    const t = setTimeout(() => setOpen(true), 1200);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setOpen(false);
    try { sessionStorage.setItem("fg_promo_dismissed", "1"); } catch {}
  };

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Fortuners Homecoming offer"
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-fade-in"
    >
      {/* Backdrop */}
      <button
        aria-label="Close popup"
        onClick={close}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
      />

      {/* Modal */}
      <div className="relative w-full max-w-6xl overflow-hidden rounded-3xl shadow-2xl animate-scale-in">
        {/* Close button */}
        <button
          onClick={close}
          aria-label="Close"
          className="absolute right-4 top-4 z-20 grid h-10 w-10 place-items-center rounded-full bg-white text-black shadow-lg hover:bg-white/90 transition"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Background image + dark overlay */}
        <div className="relative">
          <img
            src={bg}
            alt=""
            className="h-[520px] md:h-[420px] lg:h-[440px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 lg:p-14">
            <div className="grid md:grid-cols-[1.1fr_auto] gap-8 items-start">
              {/* Left copy */}
              <div className="text-white max-w-xl">
                <p className="font-serif text-primary text-2xl md:text-3xl leading-tight">
                  This Season,
                </p>
                <h2 className="mt-2 font-serif text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
                  Come Home To<br />What Matters
                </h2>
                <div className="mt-5 h-px w-40 bg-white/50" />
                <p className="mt-5 text-sm md:text-base tracking-[0.25em] uppercase text-white/90">
                  Less Commute · More Life
                </p>
                <p className="mt-8 flex items-center gap-2 text-primary text-sm md:text-base tracking-widest uppercase">
                  <MapPin className="h-4 w-4" /> Heart Of Whitefield
                </p>
              </div>

              {/* Badge */}
              <div className="hidden md:flex flex-col items-center justify-center">
                <div className="relative grid h-40 w-40 place-items-center rounded-full bg-primary text-primary-foreground text-center p-4 shadow-xl">
                  <div>
                    <div className="font-serif text-xs tracking-widest">HOMECOMING</div>
                    <div className="mt-1 font-serif text-2xl leading-none">Limited</div>
                    <div className="font-serif text-2xl leading-none">Offer</div>
                    <div className="mt-2 text-[10px] tracking-widest opacity-80">*T&amp;C APPLY</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom row: features + save card */}
            <div className="mt-8 grid md:grid-cols-[1fr_auto] gap-6 items-end">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {features.map((f) => (
                  <div key={f.title} className="flex items-center gap-3 text-white">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/40 bg-white/10">
                      <f.icon className="h-4 w-4 text-primary" />
                    </span>
                    <div className="min-w-0">
                      <div className="text-xs md:text-sm uppercase tracking-wider font-semibold truncate">
                        {f.title}
                      </div>
                      <div className="text-[11px] md:text-xs text-white/70 truncate">
                        {f.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="rounded-2xl border border-primary/60 bg-black/60 backdrop-blur px-5 py-4 text-center text-white shadow-lg">
                <div className="text-[10px] tracking-widest uppercase text-white/70">
                  3 &amp; 4 BHK From
                </div>
                <div className="font-serif text-primary text-2xl leading-tight">
                  ₹ 2.43 Cr*
                </div>
                <div className="mt-2 text-[10px] tracking-widest uppercase text-white/70">
                  Save Up To
                </div>
                <div className="font-serif text-primary text-3xl leading-tight">
                  ₹ 12 Lakhs*
                </div>
                <a
                  href="/contact"
                  onClick={close}
                  className="mt-3 inline-block rounded-full bg-primary px-5 py-2 text-xs tracking-widest uppercase text-primary-foreground hover:opacity-90 transition"
                >
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
