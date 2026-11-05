"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect } from "react";
import { MapContainer, Marker, Polyline, TileLayer, Tooltip, useMap } from "react-leaflet";
import { cities } from "@/lib/data";

type LatLng = [number, number];

const hq = cities.find((c) => c.hq)!;
const allBounds = cities.map((c) => [c.lat, c.lng] as LatLng);

/** Ikon pin lokasi (kuning untuk kota tujuan, merah & lebih besar untuk kantor pusat). */
function pinIcon(color: string, size: number) {
  const h = Math.round(size * 1.35);
  return L.divIcon({
    className: "",
    html: `<svg width="${size}" height="${h}" viewBox="0 0 24 32" style="filter:drop-shadow(0 2px 3px rgb(0 0 0 / .6))"><path d="M12 0C5.4 0 0 5.2 0 11.7 0 20.5 12 32 12 32s12-11.5 12-20.3C24 5.2 18.6 0 12 0z" fill="${color}"/><circle cx="12" cy="11.5" r="4.5" fill="#1a1a1a"/></svg>`,
    iconSize: [size, h],
    iconAnchor: [size / 2, h],
    tooltipAnchor: [size / 2 + 2, -h / 2],
  });
}
// Kota yang labelnya hanya muncul saat disorot, supaya label di Jawa & Kalimantan tidak bertumpuk
const hoverOnly = new Set(["Bandung", "Yogyakarta", "Malang", "Mataram", "Palangkaraya", "Palu"]);

const cityPin = pinIcon("#f6bc13", 18);
const hqPin = pinIcon("#d40202", 30);

/** Garis rute melengkung dari kantor pusat ke kota tujuan. */
function arc(a: LatLng, b: LatLng, bend = 0.18, steps = 32): LatLng[] {
  const mid: LatLng = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const ctrl: LatLng = [mid[0] + (b[1] - a[1]) * bend, mid[1] - (b[0] - a[0]) * bend];
  return Array.from({ length: steps + 1 }, (_, i) => {
    const t = i / steps;
    const u = 1 - t;
    return [
      u * u * a[0] + 2 * u * t * ctrl[0] + t * t * b[0],
      u * u * a[1] + 2 * u * t * ctrl[1] + t * t * b[1],
    ] as LatLng;
  });
}

/** Selalu tampilkan seluruh Indonesia, juga saat ukuran peta berubah. */
function FitIndonesia() {
  const map = useMap();
  useEffect(() => {
    const fit = () => {
      map.invalidateSize();
      map.fitBounds(allBounds, { padding: [32, 32] });
    };
    const ro = new ResizeObserver(fit);
    ro.observe(map.getContainer());
    return () => ro.disconnect();
  }, [map]);
  return null;
}

/** Peta jaringan distribusi bertema gelap: rute kuning dari Pekanbaru ke setiap kota tujuan. */
export default function CoverageMap() {
  return (
    <MapContainer
      bounds={allBounds}
      boundsOptions={{ padding: [32, 32] }}
      zoomSnap={0.25}
      minZoom={3}
      maxZoom={9}
      scrollWheelZoom={false}
      className="map-dark h-full w-full"
      attributionControl
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitIndonesia />
      {cities
        .filter((c) => !c.hq)
        .map((c) => (
          <Polyline
            key={`line-${c.name}`}
            positions={arc([hq.lat, hq.lng], [c.lat, c.lng])}
            pathOptions={{ color: "#f6bc13", weight: 1.6, opacity: 0.55 }}
          />
        ))}
      {cities.map((c) => (
        <Marker key={c.name} position={[c.lat, c.lng]} icon={c.hq ? hqPin : cityPin} zIndexOffset={c.hq ? 1000 : 0}>
          <Tooltip className={c.hq ? "city-tip hq" : "city-label"} direction="right" permanent={!hoverOnly.has(c.name)}>
            {c.hq ? `${c.name} · Kantor Pusat` : c.name}
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
}
