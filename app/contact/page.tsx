
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
  const mapSrc =
    "https://www.google.com/maps?q=Sr.+No.+230%2F7%2C+S-Block%2C+MIDC%2C+Bhosari+411026&output=embed";

  return (
    <div className="contact-map-card relative h-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] sm:h-[300px] lg:h-[295px]">
      <iframe
        src={mapSrc}
        title="Patil Brothers location on Google Maps"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
        className="h-full w-full border-0"
      />
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

  function onSubmit(e: FormEvent) {
    e.preventDefault();

    // WhatsApp only: the visitor must press Send in WhatsApp to deliver the enquiry.
    const whatsappMessage = [
      "New website enquiry - Patil Brothers",
      `Name: ${form.name}`,
      `Company: ${form.company || "Not provided"}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone || "Not provided"}`,
      `Subject: ${form.subject || "Not provided"}`,
      `Message: ${form.message}`,
    ].join("\\n");

    const whatsappUrl = `https://wa.me/919595880764?text=${encodeURIComponent(whatsappMessage)}`;
    // Open directly from the submit event to reduce the chance of popup blocking.
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus("sent");
    setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
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
                  Send Message
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>

                <p
                  role="status"
                  aria-live="polite"
                  className="min-h-[1.25rem] text-sm"
                >
                  {status === "sent" && (
                    <span className="text-green-600">
                      Your message has been sent successfully.
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
