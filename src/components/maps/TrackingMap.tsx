"use client";

import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useMemo } from "react";
import { CircleMarker, MapContainer, Marker, Polyline, TileLayer, Tooltip, useMap } from "react-leaflet";
import type { LatLng } from "@/lib/shipments";

const truckIcon = L.divIcon({
  className: "",
  html: `<div class="truck-marker"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"/><path d="M15 18H9"/><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.62l-3.48-4.35A1 1 0 0 0 17.52 8H14"/><circle cx="17" cy="18" r="2"/><circle cx="7" cy="18" r="2"/></svg></div>`,
  iconSize: [40, 40],
  iconAnchor: [20, 20],
});

/** Hitung titik di sepanjang rute berdasarkan progres 0..1, beserta potongan rute yang sudah dilalui. */
function pointAlong(route: LatLng[], t: number) {
  const seg = route.slice(1).map((p, i) => Math.hypot(p[0] - route[i][0], p[1] - route[i][1]));
  const total = seg.reduce((a, b) => a + b, 0);
  let target = Math.min(Math.max(t, 0), 1) * total;
  for (let i = 0; i < seg.length; i++) {
    if (target <= seg[i]) {
      const f = seg[i] === 0 ? 0 : target / seg[i];
      const a = route[i];
      const b = route[i + 1];
      const pos: LatLng = [a[0] + (b[0] - a[0]) * f, a[1] + (b[1] - a[1]) * f];
      return { pos, done: [...route.slice(0, i + 1), pos] };
    }
    target -= seg[i];
  }
  const last = route[route.length - 1];
  return { pos: last, done: route };
}

function FitRoute({ route }: { route: LatLng[] }) {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(L.latLngBounds(route), { padding: [40, 40] });
  }, [map, route]);
  return null;
}

export default function TrackingMap({ route, progress }: { route: LatLng[]; progress: number }) {
  const { pos, done } = useMemo(() => pointAlong(route, progress), [route, progress]);
  const start = route[0];
  const end = route[route.length - 1];

  return (
    <MapContainer center={pos} zoom={6} scrollWheelZoom className="h-full w-full">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <FitRoute route={route} />
      <Polyline positions={route} pathOptions={{ color: "#0b0d12", weight: 4, opacity: 0.25, dashArray: "6 8" }} />
      <Polyline positions={done} pathOptions={{ color: "#e3131b", weight: 5, opacity: 0.9 }} />
      <CircleMarker center={start} radius={7} pathOptions={{ color: "#fff", weight: 3, fillColor: "#0b0d12", fillOpacity: 1 }}>
        <Tooltip className="city-tip" direction="top" offset={[0, -8]} permanent>
          Asal
        </Tooltip>
      </CircleMarker>
      <CircleMarker center={end} radius={7} pathOptions={{ color: "#fff", weight: 3, fillColor: "#e3131b", fillOpacity: 1 }}>
        <Tooltip className="city-tip" direction="top" offset={[0, -8]} permanent>
          Tujuan
        </Tooltip>
      </CircleMarker>
      <Marker position={pos} icon={truckIcon} />
    </MapContainer>
  );
}
