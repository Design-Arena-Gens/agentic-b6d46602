const differentiators = [
  {
    stat: "92%",
    label: "Resolved before trial",
    description:
      "Our early case assessment framework positions clients from day one.",
  },
  {
    stat: "37",
    label: "Jurisdictions argued",
    description:
      "Experienced across state and federal courts, arbitrations, and regulatory inquiries.",
  },
  {
    stat: "24h",
    label: "Response promise",
    description:
      "Dedicated team availability for board-level decisions and urgent matters.",
  },
];

export function Differentiators() {
  return (
    <section className="border-b border-slate-200 bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          {differentiators.map((item) => (
            <div
              key={item.label}
              className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm"
            >
              <p className="text-4xl font-semibold text-slate-900">
                {item.stat}
              </p>
              <p className="mt-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                {item.label}
              </p>
              <p className="mt-4 text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
