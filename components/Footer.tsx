import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Capabilities", href: "/capabilities" },
  { label: "Process", href: "/process" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const SERVICES = [
  { label: "CNC Laser Cutting", href: "/services#cnc-laser-cutting" },
  { label: "Plasma Cutting", href: "/services#plasma-cutting" },
  { label: "Sheet Metal Bending", href: "/services#sheet-metal-bending" },
  { label: "Welding & Fabrication", href: "/services#welding-fabrication" },
  { label: "Custom Manufacturing", href: "/services#custom-manufacturing" },
  { label: "Machined Components", href: "/services#machined-components" },
];

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.75h4v11.5H3zM9.5 9.75h3.83v1.57h.05c.53-1 1.84-2.07 3.78-2.07 4.04 0 4.79 2.66 4.79 6.1v5.9h-4v-5.23c0-1.25-.02-2.85-1.74-2.85-1.74 0-2.01 1.36-2.01 2.76v5.32h-4z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2}
        className="h-5 w-5"
        aria-hidden="true"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden="true">
        <path d="M21.6 7.2a2.5 2.5 0 0 0-1.76-1.77C18.27 5 12 5 12 5s-6.27 0-7.84.43A2.5 2.5 0 0 0 2.4 7.2C2 8.78 2 12 2 12s0 3.22.4 4.8a2.5 2.5 0 0 0 1.76 1.77C5.73 19 12 19 12 19s6.27 0 7.84-.43a2.5 2.5 0 0 0 1.76-1.77C22 15.22 22 12 22 12s0-3.22-.4-4.8zM10 15V9l5.2 3L10 15z" />
      </svg>
    ),
  },
];

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-5 w-5",
  "aria-hidden": true,
};

const MAP_SRC =
  "https://www.google.com/maps?q=S-230%2F1%2C+S-Block%2C+MIDC%2C+Bhosari%2C+Pune+411026&output=embed";

function ChevronIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={3}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-3.5 w-3.5 shrink-0 text-[#ff1620] transition-transform group-hover:translate-x-1"
      aria-hidden="true"
    >
      <path d="M9 5l7 7-7 7" />
    </svg>
  );
}

function ColumnTitle({ white, red }: { white: string; red: string }) {
  return (
    <h3 className="mb-6 text-xl font-bold text-white sm:text-2xl">
      {white} <span className="text-[#ff1620]">{red}</span>
    </h3>
  );
}

