"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function WellEquippedInfrastructureHero() {
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
      className={`infrastructure-hero relative isolate flex min-h-[560px] w-full items-center overflow-hidden bg-[#17191d] sm:min-h-[620px] lg:min-h-[700px] ${
        entered ? "infrastructure-hero-entered" : ""
      }`}
    >
      <Image
        src="/images/Infrastructure-Hero.png"
        alt="Well-equipped industrial infrastructure and design centre at Patil Brothers"
        fill
        priority
        sizes="100vw"
        className="infrastructure-hero-image -z-30 object-cover object-[62%_center]"
      />

      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#17191d]/95 via-[#17191d]/75 to-[#17191d]/20 max-md:from-[#17191d]/90 max-md:via-[#17191d]/75 max-md:to-[#17191d]/55" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#17191d]/70 via-transparent to-[#17191d]/30" />

      <div className="pointer-events-none absolute -left-16 top-0 -z-10 h-[48%] w-36 -skew-x-[22deg] bg-gradient-to-b from-red-700/50 to-transparent sm:w-52" />
      <div className="pointer-events-none absolute -right-24 top-0 -z-10 hidden h-[70%] w-56 -skew-x-[22deg] bg-gradient-to-b from-red-700/30 to-transparent lg:block" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-px w-full bg-gradient-to-r from-red-600/70 via-white/10 to-transparent" />

      <div className="infrastructure-hero-content mx-auto w-full max-w-[1440px] px-5 pb-16 pt-36 sm:px-8 sm:pb-20 sm:pt-40 lg:px-12 lg:pb-24 lg:pt-44">
        <div className="infrastructure-hero-copy max-w-4xl">
          <nav aria-label="Breadcrumb" className="infrastructure-hero-breadcrumb mb-7">
            <ol className="inline-flex flex-wrap items-center gap-3 rounded-full border border-white/20 bg-[#17191d]/55 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/75 backdrop-blur-md sm:text-sm">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li>
                <Link href="/services" className="transition hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li aria-current="page" className="text-[#ff303b]">
                Infrastructure
              </li>
            </ol>
          </nav>

          <p className="infrastructure-hero-eyebrow mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/75 sm:text-sm">
            <span className="h-0.5 w-10 bg-[#e31e2f]" />
            Advanced Manufacturing
          </p>

          <h1 className="infrastructure-hero-title text-4xl font-black uppercase leading-[0.98] tracking-tight text-white sm:text-6xl lg:text-8xl">
            Well-Equipped <span className="text-[#ff303b]">Infrastructure</span>
          </h1>

          <div className="infrastructure-hero-rule mt-6 h-1 w-20 rounded-full bg-[#e31e2f]" />

          <p className="infrastructure-hero-description mt-6 max-w-2xl text-base leading-relaxed text-[#d4d7db] sm:text-lg lg:text-xl">
            Modern machinery, skilled specialists, and an integrated design centre deliver precision, quality, and efficient manufacturing solutions from concept to completion.
          </p>

          <div className="infrastructure-hero-cta mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#e31e2f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/25 transition hover:bg-red-700 sm:px-7"
            >
              Request a Quote
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
        .infrastructure-hero-image {
          transform: scale(1.045);
          opacity: 0.65;
          transition: transform 1600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1000ms ease;
        }
        .infrastructure-hero-entered .infrastructure-hero-image {
          transform: scale(1);
          opacity: 1;
        }
        .infrastructure-hero-copy > * {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 700ms ease, transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
        }
        .infrastructure-hero-entered .infrastructure-hero-breadcrumb { opacity: 1; transform: translateY(0); transition-delay: 100ms; }
        .infrastructure-hero-entered .infrastructure-hero-eyebrow { opacity: 1; transform: translateY(0); transition-delay: 220ms; }
        .infrastructure-hero-entered .infrastructure-hero-title { opacity: 1; transform: translateY(0); transition-delay: 320ms; }
        .infrastructure-hero-entered .infrastructure-hero-rule { opacity: 1; transform: translateY(0); transition-delay: 430ms; }
        .infrastructure-hero-entered .infrastructure-hero-description { opacity: 1; transform: translateY(0); transition-delay: 520ms; }
        .infrastructure-hero-entered .infrastructure-hero-cta { opacity: 1; transform: translateY(0); transition-delay: 650ms; }
        .infrastructure-hero-cta a {
          transition: background-color 250ms ease, transform 250ms ease, box-shadow 250ms ease;
        }
        .infrastructure-hero-cta a:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -12px rgba(220, 38, 38, 0.65);
        }
        @media (prefers-reduced-motion: reduce) {
          .infrastructure-hero-image,
          .infrastructure-hero-copy > *,
          .infrastructure-hero-cta a {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
