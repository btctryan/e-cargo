// Konten website diambil dari Company Profile E-Cargo 2026.
// Ubah teks di file ini untuk memperbarui isi website.

export const company = {
  name: "E-Cargo",
  legalName: "PT. Ekspedisi Lintas Antar Nusa Garuda",
  since: 2019,
  tagline: "Secure, Fast, and Trusted",
  slogan: "Menghubungkan Indonesia, Mengantarkan Kepercayaan.",
  address: "Jl. Kaharudin Nasution No. 08, Pekanbaru, Riau",
  whatsapp: "+62 811 7522 522",
  whatsappLink: "https://wa.me/628117522522",
  email: "ecargoekspress@gmail.com",
};

export const stats = [
  { value: "2019", label: "Berdiri sejak" },
  { value: "34", label: "Provinsi terjangkau" },
  { value: "300+", label: "Kota & kabupaten" },
  { value: "4", label: "Moda layanan" },
];

export const director = {
  name: "Elang Mulia Meunasah",
  role: "Direktur",
  greeting:
    "Kami mengucapkan terima kasih atas kepercayaan Anda menjadikan E-Cargo sebagai mitra logistik terpercaya.",
  paragraphs: [
    "PT. Ekspedisi Lintas Antar Nusa Garuda (E-Cargo) berkomitmen untuk menghadirkan layanan logistik yang aman, tepat waktu, dan profesional di seluruh wilayah Indonesia.",
    "Dengan dukungan armada yang andal, teknologi terkini, serta sumber daya manusia yang berintegritas, kami memastikan setiap pengiriman memberikan pengalaman terbaik bagi pelanggan.",
    "Kepercayaan Anda adalah motivasi kami untuk terus berinovasi dan memberikan layanan terbaik, menghubungkan peluang dan mengantarkan kemajuan untuk Indonesia.",
  ],
};

export const vision =
  "Menjadi perusahaan logistik dan pengiriman terpercaya berskala nasional yang aman, cepat, dan profesional.";

export const coreValues = [
  {
    title: "Transparency",
    text: "Kami menjunjung transparansi dalam setiap proses dan komunikasi, memberikan informasi yang jelas, akurat, dan terbuka kepada seluruh mitra dan pelanggan.",
  },
  {
    title: "Integrity",
    text: "Kami berkomitmen untuk selalu bertindak jujur, adil, dan profesional dalam setiap keputusan dan hubungan kerja.",
  },
  {
    title: "Consistency",
    text: "Kami menjaga konsistensi dalam kualitas layanan, proses kerja, dan standar operasional untuk memberikan pengalaman terbaik yang dapat diandalkan.",
  },
  {
    title: "Responsibility",
    text: "Kami bertanggung jawab penuh atas setiap layanan yang kami berikan, serta berkomitmen untuk terus memberikan solusi terbaik bagi pelanggan.",
  },
];

export type Service = {
  id: string;
  no: string;
  title: string;
  subtitle: string;
  text: string;
  points: string[];
  image: string;
  icon: "plane" | "truck" | "ship" | "warehouse";
};

export const services: Service[] = [
  {
    id: "air-cargo",
    no: "01",
    title: "Air Cargo",
    subtitle: "Kargo Udara",
    text: "Pengiriman via udara untuk barang yang harus tiba secepatnya, didukung jaringan maskapai yang luas.",
    points: [
      "Pengiriman cepat untuk kargo prioritas dan urgent.",
      "Jaringan maskapai luas dengan routing optimal.",
      "Layanan door to door ke berbagai destinasi.",
    ],
    image: "/images/service-air.jpg",
    icon: "plane",
  },
  {
    id: "land-transportation",
    no: "02",
    title: "Land Transportation",
    subtitle: "Kargo Darat",
    text: "Distribusi darat andal dengan jangkauan luas ke seluruh wilayah Indonesia melalui armada truk yang terawat dan pengemudi profesional.",
    points: [
      "Jangkauan luas ke kota besar hingga pelosok.",
      "Armada modern & terawat untuk keamanan kargo.",
      "Layanan FTL & LTL yang fleksibel.",
    ],
    image: "/images/service-land.png",
    icon: "truck",
  },
  {
    id: "sea-cargo",
    no: "03",
    title: "Sea Cargo",
    subtitle: "Kargo Laut (FCL/LCL)",
    text: "Layanan pengiriman laut FCL dan LCL yang efisien untuk berbagai kebutuhan bisnis Anda, termasuk antar pulau di seluruh wilayah Indonesia.",
    points: [
      "FCL & LCL fleksibel sesuai volume dan kebutuhan.",
      "Jaringan pelayaran luas, domestik & internasional.",
      "Layanan antar pulau ke seluruh Indonesia.",
    ],
    image: "/images/service-sea.jpg",
    icon: "ship",
  },
  {
    id: "warehousing",
    no: "04",
    title: "Warehousing",
    subtitle: "Pergudangan",
    text: "Penyimpanan aman dengan sistem manajemen inventori yang akurat untuk memastikan kargo siap distribusi kapan saja.",
    points: [
      "Penyimpanan aman & terkontrol dengan fasilitas modern.",
      "Manajemen inventori akurat & real-time.",
      "Siap distribusi cepat sesuai kebutuhan Anda.",
    ],
    image: "/images/service-warehouse.jpg",
    icon: "warehouse",
  },
];

