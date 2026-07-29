import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Facebook, Instagram, Youtube, Linkedin, ChevronRight, ChevronDown } from "lucide-react";
import { useInView, revealCls } from "@/hooks/use-in-view";
import logo from "@/assets/fortuners-logo-new.png";

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.5 0 .2 5.3.2 11.85c0 2.09.55 4.13 1.6 5.93L0 24l6.4-1.68a11.83 11.83 0 0 0 5.65 1.44h.01c6.55 0 11.85-5.3 11.85-11.85 0-3.17-1.23-6.15-3.39-8.43ZM12.06 21.5h-.01a9.65 9.65 0 0 1-4.92-1.35l-.35-.21-3.8 1 1.02-3.7-.23-.38a9.65 9.65 0 0 1-1.48-5.15c0-5.34 4.35-9.68 9.7-9.68 2.59 0 5.02 1.01 6.85 2.84a9.6 9.6 0 0 1 2.83 6.86c0 5.34-4.35 9.68-9.61 9.77Zm5.3-7.25c-.29-.14-1.72-.85-1.98-.95-.27-.1-.46-.14-.66.14-.19.29-.75.95-.92 1.14-.17.19-.34.22-.63.07-.29-.14-1.23-.45-2.35-1.44-.87-.77-1.45-1.72-1.62-2.01-.17-.29-.02-.44.13-.58.13-.13.29-.34.43-.51.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.14-.66-1.58-.9-2.17-.24-.57-.48-.49-.66-.5h-.56c-.19 0-.51.07-.77.36-.27.29-1.01.99-1.01 2.42s1.04 2.81 1.19 3c.14.19 2.05 3.13 4.97 4.39.7.3 1.24.48 1.66.62.7.22 1.33.19 1.83.12.56-.08 1.72-.7 1.96-1.38.24-.68.24-1.26.17-1.38-.07-.12-.26-.19-.55-.34Z" />
    </svg>
  );
}

const explore = [
  { label: "Builders & Developers", to: "/services/builders" },
  { label: "Turnkey Construction", to: "/services/construction" },
  { label: "Interior & Decor", to: "/services/interior" },
  { label: "Plotted Development", to: "/verticals" },
] as const;

const company = [
  { label: "About Us", to: "/about" },
  { label: "Channel Partner", to: "/channel-partner" },
  { label: "Sustainability", to: "/sustainability" },
  { label: "Contact Us", to: "/contact" },
] as const;

const resources = [
  { label: "Blog", to: "/blog" },
] as const;

const OFFICE_ADDRESS =
  "#840, First Floor, 17th Main Road, Sector 3, HSR Layout, Bengaluru, Karnataka 560102";
