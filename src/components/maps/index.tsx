"use client";

import dynamic from "next/dynamic";

// Leaflet hanya bisa berjalan di browser, jadi peta dimuat tanpa server rendering.
const loading = () => <div className="h-full w-full animate-pulse bg-black/5" />;

export const CoverageMap = dynamic(() => import("./CoverageMap"), { ssr: false, loading });
export const TrackingMap = dynamic(() => import("./TrackingMap"), { ssr: false, loading });
