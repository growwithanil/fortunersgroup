import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/fortuners-logo-new.png.asset.json";

const services = [
  { label: "Builders & Developers", to: "/services/builders" },
  { label: "Construction", to: "/services/construction" },
  { label: "Interior & Decor", to: "/services/interior" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 nav-glossy ${
        scrolled || mobileOpen ? "py-0" : ""
      }`}
    >
      <div className="container-x flex items-center justify-between py-5">
        <Link to="/" className="flex items-center gap-3" onClick={closeMobile}>
          <img src={logo.url} alt="Fortuners Group" className="h-14 md:h-20 w-auto" />
          <span className="text-2xl md:text-3xl gold-title tracking-tight">
            Fortuners Group
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-9 text-sm">
          <Link
            to="/"
            className="gold-link"
            activeOptions={{ exact: true }}
          >
            Home
          </Link>
          <Link
            to="/about"
            className="gold-link"
          >
            About
          </Link>

          {/* Services dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 gold-link"
              onClick={() => setServicesOpen((v) => !v)}
              aria-expanded={servicesOpen}
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform text-[#d9b877] ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-60 transition-all ${
                servicesOpen ? "opacity-100 visible" : "opacity-0 invisible"
              }`}
            >
              <div className="rounded-2xl nav-glossy overflow-hidden">
                {services.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    className="block px-5 py-3 text-sm gold-link hover:bg-white/5 transition-colors"
                    onClick={() => setServicesOpen(false)}
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link to="/projects" className="gold-link">
            Projects
          </Link>
          <Link to="/gallery" className="gold-link">
            Gallery
          </Link>
          <Link to="/contact" className="gold-link">
            Contact
          </Link>
        </nav>
        <Link
          to="/contact"
          className="hidden md:inline-flex items-center rounded-full gold-btn px-5 py-2.5 text-sm font-medium"
        >
          Enquire Now
        </Link>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-full w-10 h-10 text-[#d9b877] hover:bg-white/5 transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${
          mobileOpen ? "max-h-[calc(100vh-5rem)]" : "max-h-0"
        }`}
      >
        <nav className="container-x flex flex-col py-4 gap-1 text-base border-t border-[#d9b877]/20">
          <Link
            to="/"
            className="py-3 gold-link"
            activeOptions={{ exact: true }}
            onClick={closeMobile}
          >
            Home
          </Link>
          <Link to="/about" className="py-3 gold-link" onClick={closeMobile}>
            About
          </Link>

          <button
            type="button"
            className="py-3 flex items-center justify-between gold-link"
            onClick={() => setMobileServicesOpen((v) => !v)}
            aria-expanded={mobileServicesOpen}
          >
            Services
            <ChevronDown className={`w-4 h-4 transition-transform text-[#d9b877] ${mobileServicesOpen ? "rotate-180" : ""}`} />
          </button>
          <div className={`overflow-hidden transition-[max-height] duration-300 ${mobileServicesOpen ? "max-h-60" : "max-h-0"}`}>
            <div className="pl-4 flex flex-col border-l border-[#d9b877]/25 ml-1">
              {services.map((s) => (
                <Link
                  key={s.to}
                  to={s.to}
                  className="py-2.5 text-sm gold-link"
                  onClick={closeMobile}
                >
                  {s.label}
                </Link>
              ))}
            </div>
          </div>

          <Link to="/projects" className="py-3 gold-link" onClick={closeMobile}>
            Projects
          </Link>
          <Link to="/gallery" className="py-3 gold-link" onClick={closeMobile}>
            Gallery
          </Link>
          <Link to="/contact" className="py-3 gold-link" onClick={closeMobile}>
            Contact
          </Link>

          <Link
            to="/contact"
            className="mt-3 mb-2 inline-flex items-center justify-center rounded-full gold-btn px-5 py-3 text-sm font-medium"
            onClick={closeMobile}
          >
            Enquire
          </Link>
        </nav>
      </div>
    </header>
  );
}
