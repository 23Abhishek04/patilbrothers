import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import InfrastructureHero from "./WellEquippedInfrastructureHero";

export const metadata: Metadata = {
  title: "Well Equipped Infrastructure with Design Centre | Patil Brothers",
  description:
    "Explore Patil Brothers' well-equipped infrastructure, advanced manufacturing technology, design centre, CNC machinery, laser cutters, welding stations, and precision fabrication capabilities.",
};

const CURRENT_SLUG = "Infrastructure";

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

const INFRASTRUCTURE_FEATURES = [
  {
    title: "Cutting-Edge Equipment",
    text: "Our facility is equipped with the latest technology in CNC machines, laser cutters, welding stations, and more, allowing us to handle even the most intricate designs and large production runs.",
  },
  {
    title: "Advanced Manufacturing Techniques",
    text: "We utilize the latest in manufacturing technology, including robotic systems, automated assembly lines, and precision machining to maintain high standards of quality and reduce production times.",
  },
  {
    title: "Quality Control",
    text: "We have a dedicated quality control department that ensures all products and designs meet rigorous standards and specifications before they are finalized and delivered to our clients.",
  },
];

const WHY_CHOOSE = [
  {
    title: "End-to-End Solutions",
    text: "From concept design to finished product, our integrated infrastructure and design capabilities allow us to handle every stage of your project in-house, ensuring consistency and quality.",
  },
  {
    title: "Advanced Technology",
    text: "Our facility features the latest design and manufacturing technology to provide precise and high-quality results.",
  },
  {
    title: "Skilled Team",
    text: "With our experienced design engineers, CNC operators, welders, and technicians, we have the expertise to bring complex designs to life.",
  },
  {
    title: "Customization",
    text: "We offer custom design services tailored to your needs, whether it is for prototyping, product development, or large-scale production.",
  },
  {
    title: "Innovation",
    text: "The combination of cutting-edge equipment and creative design solutions enables us to offer innovative products and services that meet and exceed industry standards.",
  },
];

export default function InfrastructurePage() {
  return (
    <>
      {/* Infrastructure Hero */}
      <InfrastructureHero />

      {/* Infrastructure Content */}
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

            <h1 className="mt-3 text-3xl font-black tracking-tight text-neutral-950 sm:text-4xl lg:text-5xl">
              Well Equipped Infrastructure{" "}
              <span className="text-[#ff1620]">with Design Centre</span>
            </h1>

            <div className="mt-5 h-px w-full bg-gradient-to-r from-neutral-300 to-transparent" />

            <p className="mt-6 max-w-4xl text-base leading-relaxed text-neutral-600">
              At Precision Engineering, we pride ourselves on offering a
              state-of-the-art infrastructure that supports both manufacturing
              and innovative design. Our Design Centre, combined with a fully
              equipped production facility, ensures that we can deliver
              high-quality, precise, and efficient solutions to meet the needs
              of our clients across various industries. From concept to final
              product, we provide end-to-end services that include detailed
              design, prototyping, fabrication, and manufacturing.
            </p>

            <section className="mt-10">
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Our Infrastructure
              </h2>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-neutral-300 to-transparent" />

              <ul className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-600">
                {INFRASTRUCTURE_FEATURES.map((feature) => (
                  <li key={feature.title}>
                    <strong className="font-bold text-neutral-900">
                      {feature.title}:
                    </strong>{" "}
                    {feature.text}
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10">
              <h2 className="text-xl font-bold text-neutral-950 sm:text-2xl">
                Why Choose Our Infrastructure and Design Centre?
              </h2>
              <div className="mt-5 h-px w-full bg-gradient-to-r from-neutral-300 to-transparent" />

              <ol className="mt-5 space-y-3 text-sm leading-relaxed text-neutral-600">
                {WHY_CHOOSE.map((item, index) => (
                  <li key={item.title}>
                    <span className="font-bold text-neutral-900">
                      {item.title}:
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
