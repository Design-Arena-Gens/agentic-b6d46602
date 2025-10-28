import Link from "next/link";
import { navigationLinks } from "@/data/content";

const footerLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Engagement", href: "#" },
  { label: "Careers", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Harbor & Wells
          </p>
          <p className="mt-3 max-w-md text-sm text-slate-600">
            Boutique law firm providing litigation, corporate, and private
            client counsel across the United States.
          </p>
        </div>

        <nav className="flex flex-wrap gap-4 text-sm text-slate-600">
          {navigationLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-black">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-wrap gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
          {footerLinks.map((link) => (
            <Link key={link.label} href={link.href} className="hover:text-black">
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-8 border-t border-slate-200 pt-6 text-center text-xs uppercase tracking-[0.3em] text-slate-400">
        © {new Date().getFullYear()} Harbor & Wells LLP · All rights reserved
      </div>
    </footer>
  );
}
