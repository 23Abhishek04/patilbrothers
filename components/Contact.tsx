"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { Phone, Mail, MapPin, Plus, Minus, ArrowRight, Factory } from "lucide-react";

const BG_IMAGE = "/images/contact-bg.png";

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

function InfoItem({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-sm text-gray-500">{label}</p>
        <div className="text-[15px] font-semibold leading-snug text-gray-900">{children}</div>
      </div>
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

/** Input with a floating "placeholder" label that can carry a red asterisk. */
function Field({ name, label, required, type = "text", textarea, value, onChange }: FieldProps) {
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
    <div className="relative h-[280px] overflow-hidden rounded-2xl border border-gray-200 bg-[#f8fafc] shadow-[0_20px_40px_-12px_rgba(0,0,0,0.18)] sm:h-[300px] lg:h-[295px]">
      {/* roads */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 920 295"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden
      >
        <g fill="none" stroke="#e2e8f0" strokeWidth="14" strokeLinecap="round">
          <path d="M30 20 L190 160 L120 240" />
          <path d="M310 0 L520 330" />
          <path d="M60 140 L420 20" />
        </g>
        <g fill="none" stroke="#cbd5e1" strokeWidth="5">
          <path d="M0 200 L260 110 L640 -20" />
          <path d="M660 0 L700 295" />
          <path d="M120 40 L420 300" />
          <path d="M360 160 L560 120 L760 140" />
          <path d="M440 220 L640 240 L900 200" />
          <path d="M240 260 L330 200" />
        </g>
        {/* big diagonal */}
        <path d="M330 0 L560 295" stroke="#b8c4d1" strokeWidth="9" fill="none" />
        {/* expressway */}
        <path d="M757 0 L800 295" stroke="#f0c36d" strokeWidth="14" fill="none" />
        {/* blocks */}
        <g fill="#e5eaf0">
          <path d="M150 115 h60 v35 h-60z" />
          <path d="M175 160 h40 v28 h-40z" />
          <path d="M640 150 h70 v50 h-70z" />
        </g>
      </svg>

      {/* labels */}
      <span className="absolute left-[24%] top-[26%] text-[13px] font-medium text-gray-700">MIDC Bhosari</span>
      <span className="absolute left-[27%] top-[43%] text-center text-[13px] font-medium leading-tight text-gray-700">
        S BLOCK<br />MIDC
      </span>
      <span className="absolute left-[2%] top-[49%] -rotate-[24deg] text-[13px] font-medium text-gray-600">
        Spine Rd
      </span>
      <span className="absolute left-[39%] top-[58%] hidden text-[12px] text-gray-500 sm:block">Pimpri-Chinchwad</span>
      <span className="absolute left-[64%] top-[28%] hidden origin-left rotate-90 text-[11px] text-gray-500 md:block">
        Sonawane Rd
      </span>
      <span className="absolute left-[91%] top-[12%] hidden origin-left rotate-90 text-[11px] font-medium text-gray-600 sm:block">
        Mumbai-Pune Expy
      </span>

      {/* pin */}
      <div className="absolute left-[45%] top-[17%] flex items-center sm:left-[49%]">
        <MapPin className="relative z-10 h-9 w-9 -mr-2 fill-red-600 text-red-600 drop-shadow" strokeWidth={1.5} />
        <span className="rounded-full bg-white py-2 pl-4 pr-5 text-[13px] font-semibold text-gray-900 shadow-lg">
          Patil Brothers
        </span>
      </div>

      {/* address card */}
      <div className="absolute bottom-3 left-3 flex max-w-[calc(100%-6.5rem)] items-center gap-4 rounded-xl border border-gray-200 bg-white/95 px-5 py-4 shadow-lg sm:bottom-4 sm:left-4 sm:max-w-[320px]">
        <Factory className="h-9 w-9 shrink-0 text-red-600" strokeWidth={1.8} />
        <div className="text-[13px] leading-snug text-gray-600">
          <p className="mb-0.5 text-[15px] font-bold text-gray-900">Patil Brothers</p>
          S-230/1, S-Block, MIDC,
          <br />
          Bhosari, Pune – 411026
        </div>
      </div>

      {/* zoom */}
      <div className="absolute bottom-3 right-3 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md sm:bottom-4 sm:right-4">
        <button type="button" aria-label="Zoom in" className="flex h-11 w-11 items-center justify-center text-gray-700 hover:bg-gray-100">
          <Plus className="h-5 w-5" />
        </button>
        <div className="h-px bg-gray-200" />
        <button type="button" aria-label="Zoom out" className="flex h-11 w-11 items-center justify-center text-gray-700 hover:bg-gray-100">
          <Minus className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

/* ---------- main section ---------- */

export default function Contact() {
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

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const set = (k: keyof typeof form) => (v: string) => setForm((f) => ({ ...f, [k]: v }));

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("sending");
    try {
      // TODO: replace with your API route, e.g. fetch("/api/contact", { method: "POST", body: JSON.stringify(form) })
      await new Promise((r) => setTimeout(r, 800));
      setStatus("sent");
      setForm({ name: "", company: "", email: "", phone: "", subject: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <section ref={sectionRef} id="contact" className={`contact-section relative overflow-hidden bg-white ${isVisible ? "is-visible" : ""}`}>
      {/* ===== desktop background: diagonal photo + red wedge ===== */}
      <div aria-hidden className="pointer-events-none absolute inset-y-0 right-0 hidden w-[66%] lg:block">
       
        {/* photo */}
        <div
          className="absolute inset-0 bg-neutral-900 bg-cover bg-center"
          style={{
            clipPath: "polygon(23% 0, 100% 0, 100% 100%, 0 100%)",
            backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.45), rgba(0,0,0,.1) 50%, rgba(0,0,0,.35)), url('${BG_IMAGE}')`,
          }}
        />
        {/* bottom-left red shard */}
        <div
          className="absolute inset-0 bg-gradient-to-tr from-red-700/90 to-transparent"
          style={{ clipPath: "polygon(0 100%, 28% 100%, 40% 88%, 14% 88%)" }}
        />
      </div>

      {/* faint grid lines on the white side */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden lg:block"
        style={{
          background:
            "linear-gradient(115deg, transparent 38%, rgba(220,38,38,.08) 38.1%, transparent 38.3%), linear-gradient(115deg, transparent 31%, rgba(0,0,0,.05) 31.1%, transparent 31.3%)",
        }}
      />

      <div className="relative mx-auto grid max-w-[1400px] gap-10 px-4 pt-14 sm:px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,0.9fr)] lg:gap-14 lg:px-10 lg:pb-16 lg:pt-16 xl:gap-24">
        {/* ===== LEFT ===== */}
        <div className="contact-left min-w-0 pb-4 lg:pb-0">
          <Eyebrow>Contact Us</Eyebrow>

          <h2 className="mt-3 text-5xl font-extrabold leading-[1.05] tracking-tight text-[#0b0d10] sm:text-6xl lg:text-[76px]">
            Get In <span className="text-red-600">Touch</span>
          </h2>

          <p className="mt-4 max-w-[640px] text-lg leading-snug text-gray-600 sm:text-xl">
            Let’s discuss your project requirements. Our team is ready to provide the right
            manufacturing solution for your needs.
          </p>

          {/* contact info */}
          <div className="contact-info mt-8 grid gap-5 sm:grid-cols-2 xl:flex xl:items-center xl:gap-0">
            <div className="xl:pr-6">
              <InfoItem icon={<Phone className="h-5 w-5 fill-red-600" />} label="Call Us">
                <a href="tel:+919595880764" className="hover:text-red-600">+91 959-588-0764</a>
              </InfoItem>
            </div>
            <div className="xl:border-l xl:border-gray-200 xl:px-6">
              <InfoItem icon={<Mail className="h-5 w-5" />} label="Email Us">
                <a href="mailto:patilbrothers@gmail.com" className="break-all hover:text-red-600">
                  patilbrothers@gmail.com
                </a>
              </InfoItem>
            </div>
            <div className="sm:col-span-2 xl:col-span-1 xl:border-l xl:border-gray-200 xl:pl-6">
              <InfoItem icon={<MapPin className="h-5 w-5 fill-red-600" />} label="Our Location">
                S-230/1, S-Block, MIDC,
                <br />
                Bhosari, Pune – 411026
              </InfoItem>
            </div>
          </div>

          {/* map */}
          <div className="contact-map mt-8">
            <MapCard />
          </div>
        </div>

        {/* ===== RIGHT (form) ===== */}
        <div
          className="contact-form-panel relative -mx-4 bg-neutral-900 bg-cover bg-center px-4 py-10 sm:-mx-6 sm:px-6 lg:mx-0 lg:bg-none lg:bg-transparent lg:p-0 lg:pt-0"
          style={{ backgroundImage: `linear-gradient(rgba(0,0,0,.55), rgba(0,0,0,.55)), url('${BG_IMAGE}')` }}
        >
          <div className="mx-auto max-w-[680px] rounded-md bg-white p-6 shadow-2xl sm:p-8 lg:mx-0 lg:mt-0 lg:px-11 lg:py-9">
            <Eyebrow>Send Us A Message</Eyebrow>
            <h3 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0b0d10] sm:text-4xl">
              Request a Quote
            </h3>
            <p className="mt-1 text-[15px] text-gray-500">
              Fill out the form and our team will get back to you shortly.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="name" label="Your Name" required value={form.name} onChange={set("name")} />
                <Field name="company" label="Company Name" value={form.company} onChange={set("company")} />
              </div>
              <Field name="email" type="email" label="Email Address" required value={form.email} onChange={set("email")} />
              <div className="grid gap-4 sm:grid-cols-2">
                <Field name="phone" type="tel" label="Phone Number" value={form.phone} onChange={set("phone")} />
                <Field name="subject" label="Subject" value={form.subject} onChange={set("subject")} />
              </div>
              <Field name="message" textarea label="Your Message" required value={form.message} onChange={set("message")} />

              <button
                type="submit"
                disabled={status === "sending"}
                className="group flex h-[58px] w-full items-center justify-center gap-3 rounded-[4px] bg-gradient-to-b from-red-600 to-red-700 text-[17px] font-semibold text-white shadow-md transition hover:from-red-500 hover:to-red-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-600 focus-visible:ring-offset-2 disabled:opacity-70"
              >
                {status === "sending" ? "Sending…" : "Send Message"}
                <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>

              <p role="status" aria-live="polite" className="min-h-[1.25rem] text-sm">
                {status === "sent" && <span className="text-green-600">Thanks! We’ll get back to you shortly.</span>}
                {status === "error" && <span className="text-red-600">Something went wrong. Please try again.</span>}
              </p>
            </form>
          </div>

          {/* tagline (desktop only) */}
          <div className="absolute -bottom-3 right-0 hidden translate-y-full items-start gap-5 lg:flex">
            <span className="mt-2 h-[4px] w-12 bg-red-600" />
            <p className="w-[130px] text-[13px] font-medium uppercase leading-tight tracking-[0.12em] text-white/60">
              Precision Components Stronger Industries
            </p>
          </div>
        </div>
      </div>

      {/* bottom spacing so the tagline clears on desktop */}
      <div className="hidden h-10 lg:block" />

      <style>{`
        .contact-left,
        .contact-form-panel {
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 800ms ease, transform 800ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-section.is-visible .contact-left,
        .contact-section.is-visible .contact-form-panel {
          opacity: 1;
          transform: translateY(0);
        }

        .contact-section.is-visible .contact-form-panel {
          transition-delay: 180ms;
        }

        .contact-info,
        .contact-map {
          opacity: 0;
          transform: translateY(18px);
          transition: opacity 650ms ease, transform 650ms cubic-bezier(0.22, 1, 0.36, 1);
        }

        .contact-section.is-visible .contact-info {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 220ms;
        }

        .contact-section.is-visible .contact-map {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 340ms;
        }

        .contact-map > div {
          transition: box-shadow 350ms ease, border-color 350ms ease;
        }

        .contact-map:hover > div {
          border-color: rgba(220, 38, 38, 0.35);
          box-shadow: 0 24px 45px -18px rgba(0, 0, 0, 0.38);
        }

        @media (prefers-reduced-motion: reduce) {
          .contact-left,
          .contact-form-panel,
          .contact-info,
          .contact-map,
          .contact-map > div {
            opacity: 1 !important;
            transform: none !important;
            transition: none !important;
          }
        }
      `}</style>
    </section>
  );
}