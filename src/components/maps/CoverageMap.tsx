"use client";

import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { CircleMarker, MapContainer, Polyline, TileLayer, Tooltip, useMap } from "react-leaflet";
import { cities } from "@/lib/data";

const hq = cities.find((c) => c.hq)!;
const allBounds = cities.map((c) => [c.lat, c.lng] as [number, number]);

/** Selalu tampilkan seluruh Indonesia, juga saat ukuran peta berubah. */
function FitIndonesia() {
  const map = useMap();
  useEffect(() => {
    const fit = () => {
      map.invalidateSize();
      map.fitBounds(allBounds, { padding: [24, 24] });
    };
    const ro = new ResizeObserver(fit);
    ro.observe(map.getContainer());
    return () => ro.disconnect();
  }, [map]);
  return null;
}

/** Peta jaringan distribusi: garis dari kantor pusat Pekanbaru ke setiap kota tujuan. */
export default function CoverageMap() {
  return (
    <MapContainer
      bounds={allBounds}
      boundsOptions={{ padding: [24, 24] }}
      zoomSnap={0.25}
      minZoom={3}
      maxZoom={9}
      scrollWheelZoom={false}
      className="h-full w-full"
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
            positions={[
              [hq.lat, hq.lng],
              [c.lat, c.lng],
            ]}
            pathOptions={{ color: "#d40202", weight: 1.2, opacity: 0.35, dashArray: "4 6" }}
          />
        ))}
      {cities.map((c) => (
        <CircleMarker
          key={c.name}
          center={[c.lat, c.lng]}
          radius={c.hq ? 10 : 5}
          pathOptions={{
            color: "#fff",
            weight: 2,
            fillColor: c.hq ? "#d40202" : "#1a0f0b",
            fillOpacity: 1,
          }}
        >
          <Tooltip className="city-tip" direction="top" offset={[0, -6]} permanent={c.hq}>
            {c.hq ? `${c.name} · Kantor Pusat` : c.name}
          </Tooltip>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
