import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import WeldingFacilityHero from "./WeldingFacilityHero";

export const metadata: Metadata = {
  title: "Welding Facility | Patil Brothers",
  description:
    "Professional welding services for industrial applications, including MIG, TIG, stick, and flux-cored arc welding, with reliable and high-quality results.",
};

const CURRENT_SLUG = "WeldingFacility";

const SIDEBAR_SERVICES = [
  {
    slug: "LaserCuttingFacility",
    title: "Laser Cutting Facility",
    image: "/images/services/laser.webp",
  },
  {
    slug: "PlasmaCuttingFacility",
    title: "Plasma Cutting Facility",
    image: "/images/services/plasma.webp",
  },
  {
    slug: "BendingFacility",
    title: "Bending Facility",
    image: "/images/services/bending.webp",
  },
  {
    slug: "WeldingFacility",
    title: "Welding Facility",
    image: "/images/services/welding.webp",
  },
  {
    slug: "Fabrication&Assembly",
    title: "Fabrication & Assembly",
    image: "/images/services/fabrication.webp",
  },
  {
    slug: "WellEquippedInfrastructure",
    title: "Well Equipped Infrastructure with Design Centre",
    image: "/images/services/machined.webp",
  },
];

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

const WELDING_SERVICES = [
  {
    title: "MIG Welding (Metal Inert Gas)",
    text: "Ideal for high-speed welding on mild steel, aluminum, and stainless steel. MIG welding is known for its fast and efficient process.",
  },
  {
    title: "TIG Welding (Tungsten Inert Gas)",
    text: "Provides precise, high-quality welds for metals such as aluminum, stainless steel, and copper. TIG welding is perfect for applications requiring clean, strong welds with minimal spatter.",
  },
  {
    title: "Stick Welding (Shielded Metal Arc Welding)",
    text: "A versatile and cost-effective welding technique commonly used for heavy-duty applications and outdoor work.",
  },
  {
    title: "Flux-Cored Arc Welding (FCAW)",
    text: "Similar to MIG welding but uses a flux-cored wire, making it ideal for welding thicker materials and outdoor projects.",
  },
  {
    title: "Custom Welding",
    text: "Whether you need custom metal fabrication, repairs, or modifications, we can provide tailored welding solutions to your specific needs.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Expert Welders",
    text: "Our team is made up of skilled and certified welders with years of experience, ensuring the highest standards of quality in every weld.",
  },
  {
    title: "Precision & Quality",
    text: "We use the latest technology and equipment to ensure clean, precise, and strong welds, even for the most complex projects.",
  },
  {
    title: "Versatility",
    text: "We can handle a wide variety of materials, from mild steel and stainless steel to aluminum, titanium, and alloys.",
  },
  {
    title: "Durability",
    text: "Our welding processes result in durable, high-strength joints that can withstand the harshest environments.",
  },
  {
    title: "Cost-Effective",
    text: "With a focus on efficiency and quality, we provide cost-effective welding solutions without compromising on performance.",
  },
];

export default function WeldingFacilityPage() {
  return (
    <>
      {/* Welding Hero */}
      <WeldingFacilityHero />

      {/* Welding Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24">
        {/* Soft background accent */}
        <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-64 w-40 -skew-x-[22deg] bg-gradient-to-b from-red-100 to-transparent" />

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:px-12 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main content */}
          <article>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#ff1620] sm:w-10" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-600">
                Services
              </span>
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Welding <span className="text-[#ff1620]">Services</span>
            </h1>

            <div className="mt-5 h-px w-full bg-gradient-to-r from-neutral-300 to-transparent" />

            <p className="mt-6 max-w-4xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              At Precision Engineering, we specialize in providing high-quality welding services for a wide variety of industries. Our skilled welders use state-of-the-art technology and the latest techniques to ensure precise, durable, and strong welds for every project. Whether you are working on small custom components or large-scale industrial applications, our welding services are designed to meet your needs with exceptional craftsmanship and efficiency.
            </p>

            <p className="mt-4 max-w-4xl text-base leading-relaxed text-neutral-600">
              We offer a wide range of welding services to meet the needs of different industries:
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-600">
              {WELDING_SERVICES.map((service) => (
                <li key={service.title}>
                  <strong className="font-bold text-neutral-900">{service.title}:</strong>{" "}
                  {service.text}
                </li>
              ))}
            </ul>

            <section className="mt-10">
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Why Choose Our Welding Services?
              </h2>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-neutral-300 to-transparent" />

              <ol className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-600">
                {WHY_CHOOSE.map((item, index) => (
                  <li key={item.title}>
                    <span className="font-bold text-neutral-900">
                      {index + 1}. {item.title}:
                    </span>{" "}
                    {item.text}
                  </li>
                ))}
              </ol>
            </section>
          </article>

          {/* Sidebar */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-2xl bg-white shadow-xl shadow-neutral-300/50 ring-1 ring-neutral-100">
              <div className="flex items-center justify-between bg-[#ff1620] px-5 py-4 text-white">
                <h2 className="text-lg font-bold">Our Services</h2>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2.2}
                  strokeLinecap="round"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <path d="M4 6h.01M4 12h.01M4 18h.01M9 6h11M9 12h11M9 18h11" />
                </svg>
              </div>

              <nav aria-label="Our services">
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1">
                  {SIDEBAR_SERVICES.map((service) => {
                    const active = service.slug === CURRENT_SLUG;

                    return (
                      <li
                        key={service.slug}
                        className="border-b border-neutral-100 last:border-b-0"
                      >
                        <Link
                          href={`/services/${service.slug}`}
                          aria-current={active ? "page" : undefined}
                          className={`group flex items-center gap-4 px-4 py-3 transition-colors ${
                            active ? "bg-red-50" : "hover:bg-neutral-50"
                          }`}
                        >
                          <span className="relative h-14 w-[72px] shrink-0 overflow-hidden rounded-md bg-neutral-200">
                            <Image
                              src={service.image}
                              alt=""
                              fill
                              sizes="72px"
                              className="object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </span>

                          <span className="flex-1 text-sm font-bold leading-snug text-neutral-950">
                            {service.title}
                          </span>

                          <span
                            className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition ${
                              active
                                ? "border-[#ff1620] text-[#ff1620]"
                                : "border-neutral-300 text-neutral-900 group-hover:border-[#ff1620] group-hover:bg-[#ff1620] group-hover:text-white"
                            }`}
                          >
                            <ArrowIcon className="h-3.5 w-3.5" />
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
