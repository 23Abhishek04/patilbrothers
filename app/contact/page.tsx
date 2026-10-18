
"use client";

import { useEffect, useState, type FormEvent } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Plus,
  Minus,
  ArrowRight,
  Factory,
} from "lucide-react";
import ContactHero from "@/app/contact/ContactHero";

/* ---------- small pieces ---------- */

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <span className="h-[3px] w-9 bg-red-600" />
      <span className="text-sm font-semibold uppercase tracking-wide text-red-600">
        {children}
      </span>
    </div>
  );
}

type FieldProps = {
  name: string;
  label: string;
  required?: boolean;
  type?: string;
  textarea?: boolean;
  value: string;
  onChange: (v: string) => void;
};

function Field({
  name,
  label,
  required,
  type = "text",
  textarea,
  value,
  onChange,
}: FieldProps) {
  const base =
    "peer w-full rounded-[4px] border border-gray-200 bg-[#f4f5f6] px-4 text-[15px] text-gray-900 outline-none transition focus:border-red-500 focus:bg-white focus:ring-2 focus:ring-red-500/20";

  return (
    <div className="relative">
      {textarea ? (
        <textarea
          id={name}
          name={name}
          required={required}
          placeholder=" "
          rows={5}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} min-h-[140px] resize-y pb-3 pt-5`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder=" "
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className={`${base} h-[58px]`}
        />
      )}

      <label
        htmlFor={name}
        className={`pointer-events-none absolute left-4 text-[15px] text-gray-500 peer-focus:hidden peer-[:not(:placeholder-shown)]:hidden ${
          textarea ? "top-5" : "top-1/2 -translate-y-1/2"
        }`}
      >
        {label}
        {required && <span className="ml-1 text-red-600">*</span>}
      </label>
    </div>
  );
}

/* ---------- light map card ---------- */

function MapCard() {
  return (
    <div className="contact-map-card relative h-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-[#f7f8fa] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] sm:h-[300px] lg:h-[295px]">
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 920 295"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        {/* light map background */}
        <rect width="920" height="295" fill="#f7f8fa" />
        {/* parks / open areas */}
        <path d="M0 0 H235 L190 72 L95 95 L0 65 Z" fill="#e7efe5" />
        <path d="M640 180 L920 140 V295 H690 Z" fill="#e7efe5" />
        {/* local roads */}
        <g fill="none" stroke="#ffffff" strokeWidth="14" strokeLinecap="round">
          <path d="M30 20 L190 160 L120 240" />
          <path d="M310 0 L520 330" />
          <path d="M60 140 L420 20" />
        </g>
        <g fill="none" stroke="#d8dde3" strokeWidth="5">
          <path d="M0 200 L260 110 L640 -20" />
          <path d="M660 0 L700 295" />
          <path d="M120 40 L420 300" />
          <path d="M360 160 L560 120 L760 140" />
          <path d="M440 220 L640 240 L900 200" />
          <path d="M240 260 L330 200" />
        </g>
        {/* main road and highway */}
        <path d="M330 0 L560 295" stroke="#c5cbd3" strokeWidth="9" fill="none" />
        <path d="M757 0 L800 295" stroke="#f0c477" strokeWidth="14" fill="none" />
        {/* buildings */}
        <g fill="#e1e5e9">
          <path d="M150 115 h60 v35 h-60z" />
          <path d="M175 160 h40 v28 h-40z" />
          <path d="M640 150 h70 v50 h-70z" />
        </g>
      </svg>

      <span className="absolute left-[24%] top-[26%] text-[13px] font-medium text-gray-700">
        MIDC Bhosari
      </span>
      <span className="absolute left-[27%] top-[43%] text-center text-[13px] font-medium leading-tight text-gray-700">
        S BLOCK
        <br />
        MIDC
      </span>
      <span className="absolute left-[2%] top-[49%] -rotate-[24deg] text-[13px] font-medium text-gray-600">
        Spine Rd
      </span>
      <span className="absolute left-[39%] top-[58%] hidden text-[12px] text-gray-500 sm:block">
        Pimpri-Chinchwad
      </span>
      <span className="absolute left-[64%] top-[28%] hidden origin-left rotate-90 text-[11px] text-gray-500 md:block">
        Sonawane Rd
      </span>
      <span className="absolute left-[91%] top-[12%] hidden origin-left rotate-90 text-[11px] font-medium text-gray-600 sm:block">
        Mumbai-Pune Expy
      </span>

      <div className="absolute left-[45%] top-[17%] flex items-center sm:left-[49%]">
        <MapPin
          className="relative z-10 -mr-2 h-9 w-9 fill-red-600 text-red-600 drop-shadow"
          strokeWidth={1.5}
        />
        <span className="rounded-full bg-white py-2 pl-4 pr-5 text-[13px] font-semibold text-gray-900 shadow-md ring-1 ring-gray-200">
          Patil Brothers
        </span>
      </div>

      <div className="absolute bottom-3 left-3 flex max-w-[calc(100%-6.5rem)] items-center gap-4 rounded-xl border border-gray-200 bg-white/95 px-5 py-4 shadow-md sm:bottom-4 sm:left-4 sm:max-w-[320px]">
        <Factory className="h-9 w-9 shrink-0 text-red-600" strokeWidth={1.8} />
        <div className="text-[13px] leading-snug text-gray-600">
          <p className="mb-0.5 text-[15px] font-bold text-gray-900">
            Patil Brothers
          </p>
          S-230/1, S-Block, MIDC,
          <br />
          Bhosari, Pune – 411026
        </div>
      </div>

      <div className="absolute bottom-3 right-3 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md sm:bottom-4 sm:right-4">
        <button
          type="button"
          aria-label="Zoom in"
          className="flex h-11 w-11 items-center justify-center text-gray-700 transition hover:bg-gray-100"
        >
          <Plus className="h-5 w-5" />
        </button>
        <div className="h-px bg-gray-200" />
        <button
          type="button"
          aria-label="Zoom out"
          className="flex h-11 w-11 items-center justify-center text-gray-700 transition hover:bg-gray-100"
        >
          <Minus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- contact page ---------- */

export default function Contact() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".contact-reveal");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      elements.forEach((element) => element.classList.add("contact-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("contact-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" }
    );

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<
    "idle" | "sending" | "sent" | "error"
  >("idle");

  const set = (k: keyof typeof form) => (v: string) =>
    setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      // Replace this simulation with your contact API when ready.
      await new Promise((resolve) => setTimeout(resolve, 800));

      setStatus("sent");
      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Contact hero at the top */}
      <ContactHero />

      {/* Contact details, quote form and map */}
      <section
        id="contact"
        className="contact-section relative overflow-hidden bg-white py-12 sm:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1240px] px-5 sm:px-8">
          <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12">
            {/* Left column */}
            <div className="contact-reveal contact-from-left min-w-0">
              <Eyebrow>Contact Us</Eyebrow>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-[#15171a] sm:text-5xl">
                Get In <span className="text-red-600">Touch</span>
              </h2>

              <p className="mt-3 max-w-md text-base leading-relaxed text-gray-600">
                Let’s discuss your project requirements. Our team is ready to
                help you find the right manufacturing solution.
              </p>

              <div className="mt-6 grid max-w-md gap-4 sm:grid-cols-2 lg:grid-cols-1">
                <a
                  href="tel:+919595880764"
                  className="contact-info-card group flex min-h-[88px] items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-red-100 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-600">
                    <Phone className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 pt-0.5">
                    <span className="block text-xs text-gray-500">
                      Phone Number
                    </span>
                    <span className="mt-1 block text-sm font-semibold leading-snug text-gray-900">
                      +91 959-588-0764
                    </span>
                    <span className="block text-sm font-semibold leading-snug text-gray-900">
                      +91 85306 81818
                    </span>
                  </span>
                </a>

                <a
                  href="mailto:precisionengineering71@gmail.com"
                  className="contact-info-card group flex min-h-[88px] items-start gap-3 rounded-lg border border-gray-100 bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.08)] transition hover:-translate-y-1 hover:border-red-100 hover:shadow-md"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-600">
                    <Mail className="h-5 w-5" />
                  </span>

                  <span className="min-w-0 pt-0.5">
                    <span className="block text-xs text-gray-500">
                      Business Email
                    </span>
                    <span className="mt-1 block break-all text-sm font-semibold leading-snug text-gray-900">
                      precisionengineering71@gmail.com
                    </span>
                    <span className="block break-all text-sm font-semibold leading-snug text-gray-900">
                      info@precisionengineering1.com
                    </span>
                  </span>
                </a>
              </div>
            </div>

            {/* Right column: quote form */}
            <div
              id="contact-form"
              className="contact-reveal contact-from-right rounded-xl border border-gray-100 bg-white p-5 shadow-[0_2px_14px_rgba(0,0,0,0.09)] sm:p-6"
            >
              <Eyebrow>Send Us A Message</Eyebrow>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-[#15171a] sm:text-3xl">
                Request a Quote
              </h3>

              <p className="mt-1 text-sm leading-relaxed text-gray-500">
                Fill out the form and our team will get back to you shortly.
              </p>

              <form onSubmit={onSubmit} className="mt-5 space-y-3.5">
                <div className="grid gap-3 sm:grid-cols-2">
                  <Field
                    name="name"
                    label="Your Name"
                    required
                    value={form.name}
                    onChange={set("name")}
                  />

                  <Field
                    name="company"
                    label="Company Name"
                    value={form.company}
                    onChange={set("company")}
                  />
                </div>

                <Field
                  name="email"
                  type="email"
                  label="Email Address"
                  required
                  value={form.email}
                  onChange={set("email")}
                />

                <div className="grid gap-3 sm:grid-cols-2">
                  <Field
                    name="phone"
                    type="tel"
                    label="Phone Number"
                    value={form.phone}
                    onChange={set("phone")}
                  />

                  <Field
                    name="subject"
                    label="Subject"
                    value={form.subject}
                    onChange={set("subject")}
                  />
                </div>

                <Field
                  name="message"
                  textarea
                  label="Your Message"
                  required
                  value={form.message}
                  onChange={set("message")}
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="group inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-[#17191d] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:opacity-70"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className="min-h-[1.25rem] text-sm"
                >
                  {status === "sent" && (
                    <span className="text-green-600">
                      Thanks! We’ll get back to you shortly.
                    </span>
                  )}

                  {status === "error" && (
                    <span className="text-red-600">
                      Something went wrong. Please try again.
                    </span>
                  )}
                </p>
              </form>
            </div>
          </div>

          {/* Full-width map */}
          <div className="contact-reveal contact-map mt-8 sm:mt-10">
            <MapCard />
          </div>
        </div>
      </section>
      <style>{`
        .contact-reveal {
          opacity: 0;
          transition: opacity 700ms ease, transform 700ms cubic-bezier(.2,.7,.2,1);
          will-change: opacity, transform;
        }
        .contact-from-left { transform: translate3d(-24px, 0, 0); }
        .contact-from-right { transform: translate3d(24px, 16px, 0); transition-delay: 100ms; }
        .contact-map { transform: translate3d(0, 24px, 0); transition-delay: 80ms; }
        .contact-reveal.contact-visible { opacity: 1; transform: translate3d(0, 0, 0); }
        .contact-info-card { transition: transform 250ms ease, border-color 250ms ease, box-shadow 250ms ease; }
        .contact-info-card:hover { transform: translateY(-4px); }
        .contact-map-card { transition: box-shadow 300ms ease, border-color 300ms ease; }
        .contact-map-card:hover { border-color: rgba(220, 38, 38, .28); box-shadow: 0 24px 48px -16px rgba(0,0,0,.42); }
        .contact-section input, .contact-section textarea { transition: border-color 220ms ease, background-color 220ms ease, box-shadow 220ms ease; }
        .contact-section button[type="submit"] { transition: background-color 220ms ease, transform 220ms ease, box-shadow 220ms ease; }
        .contact-section button[type="submit"]:not(:disabled):hover { transform: translateY(-2px); box-shadow: 0 8px 18px rgba(220,38,38,.18); }
        @media (prefers-reduced-motion: reduce) {
          .contact-reveal, .contact-info-card, .contact-map-card, .contact-section input, .contact-section textarea, .contact-section button[type="submit"] { opacity: 1 !important; transform: none !important; transition: none !important; animation: none !important; }
        }
      `}</style>
    </>
  );
}