// `output=embed` renders an interactive map without needing a Maps API key.
const OFFICE_MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(OFFICE_ADDRESS)}&output=embed`;

export function Footer() {
  const { ref, inView } = useInView<HTMLDivElement>(0.1);
  const [openQuick, setOpenQuick] = useState(false);

  return (
    <footer
      ref={ref}
      className="text-white overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, #0a0a0a 0%, #111 40%, #0a0a0a 100%)",
      }}
    >
      {/* Brand lockup */}
      <div {...revealCls(inView, 0)} className={"container-x pt-16 pb-10 text-center " + revealCls(inView, 0).className}>
        <img src={logo} alt="Fortuners Group" className="mx-auto h-32 md:h-44 w-auto mb-6 rounded-2xl" />
        <div className="font-serif tracking-[0.25em] text-2xl sm:text-4xl md:text-6xl text-[#b89968]">
          FORTUNERS GROUP<span className="align-super text-xs">®</span>
        </div>
        <div className="mx-auto mt-4 max-w-md border-t border-white/15 pt-4 text-[0.7rem] md:text-xs tracking-[0.35em] text-white/70">
          BUILDING LEGACIES SINCE INCEPTION
        </div>
      </div>

      <div className="container-x border-t border-white/10 py-14 grid gap-12 md:grid-cols-4">
        {/* Reach Us */}
        <div {...revealCls(inView, 100)} className={revealCls(inView, 100).className}>
          <h3 className="font-serif text-2xl mb-6">Reach Us</h3>
          <div className="space-y-2 text-sm">
            <p>
              <span className="text-[#b89968]">Tel:</span>{" "}
              <a href="tel:+919999999999" className="hover:text-[#b89968]">+91 99999 99999</a>
            </p>
            <p>
              <span className="text-[#b89968]">Email:</span>{" "}
              <a href="mailto:enquiries@fortunersgroup.com" className="hover:text-[#b89968]">enquiries@fortunersgroup.com</a>
            </p>
          </div>

          <div className="mt-6 text-sm">
            <div className="text-[#b89968] mb-1">Hyderabad Office Address:</div>
            <p className="text-white/75 leading-relaxed">
              Plot No. 000, Road No. 00,<br />
              Jubilee Hills, Hyderabad,<br />
              Telangana 500034
            </p>
          </div>

          <div className="mt-5 text-sm">
            <div className="text-[#b89968] mb-1">Bangalore Office Address:</div>
            <p className="text-white/75 leading-relaxed">
              No.00, 1st Main, CKB Layout,<br />
              Marathahalli, Bengaluru,<br />
              Karnataka 560037
            </p>
          </div>

          <div className="mt-6 flex items-center gap-3 flex-nowrap whitespace-nowrap">
            {[
              { href: "#", Icon: Facebook, label: "Facebook" },
              { href: "#", Icon: Instagram, label: "Instagram" },
              { href: "#", Icon: WhatsAppIcon, label: "WhatsApp" },
              { href: "#", Icon: Youtube, label: "YouTube" },
              { href: "#", Icon: Linkedin, label: "LinkedIn" },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[#b89968]/60 text-[#b89968] transition-colors hover:bg-[#b89968] hover:text-black"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
            <button
              onClick={() => setOpenQuick((v) => !v)}
              className="ml-2 inline-flex items-center gap-2 rounded-full border border-white/20 h-9 px-4 text-sm hover:border-[#b89968] hover:text-[#b89968] transition-colors"
              aria-expanded={openQuick}
            >
              Quick Links
              <ChevronDown className={"h-4 w-4 transition-transform " + (openQuick ? "rotate-180" : "")} />
            </button>
          </div>
        </div>

        {/* Explore */}
        <div {...revealCls(inView, 200)} className={revealCls(inView, 200).className}>
          <h3 className="font-serif text-2xl mb-6">Explore</h3>
          <ul className="space-y-3 text-sm">
            {explore.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="group inline-flex items-center gap-2 hover:text-[#b89968]">
                  <ChevronRight className="h-3.5 w-3.5 text-[#b89968]" />
                  <span className="border-b border-transparent group-hover:border-[#b89968]/60">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div {...revealCls(inView, 300)} className={revealCls(inView, 300).className}>
          <h3 className="font-serif text-2xl mb-6">Company</h3>
          <ul className="space-y-3 text-sm">
            {company.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="group inline-flex items-center gap-2 hover:text-[#b89968]">
                  <ChevronRight className="h-3.5 w-3.5 text-[#b89968]" />
                  <span className="border-b border-transparent group-hover:border-[#b89968]/60">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div {...revealCls(inView, 400)} className={revealCls(inView, 400).className}>
          <h3 className="font-serif text-2xl mb-6">Resources</h3>
          <ul className="space-y-3 text-sm">
            {resources.map((l) => (
              <li key={l.label}>
                <Link to={l.to} className="group inline-flex items-center gap-2 hover:text-[#b89968]">
                  <ChevronRight className="h-3.5 w-3.5 text-[#b89968]" />
                  <span className="border-b border-transparent group-hover:border-[#b89968]/60">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <div className="text-[#b89968] text-xs uppercase tracking-widest mb-3">Find Us</div>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <iframe
                src={OFFICE_MAP_SRC}
                title={`Map showing Fortuners Group corporate office at ${OFFICE_ADDRESS}`}
                className="block h-52 w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(OFFICE_ADDRESS)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 text-xs text-white/70 hover:text-[#b89968] transition-colors"
            >
              <ChevronRight className="h-3.5 w-3.5 text-[#b89968]" />
              Open in Google Maps
            </a>
          </div>
        </div>
      </div>

      {openQuick && (
        <div className="container-x pb-8 grid grid-cols-2 md:grid-cols-4 gap-3 text-sm text-white/75">
          <Link to="/projects" className="hover:text-[#b89968]">All Projects</Link>
          <Link to="/services/builders" className="hover:text-[#b89968]">Builders & Construction</Link>
          <Link to="/services/interior" className="hover:text-[#b89968]">Interior & Decor</Link>
          <Link to="/sustainability" className="hover:text-[#b89968]">Sustainability</Link>
          <Link to="/about" className="hover:text-[#b89968]">Our Story</Link>
          <Link to="/verticals" className="hover:text-[#b89968]">Verticals</Link>
          <Link to="/careers" className="hover:text-[#b89968]">Careers</Link>
          <Link to="/media" className="hover:text-[#b89968]">Media</Link>
        </div>
      )}

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-x py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-xs text-white/60">
          <div>© {new Date().getFullYear()} Fortuners Group. All Rights Reserved.</div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <Link to="/terms" className="hover:text-[#b89968]">Terms & Conditions</Link>
            <Link to="/privacy" className="hover:text-[#b89968]">Privacy Policy</Link>
            <Link to="/qhes-policy" className="hover:text-[#b89968]">QHES Policy</Link>
            <Link to="/refund-policy" className="hover:text-[#b89968]">Refund & Cancellation Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