export const reasons = [
  {
    title: "Jaringan Nasional",
    text: "Menjangkau 34 provinsi dan 300+ kota & kabupaten dari Sumatera hingga Papua.",
    icon: "map",
  },
  {
    title: "Aman & Tepat Waktu",
    text: "Setiap kiriman ditangani dengan standar operasional yang konsisten agar tiba utuh dan sesuai jadwal.",
    icon: "shield",
  },
  {
    title: "Armada Terawat",
    text: "Truk dalam kota dan luar kota yang terawat, dikemudikan driver profesional.",
    icon: "truck",
  },
  {
    title: "Transparan & Responsif",
    text: "Informasi pengiriman yang jelas dan tim yang siap dihubungi lewat WhatsApp.",
    icon: "clock",
  },
] as const;

export const team = [
  { name: "Elang Mulia Meunasah", role: "Direktur" },
  { name: "Dewi Halimah Putri Hendri", role: "Kepala Kantor" },
  { name: "Riza Alpandi", role: "Koordinator Operasional" },
  { name: "Akhwatul", role: "Admin" },
  { name: "Indra Nurman", role: "Driver Dalam Kota" },
  { name: "Al Riski Defitra", role: "Driver Dalam Kota" },
  { name: "Wira Pabrianto", role: "Driver Luar Kota" },
  { name: "Faridz Ramadhan", role: "Driver Luar Kota" },
  { name: "Heldy Rismansyah", role: "Freelance" },
  { name: "Yuza Dimas Prayoga", role: "Freelance" },
];

export const clients = [
  { name: "Telkom Indonesia", logo: "/images/clients/telkom.png" },
  { name: "IndiHome", logo: "/images/clients/indihome.png" },
  { name: "United E-Motor", logo: "/images/clients/united.png" },
  { name: "Ofero", logo: "/images/clients/ofero.png" },
  { name: "U-Winfly", logo: "/images/clients/uwinfly.png" },
  { name: "Best EV", logo: "/images/clients/best-ev.png" },
  { name: "CMC Express", logo: "/images/clients/cmc-express.png" },
  { name: "LC Express", logo: "/images/clients/lc-express.png" },
];

export type City = { name: string; lat: number; lng: number; hq?: boolean };

export const cities: City[] = [
  { name: "Banda Aceh", lat: 5.5483, lng: 95.3238 },
  { name: "Medan", lat: 3.5952, lng: 98.6722 },
  { name: "Pekanbaru", lat: 0.5071, lng: 101.4478, hq: true },
  { name: "Palembang", lat: -2.9761, lng: 104.7754 },
  { name: "Bandar Lampung", lat: -5.3971, lng: 105.2668 },
  { name: "Jakarta", lat: -6.2088, lng: 106.8456 },
  { name: "Bandung", lat: -6.9175, lng: 107.6191 },
  { name: "Yogyakarta", lat: -7.7956, lng: 110.3695 },
  { name: "Surabaya", lat: -7.2575, lng: 112.7521 },
  { name: "Malang", lat: -7.9666, lng: 112.6326 },
  { name: "Denpasar", lat: -8.6705, lng: 115.2126 },
  { name: "Mataram", lat: -8.5833, lng: 116.1167 },
  { name: "Kupang", lat: -10.1772, lng: 123.607 },
  { name: "Pontianak", lat: -0.0263, lng: 109.3425 },
  { name: "Palangkaraya", lat: -2.2161, lng: 113.9135 },
  { name: "Banjarmasin", lat: -3.3186, lng: 114.5944 },
  { name: "Samarinda", lat: -0.5022, lng: 117.1536 },
  { name: "Makassar", lat: -5.1477, lng: 119.4327 },
  { name: "Palu", lat: -0.9003, lng: 119.8779 },
  { name: "Kendari", lat: -3.9985, lng: 122.5129 },
  { name: "Manado", lat: 1.4748, lng: 124.8421 },
  { name: "Ternate", lat: 0.7893, lng: 127.3779 },
  { name: "Ambon", lat: -3.6954, lng: 128.1814 },
  { name: "Sorong", lat: -0.8762, lng: 131.2558 },
  { name: "Jayapura", lat: -2.5337, lng: 140.7181 },
  { name: "Merauke", lat: -8.4932, lng: 140.4018 },
];

export const navLinks = [
  { href: "/#tentang", label: "Tentang" },
  { href: "/#layanan", label: "Layanan" },
  { href: "/#cakupan", label: "Area Cakupan" },
  { href: "/#klien", label: "Klien" },
  { href: "/lacak", label: "Lacak Kiriman" },
];
