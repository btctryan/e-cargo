import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Clock, Map as MapIcon, Plane, ShieldCheck, Ship, Truck, Warehouse } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { TrackForm } from "@/components/TrackForm";
import { CoverageMap } from "@/components/maps";
import { WhatsAppIcon } from "@/components/WhatsAppButton";
import {
  cities,
  clients,
  company,
  coreValues,
  director,
  reasons,
  services,
  stats,
  team,
  vision,
} from "@/lib/data";

const serviceIcons = { plane: Plane, truck: Truck, ship: Ship, warehouse: Warehouse };
const reasonIcons = { map: MapIcon, shield: ShieldCheck, truck: Truck, clock: Clock };

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Values />
      <Services />
      <WhyUs />
      <Coverage />
      <Team />
      <Clients />
      <Cta />
    </>
  );
}

function SectionHeading({
  eyebrow,
  title,
  text,
  light = false,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  center?: boolean;
}) {
  return (
    <Reveal className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <span className={light ? "eyebrow on-dark" : "eyebrow"}>{eyebrow}</span>
      <h2
        className={`mt-4 font-display text-3xl font-extrabold uppercase leading-[1.05] tracking-tight [font-stretch:112%] sm:text-5xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {text && <p className={`mt-4 text-base leading-relaxed ${light ? "text-white/60" : "text-black/60"}`}>{text}</p>}
    </Reveal>
  );
}

function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] flex-col overflow-hidden bg-ink text-white">
      <Image
        src="/images/hero-truck.jpg"
        alt="Truk E-Cargo melintas di kota"
        fill
        preload
        sizes="100vw"
        className="-z-20 object-cover object-[70%_center]"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/85 to-ink/20" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-4 pb-16 pt-32 sm:px-6">
        <Reveal>
          <p className="eyebrow on-dark">
            {company.tagline} · Sejak {company.since}
          </p>
        </Reveal>
        <Reveal delay={0.08}>
          <h1 className="mt-6 max-w-3xl font-display text-[2.6rem] font-black uppercase leading-[0.95] tracking-tight [font-stretch:105%] sm:text-6xl sm:[font-stretch:115%] xl:text-7xl">
            Melayani Indonesia
            <span className="block text-accent">dengan keandalan</span>
            dan kecepatan
          </h1>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
            Jaringan luas, layanan terintegrasi, dan komitmen tanpa henti untuk mengantarkan barang Anda dengan aman
            dan tepat waktu.
          </p>
        </Reveal>
        <Reveal delay={0.24} className="mt-10 max-w-xl">
          <TrackForm dark />
          <div className="mt-5 flex flex-wrap gap-3">
            <Link
              href="#layanan"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white ring-1 ring-white/30 transition-colors hover:bg-white/10"
            >
              Lihat Layanan <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </div>

      <div className="border-t border-white/10 bg-ink/60 backdrop-blur">
        <dl className="mx-auto grid max-w-7xl grid-cols-2 px-4 sm:px-6 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-6 ${i % 2 ? "pl-6" : ""} ${i > 0 ? "lg:border-l lg:border-white/10 lg:pl-8" : ""}`}
            >
              <dd className="font-display text-3xl font-black text-accent [font-stretch:115%] sm:text-4xl">{s.value}</dd>
              <dt className="mt-1 text-xs font-semibold uppercase tracking-wider text-white/50">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="tentang" className="scroll-mt-18 py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[5fr_7fr]">
        <Reveal className="relative mx-auto w-full max-w-sm lg:max-w-none">
          <div className="absolute inset-x-0 bottom-0 top-16 rounded-3xl bg-ink" />
          <div className="absolute bottom-0 right-0 top-16 w-1/3 rounded-r-3xl bg-brand" />
          <Image
            src="/images/director.png"
            alt={`${director.name}, ${director.role} E-Cargo`}
            width={681}
            height={1024}
            sizes="(min-width: 1024px) 40vw, 380px"
            className="relative mx-auto h-auto w-4/5"
          />
          <div className="absolute -bottom-5 left-5 rounded-2xl bg-white px-5 py-4 shadow-xl shadow-black/10">
            <p className="font-bold">{director.name}</p>
            <p className="text-xs font-semibold uppercase tracking-wider text-brand">{director.role}</p>
          </div>
        </Reveal>

        <div>
          <SectionHeading eyebrow="Kata Pengantar" title="Sambutan Direktur" />
          <Reveal delay={0.1}>
            <blockquote className="mt-8 border-l-4 border-brand pl-6 text-xl font-semibold leading-snug text-ink sm:text-2xl">
              {director.greeting}
            </blockquote>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="mt-8 space-y-4 text-base leading-relaxed text-black/65">
              {director.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-8 text-sm text-black/50">Salam Sukses,</p>
            <p className="font-display text-xl font-extrabold">{director.name}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Values() {
  return (
    <section className="relative overflow-hidden bg-brand py-24 text-white">
      <Image
        src="/images/about-sunset.jpg"
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-10 mix-blend-multiply"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-end">
          <SectionHeading eyebrow="Visi" title="Arah kami melangkah" light />
          <Reveal delay={0.1}>
            <p className="text-2xl font-semibold leading-snug text-white sm:text-3xl">&ldquo;{vision}&rdquo;</p>
          </Reveal>
        </div>

        <div className="mt-20">
          <Reveal>
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-paper/70">Nilai Utama Perusahaan</h3>
          </Reveal>
          <div className="mt-6 grid gap-px overflow-hidden rounded-2xl bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} className="bg-brand-dark/90 p-7">
                <span className="font-display text-5xl font-black text-accent [font-stretch:115%]">{v.title[0]}</span>
                <h4 className="mt-4 text-lg font-bold">{v.title}</h4>
                <p className="mt-3 text-sm leading-relaxed text-paper/80">{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="layanan" className="scroll-mt-18 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Layanan Inti"
            title="Satu mitra untuk semua jalur kirim"
            text="Solusi logistik terpadu yang dirancang untuk mendukung kelancaran rantai pasok Anda, dari pengiriman cepat hingga distribusi yang andal."
          />
          <Reveal>
            <div className="flex gap-2">
              {services.map((s) => {
                const Icon = serviceIcons[s.icon];
                return (
                  <a
                    key={s.id}
                    href={`#${s.id}`}
                    aria-label={s.title}
                    className="grid size-12 place-items-center rounded-full bg-white text-ink ring-1 ring-black/10 transition-colors hover:bg-brand hover:text-white"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </Reveal>
        </div>

        <div className="mt-16 space-y-6">
          {services.map((s, i) => {
            const Icon = serviceIcons[s.icon];
            const flip = i % 2 === 1;
            return (
              <Reveal key={s.id}>
                <article
                  id={s.id}
                  className="grid scroll-mt-24 overflow-hidden rounded-3xl bg-white ring-1 ring-black/5 md:grid-cols-2"
                >
                  <div className={`relative min-h-64 ${s.icon === "truck" ? "bg-[#f3ece0]" : ""} ${flip ? "md:order-2" : ""}`}>
                    <Image
                      src={s.image}
                      alt={s.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className={s.icon === "truck" ? "object-contain p-6" : "object-cover"}
                    />
                  </div>
                  <div className="flex flex-col justify-center p-8 sm:p-12">
                    <div className="flex items-center gap-4">
                      <span className="grid size-12 place-items-center rounded-2xl bg-brand text-white">
                        <Icon size={22} />
                      </span>
                      <span className="font-display text-sm font-bold text-black/30">{s.no}</span>
                    </div>
                    <h3 className="mt-6 font-display text-3xl font-extrabold uppercase tracking-tight [font-stretch:112%]">
                      {s.title}
                    </h3>
                    <p className="text-sm font-semibold text-brand">{s.subtitle}</p>
                    <p className="mt-4 leading-relaxed text-black/60">{s.text}</p>
                    <ul className="mt-6 space-y-3">
                      {s.points.map((p) => (
                        <li key={p} className="flex gap-3 text-sm font-medium">
                          <Check size={18} className="shrink-0 text-brand" />
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="overflow-hidden bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Keunggulan Kami" title="Mengapa memilih E-Cargo" />
          <div className="mt-10 grid gap-8 sm:grid-cols-2">
            {reasons.map((r, i) => {
              const Icon = reasonIcons[r.icon];
              return (
                <Reveal key={r.title} delay={i * 0.06}>
                  <Icon className="text-brand" size={28} />
                  <h3 className="mt-4 text-lg font-bold">{r.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-black/60">{r.text}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
        <Reveal delay={0.1} className="relative">
          <div className="absolute -right-40 top-1/2 h-72 w-[140%] -translate-y-1/2 -skew-y-6 rounded-3xl bg-accent" />
          <Image
            src="/images/truck-side.png"
            alt="Armada truk E-Cargo"
            width={922}
            height={562}
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="relative h-auto w-full drop-shadow-2xl"
          />
        </Reveal>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section id="cakupan" className="scroll-mt-18 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Area Cakupan"
          title="Dari Sabang sampai Merauke"
          text="E-Cargo hadir untuk menghubungkan Indonesia. Dengan jaringan luas dan rute strategis, kami memastikan pengiriman Anda aman, tepat waktu, dan menjangkau seluruh wilayah Nusantara."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_300px]">
          <Reveal className="relative h-[300px] overflow-hidden rounded-3xl ring-1 ring-black/10 sm:h-[520px]">
            <CoverageMap />
          </Reveal>
          <Reveal delay={0.1} className="flex flex-col gap-6">
            <div className="rounded-3xl bg-ink p-7 text-white">
              <p className="font-display text-5xl font-black [font-stretch:115%]">34</p>
              <p className="mt-1 text-sm font-semibold">Provinsi</p>
              <p className="mt-1 text-xs text-white/50">Menjangkau seluruh wilayah Indonesia.</p>
              <div className="my-6 h-px bg-white/10" />
              <p className="font-display text-5xl font-black text-accent [font-stretch:115%]">300+</p>
              <p className="mt-1 text-sm font-semibold">Kota & Kabupaten</p>
              <p className="mt-1 text-xs text-white/50">Jaringan distribusi yang luas dan terus berkembang.</p>
            </div>
            <div className="rounded-3xl bg-white p-7 ring-1 ring-black/5">
              <p className="text-xs font-bold uppercase tracking-wider text-black/40">Kota tujuan utama</p>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {cities.map((c) => (
                  <li
                    key={c.name}
                    className={`rounded-full px-2.5 py-1 text-xs font-semibold ${
                      c.hq ? "bg-brand text-white" : "bg-black/5 text-black/70"
                    }`}
                  >
                    {c.name}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function initials(name: string) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("");
}

function Team() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading eyebrow="Struktur Manajemen" title="Tim di balik setiap kiriman" />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 0.05}>
              <div className="h-full rounded-2xl bg-paper p-5">
                <span
                  className={`grid size-12 place-items-center rounded-full font-display text-sm font-extrabold ${
                    i < 2 ? "bg-brand text-white" : "bg-ink text-white"
                  }`}
                >
                  {initials(m.name)}
                </span>
                <p className="mt-4 font-bold leading-tight">{m.name}</p>
                <p className="mt-1 text-xs font-semibold uppercase tracking-wide text-black/45">{m.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Clients() {
  const row = [...clients, ...clients];
  return (
    <section id="klien" className="scroll-mt-18 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Klien"
          title="Mitra terpercaya kami"
          text="Kami bangga bermitra dengan berbagai perusahaan dari beragam industri. Kolaborasi yang kuat dan komitmen pada kualitas menjadi fondasi setiap layanan yang kami berikan."
          center
        />
      </div>
      <div className="relative mt-14 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <ul className="marquee flex w-max gap-6">
          {row.map((c, i) => (
            <li
              key={`${c.name}-${i}`}
              className="grid h-28 w-44 shrink-0 place-items-center rounded-2xl bg-white p-5 ring-1 ring-black/5"
              aria-hidden={i >= clients.length}
            >
              <Image src={c.logo} alt={c.name} width={140} height={90} className="max-h-18 w-auto object-contain" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Cta() {
  return (
    <section className="px-4 pb-24 sm:px-6">
      <Reveal className="relative isolate mx-auto max-w-7xl overflow-hidden rounded-3xl bg-ink px-6 py-16 text-white sm:px-14 sm:py-20">
        <Image src="/images/handshake.jpg" alt="" fill sizes="100vw" className="-z-10 object-cover opacity-30" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-brand/40" />
        <p className="eyebrow on-dark">Memberikan Solusi, Menghubungkan Indonesia</p>
        <h2 className="mt-4 max-w-2xl font-display text-4xl font-black uppercase leading-[1] tracking-tight [font-stretch:115%] sm:text-6xl">
          Siap kirim barang Anda hari ini?
        </h2>
        <p className="mt-5 max-w-lg text-white/70">
          Ceritakan kebutuhan pengiriman Anda, tim kami akan memberikan penawaran terbaik.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href={`${company.whatsappLink}?text=${encodeURIComponent("Halo E-Cargo, saya ingin minta penawaran pengiriman.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
          >
            <WhatsAppIcon size={18} /> Chat {company.whatsapp}
          </a>
          <a
            href={`mailto:${company.email}`}
            className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-bold ring-1 ring-white/30 transition-colors hover:bg-white/10"
          >
            {company.email}
          </a>
        </div>
      </Reveal>
    </section>
  );
}
