import { attorneys } from "@/data/content";
import Image from "next/image";

const avatarImages = [
  "/team-rachel.svg",
  "/team-michael.svg",
  "/team-ava.svg",
];

export function Attorneys() {
  return (
    <section
      id="attorneys"
      className="border-b border-slate-200 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Leadership
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-slate-900 sm:text-4xl">
            Attorneys committed to clarity, precision, and discretion.
          </h2>
          <p className="mt-4 text-sm text-slate-600">
            Each matter is guided by a partner deeply involved from strategy to
            resolution, supported by agile teams tailored to the issue at hand.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((attorney, index) => (
            <article
              key={attorney.name}
              className="flex flex-col rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="relative h-56 overflow-hidden rounded-2xl bg-slate-200">
                <Image
                  src={avatarImages[index] ?? "/placeholder.svg"}
                  alt={attorney.name}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                  {attorney.role}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-slate-900">
                  {attorney.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {attorney.bio}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
