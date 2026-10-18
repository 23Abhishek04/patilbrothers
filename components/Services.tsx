"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  Flame,
  Zap,
  Layers,
  Wrench,
  Box,
  Settings,
  type LucideIcon,
} from "lucide-react";

/**
 * Services.tsx — Next.js (App Router) + Tailwind CSS (v3.1+ / v4)
 *
 * Requires:  npm i lucide-react
 * Images:    put the six photos in /public/images/services/
 *            laser.webp, plasma.webp, bending.webp, welding.webp, fabrication.webp, machined.webp
 *            (the cards still render with a dark placeholder if a file is missing)
 *
 * Usage:     import Services from "@/components/Services";  <Services />
 */

type Service = {
  title: string;
  desc: string;
  image: string;
  icon: LucideIcon;
  href: string;
};

const SERVICES: Service[] = [
  {
    title: "CNC Laser Cutting",
    desc: "High-precision CNC laser cutting for complex profiles and clean edges.",
    image: "/images/services/laser.webp",
    icon: Zap,
    href: "/services/cnc-laser-cutting",
  },
  {
    title: "Plasma Cutting",
    desc: "Efficient plasma cutting for thicker materials and custom shapes.",
    image: "/images/services/plasma.webp",
    icon: Flame,
    href: "/services/plasma-cutting",
  },
  {
    title: "Sheet Metal Bending",
    desc: "Accurate and consistent bending for high-quality components.",
    image: "/images/services/bending.webp",
    icon: Layers,
    href: "/services/sheet-metal-bending",
  },
  {
    title: "Welding & Assembly",
    desc: "Strong and durable welding with complete fabrication and assembly.",
    image: "/images/services/welding.webp",
    icon: Wrench,
    href: "/services/welding-assembly",
  },
  {
    title: "Custom Fabrication",
    desc: "Tailored sheet metal solutions to meet your specific requirements.",
    image: "/images/services/fabrication.webp",
    icon: Box,
    href: "/services/custom-fabrication",
  },
  {
    title: "Machined Components",
    desc: "Precision components with high quality and tight tolerances.",
    image: "/images/services/machined.webp",
    icon: Settings,
    href: "/services/machined-components",
  },
];

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  const number = String(index + 1).padStart(2, "0");

  return (
    <article className="services-card group relative overflow-hidden rounded-md bg-white shadow-[0_6px_24px_-8px_rgba(0,0,0,0.15)] ring-1 ring-black/[0.03]">
      {/* image */}
      <div className="relative aspect-[16/7.6] w-full overflow-hidden bg-neutral-900">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="services-photo object-cover"
        />
        {/* red wedge on the left edge */}
        <div
          aria-hidden
          className="services-wedge absolute inset-0 bg-red-600/85"
          style={{ clipPath: "polygon(0 0, 28% 0, 0 78%)" }}
        />
      </div>

      {/* body */}
      <div className="relative px-5 pb-6 pt-0 sm:px-6">
        {/* icon tile (overlaps image) */}
        <span className="services-icon absolute -top-5 left-5 flex h-14 w-14 items-center justify-center rounded-lg border-[3px] border-white bg-red-600 text-white shadow-md sm:left-6">
          <Icon className="h-6 w-6" strokeWidth={1.8} />
        </span>

        {/* big number */}
        <span
          aria-hidden
          className="pointer-events-none absolute right-5 top-3 select-none text-[52px] font-bold leading-none tracking-tight text-gray-200/80 sm:right-6"
        >
          {number}
        </span>

        <h3 className="pt-5 pl-[4.75rem] text-xl font-bold leading-tight text-[#0b0d10] sm:text-[22px]">
          {service.title}
        </h3>

        <p className="mt-3 max-w-[300px] text-[15px] leading-relaxed text-gray-500 sm:mt-5 sm:text-base">
          {service.desc}
        </p>

        <Link
          href={service.href}
          className="services-link mt-5 inline-flex items-center gap-3 text-base font-semibold text-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2"
        >
          Learn More
          <span className="services-arrow flex h-9 w-11 items-center justify-center rounded-md bg-red-50 transition-colors group-hover:bg-red-600 group-hover:text-white">
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </Link>
      </div>
    </article>
  );
}

