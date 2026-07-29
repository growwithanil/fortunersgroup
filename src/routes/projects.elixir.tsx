import { createFileRoute } from "@tanstack/react-router";
import { Download, MapPin, Phone, Mail, Building2, Home, Car, ArrowUpDown } from "lucide-react";
import brochure from "@/assets/fortuners-infra-elixir-brochure.pdf.asset.json";

export const Route = createFileRoute("/projects/elixir")({
  head: () => ({
    meta: [
      { title: "Fortuners Infra Elixir — Premium Residences in Chandapura, Bangalore" },
      { name: "description", content: "Fortuners Infra Elixir — 60 thoughtfully designed 1, 2 & 3 BHK residences with world-class amenities at Chandapura, Anekal Taluk, Bangalore." },
      { property: "og:title", content: "Fortuners Infra Elixir — Premium Residences" },
      { property: "og:description", content: "60 residences · 4 floors · Basement parking · Clubhouse & 25+ amenities. RERA approved." },
    ],
  }),
  component: ElixirPage,
});

const unitMix = [
  { no: "2", type: "2 BHK + Study", facing: "North", sba: "1288", uds: "810" },
  { no: "3", type: "1 BHK", facing: "North", sba: "629", uds: "395" },
  { no: "4", type: "2 BHK", facing: "East", sba: "1095", uds: "689" },
  { no: "13", type: "2 BHK", facing: "East", sba: "1050", uds: "660" },
  { no: "14", type: "2 BHK", facing: "East", sba: "918", uds: "577" },
  { no: "15", type: "3 BHK", facing: "East", sba: "1212", uds: "762" },
];

const outdoorAmenities = [
  "Grand Walk", "Gazebo", "Swimming Pool Deck", "Trampoline", "Swimming Pool",
  "Yoga Court", "Kids Pool", "Pet Park", "Peoples Plaza", "Outdoor Chalk Boards",
  "Amphitheatre", "Sand Pit for Toddlers", "Climbing Wall", "Jogging Track",
  "Stage Performance Area", "Barbeque Zone", "Kids Play Area", "Party Lawn",
  "Seating Plaza", "Meditation Zone", "Half Basketball Court", "Elders Park",
  "Cricket Net", "Outdoor Exercise Station", "Garden Benches",
];

const clubhouse = [
  "Party Hall", "Departmental Store", "Laundry", "Library", "Table Tennis",
  "Pool Table", "Foosball", "Children Video Game Room", "Gym", "Aerobics Centre",
  "Chess", "Carrom", "Association Admin Office",
];

const features = [
  "App Based Intercom", "Entrance Arch", "Power Backup", "Visitor Parking",
  "CCTV Surveillance", "Video Calling Door Provision", "Firefighting Equipment on Each Floor",
  "24/7 Water Supply", "Rainwater Harvesting", "2 Borewells",
  "EV Charging Stations", "Servant Toilets", "Security Rooms", "Sewage Treatment Plant",
  "24/7 Security", "Vaastu Compliant", "LED Lights for Common Area",
  "Solar Lights for Open Spaces", "Reserved Parking for Handicapped", "Drip Irrigation",
];

const specs = [
  { title: "Structure", body: "RCC framed structure designed to IS code using M25/M20 grade designer concrete as recommended by the structural engineer." },
  { title: "Walls & Plastering", body: "External walls with 6\" solid concrete blocks; internal walls with 4\" solid concrete blocks. Double-coat sponge finish for internal and external surfaces." },
  { title: "Flooring", body: "2×2 nano-coated vitrified tiles in hall, dining and bedrooms with 4\" skirting. Anti-skid ceramic tiles in balcony, utility and toilets." },
  { title: "Doors", body: "Main door in teak wood frame with teak wood shutter. Internal doors in sal wood frame with designer skin-moulded shutters." },
  { title: "Kitchen", body: "20mm black granite platform, stainless steel sink, glazed tile dado 2ft above platform. Washing machine point and Aquaguard provision." },
  { title: "Painting", body: "Interiors — two coats of Birla wall care putty with Asian Tractor emulsion. Exteriors — one coat primer with two coats of Apex." },
  { title: "Electrical", body: "Copper wiring with Anchor or equivalent switches. AC point in master bedroom. TV and telephone points in living and master bedroom." },
  { title: "Toilet", body: "Anti-skid flooring, glazed ceramic wall tiles up to 7ft, concealed plumbing with Cera or equivalent CP fittings and sanitaryware." },
  { title: "Lifts & Lobby", body: "Marble/granite lobby flooring. Two automatic lifts of 6 and 8 passenger capacity — Johnson or equivalent." },
  { title: "Backup & Water", body: "Sound-proof standby generator for common areas; 1 KVA power backup per flat. Adequate borewell-fed water supply." },
];

