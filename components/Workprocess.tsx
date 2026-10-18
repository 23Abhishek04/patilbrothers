"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";

const iconProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  className: "h-8 w-8 sm:h-9 sm:w-9",
  "aria-hidden": true as const,
};

type Step = {
  number: string;
  title: string;
  text: string;
  image: string;
  icon: ReactNode;
};

const STEPS: Step[] = [
  {
    number: "01",
    title: "Share Your Requirements",
    text: "Send us your drawings, sample parts or idea.",
    image: "/images/process-1.png",
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H6a1.5 1.5 0 0 0-1.5 1.5v15A1.5 1.5 0 0 0 6 21h5" />
        <path d="M14 3l5 5v2" />
        <path d="M14 3v5h5" />
        <path d="M8 12h6M8 15.5h3" />
        <path d="M18.5 13l2.5 2.5-5.5 5.5H13v-2.5l5.5-5.5z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Get a Quote",
    text: "We review your requirements and provide a competitive quote.",
    image: "/images/process-2.png",
    icon: (
      <svg {...iconProps}>
        <path d="M14 3H6.5A1.5 1.5 0 0 0 5 4.5v15A1.5 1.5 0 0 0 6.5 21h11a1.5 1.5 0 0 0 1.5-1.5V8l-5-5z" />
        <path d="M14 3v5h5" />
        <path d="M9 11.5h5.5M9 14h5.5M11 11.5c2.6 0 2.6 4 0 4h-1.5l3 2.5" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Production",
    text: "Your parts are manufactured with precision and quality control.",
    image: "/images/process-3.png",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Delivery",
    text: "On-time delivery to your location.",
    image: "/images/process-4.png",
    icon: (
      <svg {...iconProps}>
        <path d="M2 6h11v10H2zM13 9h4l4 4v3h-8z" />
        <circle cx="7" cy="18" r="1.8" />
        <circle cx="17" cy="18" r="1.8" />
      </svg>
    ),
  },
];

function ArrowCircle() {
  return (
    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#ff1620] text-white shadow-md shadow-red-500/30">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3.5 w-3.5"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </span>
  );
}

export default function Workprocess() {
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
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="process"
      className={`workprocess-section relative isolate overflow-hidden bg-gradient-to-b from-white to-neutral-100 py-16 sm:py-20 lg:py-24 ${
        isVisible ? "is-visible" : ""
      }`}
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute -left-20 top-0 -z-10 h-56 w-40 -skew-x-[22deg] bg-gradient-to-b from-red-600 to-red-300/20 sm:w-56" />
      <div className="pointer-events-none absolute -right-24 bottom-0 -z-10 hidden h-[70%] w-56 -skew-x-[22deg] bg-gradient-to-t from-red-600 to-transparent lg:block" />
      <svg
        viewBox="0 0 24 24"
        fill="currentColor"
        className="pointer-events-none absolute -right-10 top-10 -z-10 hidden h-80 w-80 text-neutral-200/50 md:block"
        aria-hidden="true"
      >
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
      </svg>
      <div
        className="pointer-events-none absolute bottom-6 left-3 -z-10 hidden h-28 w-36 opacity-60 sm:block"
        style={{
          backgroundImage: "radial-gradient(#ff1620 1.5px, transparent 1.5px)",
          backgroundSize: "18px 18px",
        }}
      />

      <div className="workprocess-content mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="workprocess-heading mx-auto max-w-3xl text-center">
          <div className="flex items-center justify-center gap-3">
            <span className="h-0.5 w-10 bg-[#ff1620] sm:w-14" />
            <span className="text-sm font-semibold uppercase tracking-wide text-[#ff1620] sm:text-base">
              Work Process
            </span>
          </div>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-neutral-950 sm:text-5xl lg:text-6xl">
            How We <span className="text-[#ff1620]">Work</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-neutral-600 sm:text-lg">
            A simple and transparent process to turn your ideas into high-quality metal
            components, from design to delivery.
          </p>
        </div>

        {/* Steps */}
        <ol className="workprocess-steps mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:mt-16 sm:grid-cols-2 sm:gap-y-14 lg:grid-cols-4 lg:gap-x-8">
          {STEPS.map((step, i) => {
            const isLast = i === STEPS.length - 1;
            return (
              <li key={step.number} className="workprocess-step group relative">
                {/* Image */}
                <div className="workprocess-image relative h-48 sm:h-52 lg:h-48 xl:h-56">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800"
                    style={{ clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)" }}
                  />
                  <div
                    className="absolute inset-0 ml-3 overflow-hidden bg-neutral-900 sm:ml-4"
                    style={{ clipPath: "polygon(12% 0, 100% 0, 88% 100%, 0 100%)" }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      sizes="(min-width:1024px) 25vw, (min-width:640px) 50vw, 100vw"
                      className="workprocess-photo object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>

                {/* Card body */}
                <div className="workprocess-card relative -mt-px rounded-b-3xl rounded-tr-[2.5rem] bg-white px-5 pb-7 pt-12 shadow-xl shadow-neutral-300/50 sm:px-6">
                  {/* Icon badge */}
                  <div className="absolute left-[36%] top-0 -translate-x-1/2 -translate-y-1/2">
                    <span className="flex h-[72px] w-[72px] items-center justify-center rounded-full bg-white p-1.5 shadow-lg sm:h-20 sm:w-20">
                      <span className="flex h-full w-full items-center justify-center rounded-full bg-[#ff1620] text-white">
                        {step.icon}
                      </span>
                    </span>
                  </div>

                  {/* Connector line + arrow (desktop only) */}
                  {!isLast && (
                    <div
                      className="pointer-events-none absolute right-0 top-0 hidden -translate-y-1/2 items-center lg:flex"
                      style={{ left: "calc(36% + 2.75rem)" }}
                      aria-hidden="true"
                    >
                      <span className="h-px flex-1 bg-[#ff1620]" />
                      <ArrowCircle />
                    </div>
                  )}

                  <div className="flex items-start gap-4">
                    <span className="select-none text-5xl font-black leading-none text-neutral-200 xl:text-6xl">
                      {step.number}
                    </span>
                    <div className="pt-1">
                      <h3 className="text-lg font-bold leading-tight text-neutral-950 xl:text-xl">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-neutral-500 xl:text-[15px]">
                        {step.text}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>

      <style>{`
        .workprocess-heading,
        .workprocess-step {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 750ms ease, transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .workprocess-section.is-visible .workprocess-heading {
          opacity: 1;
          transform: translateY(0);
        }

        .workprocess-section.is-visible .workprocess-step {
          opacity: 1;
          transform: translateY(0);
        }

        .workprocess-section.is-visible .workprocess-step:nth-child(1) { transition-delay: 100ms; }
        .workprocess-section.is-visible .workprocess-step:nth-child(2) { transition-delay: 220ms; }
        .workprocess-section.is-visible .workprocess-step:nth-child(3) { transition-delay: 340ms; }
        .workprocess-section.is-visible .workprocess-step:nth-child(4) { transition-delay: 460ms; }

        .workprocess-image {
          overflow: hidden;
        }

        .workprocess-photo {
          transition: transform 700ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .workprocess-step:hover .workprocess-photo {
          transform: scale(1.06);
        }

        .workprocess-card {
          transition: box-shadow 350ms ease, transform 350ms ease;
        }

        .workprocess-step:hover .workprocess-card {
          transform: translateY(-5px);
          box-shadow: 0 24px 45px -24px rgba(38, 38, 38, 0.35);
        }

        .workprocess-step .workprocess-image > div:first-child {
          transition: filter 350ms ease;
        }

        .workprocess-step:hover .workprocess-image > div:first-child {
          filter: brightness(1.12);
        }

        @media (prefers-reduced-motion: reduce) {
          .workprocess-heading,
          .workprocess-step,
          .workprocess-photo,
          .workprocess-card,
          .workprocess-step .workprocess-image > div:first-child {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </section>
  );
}
