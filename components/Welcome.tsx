import Image from "next/image";
import type { ReactNode } from "react";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-10 w-10 sm:h-11 sm:w-11",
  "aria-hidden": true,
};

type Feature = { title: string; text: string; icon: ReactNode };

const FEATURES: Feature[] = [
  {
    title: "Custom Solutions",
    text: "Tailored to your requirements",
    icon: (
      <svg {...iconProps}>
        <circle cx="11" cy="13" r="8" />
        <circle cx="11" cy="13" r="4.5" />
        <circle cx="11" cy="13" r="1" fill="currentColor" />
        <path d="M11 13l8-8M16 3.5V8h4.5" />
      </svg>
    ),
  },
  {
    title: "High Precision",
    text: "Consistent quality and tight tolerances",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    text: "Reliable and efficient production",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </svg>
    ),
  },
];

export default function Welcome() {
  return (
    <section
      id="about"
      className="relative isolate overflow-hidden bg-white py-16 sm:py-20 lg:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-16 lg:px-12 xl:gap-20">
        {/* Image collage */}
        <div className="relative mx-auto w-full max-w-2xl pl-4 pt-4 sm:pl-8 sm:pt-8 lg:max-w-none">
          {/* Red outlined frame */}
          <div
            className="pointer-events-none absolute left-0 top-0 h-2/5 w-1/2 border-l-2 border-t-2 border-r-2 border-[#ff1620] sm:h-[45%] sm:w-[45%]"
            aria-hidden="true"
          />

          <div className="relative grid grid-cols-[1.7fr_1fr] gap-1.5 overflow-hidden rounded-xl shadow-2xl shadow-neutral-400/40 sm:gap-2">
            {/* Large image */}
            <div className="relative row-span-2 min-h-[340px] sm:min-h-[460px] lg:min-h-[500px]">
              <Image
                src="/images/welcome-1.jpg"
                alt="CNC laser cutting machine in operation"
                fill
                sizes="(min-width:1024px) 35vw, 70vw"
                className="object-cover"
              />
              {/* Red caption panel */}
              <div
                className="absolute bottom-0 left-0 w-[62%] bg-gradient-to-br from-red-600 to-red-900 px-4 pb-4 pt-8 sm:px-6 sm:pb-6 sm:pt-12"
                style={{ clipPath: "polygon(0 18%, 100% 0, 100% 100%, 0 100%)" }}
              >
                <span className="mb-3 block h-0.5 w-8 bg-white" />
                <p className="text-[10px] font-medium uppercase leading-5 tracking-[0.15em] text-white sm:text-xs sm:leading-6 lg:text-[13px]">
                  Precision
                  <br />
                  Components
                  <br />
                  Stronger
                  <br />
                  Industries
                </p>
              </div>
            </div>

            {/* Top right image */}
            <div className="relative min-h-[165px] sm:min-h-[225px] lg:min-h-[245px]">
              <Image
                src="/images/welcome-2.jpg"
                alt="Precision bent sheet metal parts"
                fill
                sizes="(min-width:1024px) 20vw, 30vw"
                className="object-cover"
              />
            </div>

            {/* Bottom right image */}
            <div className="relative min-h-[165px] sm:min-h-[225px] lg:min-h-[245px]">
              <Image
                src="/images/welcome-3.jpg"
                alt="Welder working on metal fabrication"
                fill
                sizes="(min-width:1024px) 20vw, 30vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div>
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-10 bg-[#ff1620] sm:w-12" />
            <span className="text-lg font-medium text-[#ff1620] sm:text-xl">Welcome TO</span>
          </div>

          <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-neutral-950 sm:text-5xl xl:text-6xl">
            Precision <span className="text-[#ff1620]">Engineering</span>
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
            Precision Engineering is your trusted partner for high-precision sheet metal
            manufacturing solutions. With advanced machinery, a skilled team, and a commitment
            to quality, we deliver components that meet the highest standards of accuracy,
            durability, and performance.
          </p>

          {/* Features */}
          <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-0 lg:mt-14">
            {FEATURES.map((f, i) => (
              <li
                key={f.title}
                className={`flex flex-row items-start gap-4 sm:flex-col sm:gap-0 sm:pr-5 ${
                  i !== 0 ? "sm:border-l sm:border-neutral-200 sm:pl-5 xl:pl-8" : ""
                }`}
              >
                <span className="shrink-0 text-[#ff1620]">{f.icon}</span>
                <span className="block sm:mt-3">
                  <span className="block text-lg font-bold text-neutral-950">{f.title}</span>
                  <span className="mt-1 block text-[15px] leading-snug text-neutral-500">
                    {f.text}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}