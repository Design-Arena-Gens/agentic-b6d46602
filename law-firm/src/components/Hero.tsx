import { ShieldCheck, Landmark } from "lucide-react";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 opacity-95" />
        <div className="absolute inset-y-0 right-[-20%] hidden h-full w-[480px] bg-[radial-gradient(circle_at_top,rgba(148,163,184,0.35),transparent)] lg:block" />
      </div>

      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 sm:py-28 lg:flex-row lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-slate-200/80">
            <ShieldCheck size={16} className="text-emerald-400" />
            <span>Litigation · Counsel · Strategy</span>
          </div>

          <h1 className="text-balance text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Steadfast advocates for companies navigating pivotal moments.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-200">
            Harbor & Wells is a boutique law firm advising emerging companies,
            closely held businesses, and private clients through high-stakes
            disputes and transformative deals.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4 text-sm text-slate-300">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
              <Landmark size={16} className="text-emerald-400" />
              Based in San Francisco · Serving clients nationwide
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2">
              80% of matters resolved before trial
            </span>
          </div>
        </div>

        <div className="relative flex w-full max-w-md flex-col gap-5 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-300">
                Recent Result
              </p>
              <p className="mt-1 text-sm text-slate-200">
                Defense verdict in $48M contract dispute
              </p>
            </div>
            <span className="rounded-full bg-emerald-500/20 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
              Resolved
            </span>
          </div>
          <p className="text-sm text-slate-200">
            “The team&apos;s preparation and courtroom command were unmatched.
            Harbor & Wells not only protected our position, they preserved our
            business relationships.”
          </p>
          <div className="border-t border-white/10 pt-4 text-xs text-slate-400">
            Confidential client · Fortune 100 technology company
          </div>
        </div>
      </div>
    </section>
  );
}
