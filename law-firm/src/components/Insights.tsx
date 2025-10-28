import { insights } from "@/data/content";
import Link from "next/link";

export function Insights() {
  return (
    <section
      id="insights"
      className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
              Insights
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
              Guidance shaped by regulatory shifts and boardroom realities.
            </h2>
          </div>
          <Link
            href="#contact"
            className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-700 underline-offset-4 hover:underline"
          >
            Subscribe for Updates
          </Link>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {insights.map((article) => (
            <article
              key={article.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                  Briefing
                </p>
                <h3 className="mt-3 text-lg font-semibold text-slate-900">
                  {article.title}
                </h3>
                <p className="mt-4 text-sm text-slate-600">{article.excerpt}</p>
              </div>
              <Link
                href="#contact"
                className="mt-6 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 transition hover:text-slate-900"
              >
                Request the Full Report →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
