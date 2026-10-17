import Image from "next/image";
import Link from "next/link";

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

function PlayIcon({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-2 14.5v-9l7 4.5-7 4.5z" />
    </svg>
  );
}

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-6 w-6",
  "aria-hidden": true,
};

const FEATURES = [
  {
    title: "High Precision",
    text: "Tight Tolerances",
    icon: (
      <svg {...iconProps}>
        <path d="M12 3l8 3v6c0 4.5-3.2 8-8 9-4.8-1-8-4.5-8-9V6l8-3z" />
        <path d="M8.5 12l2.5 2.5 4.5-5" />
      </svg>
    ),
  },
  {
    title: "Custom Solutions",
    text: "Tailored to Your Needs",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </svg>
    ),
  },
  {
    title: "On-Time Delivery",
    text: "Reliable & Efficient",
    icon: (
      <svg {...iconProps}>
        <path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </svg>
    ),
  },
];

export default function Hero() {
  return (
    <section className="relative isolate flex min-h-screen w-full items-center overflow-hidden bg-black">
      {/* Background image — put your photo at /public/images/hero-bg.jpg */}
      <Image
        src="/images/hero-bg.png"
        alt="Laser cutting machine fabricating sheet metal"
        fill
        priority
        sizes="100vw"
        className="-z-30 object-cover object-[75%_center] md:object-right"
      />

      {/* Dark overlays for text readability */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-black via-black/80 to-black/10 max-md:from-black/90 max-md:via-black/75 max-md:to-black/50" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-black via-transparent to-black/60" />

      {/* Red diagonal accents */}
      <div className="pointer-events-none absolute -left-16 top-0 -z-10 h-[45%] w-40 -skew-x-[20deg] bg-gradient-to-b from-red-700/70 to-transparent sm:w-56" />
      <div className="pointer-events-none absolute -left-10 bottom-0 -z-10 hidden h-[40%] w-24 -skew-x-[20deg] bg-gradient-to-t from-red-700/60 to-transparent md:block" />
      <div className="pointer-events-none absolute -right-24 top-0 -z-10 hidden h-[75%] w-64 -skew-x-[20deg] bg-gradient-to-b from-red-700/60 to-transparent lg:block" />

      {/* Content */}
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-12 pt-32 sm:px-8 sm:pt-36 lg:px-12 lg:pb-16 lg:pt-40">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-8 bg-[#ff1620] sm:w-12" />
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-white/80 sm:text-sm">
              Precision Sheet Metal Solutions
            </span>
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-[2.6rem] font-black uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]">
            Cutting Edge
            <span className="block text-[#ff1620]">Solutions,</span>
            Bent to Fit.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg lg:max-w-2xl">
            High-precision sheet metal fabrication and custom manufacturing solutions for
            industries that demand quality, reliability and performance.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className="group inline-block -skew-x-12 rounded-lg bg-[#ff1620] shadow-lg shadow-red-900/40 transition hover:bg-red-700"
            >
              <span className="flex skew-x-12 items-center justify-center gap-3 px-8 py-4 font-semibold text-white">
                Get a Quote
                <ArrowIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>

            <Link
              href="/services"
              className="group inline-block -skew-x-12 rounded-lg border border-white/30 bg-black/30 backdrop-blur-sm transition hover:border-[#ff1620]"
            >
              <span className="flex skew-x-12 items-center justify-center gap-3 px-8 py-4 font-semibold text-white">
                Our Services
                <PlayIcon className="h-6 w-6 transition-transform group-hover:scale-110" />
              </span>
            </Link>
          </div>

          {/* Feature highlights */}
          <ul className="mt-10 grid grid-cols-1 gap-5 sm:mt-12 sm:grid-cols-3 sm:gap-0">
            {FEATURES.map((f, i) => (
              <li
                key={f.title}
                className={`flex items-center gap-3 sm:pr-5 ${
                  i !== 0 ? "sm:border-l sm:border-white/15 sm:pl-5" : ""
                }`}
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-950/60 text-[#ff1620] ring-1 ring-red-500/20">
                  {f.icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-[15px] font-semibold text-white">{f.title}</span>
                  <span className="text-sm text-white/60">{f.text}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}