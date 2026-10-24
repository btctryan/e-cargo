# Website E-Cargo

Website company profile PT. Ekspedisi Lintas Antar Nusa Garuda (E-Cargo).
Dibuat dengan **Next.js 16 + TypeScript + Tailwind CSS**, peta memakai **Leaflet + OpenStreetMap**.

## Menjalankan di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Mengubah isi website

| Yang ingin diubah | File |
|---|---|
| Teks, layanan, kontak, tim, klien, kota cakupan | `src/lib/data.ts` |
| Foto & logo | `public/images/` |
| Data demo lacak resi | `src/lib/shipments.ts` |
| Tampilan halaman utama | `src/app/page.tsx` |
| Halaman lacak kiriman | `src/app/lacak/page.tsx` |

## Halaman

- `/` : Beranda (hero, sambutan direktur, visi & core value, layanan, mengapa kami, area cakupan, tim, klien, kontak)
- `/lacak?resi=EC-2026-0001` : Lacak kiriman dengan peta GPS (masih **simulasi**)

## Rencana GPS (tahap berikutnya)

1. Pasang **Traccar Server** di VPS, dan aplikasi **Traccar Client** di HP driver (atau GPS tracker di truk).
2. Buat API di Next.js (`src/app/api/...`) yang mengambil posisi dari Traccar.
3. Ganti simulasi di `src/components/LiveTracking.tsx` dengan data dari API tersebut.
4. Simpan data pengiriman (resi, asal, tujuan, status) di database PostgreSQL.

## Online-kan

Paling mudah: upload ke GitHub, lalu hubungkan ke [Vercel](https://vercel.com) (gratis untuk awal).
Catatan: tile peta `tile.openstreetmap.org` hanya untuk trafik kecil; untuk produksi gunakan penyedia tile seperti MapTiler atau Stadia Maps.
