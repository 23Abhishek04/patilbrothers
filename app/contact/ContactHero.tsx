"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function ContactHero() {
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
      className={`contact-hero relative isolate flex min-h-[480px] w-full items-center overflow-hidden bg-[#17191d] sm:min-h-[540px] lg:min-h-[600px] ${
        entered ? "contact-hero-entered" : ""
      }`}
    >
      {/* Background image */}
      <Image
        src="/images/contactus-hero.png"
        alt="Precision laser cutting at Patil Brothers"
        fill
        priority
        sizes="100vw"
        className="contact-hero-image -z-30 object-cover object-[62%_center]"
      />

      {/* Subtle charcoal overlays for contrast */}
      <div className="absolute inset-0 -z-20 bg-gradient-to-r from-[#17191d]/95 via-[#17191d]/78 to-[#17191d]/25 max-md:from-[#17191d]/92 max-md:via-[#17191d]/80 max-md:to-[#17191d]/60" />
      <div className="absolute inset-0 -z-20 bg-gradient-to-t from-[#17191d]/70 via-transparent to-[#17191d]/35" />

      {/* Restrained red accents matching the site palette */}
      <div className="pointer-events-none absolute -left-16 top-0 -z-10 h-[48%] w-36 -skew-x-[22deg] bg-gradient-to-b from-red-700/45 to-transparent sm:w-52" />
      <div className="pointer-events-none absolute -right-24 top-0 -z-10 hidden h-[70%] w-56 -skew-x-[22deg] bg-gradient-to-b from-red-700/30 to-transparent lg:block" />
      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-px w-full bg-gradient-to-r from-red-600/70 via-white/10 to-transparent" />

      <div className="contact-hero-content mx-auto w-full max-w-[1440px] px-5 pb-14 pt-32 sm:px-8 sm:pb-16 sm:pt-36 lg:px-12 lg:pb-20 lg:pt-40">
        <div className="contact-hero-copy max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="contact-hero-breadcrumb mb-6">
            <ol className="inline-flex items-center gap-3 rounded-full border border-white/20 bg-[#17191d]/55 px-5 py-3 text-xs font-medium uppercase tracking-[0.16em] text-white/75 backdrop-blur-md sm:text-sm">
              <li>
                <Link href="/" className="transition hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">/</li>
              <li aria-current="page" className="text-[#ff303b]">
                Contact Us
              </li>
            </ol>
          </nav>

          <p className="contact-hero-eyebrow mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/75 sm:text-sm">
            <span className="h-0.5 w-10 bg-[#e31e2f]" />
            Let&apos;s Start a Conversation
          </p>

          <h1 className="contact-hero-title text-5xl font-black uppercase leading-[0.95] tracking-tight text-white sm:text-7xl lg:text-8xl">
            Contact <span className="text-[#ff303b]">Us</span>
          </h1>

          <div className="contact-hero-rule mt-6 h-1 w-20 rounded-full bg-[#e31e2f]" />

          <p className="contact-hero-description mt-6 max-w-2xl text-base leading-relaxed text-[#d4d7db] sm:text-lg lg:text-xl">
            Have a project in mind? Talk to our team about precision sheet metal
            fabrication, custom manufacturing, and a solution tailored to your requirements.
          </p>

          <div className="contact-hero-actions mt-8 flex flex-wrap items-center gap-4">
            <a
              href="tel:+919595880764"
              className="group inline-flex items-center gap-3 rounded-lg border border-white/25 bg-[#17191d]/55 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition hover:border-[#e31e2f] hover:bg-[#292d32]/80 sm:px-7"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5 text-[#ff303b]"
                aria-hidden="true"
              >
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
              </svg>
              Call Us: +91 959-588-0764
            </a>

            <Link
              href="/contact#contact-form"
              className="group inline-flex items-center gap-3 rounded-lg bg-[#e31e2f] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-red-950/25 transition hover:bg-red-700 sm:px-7"
            >
              Send an Enquiry
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
        .contact-hero-image {
          transform: scale(1.045);
          opacity: 0.65;
          transition: transform 1600ms cubic-bezier(0.22, 1, 0.36, 1), opacity 1000ms ease;
        }

        .contact-hero-entered .contact-hero-image {
          transform: scale(1);
          opacity: 1;
        }

        .contact-hero-copy > * {
          opacity: 0;
          transform: translateY(22px);
          transition: opacity 700ms ease, transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-hero-entered .contact-hero-breadcrumb { opacity: 1; transform: translateY(0); transition-delay: 100ms; }
        .contact-hero-entered .contact-hero-eyebrow { opacity: 1; transform: translateY(0); transition-delay: 220ms; }
        .contact-hero-entered .contact-hero-title { opacity: 1; transform: translateY(0); transition-delay: 320ms; }
        .contact-hero-entered .contact-hero-rule { opacity: 1; transform: translateY(0); transition-delay: 430ms; }
        .contact-hero-entered .contact-hero-description { opacity: 1; transform: translateY(0); transition-delay: 520ms; }
        .contact-hero-entered .contact-hero-actions { opacity: 1; transform: translateY(0); transition-delay: 650ms; }

        .contact-hero-actions a {
          transition: background-color 250ms ease, border-color 250ms ease, transform 250ms ease, box-shadow 250ms ease;
        }

        .contact-hero-actions a:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -12px rgba(220, 38, 38, 0.45);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-hero-image,
          .contact-hero-copy > *,
          .contact-hero-actions a {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}
