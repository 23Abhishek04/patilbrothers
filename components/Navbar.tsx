"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Our Capabilities", href: "/capabilities" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact Us", href: "/contact" },
];

const PHONE_DISPLAY = "+91 959-588-0764";
const PHONE_HREF = "tel:+919595880764";

function PhoneIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z" />
    </svg>
  );
}

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

/** Replace with <Image src="/logo.png" ... /> once you have the real logo file. */
function Logo() {
  return (
   <Link
  href="/"
  className="flex items-center gap-3"
  aria-label="Patil Brothers home"
>
  <Image
    src="/images/logo.png"
    alt="Patil Brothers Logo"
    width={250}
    height={100}
    priority
    className="h-12 w-auto object-contain sm:h-18"
  />
</Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  // Sticky / shrink-on-scroll state
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "px-0 pt-0" : "px-3 pt-3 sm:px-6 sm:pt-5"
      }`}
    >
      <div
        className={`mx-auto max-w-[1440px] border border-white/10 backdrop-blur-md transition-all duration-300 ${
          scrolled
            ? "rounded-b-xl border-x-0 border-t-0 bg-black/90 shadow-lg shadow-black/50"
            : "rounded-xl bg-black/40"
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "py-2" : "py-3 sm:py-4"
          }`}
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop links */}
          <ul className="hidden items-center gap-6 lg:flex xl:gap-10">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`relative inline-block py-2 text-[15px] font-medium transition-colors hover:text-[#ff1620] ${
                      active ? "text-white" : "text-white"
                    }`}
                  >
                    {link.label}
                    
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Right side actions */}
          <div className="flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 rounded-xl border border-white/20 bg-black/30 px-4 py-3 text-sm font-medium text-white transition hover:border-[#ff1620] xl:flex"
            >
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>

            <Link
              href="/contact"
              className="hidden items-center gap-2 rounded-xl bg-[#ff1620] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-900/40 transition hover:bg-red-700 md:flex"
            >
              Get a Quote
              <ArrowIcon />
            </Link>

            {/* Hamburger (mobile + tablet) */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 text-white transition hover:border-[#ff1620] lg:hidden"
            >
              <span className="relative block h-4 w-5">
                <span
                  className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 rotate-45" : "top-0"
                  }`}
                />
                <span
                  className={`absolute left-0 top-1.5 h-0.5 w-full bg-current transition-opacity duration-300 ${
                    open ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute left-0 h-0.5 w-full bg-current transition-all duration-300 ${
                    open ? "top-1.5 -rotate-45" : "top-3"
                  }`}
                />
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile / tablet menu */}
        <div
          className={`grid overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "grid-rows-[1fr] border-t border-white/10" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="flex flex-col px-4 py-3 sm:px-6">
              {NAV_LINKS.map((link) => {
                const active = pathname === link.href;
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`flex items-center justify-between border-b border-white/5 py-3.5 text-base font-medium transition-colors hover:text-[#ff1620] ${
                        active ? "text-[#ff1620]" : "text-white"
                      }`}
                    >
                      {link.label}
                      <ArrowIcon className="h-4 w-4 opacity-60" />
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex flex-col gap-3 px-4 pb-5 pt-2 sm:flex-row sm:px-6">
              <a
                href={PHONE_HREF}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 px-4 py-3 text-sm font-medium text-white"
              >
                <PhoneIcon />
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#ff1620] px-4 py-3 text-sm font-semibold text-white"
              >
                Get a Quote
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}