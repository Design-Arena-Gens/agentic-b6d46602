import Link from "next/link";
import { navigationLinks } from "@/data/content";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="group inline-flex flex-col leading-none">
          <span className="text-lg font-semibold uppercase tracking-[0.45em] text-slate-500 transition-colors group-hover:text-slate-700">
            Harbor & Wells
          </span>
          <span className="text-xs font-medium tracking-[0.3em] text-slate-400">
            Counselors at Law
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-600 md:flex">
          {navigationLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-slate-900"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="rounded-full border border-slate-900 bg-slate-900 px-5 py-2 text-sm font-semibold uppercase tracking-widest text-white transition hover:bg-white hover:text-slate-900"
        >
          Schedule a Call
        </Link>
      </div>
    </header>
  );
}
