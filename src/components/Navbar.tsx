"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { company, navLinks } from "@/lib/data";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open || pathname !== "/";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-ink/95 backdrop-blur border-b border-white/10" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-3" aria-label="E-Cargo beranda">
          <Image src="/images/logo.png" alt="E-Cargo" width={72} height={51} preload />
          <span className="hidden text-[11px] font-semibold uppercase leading-tight tracking-wider text-white/60 sm:block">
            PT. Ekspedisi Lintas
            <br />
            Antar Nusa Garuda
          </span>
        </Link>

        <ul className="hidden items-center gap-8 lg:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`text-sm font-semibold transition-colors hover:text-white ${
                  pathname === l.href ? "text-white" : "text-white/70"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={`${company.whatsappLink}?text=${encodeURIComponent("Halo E-Cargo, saya ingin minta penawaran pengiriman.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark sm:inline-block"
          >
            Minta Penawaran
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="grid size-10 place-items-center rounded-full text-white hover:bg-white/10 lg:hidden"
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-ink px-4 pb-6 lg:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-base font-semibold text-white/80 hover:text-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={company.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-full bg-brand px-5 py-3 text-center text-sm font-bold text-white"
          >
            Minta Penawaran via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
