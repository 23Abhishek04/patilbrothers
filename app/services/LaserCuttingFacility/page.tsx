
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import LaserCuttingHero from "./LaserCuttingHero";

export const metadata: Metadata = {
  title: "Laser Cutting Facility | Patil Brothers",
  description:
    "High-precision laser cutting services for metal, plastic, wood and more, with exceptional accuracy, clean edges and fast turnaround times.",
};

const CURRENT_SLUG = "LaserCuttingFacility";

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

const iconProps = {
  viewBox: "0 0 48 48",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-11 w-11 sm:h-12 sm:w-12",
  "aria-hidden": true,
};

function LayersIcon({ dashed = false }: { dashed?: boolean }) {
  return (
    <svg {...iconProps}>
      <path d="M24 6l18 9-18 9-18-9 18-9z" />
      <path
        d="M6 24l18 9 18-9"
        strokeDasharray={dashed ? "3 3" : undefined}
      />
      <path d="M6 33l18 9 18-9" />
    </svg>
  );
}

function LaserIcon() {
  return (
    <svg {...iconProps}>
      <path d="M14 5h20v8H14zM18 13v6h12v-6M21 19v6h6v-6" />
      <path d="M24 25v6" />
      <path d="M10 43l6-8M38 43l-6-8M24 34v9M17 42h14" />
    </svg>
  );
}

const LASER_SERVICES: {
  title: string;
  text: string;
  icon: ReactNode;
}[] = [
  {
    title: "Metal Cutting",
    text: "Stainless steel, aluminum, brass, and other metals with exceptional precision.",
    icon: <LayersIcon />,
  },
  {
    title: "Acrylic & Plastic Cutting",
    text: "Clean edges and precise shapes for prototypes and finished products.",
    icon: <LayersIcon dashed />,
  },
  {
    title: "Wood Cutting",
    text: "Perfect for creating intricate designs and custom shapes in wood.",
    icon: <LayersIcon />,
  },
  {
    title: "Custom Laser Etching",
    text: "Personalization and design engraving on various materials.",
    icon: <LaserIcon />,
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

export default function LaserCuttingFacilityPage() {
  return (
    <>
      {/* Laser Cutting Hero */}
      <LaserCuttingHero />

      {/* Laser Cutting Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24">
        {/* Soft background accent */}
        <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-64 w-40 -skew-x-[22deg] bg-gradient-to-b from-red-100 to-transparent" />

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:px-12 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main content */}
          <article>
            {/* Overview */}
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#ff1620] sm:w-10" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-600">
                Overview
              </span>
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Laser Cutting{" "}
              <span className="text-[#ff1620]">Facility</span>
            </h1>

            <div className="mt-5 h-px w-full bg-gradient-to-r from-neutral-300 to-transparent" />

            <p className="mt-6 max-w-4xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              At Precision Engineering, we specialize in high-precision laser
              cutting services for a wide range of materials, including metal,
              plastic, wood, and more. Our state-of-the-art laser cutting
              technology offers exceptional accuracy, clean edges, and fast
              turnaround times to meet the needs of businesses across various
              industries.
            </p>

            {/* Services */}
            <h2 className="mt-10 text-xl font-bold text-neutral-950 sm:text-2xl">
              Our Laser Cutting Services
            </h2>

            <ul className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {LASER_SERVICES.map((service) => (
                <li
                  key={service.title}
                  className="group rounded-2xl bg-neutral-50 p-5 ring-1 ring-neutral-100 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:shadow-neutral-300/50 hover:ring-red-100"
                >
                  <span className="block text-[#ff1620]">
                    {service.icon}
                  </span>

                  <h3 className="mt-4 text-[15px] font-bold text-neutral-950">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                    {service.text}
                  </p>
                </li>
              ))}
            </ul>
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
