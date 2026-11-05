import type { Metadata } from "next";
import { Suspense, type ReactNode } from "react";
import { CircleCheck, Info, PackageSearch } from "lucide-react";
import { TrackForm } from "@/components/TrackForm";
import { LiveTracking } from "@/components/LiveTracking";
import { company } from "@/lib/data";
import { findShipment } from "@/lib/shipments";

export const metadata: Metadata = {
  title: "Lacak Kiriman",
  description: "Lacak posisi kiriman E-Cargo secara langsung dengan nomor resi.",
};

export default function LacakPage(props: PageProps<"/lacak">) {
  return (
    <div className="pt-18">
      <Suspense fallback={<TrackingShell />}>
        <TrackingResult searchParams={props.searchParams} />
      </Suspense>
    </div>
  );
}

function TrackingShell({ query = "", children }: { query?: string; children?: ReactNode }) {
  return (
    <>
      <section className="bg-ink text-white">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <span className="eyebrow on-dark">Lacak Kiriman</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl [font-stretch:110%]">
            Di mana kiriman saya?
          </h1>
          <p className="mt-3 max-w-xl text-white/60">
            Masukkan nomor resi untuk melihat status dan posisi truk secara langsung.
          </p>
          <div className="mt-8 max-w-2xl">
            <TrackForm key={query} defaultValue={query} dark />
          </div>
          <p className="mt-4 flex items-center gap-2 text-xs text-white/50">
            <Info size={14} /> Contoh: coba nomor resi <strong className="text-white">EC-2026-0001</strong>
          </p>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6">{children}</section>
    </>
  );
}

async function TrackingResult({ searchParams }: { searchParams: PageProps<"/lacak">["searchParams"] }) {
  const { resi } = await searchParams;
  const query = typeof resi === "string" ? resi : undefined;
  const shipment = findShipment(query);

  return (
    <TrackingShell query={query}>
        {!query && (
          <EmptyState
            title="Belum ada nomor resi"
            text="Nomor resi tercantum di bukti pengiriman yang Anda terima dari E-Cargo."
          />
        )}

        {query && !shipment && (
          <EmptyState
            title={`Resi ${query} tidak ditemukan`}
            text={`Periksa kembali nomor resi Anda, atau hubungi kami via WhatsApp ${company.whatsapp}.`}
          />
        )}

        {shipment && (
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div>
              <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                <div>
                  <p className="text-sm font-semibold text-black/50">No. Resi</p>
                  <p className="font-display text-2xl font-extrabold">{shipment.resi}</p>
                </div>
                <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-amber-800">
                  Dalam perjalanan
                </span>
              </div>
              <LiveTracking shipment={shipment} />
            </div>

            <aside className="space-y-6">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-black/10">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-black/40">Asal</p>
                    <p className="text-lg font-bold">{shipment.origin}</p>
                  </div>
                  <div className="h-px flex-1 border-t-2 border-dashed border-brand/40" />
                  <div className="text-right">
                    <p className="text-xs font-semibold uppercase tracking-wide text-black/40">Tujuan</p>
                    <p className="text-lg font-bold">{shipment.destination}</p>
                  </div>
                </div>
                <dl className="mt-6 grid grid-cols-2 gap-x-4 gap-y-4 text-sm">
                  {[
                    ["Layanan", shipment.service],
                    ["Berat", shipment.weight],
                    ["Pengirim", shipment.sender],
                    ["Penerima", shipment.receiver],
                    ["Kendaraan", shipment.vehicle],
                    ["Pengemudi", shipment.driver],
                  ].map(([k, v]) => (
                    <div key={k}>
                      <dt className="text-xs text-black/40">{k}</dt>
                      <dd className="font-semibold">{v}</dd>
                    </div>
                  ))}
                </dl>
              </div>

              <div className="rounded-2xl bg-white p-6 ring-1 ring-black/10">
                <h2 className="font-bold">Riwayat Pengiriman</h2>
                <ol className="mt-5 space-y-5">
                  {shipment.history.map((h, i) => (
                    <li key={h.time} className="relative flex gap-4">
                      <div className="flex flex-col items-center">
                        <span
                          className={`grid size-6 place-items-center rounded-full ${
                            i === 0 ? "bg-brand text-white" : "bg-black/5 text-black/40"
                          }`}
                        >
                          <CircleCheck size={14} />
                        </span>
                        {i < shipment.history.length - 1 && <span className="mt-1 w-px flex-1 bg-black/10" />}
                      </div>
                      <div className="pb-1">
                        <p className={`text-sm font-semibold ${i === 0 ? "text-ink" : "text-black/60"}`}>{h.status}</p>
                        <p className="text-xs text-black/40">
                          {h.place} · {h.time}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
          </div>
        )}
    </TrackingShell>
  );
}

function EmptyState({ title, text }: { title: string; text: string }) {
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <PackageSearch size={48} className="mx-auto text-black/20" />
      <h2 className="mt-4 text-xl font-bold">{title}</h2>
      <p className="mt-2 text-sm text-black/50">{text}</p>
    </div>
  );
}
