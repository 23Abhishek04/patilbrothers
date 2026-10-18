"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function FabricationAssemblyHero() {
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => setEntered(true));
    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <section
      aria-labelledby="fabrication-assembly-hero-title"
      className={`fabrication-assembly-hero relative isolate flex min-h-[390px] items-center overflow-hidden bg-[#111316] pt-28 sm:min-h-[440px] sm:pt-32 lg:min-h-[500px] lg:pt-36 ${
        entered ? "is-entered" : ""
      }`}
    >
      {/* Background image and charcoal overlay */}
      <div
        aria-hidden="true"
        className="fabrication-assembly-hero__background absolute inset-0 -z-20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0b0d10]/95 via-[#111316]/80 to-[#111316]/45"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-gradient-to-t from-[#111316]/70 via-transparent to-black/10"
      />

      <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 lg:px-12 lg:pb-24">
        <nav
          aria-label="Breadcrumb"
          className="fabrication-assembly-hero__item mb-7 flex flex-wrap items-center gap-2 text-xs font-medium text-white/65 sm:text-sm"
          style={{ "--hero-delay": "80ms" } as React.CSSProperties}
        >
          <Link href="/" className="transition-colors hover:text-white">
            Home
          </Link>
          <span aria-hidden="true" className="text-[#e31e2f]">/</span>
          <Link
            href="/services"
            className="transition-colors hover:text-white"
          >
            Services
          </Link>
          <span aria-hidden="true" className="text-[#e31e2f]">/</span>
          <span aria-current="page" className="text-white">
            Fabrication &amp; Assembly
          </span>
        </nav>

        <div className="max-w-4xl">
          <div
            className="fabrication-assembly-hero__item mb-5 flex items-center gap-3"
            style={{ "--hero-delay": "160ms" } as React.CSSProperties}
          >
            <span className="h-0.5 w-9 bg-[#e31e2f]" />
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-white/75 sm:text-sm">
              Precision Engineering
            </p>
          </div>

          <h1
            id="fabrication-assembly-hero-title"
            className="fabrication-assembly-hero__item text-4xl font-black leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ "--hero-delay": "240ms" } as React.CSSProperties}
          >
            Fabrication <span className="text-[#e31e2f]">&amp; Assembly</span>
          </h1>

          <div
            className="fabrication-assembly-hero__item mt-6 h-1 w-20 rounded-full bg-[#e31e2f] sm:mt-7"
            style={{ "--hero-delay": "320ms" } as React.CSSProperties}
          />

          <p
            className="fabrication-assembly-hero__item mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:mt-7 sm:text-base sm:leading-8 lg:text-lg"
            style={{ "--hero-delay": "400ms" } as React.CSSProperties}
          >
            Comprehensive fabrication and assembly solutions, combining
            precision engineering, skilled craftsmanship, and reliable quality
            to bring your designs to life.
          </p>

          <div
            className="fabrication-assembly-hero__item mt-8 flex flex-wrap items-center gap-4 sm:mt-9"
            style={{ "--hero-delay": "480ms" } as React.CSSProperties}
          >
            <Link
              href="/contact"
              className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-md bg-[#e31e2f] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-red-950/25 transition duration-300 hover:-translate-y-1 hover:bg-[#c91828] hover:shadow-xl hover:shadow-red-950/35 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111316] sm:px-7"
            >
              Request a Quote
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.2}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <style>{`
        .fabrication-assembly-hero__background {
          background-image: url("/images/about-hero-bg.png");
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          transform: scale(1.08);
          transition: transform 1600ms cubic-bezier(0.2, 0.7, 0.2, 1);
        }

        .fabrication-assembly-hero.is-entered .fabrication-assembly-hero__background {
          transform: scale(1);
        }

        .fabrication-assembly-hero__item {
          opacity: 0;
          transform: translateY(20px);
          transition:
            opacity 650ms ease,
            transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: var(--hero-delay, 0ms);
        }

        .fabrication-assembly-hero.is-entered .fabrication-assembly-hero__item {
          opacity: 1;
          transform: translateY(0);
        }

        @media (max-width: 640px) {
          .fabrication-assembly-hero__background {
            background-position: 58% center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .fabrication-assembly-hero__background,
          .fabrication-assembly-hero__item {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
