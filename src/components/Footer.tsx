import Image from "next/image";
import Link from "next/link";
import { Mail, MapPin } from "lucide-react";
import { company, navLinks, services } from "@/lib/data";
import { WhatsAppIcon } from "./WhatsAppButton";

export function Footer() {
  return (
    <footer id="kontak" className="bg-ink text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image src="/images/logo.png" alt="E-Cargo" width={120} height={85} />
          <p className="mt-5 text-sm leading-relaxed text-white/60">
            {company.legalName}. Melayani pengiriman ke seluruh Indonesia sejak {company.since}.
          </p>
          <p className="mt-4 font-display text-sm font-bold uppercase tracking-wider text-accent">
            {company.tagline}
          </p>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">Layanan</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link href={`/#${s.id}`} className="text-white/75 hover:text-white">
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">Menu</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-white/75 hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-bold uppercase tracking-wider text-white/40">Hubungi Kami</h3>
          <ul className="mt-4 space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="mt-0.5 shrink-0 text-brand" />
              <span className="text-white/75">
                <span className="block font-semibold text-white">Kantor Pusat</span>
                {company.address}
              </span>
            </li>
            <li>
              <a href={company.whatsappLink} target="_blank" rel="noopener noreferrer" className="flex gap-3 text-white/75 hover:text-white">
                <span className="mt-0.5 shrink-0 text-brand"><WhatsAppIcon size={18} /></span>
                {company.whatsapp}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex gap-3 text-white/75 hover:text-white">
                <Mail size={18} className="mt-0.5 shrink-0 text-brand" />
                {company.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-6 text-xs text-white/40 sm:flex-row sm:justify-between sm:px-6">
          <p>© {company.since}–2026 {company.legalName}. Hak cipta dilindungi.</p>
          <p>{company.slogan}</p>
        </div>
      </div>
    </footer>
  );
}
