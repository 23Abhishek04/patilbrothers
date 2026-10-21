"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function AboutHero() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setEntered(true);
      return;
    }

    const frame = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      className={`about-hero relative isolate flex min-h-[560px] w-full items-center overflow-hidden bg-[#17191d] sm:min-h-[620px] lg:min-h-[700px] ${
        entered ? "about-hero-entered" : ""
      }`}
    >
      {/* Banner image */}
      <Image
        src="/images/about-hero.png"
        alt="Precision laser cutting sheet metal at Patil Brothers"
        fill
        priority
        sizes="100vw"
        className="about-hero-image -z-30 object-cover object-[62%_center]"
      />

      {/* Subtle charcoal overlays keep the banner balanced and readable */}
      <div className="about-hero-overlay absolute inset-0 -z-20 bg-gradient-to-r from-[#17191d]/95 via-[#17191d]/75 to-[#17191d]/20 max-md:from-[#17191d]/90 max-md:via-[#17191d]/75 max-md:to-[#17191d]/55" />
      <div className="about-hero-overlay absolute inset-0 -z-20 bg-gradient-to-t from-[#17191d]/70 via-transparent to-[#17191d]/30" />

      {/* Restrained Patil Brothers red accents */}
      <div className="pointer-events-none absolute -left-16 top-0 -z-10 h-[48%] w-36 -skew-x-[22deg] bg-gradient-to-b from-red-700/50 to-transparent sm:w-52" />
      <div className="pointer-events-none absolute -right-24 top-0 -z-10 hidden h-[70%] w-56 -skew-x-[22deg] bg-gradient-to-b from-red-700/30 to-transparent lg:block" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-px w-full bg-gradient-to-r from-red-600/70 via-white/10 to-transparent" />

      <div className="about-hero-content mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-44">
        <div className="about-hero-copy max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="about-hero-breadcrumb mb-7">
            <ol className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#17191d]/55 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/75 backdrop-blur-md sm:text-sm">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li aria-current="page" className="text-[#ff303b]">
                About Us
              </li>
            </ol>
          </nav>

          {/* Page heading */}
          <p className="about-hero-eyebrow mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/75 sm:text-sm">
            <span className="h-0.5 w-10 bg-[#e31e2f]" />
            Get to Know Us
          </p>

          <h1 className="about-hero-title text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            About <span className="text-[#ff303b]">Us</span>
          </h1>

          <div className="about-hero-rule mt-6 h-1 w-20 rounded-full bg-[#e31e2f]" />

          <p className="about-hero-description mt-6 max-w-2xl text-base leading-relaxed text-[#d4d7db] sm:text-lg lg:text-xl">
            Delivering high-precision sheet metal fabrication and custom manufacturing
            solutions with a commitment to quality, innovation and long-term partnerships.
          </p>

          <div className="about-hero-cta mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#e31e2f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/25 transition hover:bg-red-700 sm:px-7"
            >
              Discuss Your Project
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .about-hero-image {
          transform: scale(1.045);
          opacity: 0.65;
          transition: transform 1600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1000ms ease;
        }

        .about-hero-entered .about-hero-image {
          transform: scale(1);
          opacity: 1;
        }

        .about-hero-copy > * {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 700ms ease, transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .about-hero-entered .about-hero-breadcrumb { opacity: 1; transform: translateY(0); transition-delay: 100ms; }
        .about-hero-entered .about-hero-eyebrow { opacity: 1; transform: translateY(0); transition-delay: 220ms; }
        .about-hero-entered .about-hero-title { opacity: 1; transform: translateY(0); transition-delay: 320ms; }
        .about-hero-entered .about-hero-rule { opacity: 1; transform: translateY(0); transition-delay: 430ms; }
        .about-hero-entered .about-hero-description { opacity: 1; transform: translateY(0); transition-delay: 520ms; }
        .about-hero-entered .about-hero-cta { opacity: 1; transform: translateY(0); transition-delay: 650ms; }

        .about-hero-cta a {
          transition: background-color 250ms ease, transform 250ms ease, box-shadow 250ms ease;
        }

        .about-hero-cta a:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -12px rgba(220, 38, 38, 0.65);
        }

        @media (prefers-reduced-motion: reduce) {
          .about-hero-image,
          .about-hero-copy > *,
          .about-hero-cta a {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
