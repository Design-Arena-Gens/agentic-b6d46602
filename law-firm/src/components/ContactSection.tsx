import { Mail, Phone, MapPin } from "lucide-react";
import type { JSX } from "react";

type ContactDetail = {
  icon: JSX.Element;
  label: string;
  value: string;
};

const contactDetails: ContactDetail[] = [
  {
    icon: <Phone size={16} />,
    label: "Call",
    value: "+1 (415) 555-0148",
  },
  {
    icon: <Mail size={16} />,
    label: "Email",
    value: "contact@harborwells.com",
  },
  {
    icon: <MapPin size={16} />,
    label: "Visit",
    value: "555 Montgomery St · Suite 2800 · San Francisco, CA",
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-slate-900 py-20 text-slate-100 sm:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-300">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Align with counsel who understands what&apos;s at stake.
            </h2>
            <p className="mt-4 text-sm text-slate-300">
              Send us a brief overview of your matter and we&apos;ll respond
              within one business day. Urgent inquiries receive same-day
              attention.
            </p>

            <div className="mt-10 grid gap-4">
              {contactDetails.map((detail) => (
                <div
                  key={detail.label}
                  className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-3 text-sm"
                >
                  <span className="text-emerald-300">{detail.icon}</span>
                  <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                    {detail.label}
                  </span>
                  <span className="font-medium text-slate-100">
                    {detail.value}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <form className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-xl backdrop-blur">
            <div className="grid gap-4">
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  Name
                </span>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  Email
                </span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@company.com"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  Company
                </span>
                <input
                  type="text"
                  name="company"
                  placeholder="Organization"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                />
              </label>
              <label className="flex flex-col gap-2 text-sm">
                <span className="text-xs uppercase tracking-[0.3em] text-slate-300">
                  Summary
                </span>
                <textarea
                  name="summary"
                  rows={4}
                  placeholder="Briefly describe how we can support you"
                  className="rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-slate-400 focus:border-emerald-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/40"
                />
              </label>
              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-emerald-400 px-5 py-3 text-xs font-semibold uppercase tracking-[0.3em] text-slate-900 transition hover:bg-emerald-300"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
