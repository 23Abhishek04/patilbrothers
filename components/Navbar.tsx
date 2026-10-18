"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "Laser Cutting Facility", href: "/services/LaserCuttingFacility" },
      { label: "Plasma Cutting Facility", href: "/services/PlasmaCuttingFacility" },
      { label: "Bending Facility", href: "/services/BendingFacility" },
      { label: "Welding Facility", href: "/services/WeldingFacility" },
      { label: "Fabrication & Assembly", href: "/services/Fabrication&Assembly" },
      { label: "Well Equipped Infrastructure with Design Centre", href: "/services/WellEquippedInfrastructure" },
    ],
  },
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

function Logo() {
  return (
    <Link
      href="/"
      className="navbar-logo flex items-center gap-3"
      aria-label="Patil Brothers home"
    >
      <span className="flex h-[68px] w-[150px] shrink-0 items-center justify-start sm:h-[76px] sm:w-[170px]">
        <Image
          src="/images/logo.png"
          alt="Patil Brothers Logo"
          width={340}
          height={150}
          priority
          sizes="(max-width: 640px) 150px, 170px"
          className="h-full w-full object-contain object-left"
        />
      </span>
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Entry animation on initial page load.
    const frame = window.requestAnimationFrame(() => setEntered(true));

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    setOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`navbar-entry fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        entered ? "navbar-entered" : ""
      } ${scrolled ? "px-0 pt-0" : "px-3 pt-3 sm:px-6 sm:pt-5"}`}
    >
      <div
        className={`navbar-shell mx-auto max-w-[1440px] border border-white/15 backdrop-blur-xl transition-all duration-300 ${
          scrolled
            ? "rounded-b-xl border-x-0 border-t-0  shadow-lg shadow-black/25  bg-[#000000]/40"
            : "rounded-xl  shadow-lg shadow-black/10   "
        }`}
      >
        <nav
          className={`flex items-center justify-between gap-4 px-4 transition-all duration-300 sm:px-6 lg:px-8 ${
            scrolled ? "py-2.5" : "py-3 sm:py-3.5"
          }`}
          aria-label="Main navigation"
        >
          <Logo />

          {/* Desktop links */}
          <ul className="navbar-links hidden items-center gap-6 lg:flex xl:gap-10">
            {NAV_LINKS.map((link, index) => {
              const active = pathname === link.href;
              return (
                <li
                  key={link.href}
                  className="navbar-link-item group relative"
                  style={{ "--nav-delay": `${index * 70}ms` } as React.CSSProperties}
                >
                  <Link
                    href={link.href}
                    aria-current={active ? "page" : undefined}
                    aria-haspopup={link.children ? "true" : undefined}
                    className={`relative inline-flex items-center gap-2 py-2 text-[15px] font-medium transition-colors hover:text-[#ff303b] ${
                      active || (link.children && pathname.startsWith(link.href))
                        ? "text-white after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#e31e2f]"
                        : "text-white/90"
                    }`}
                  >
                    {link.label}
                    {link.children && (
                      <svg className="h-3.5 w-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.09 1.03l-4.25 4.5a.75.75 0 01-1.09 0l-4.25-4.5a.75.75 0 01.02-1.05z" clipRule="evenodd" />
                      </svg>
                    )}
                  </Link>
                  {link.children && (
                    <ul className="invisible absolute left-0 top-full z-50 mt-2 w-[290px] translate-y-2 rounded-xl border border-white/15 bg-[#17191d]/95 p-2 opacity-0 shadow-2xl shadow-black/30 backdrop-blur-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                      {link.children.map((child) => (
                        <li key={child.href}>
                          <a
                            href={child.href}
                            className="block rounded-lg px-3 py-3 text-sm leading-snug text-white/85 transition-colors hover:bg-white/10 hover:text-[#ff303b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#e31e2f]"
                          >
                            {child.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Right side actions */}
          <div className="navbar-actions flex items-center gap-3">
            <a
              href={PHONE_HREF}
              className="hidden items-center gap-2 rounded-xl border border-white/20 bg-[#17191d]/45 px-4 py-3 text-sm font-medium text-white transition hover:border-[#e31e2f] xl:flex"
            >
              <PhoneIcon />
              {PHONE_DISPLAY}
            </a>

            <Link
              href="/contact"
              className="navbar-quote hidden items-center gap-2 rounded-xl bg-[#e31e2f] px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-red-950/25 transition hover:bg-red-700 md:flex"
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
              aria-controls="mobile-navigation"
              className="flex h-11 w-11 items-center justify-center rounded-lg border border-white/20 bg-[#17191d]/35 text-white transition hover:border-[#e31e2f] lg:hidden"
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
          id="mobile-navigation"
          className={`navbar-mobile grid overflow-hidden transition-all duration-300 lg:hidden ${
            open ? "grid-rows-[1fr] border-t border-white/15" : "grid-rows-[0fr]"
          }`}
          aria-hidden={!open}
        >
          <div className="min-h-0 overflow-hidden">
            <ul className="flex flex-col px-4 py-3 sm:px-6">
              {NAV_LINKS.map((link, index) => {
                const active = pathname === link.href;
                return (
                  <li
                    key={link.href}
                    className="navbar-mobile-item"
                    style={{ "--nav-delay": `${index * 45}ms` } as React.CSSProperties}
                  >
                    <div className="flex items-center justify-between border-b border-white/10">
                      <Link
                        href={link.href}
                        aria-current={active ? "page" : undefined}
                        tabIndex={open ? 0 : -1}
                        className={`flex flex-1 items-center justify-between py-3.5 text-base font-medium transition-colors hover:text-[#ff303b] ${
                          active || (link.children && pathname.startsWith(link.href)) ? "text-[#ff303b]" : "text-white/90"
                        }`}
                      >
                        {link.label}
                        {!link.children && <ArrowIcon className="h-4 w-4 opacity-60" />}
                      </Link>
                      {link.children && (
                        <button
                          type="button"
                          aria-label={`${link.label} submenu`}
                          aria-expanded={servicesOpen}
                          onClick={() => setServicesOpen((value) => !value)}
                          tabIndex={open ? 0 : -1}
                          className="ml-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-white/80 hover:bg-white/10 hover:text-white"
                        >
                          <svg className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.09 1.03l-4.25 4.5a.75.75 0 01-1.09 0l-4.25-4.5a.75.75 0 01.02-1.05z" clipRule="evenodd" />
                          </svg>
                        </button>
                      )}
                    </div>
                    {link.children && (
                      <ul className={`${servicesOpen ? "block" : "hidden"} border-b border-white/10 py-1 pl-3`}>
                        {link.children.map((child) => (
                          <li key={child.href}>
                            <a
                              href={child.href}
                              tabIndex={open ? 0 : -1}
                              className="block rounded-lg px-3 py-3 text-sm leading-snug text-white/75 transition-colors hover:bg-white/5 hover:text-[#ff303b]"
                            >
                              {child.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="navbar-mobile-actions flex flex-col gap-3 px-4 pb-5 pt-2 sm:flex-row sm:px-6">
              <a
                href={PHONE_HREF}
                tabIndex={open ? 0 : -1}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/20 bg-[#17191d]/40 px-4 py-3 text-sm font-medium text-white"
              >
                <PhoneIcon />
                {PHONE_DISPLAY}
              </a>
              <Link
                href="/contact"
                tabIndex={open ? 0 : -1}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-[#e31e2f] px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
              >
                Get a Quote
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .navbar-entry {
          opacity: 0;
          transform: translateY(-18px);
          transition: opacity 650ms ease, transform 750ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .navbar-entry.navbar-entered {
          opacity: 1;
          transform: translateY(0);
        }

        .navbar-logo,
        .navbar-actions {
          transition: transform 350ms ease, opacity 350ms ease;
        }

        .navbar-entry.navbar-entered .navbar-link-item {
          animation: navbarLinkIn 500ms cubic-bezier(0.22, 1, 0.36, 1) both;
          animation-delay: var(--nav-delay, 0ms);
        }

        .navbar-quote {
          transition: background-color 250ms ease, transform 250ms ease, box-shadow 250ms ease;
        }

        .navbar-quote:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 24px -10px rgba(220, 38, 38, 0.6);
        }

        .navbar-mobile-item {
          opacity: 0;
          transform: translateY(8px);
        }

        .navbar-mobile:not([aria-hidden="true"]) .navbar-mobile-item {
          animation: navbarLinkIn 350ms ease both;
          animation-delay: var(--nav-delay, 0ms);
        }

        @keyframes navbarLinkIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @media (prefers-reduced-motion: reduce) {
          .navbar-entry,
          .navbar-logo,
          .navbar-actions,
          .navbar-quote,
          .navbar-mobile-item,
          .navbar-entry.navbar-entered .navbar-link-item {
            opacity: 1 !important;
            transform: none !important;
            animation: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </header>
  );
}
