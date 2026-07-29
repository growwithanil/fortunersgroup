export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  hero: string; // gradient tag for hero styling
  sections: { heading: string; paragraphs: string[] }[];
  pullquote?: string;
};

export const posts: BlogPost[] = [
  {
    slug: "designing-homes-that-age-gracefully",
    title: "Designing Homes that Age Gracefully",
    date: "July 12, 2026",
    excerpt:
      "How enduring materials and timeless proportions shape residences that improve with every decade.",
    readTime: "6 min read",
    hero: "from-[#2a2118] via-[#3d2f1f] to-[#8b7355]",
    pullquote:
      "A home should not merely survive time — it should ripen with it, gathering character in every corner.",
    sections: [
      {
        heading: "The Long View of Design",
        paragraphs: [
          "At Fortuners Group, we design every residence with a horizon of decades — not seasons. We resist the pull of passing trends because a home is a long conversation between the people who live in it and the materials that surround them. When that conversation is grounded in honest craft, the years become an ally, not an adversary.",
          "Gracefully aging homes share a quiet discipline: restrained palettes, generous proportions, and details that reveal themselves slowly. Marble that softens underfoot. Oak that deepens with light. Brass that warms with touch. These are not finishes chosen for the launch brochure — they are chosen for the tenth anniversary of moving in.",
        ],
      },
      {
        heading: "Materials That Earn Their Patina",
        paragraphs: [
          "We favor materials with an honest relationship to time. Natural stone, solid timber, hand-troweled plaster, and unlacquered metals are specified not because they are luxurious, but because they age with integrity. A scratch on solid oak is a memory; a scratch on veneer is damage.",
          "Every material passes a simple test in our design studio — will it look better in fifteen years than it did on day one? If the answer is no, we keep searching.",
        ],
      },
      {
        heading: "Proportions Before Ornament",
        paragraphs: [
          "Before we choose a single fixture, we spend weeks on proportion. Ceiling heights, door widths, window sightlines, and the ratio of solid wall to opening — these decisions cost nothing to get right and everything to get wrong. Ornament fades quickly; proportion is permanent.",
          "The most enduring rooms in the world are almost always the most quietly proportioned. We design toward that quiet.",
        ],
      },
      {
        heading: "Designing for the Second Owner",
        paragraphs: [
          "We often ask our teams to design for the second owner — a person we will never meet. That imaginary resident, moving in twenty years from now, is the honest critic of every choice we make today. If the layout still feels generous, the finishes still feel considered, and the building still feels loved, we have done our job.",
        ],
      },
    ],
  },
  {
    slug: "the-quiet-craft-of-interior-detailing",
    title: "The Quiet Craft of Interior Detailing",
    date: "June 28, 2026",
    excerpt:
      "Behind the scenes with our craftsmen — where every joint, edge, and finish is a considered decision.",
    readTime: "7 min read",
    hero: "from-[#1f1a14] via-[#3a2d20] to-[#c9b99a]",
    pullquote:
      "Detail is not decoration. It is the discipline that separates a beautiful room from an unforgettable one.",
    sections: [
      {
        heading: "Where Rooms Are Really Made",
        paragraphs: [
          "You do not notice a well-detailed interior. You feel it. The way a door closes with a soft, weighted hush. The way a stone edge meets a timber floor without a shadow gap. The way a switch plate sits exactly flush with the wall. None of this is accidental — it is the result of hundreds of tiny decisions made long before a resident ever walks in.",
          "Our interior detailing begins months before installation, in workshops where full-scale mockups are built, dismantled, and rebuilt until the geometry is honest.",
        ],
      },
      {
        heading: "The Language of Joints",
        paragraphs: [
          "A joint is where two materials meet — and where most interiors quietly fail. We treat joints as design elements in their own right. A recessed shadow gap between stone and plaster. A crisp mitre where two timber panels turn a corner. A hairline reveal that separates a cabinet from a wall.",
          "Each joint is drawn, prototyped, and reviewed on site. The best joints are the ones you never see; the second best are the ones you notice and admire.",
        ],
      },
      {
        heading: "Craftsmen at the Center",
        paragraphs: [
          "Our detailers, joiners, stonemasons, and metalworkers are the quiet authors of our interiors. Many have been with us for more than a decade. They read our drawings, question our choices, and improve them on the workshop floor.",
          "We schedule our sites around their pace, not the other way around. A rushed edge is a permanent mistake.",
        ],
      },
      {
        heading: "Finish Is a Sequence, Not a Coat",
        paragraphs: [
          "A wall finished well is not painted — it is layered. Skim coat, sanded coat, primer, sealer, base color, top color, and a final soft polish. The final surface reads as one uninterrupted plane of light. That is the sequence we insist on, even when it costs weeks.",
        ],
      },
    ],
  },
  {
    slug: "building-green-building-for-life",
    title: "Building Green, Building for Life",
    date: "June 03, 2026",
    excerpt:
      "A closer look at IGBC standards and what a Platinum-rated community really means for daily life.",
    readTime: "8 min read",
    hero: "from-[#0f1f14] via-[#1e3a28] to-[#8fa77a]",
    pullquote:
      "Sustainability is not a certificate on the wall. It is the electricity bill, the air you breathe, and the water in your tap.",
    sections: [
      {
        heading: "Beyond the Green Label",
        paragraphs: [
          "An IGBC Platinum rating is a serious achievement, but the certificate is only meaningful if residents feel it in daily life. A truly green building lowers utility bills, improves indoor air, reduces water dependence, and stays cooler in summer — all without asking its residents to change how they live.",
          "That is the standard we hold ourselves to at Fortuners Group. Certification is the floor of our ambition, not the ceiling.",
        ],
      },
      {
        heading: "Passive First, Active Second",
        paragraphs: [
          "The greenest energy is the energy you never need to use. Our buildings are shaped, oriented, and shaded to reduce cooling loads long before a single air conditioner is switched on. Cross-ventilation, high-performance glazing, insulated envelopes, and deep balconies do the heavy lifting.",
          "Only after passive design is exhausted do we turn to active systems — high-efficiency HVAC, LED lighting, sub-metered utilities, and rooftop solar.",
        ],
      },
      {
        heading: "Water, the Quiet Priority",
        paragraphs: [
          "In our climate, water is the resource that will define the next generation of housing. Every Fortuners community is designed as a closed water loop wherever regulations allow — rainwater harvested, greywater recycled, landscape irrigated with treated non-potable water, and low-flow fixtures used throughout.",
          "The result is a community that draws far less from the municipal supply and returns far less to the drain.",
        ],
      },
      {
        heading: "What Platinum Feels Like",
        paragraphs: [
          "A Platinum community is quieter — less mechanical humming. It is cooler in the shoulder months without air conditioning. It has cleaner indoor air because materials are low-VOC and ventilation is generous. Utility bills come in noticeably lower. Trees survive because irrigation is thoughtful.",
          "That is the real definition of green: a home that costs less to live in and feels better to live in.",
        ],
      },
    ],
  },
  {
    slug: "neighbourhoods-not-just-buildings",
    title: "Neighbourhoods, Not Just Buildings",
    date: "May 15, 2026",
    excerpt:
      "Why the streets, gardens, and edges around a home matter as much as the home itself.",
    readTime: "6 min read",
    hero: "from-[#1c1810] via-[#3a2e1e] to-[#b89968]",
    pullquote:
      "You do not live inside four walls. You live inside a neighbourhood — and the neighbourhood begins the moment you leave your door.",
    sections: [
      {
        heading: "The Building Is Only Half the Home",
        paragraphs: [
          "A great apartment inside a poor neighbourhood is a compromised home. That is why we design our communities from the outside in — beginning with the streets, gardens, and edges before we ever draw the tower.",
          "The five-minute walk from the front door defines daily life far more than any interior detail. Where does that walk lead? Is it shaded? Is it safe? Is it interesting? These are the questions we start with.",
        ],
      },
      {
        heading: "Streets Designed for People",
        paragraphs: [
          "Cars are guests in our communities, not the main occupants. Internal streets are narrowed to calm speeds, generously shaded with native trees, and edged with wide walking paths. Parking is tucked away so that the ground plane belongs to residents, children, and evening strollers.",
          "This is not an anti-car position — it is a pro-neighbourhood one.",
        ],
      },
      {
        heading: "Gardens That Do Real Work",
        paragraphs: [
          "Landscaping in our communities is not ornamental. Every planted zone earns its place — cooling paved surfaces, absorbing rainwater, filtering dust, and offering habitat to local birds and pollinators.",
          "We plant native species that survive on rainwater once established. Manicured lawns are minimized; layered, seasonal plantings are preferred.",
        ],
      },
      {
        heading: "Edges Matter Most",
        paragraphs: [
          "The edge where a community meets the city is often ignored — a compound wall and nothing more. We treat it as an opportunity. Softened boundaries, tree lines, small public-facing amenities, and clean, welcoming entrances make the neighbourhood feel like a good citizen of its city.",
          "A community that respects its edges tends to be respected in return.",
        ],
      },
    ],
  },
];

export function findPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
