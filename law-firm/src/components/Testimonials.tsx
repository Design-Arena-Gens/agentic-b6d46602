import { testimonials } from "@/data/content";
import { MessageCircle } from "lucide-react";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="border-b border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              <MessageCircle size={16} className="text-slate-700" />
              Client Perspectives
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">
              Trusted partners when decisions carry extraordinary weight.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            We operate as an extension of our clients&apos; leadership teams,
            aligning legal strategy with business outcomes and stakeholder
            expectations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <blockquote
              key={testimonial.author}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-sm leading-relaxed text-slate-700">
                {testimonial.quote}
              </p>
              <footer className="mt-6">
                <p className="text-sm font-semibold text-slate-900">
                  {testimonial.author}
                </p>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                  {testimonial.detail}
                </p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
