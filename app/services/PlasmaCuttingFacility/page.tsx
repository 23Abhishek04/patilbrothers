import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PlasmaCuttingHero from "./PlasmaCuttingFacilityHero";

export const metadata: Metadata = {
  title: "Plasma Cutting Facility | Patil Brothers",
  description:
    "High-quality plasma cutting services for metals including steel, aluminum, copper, and more, with precision, efficiency, and cost-effective solutions.",
};

const CURRENT_SLUG = "PlasmaCuttingFacility";

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

const PLASMA_SERVICES = [
  {
    title: "Steel Cutting",
    text: "Ideal for creating structural components, frames, and industrial parts.",
  },
  {
    title: "Aluminum Cutting",
    text: "Clean cuts for both thin and thick aluminum sheets.",
  },
  {
    title: "Stainless Steel Cutting",
    text: "Precision cuts for stainless steel sheets used in various applications.",
  },
  {
    title: "Copper and Brass",
    text: "Efficient cutting of non-ferrous metals.",
  },
  {
    title: "Custom Shapes and Designs",
    text: "From simple cuts to complex, intricate designs, we can cut parts to your exact specifications.",
  },
];

const WHY_CHOOSE = [
  {
    title: "Precision",
    text: "Our advanced plasma cutting machines deliver high accuracy with minimal heat-affected zones and a smooth, clean cut.",
  },
  {
    title: "Speed",
    text: "Plasma cutting is a fast process, which helps reduce turnaround time, especially for large or complex orders.",
  },
  {
    title: "Cost-Effective",
    text: "Plasma cutting is an economical solution for cutting thick metal, making it ideal for larger-scale production and bulk cutting projects.",
  },
  {
    title: "Versatility",
    text: "Capable of cutting a wide range of materials and thicknesses, our plasma cutting services can meet the needs of diverse industries.",
  },
  {
    title: "Minimal Waste",
    text: "With highly accurate cuts, plasma cutting reduces material wastage, contributing to both cost savings and environmental sustainability.",
  },
];

export default function PlasmaCuttingFacilityPage() {
  return (
    <>
      {/* Plasma Cutting Hero */}
      <PlasmaCuttingHero />

      {/* Plasma Cutting Content */}
      <main className="relative min-h-screen overflow-hidden bg-white pb-16 pt-12 sm:pb-20 sm:pt-16 lg:pb-24">
        {/* Soft background accent */}
        <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-64 w-40 -skew-x-[22deg] bg-gradient-to-b from-red-100 to-transparent" />

        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-10 px-5 sm:px-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12 lg:px-12 xl:grid-cols-[minmax(0,1fr)_360px]">
          {/* Main content */}
          <article>
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-8 bg-[#ff1620] sm:w-10" />
              <span className="text-xs font-medium uppercase tracking-[0.3em] text-neutral-600">
                Overview
              </span>
            </div>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
              Plasma Cutting <span className="text-[#ff1620]">Facility</span>
            </h1>

            <div className="mt-5 h-px w-full bg-gradient-to-r from-neutral-300 to-transparent" />

            <p className="mt-6 max-w-4xl text-base leading-relaxed text-neutral-600 sm:text-lg">
              At Precision Engineering, we offer high-quality plasma cutting services for a wide range of materials, including metals such as steel, aluminum, and copper. With our state-of-the-art plasma cutting technology, we provide precise, efficient, and cost-effective solutions for businesses and industries of all sizes.
            </p>

            <p className="mt-4 max-w-4xl text-base leading-relaxed text-neutral-600">
              We offer a wide range of laser cutting services, including:
            </p>

            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-neutral-600">
              {PLASMA_SERVICES.map((service) => (
                <li key={service.title}>
                  <strong className="font-bold text-neutral-900">{service.title}:</strong>{" "}
                  {service.text}
                </li>
              ))}
            </ul>

            <section className="mt-10">
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Why Choose Our Plasma Cutting Services?
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