function ContactRow({ icon, children }: { icon: ReactNode; children: ReactNode }) {
  return (
    <li className="flex items-center gap-4">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white/5 text-[#ff1620] ring-1 ring-white/10">
        {icon}
      </span>
      <span className="text-[15px] leading-snug text-white/85">{children}</span>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden bg-[#0a0a0c] text-white">
      {/* Top background image — put your photo at /public/images/footer-bg.jpg */}
      <div className="absolute inset-x-0 top-0 -z-20 h-64 sm:h-72">
        <Image
          src="/images/footer-bg.png"
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-[80%_top] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[#0a0a0c]/80 to-[#0a0a0c]" />
      </div>

      {/* Red diagonal accents */}
      <div className="pointer-events-none absolute -left-16 top-0 -z-10 h-24 w-40 -skew-x-[25deg] bg-red-700/80 sm:h-36 sm:w-56" />
      <div className="pointer-events-none absolute -right-20 top-0 -z-10 hidden h-72 w-56 -skew-x-[25deg] bg-gradient-to-b from-red-700/50 to-transparent md:block" />
      <div className="pointer-events-none absolute -bottom-10 -left-20 -z-10 hidden h-64 w-40 -skew-x-[25deg] bg-gradient-to-t from-red-900/40 to-transparent lg:block" />

      {/* Main columns */}
      <div className="mx-auto max-w-[1440px] px-5 pb-12 pt-28 sm:px-8 sm:pt-32 lg:px-12 lg:pt-40">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_0.9fr_1fr_1.2fr_1.3fr] lg:gap-0">
          {/* Brand */}
          <div className="lg:pr-10">
            <Link href="/" className="flex items-center gap-4" aria-label="Patil Brothers home">
              {/* Replace with <Image src="/logo.png" ... /> when you have the real logo */}
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-red-500 to-red-800 ring-2 ring-white/80 sm:h-16 sm:w-16">
                <span className="text-3xl font-black italic text-white">P</span>
              </span>
              <span className="flex flex-col leading-none">
                <span className="text-3xl font-black uppercase tracking-wide sm:text-4xl">
                  Patil
                </span>
                <span className="mt-1.5 text-xs font-bold uppercase tracking-[0.4em] text-[#ff1620] sm:text-sm">
                  Brothers
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-[15px] leading-relaxed text-white/70">
              High-precision sheet metal fabrication and custom manufacturing solutions for
              industries that demand quality, reliability and performance.
            </p>

            <ul className="mt-6 flex items-center gap-3">
              {SOCIALS.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 text-white ring-1 ring-white/10 transition hover:bg-[#ff1620] hover:ring-[#ff1620]"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>

            <div className="mt-8 flex items-center gap-4">
              <span className="h-0.5 w-12 shrink-0 bg-[#ff1620]" />
              <p className="text-[11px] uppercase leading-5 tracking-[0.25em] text-white/50">
                Precision Today
                <br />
                For a Stronger Tomorrow.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <nav
            aria-label="Quick links"
            className="lg:border-l lg:border-white/10 lg:px-10"
          >
            <ColumnTitle white="Quick" red="Links" />
            <ul className="space-y-3.5">
              {QUICK_LINKS.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-3 text-[15px] text-white/80 transition hover:text-white"
                  >
                    <ChevronIcon />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav
            aria-label="Our services"
            className="lg:border-l lg:border-white/10 lg:px-10"
          >
            <ColumnTitle white="Our" red="Services" />
            <ul className="space-y-3.5">
              {SERVICES.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="group flex items-center gap-3 text-[15px] text-white/80 transition hover:text-white"
                  >
                    <ChevronIcon />
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="lg:border-l lg:border-white/10 lg:px-10">
            <ColumnTitle white="Contact" red="Details" />
            <ul className="space-y-5">
              <ContactRow
                icon={
                  <svg {...iconProps} fill="currentColor" stroke="none">
                    <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
                  </svg>
                }
              >
                <a href="tel:+919595880764" className="transition hover:text-[#ff1620]">
                  +91 959-588-0764
                </a>
              </ContactRow>

              <ContactRow
                icon={
                  <svg {...iconProps}>
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                }
              >
                <a
                  href="mailto:patilbrothers@gmail.com"
                  className="break-all transition hover:text-[#ff1620]"
                >
                  patilbrothers@gmail.com
                </a>
              </ContactRow>

              <ContactRow
                icon={
                  <svg {...iconProps}>
                    <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21z" />
                    <circle cx="12" cy="9.5" r="2.5" />
                  </svg>
                }
              >
                S-230/1, S-Block, MIDC,
                <br />
                Bhosari, Pune – 411026
              </ContactRow>

              <ContactRow
                icon={
                  <svg {...iconProps}>
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                }
              >
                <span className="text-sm">
                  Mon – Sat : 9:00 AM – 6:00 PM
                  <br />
                  Sunday : Closed
                </span>
              </ContactRow>
            </ul>
          </div>

          {/* Location / map */}
          <div className="sm:col-span-2 lg:col-span-1 lg:border-l lg:border-white/10 lg:pl-10">
            <ColumnTitle white="Our" red="Location" />
            <div className="relative h-60 overflow-hidden rounded-2xl border border-white/15 bg-neutral-900 sm:h-64 lg:h-[290px]">
              <iframe
                src={MAP_SRC}
                title="Patil Brothers location on Google Maps"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
                className="h-full w-full border-0 opacity-90 [filter:grayscale(1)_invert(0.92)_contrast(0.9)_hue-rotate(180deg)]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-black/40">
        <div className="mx-auto flex max-w-[1440px] flex-col items-center gap-5 px-5 py-6 text-center sm:px-8 md:flex-row md:justify-between md:text-left lg:px-12">
          <p className="text-sm text-white/70">
            © {new Date().getFullYear()} Patil Brothers. All rights reserved.
          </p>

          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm text-white/70">
            <li>
              <Link href="/privacy-policy" className="transition hover:text-[#ff1620]">
                Privacy Policy
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">
              |
            </li>
            <li>
              <Link href="/terms" className="transition hover:text-[#ff1620]">
                Terms &amp; Conditions
              </Link>
            </li>
            <li aria-hidden="true" className="text-white/30">
              |
            </li>
            <li>
              <Link href="/sitemap" className="transition hover:text-[#ff1620]">
                Sitemap
              </Link>
            </li>
          </ul>

          <div className="hidden items-center gap-4 lg:flex">
            <span className="h-0.5 w-10 bg-[#ff1620]" />
            <p className="text-[11px] uppercase leading-5 tracking-[0.25em] text-white/50">
              Built with precision.
              <br />
              Driven by people.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}