import { practiceAreas } from "@/data/content";
import { BriefcaseBusiness } from "lucide-react";

export function PracticeAreas() {
  return (
    <section
      id="services"
      className="border-b border-slate-200 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              <BriefcaseBusiness size={16} className="text-slate-700" />
              Practice Areas
            </p>
            <h2 className="mt-4 text-balance text-3xl font-semibold text-slate-900 sm:text-4xl">
              Comprehensive legal counsel for the moments that matter.
            </h2>
          </div>
          <p className="max-w-md text-sm text-slate-600">
            We combine trial-tested experience with pragmatic business insight,
            partnering with founders, boards, and executives to anticipate risk
            and execute with confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {practiceAreas.map((area) => (
            <div
              key={area.title}
              className="group flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-900/40 hover:shadow-lg"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                {area.title}
              </span>
              <p className="text-sm leading-relaxed text-slate-600">
                {area.description}
              </p>
              <span className="mt-auto text-xs font-medium uppercase tracking-[0.3em] text-slate-500 transition group-hover:text-slate-900">
                Explore →
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