export default function Services() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`services-section relative overflow-hidden bg-[#fafafa] py-14 sm:py-16 lg:py-20 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {/* top-left red slash */}
      <div aria-hidden className="pointer-events-none absolute left-0 top-0 hidden h-[220px] w-[160px] sm:block">
        <div
          className="absolute inset-0 bg-gradient-to-b from-red-600 to-red-500"
          style={{ clipPath: "polygon(48% 20%, 92% 20%, 12% 78%, 0 78%)" }}
        />
        <div
          className="absolute inset-0 bg-red-600/20"
          style={{ clipPath: "polygon(40% 0, 52% 0, 0 38%, 0 36%)" }}
        />
      </div>

      {/* dotted pattern top-right */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[5%] top-12 hidden h-[100px] w-[130px] lg:block"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(220,38,38,.55) 1.2px, transparent 1.5px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="services-content relative mx-auto max-w-[1360px] px-4 sm:px-6 lg:px-8">
        {/* heading */}
        <header className="services-heading mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-[3px] w-11 bg-red-600" />
            <span className="text-sm font-semibold uppercase tracking-wide text-red-600">Services</span>
          </div>
          <h2 className="mt-2 text-5xl font-extrabold leading-tight tracking-tight text-[#0b0d10] sm:text-6xl">
            What We <span className="text-red-600">Do</span>
          </h2>
          <p className="mx-auto mt-3 max-w-[780px] text-base leading-relaxed text-gray-600 sm:text-lg">
            We provide end-to-end sheet metal fabrication solutions with precision, speed and
            reliability, catering to diverse industrial needs.
          </p>
        </header>

        {/* grid */}
        <div className="services-grid mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-7">
          {SERVICES.map((s, i) => (
            <ServiceCard key={s.title} service={s} index={i} />
          ))}
        </div>
      </div>

      <style>{`
        .services-heading {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 700ms ease, transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .services-card {
          opacity: 0;
          transform: translateY(28px);
          transition:
            opacity 700ms ease,
            transform 700ms cubic-bezier(0.22, 1, 0.36, 1),
            box-shadow 350ms ease;
        }

        .services-section.is-visible .services-heading,
        .services-section.is-visible .services-card {
          opacity: 1;
          transform: translateY(0);
        }

        .services-section.is-visible .services-card:nth-child(1) { transition-delay: 100ms; }
        .services-section.is-visible .services-card:nth-child(2) { transition-delay: 190ms; }
        .services-section.is-visible .services-card:nth-child(3) { transition-delay: 280ms; }
        .services-section.is-visible .services-card:nth-child(4) { transition-delay: 370ms; }
        .services-section.is-visible .services-card:nth-child(5) { transition-delay: 460ms; }
        .services-section.is-visible .services-card:nth-child(6) { transition-delay: 550ms; }

        .services-photo {
          transform: scale(1.015);
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .services-card:hover .services-photo {
          transform: scale(1.07);
        }

        .services-card:hover {
          box-shadow: 0 22px 42px -24px rgba(0, 0, 0, 0.35);
        }

        .services-icon {
          transition: transform 350ms ease, box-shadow 350ms ease;
        }

        .services-card:hover .services-icon {
          transform: translateY(-3px) rotate(-3deg);
          box-shadow: 0 10px 22px -8px rgba(220, 38, 38, 0.55);
        }

        .services-wedge {
          transition: opacity 350ms ease;
        }

        .services-card:hover .services-wedge {
          opacity: 0.7;
        }

        .services-arrow {
          transition: background-color 250ms ease, color 250ms ease;
        }

        .services-link:hover .services-arrow svg {
          transform: translateX(3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .services-heading,
          .services-card,
          .services-photo,
          .services-icon,
          .services-wedge,
          .services-arrow,
          .services-arrow svg {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
