"use client";

import { useEffect, useState } from "react";
import { Gauge, Navigation, Radio } from "lucide-react";
import { TrackingMap } from "@/components/maps";
import type { Shipment } from "@/lib/shipments";

/**
 * Simulasi posisi GPS real-time.
 * Nanti bagian setInterval ini diganti dengan data dari Traccar (WebSocket / API).
 */
export function LiveTracking({ shipment }: { shipment: Shipment }) {
  const [progress, setProgress] = useState(shipment.progress);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const gps = setInterval(() => {
      setProgress((p) => (p >= 0.97 ? shipment.progress : p + 0.0025));
      setSeconds(0);
    }, 3000);
    const clock = setInterval(() => setSeconds((s) => s + 1), 1000);
    return () => {
      clearInterval(gps);
      clearInterval(clock);
    };
  }, [shipment.progress]);

  const pct = Math.round(progress * 100);

  return (
    <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-black/10">
      <div className="relative h-[420px] sm:h-[520px]">
        <TrackingMap route={shipment.route} progress={progress} />
        <div className="pointer-events-none absolute right-3 top-3 z-[500] flex items-center gap-2 rounded-full bg-ink px-3 py-1.5 text-xs font-semibold text-white">
          <span className="relative flex size-2">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-green-400" />
          </span>
          LIVE · update {seconds} detik lalu
        </div>
      </div>
      <div className="grid grid-cols-3 divide-x divide-black/10 border-t border-black/10 text-center">
        <div className="p-4">
          <Navigation size={18} className="mx-auto text-brand" />
          <p className="mt-1 text-lg font-bold">{pct}%</p>
          <p className="text-xs text-black/50">Perjalanan</p>
        </div>
        <div className="p-4">
          <Gauge size={18} className="mx-auto text-brand" />
          <p className="mt-1 text-lg font-bold">{58 + (pct % 7)} km/j</p>
          <p className="text-xs text-black/50">Kecepatan</p>
        </div>
        <div className="p-4">
          <Radio size={18} className="mx-auto text-brand" />
          <p className="mt-1 text-lg font-bold">GPS</p>
          <p className="text-xs text-black/50">Sinyal aktif</p>
        </div>
      </div>
      <div className="h-1.5 bg-black/5">
        <div className="h-full bg-brand transition-all duration-1000" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
