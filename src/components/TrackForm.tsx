"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { Search } from "lucide-react";

export function TrackForm({ defaultValue = "", dark = false }: { defaultValue?: string; dark?: boolean }) {
  const router = useRouter();
  const [resi, setResi] = useState(defaultValue);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const v = resi.trim();
        if (v) router.push(`/lacak?resi=${encodeURIComponent(v.toUpperCase())}`);
      }}
      className={`flex w-full items-center gap-2 rounded-full p-1.5 ${
        dark ? "bg-white/10 ring-1 ring-white/20 backdrop-blur" : "bg-white ring-1 ring-black/10 shadow-sm"
      }`}
    >
      <label htmlFor="resi" className="sr-only">
        Nomor resi
      </label>
      <Search size={20} className={`ml-3 shrink-0 ${dark ? "text-white/60" : "text-black/40"}`} />
      <input
        id="resi"
        value={resi}
        onChange={(e) => setResi(e.target.value)}
        placeholder="Masukkan nomor resi, contoh: EC-2026-0001"
        className={`min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none ${
          dark ? "text-white placeholder:text-white/50" : "text-ink placeholder:text-black/40"
        }`}
      />
      <button
        type="submit"
        className="shrink-0 rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-dark"
      >
        Lacak
      </button>
    </form>
  );
}