const nearby = [
  { title: "Tech Parks", items: ["Infosys — 11 km", "Wipro — 9 km", "HCL Technologies — 7 km", "Tech Mahindra — 9 km"] },
  { title: "Schools & Colleges", items: ["Mega International School — 300 m", "Edify School — 6.3 km", "Ebenezer International — 6 km", "Alliance University — 10 km"] },
  { title: "Hospitals", items: ["Athreya Hospital — 2.2 km", "Sparsh Hospital — 3 km", "Narayana Hrudayalaya — 3.5 km", "Columbia Asia — 19 km"] },
  { title: "Connectivity", items: ["Old Chandapura Bus Stand — 400 m", "Bommasandra Metro — 3 km", "D-Mart — 3 km", "Hosur Airport — 22 km"] },
];

function ElixirPage() {
  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[70svh] min-h-[500px] w-full overflow-hidden bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(201,185,154,0.28)_0%,_rgba(0,0,0,0)_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-[#1a1408] to-black" />
        <div className="relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
          <p className="font-sans uppercase tracking-[0.5em] text-[0.7rem] md:text-sm mb-4 text-[#d9b877]">
            Signature Portfolio · RERA Approved
          </p>
          <h1
            className="font-serif tracking-[0.04em] leading-none text-transparent bg-clip-text"
            style={{
              fontSize: "clamp(2.5rem, 7vw, 6rem)",
              backgroundImage: "linear-gradient(180deg, #f6e6c1 0%, #d9b877 35%, #8b6a2f 62%, #f0d497 85%, #6b4a1f 100%)",
              filter: "drop-shadow(0 6px 30px rgba(201,155,80,0.35))",
            }}
          >
            FORTUNERS INFRA ELIXIR
          </h1>
          <div className="mt-5 h-px w-40 md:w-60" style={{ background: "linear-gradient(90deg, transparent, rgba(217,184,119,0.85), transparent)" }} />
          <p className="mt-5 font-serif italic text-lg md:text-xl text-[#e6d3a3]">
            Crafting the Home of Your Dreams
          </p>
          <a
            href={brochure.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c9b99a] px-7 py-3 text-sm tracking-widest uppercase text-black hover:bg-[#d9b877] transition"
          >
            <Download className="h-4 w-4" /> Download Brochure
          </a>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 container-x max-w-5xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">The Project</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-8">A premier address in Chandapura.</h2>
        <p className="text-foreground/75 leading-relaxed text-lg max-w-3xl">
          Step into Fortuners Infra Elixir — a residential development designed to offer the ultimate in urban sophistication.
          Situated in a highly sought-after pocket of South Bangalore, Elixir presents a collection of elegantly crafted apartments
          that seamlessly blend contemporary design with everyday functionality.
        </p>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Home, label: "60 Flats" },
            { icon: Building2, label: "4 Floors" },
            { icon: Car, label: "Basement Parking" },
            { icon: ArrowUpDown, label: "2 Lifts" },
          ].map((s) => (
            <div key={s.label} className="rounded-2xl border border-[#c9b99a]/30 p-6 text-center">
              <s.icon className="mx-auto h-6 w-6 text-[#b89968]" />
              <div className="mt-3 font-serif text-lg">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Unit mix */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="container-x max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Floor Plans</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-10">A layout for every lifestyle.</h2>
          <div className="overflow-x-auto rounded-2xl border border-[#c9b99a]/30 bg-white">
            <table className="w-full text-left text-sm">
              <thead className="bg-[#1a1408] text-[#d9b877]">
                <tr>
                  <th className="px-6 py-4 font-serif font-normal tracking-widest uppercase text-xs">Unit</th>
                  <th className="px-6 py-4 font-serif font-normal tracking-widest uppercase text-xs">Type</th>
                  <th className="px-6 py-4 font-serif font-normal tracking-widest uppercase text-xs">Facing</th>
                  <th className="px-6 py-4 font-serif font-normal tracking-widest uppercase text-xs">SBA (Sft)</th>
                  <th className="px-6 py-4 font-serif font-normal tracking-widest uppercase text-xs">UDS (Sft)</th>
                </tr>
              </thead>
              <tbody>
                {unitMix.map((u) => (
                  <tr key={u.no} className="border-t border-[#c9b99a]/20">
                    <td className="px-6 py-4 font-serif text-lg">{u.no}</td>
                    <td className="px-6 py-4">{u.type}</td>
                    <td className="px-6 py-4">{u.facing}</td>
                    <td className="px-6 py-4">{u.sba}</td>
                    <td className="px-6 py-4">{u.uds}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-foreground/60">Detailed floor plans and isometric views are available in the downloadable brochure.</p>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 container-x max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Where Amenities Abound</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-10">A community, thoughtfully considered.</h2>

        <h3 className="font-serif text-2xl mb-6 text-[#8b7355]">Outdoor & Landscape</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {outdoorAmenities.map((a) => (
            <div key={a} className="rounded-lg border border-[#c9b99a]/30 px-4 py-3 text-sm text-foreground/80 hover:bg-[#faf8f5] transition">
              {a}
            </div>
          ))}
        </div>

        <h3 className="font-serif text-2xl mt-14 mb-6 text-[#8b7355]">Clubhouse</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {clubhouse.map((a) => (
            <div key={a} className="rounded-lg border border-[#c9b99a]/30 px-4 py-3 text-sm text-foreground/80 hover:bg-[#faf8f5] transition">
              {a}
            </div>
          ))}
        </div>

        <h3 className="font-serif text-2xl mt-14 mb-6 text-[#8b7355]">Feature Amenities</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {features.map((a) => (
            <div key={a} className="rounded-lg border border-[#c9b99a]/30 px-4 py-3 text-sm text-foreground/80 hover:bg-[#faf8f5] transition">
              {a}
            </div>
          ))}
        </div>
      </section>

      {/* Specifications */}
      <section className="py-20 bg-[#1a1408] text-white">
        <div className="container-x max-w-5xl">
          <p className="text-xs uppercase tracking-[0.4em] text-[#d9b877] mb-4">Specifications</p>
          <h2 className="font-serif text-4xl md:text-5xl mb-12">Built with quiet precision.</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {specs.map((s) => (
              <div key={s.title} className="border-l border-[#d9b877]/40 pl-5">
                <div className="font-serif text-xl text-[#d9b877] mb-2">{s.title}</div>
                <p className="text-white/70 leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby */}
      <section className="py-20 container-x max-w-6xl">
        <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Location</p>
        <h2 className="font-serif text-4xl md:text-5xl mb-10">Everything you need, close at hand.</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {nearby.map((n) => (
            <div key={n.title} className="rounded-2xl border border-[#c9b99a]/30 p-6">
              <div className="font-serif text-lg text-[#8b7355] mb-4">{n.title}</div>
              <ul className="space-y-2 text-sm text-foreground/75">
                {n.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="py-20 bg-[#faf8f5]">
        <div className="container-x max-w-5xl grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-[#b89968] mb-4">Visit / Enquire</p>
            <h2 className="font-serif text-4xl md:text-5xl mb-6">Come see it in person.</h2>
            <p className="text-foreground/75 leading-relaxed">
              Our sales team is happy to walk you through the master plan, sample layouts and the site itself. Reach out to schedule a private visit.
            </p>
            <a
              href={brochure.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#1a1408] px-7 py-3 text-sm tracking-widest uppercase text-[#d9b877] hover:bg-black transition"
            >
              <Download className="h-4 w-4" /> Download Brochure
            </a>
          </div>
          <div className="space-y-6">
            <div>
              <div className="font-serif text-lg text-[#8b7355] mb-2 flex items-center gap-2"><MapPin className="h-4 w-4" /> Site Address</div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                Fortuners Infra Elixir, 90/1 & 90/2, Lakshmi Sagar Village, beside Mega International School, Chandapura, Attibele Hobli, Anekal Taluk, Bangalore 560 099.
              </p>
            </div>
            <div>
              <div className="font-serif text-lg text-[#8b7355] mb-2 flex items-center gap-2"><MapPin className="h-4 w-4" /> Office</div>
              <p className="text-sm text-foreground/75 leading-relaxed">
                #840, 1st Floor, 17th Main, Sector 3, HSR Layout, Bangalore 560 102.
              </p>
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <a href="tel:+919611213181" className="inline-flex items-center gap-2 text-[#8b7355] hover:text-[#b89968]"><Phone className="h-4 w-4" /> 96112 13181</a>
              <a href="mailto:info@fortunersinfra.com" className="inline-flex items-center gap-2 text-[#8b7355] hover:text-[#b89968]"><Mail className="h-4 w-4" /> info@fortunersinfra.com</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
