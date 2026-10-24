// DATA DEMO. Nanti diganti dengan data dari database + posisi GPS dari Traccar.

export type LatLng = [number, number];

export type Shipment = {
  resi: string;
  service: string;
  origin: string;
  destination: string;
  sender: string;
  receiver: string;
  weight: string;
  vehicle: string;
  driver: string;
  /** Titik-titik rute dari asal ke tujuan */
  route: LatLng[];
  /** Posisi awal truk di rute (0 = asal, 1 = tujuan) */
  progress: number;
  history: { time: string; place: string; status: string }[];
};

export const shipments: Record<string, Shipment> = {
  "EC-2026-0001": {
    resi: "EC-2026-0001",
    service: "Land Transportation (LTL)",
    origin: "Pekanbaru",
    destination: "Jakarta",
    sender: "CV. Riau Makmur",
    receiver: "PT. Sinar Jaya",
    weight: "1.250 kg · 18 koli",
    vehicle: "BM 8xxx XX · Truk Box",
    driver: "Driver Luar Kota",
    route: [
      [0.5071, 101.4478], // Pekanbaru
      [-0.35, 102.2],
      [-1.6101, 103.6131], // Jambi
      [-2.9761, 104.7754], // Palembang
      [-4.1, 105.1],
      [-5.3971, 105.2668], // Bandar Lampung
      [-5.8714, 105.7516], // Bakauheni
      [-5.9306, 106.0039], // Merak
      [-6.12, 106.15], // Serang
      [-6.2088, 106.8456], // Jakarta
    ],
    progress: 0.58,
    history: [
      { time: "19 Okt 2026, 06:10", place: "Palembang, Sumatera Selatan", status: "Dalam perjalanan menuju Bandar Lampung" },
      { time: "18 Okt 2026, 21:40", place: "Jambi", status: "Melewati checkpoint Jambi" },
      { time: "18 Okt 2026, 09:00", place: "Pekanbaru, Riau", status: "Berangkat dari gudang E-Cargo Pekanbaru" },
      { time: "17 Okt 2026, 15:20", place: "Pekanbaru, Riau", status: "Barang diterima & diverifikasi di gudang" },
      { time: "17 Okt 2026, 10:05", place: "Pekanbaru, Riau", status: "Pesanan pengiriman dibuat" },
    ],
  },
};

export function findShipment(resi: string | undefined): Shipment | undefined {
  if (!resi) return undefined;
  return shipments[resi.trim().toUpperCase()];
}
