/**
 * Data store for Souvenir & Merchandise Web App
 */

window.AppData = {
  phoneWhatsApp: '6288989643555', // Format nomor WA tanpa + atau spasi
  companyInfo: {
    name: 'Souvenir Merchandise',
    tagline: 'Solusi Souvenir & Merchandise Korporat Eksklusif Berstandar Internasional',
    email: 'info@souvenirmerchandise.web.id',
    address: 'Jl. Jend. Sudirman Kav. 52-53, District 8 Tower Treasury, Jakarta Selatan 12190',
    workHours: 'Senin - Sabtu: 08:30 - 18:00 WIB',
    stats: [
      { number: '10.000+', label: 'Proyek Terkirim' },
      { number: '99.4%', label: 'Kepuasan Klien' },
      { number: '250+', label: 'Mitra Korporat' },
      { number: '5 Hari', label: 'Proses Sameday & Express' }
    ]
  },

  // Category list
  categories: [
    { id: 'all', name: 'Semua Produk', icon: 'grid' },
    { id: 'custom-souvenir', name: 'Custom Souvenir', icon: 'gift' },
    { id: 'merchandise-custom', name: 'Merchandise Custom', icon: 'package' },
    { id: 'souvenir-kantor', name: 'Souvenir Kantor', icon: 'briefcase' },
    { id: 'hampers-korporat', name: 'Hampers Korporat', icon: 'box' },
    { id: 'seminar-kit', name: 'Seminar Kit', icon: 'award' },
    { id: 'tech-gadgets', name: 'Executive Tech', icon: 'cpu' }
  ],

  // Products Database with Markdown Details
  products: [
    {
      id: 'prod-001',
      title: 'Royal Grand Executive Hampers',
      category: 'hampers-korporat',
      categoryName: 'Hampers Korporat',
      priceRange: 'Rp 450.000 - Rp 850.000',
      moq: 'MOQ: 25 Pcs',
      badge: 'Bestseller Korporat',
      image: 'assets/hampers_corporate.jpg',
      shortDesc: 'Set hampers mewah berisi diary kulit sintetis premium, vacuum flask stainless gold, pena ukir laser, dan kotak beludru edisi terbatas.',
      markdownDetail: `### Royal Grand Executive Hampers Box

Set hampers eksklusif dirancang khusus untuk pemberian apresiasi Direksi, Klien VIP, dan Rekan Bisnis Utama saat Hari Raya atau Ulang Tahun Perusahaan.

#### Spesifikasi Item Dalam Box:
1. **Executive Leather Diary A5**
   - Cover: *PU Leather Grade-A* dengan efek Emboss Gold Foil Logo
   - Kertas: Bookpaper 80 GSM (192 Halaman)
   - Feature: Metal Magnetic Latch, Ribbon Bookmark & Card Holder
2. **Double-Wall Vacuum Tumbler 500ml**
   - Material: Stainless Steel SUS 304 Food Grade
   - Retensi Suhu: Panas & Dingin hingga 12 jam
   - Finishing: Coating Soft Touch Matte dengan Laser Engraved Logo
3. **Executive Metal Stylus Pen**
   - Tinta: Gel Black 0.5mm Smooth Writing
   - Custom: Ukir Laser Nama & Logo Perusahaan
4. **Hardbox Premium & Ribbon Gift Box**
   - Struktur: Rigidbody 3mm lapis Linen Hitam & Beludru Emas
   - Card: Custom Greeting Card Gold Emboss

| Parameter | Spesifikasi Detail |
| :--- | :--- |
| **Minimum Order (MOQ)** | 25 Set |
| **Estimasi Produksi** | 5 - 7 Hari Kerja |
| **Opsi Custom Logo** | Laser Engraving, Hot Stamping Emboss Gold/Silver, UV Print |
| **Garansi** | 100% Replacement untuk cacat produksi |

> **Catatan Custom:**
> *Bebas kombinasi warna tumbler, isi buku, dan desain ucapan personalisasi untuk penerima.*`
    },
    {
      id: 'prod-002',
      title: 'Signature Leather Notebook & Pen Set',
      category: 'souvenir-kantor',
      categoryName: 'Souvenir Kantor',
      priceRange: 'Rp 120.000 - Rp 220.000',
      moq: 'MOQ: 50 Pcs',
      badge: 'Favorit Kantor',
      image: 'assets/hero_souvenir.jpg',
      shortDesc: 'Buku agenda cover kulit sintetis import dengan gantungan pen elastis, saku dokumen internal, serta pena ukir nama perusahaan.',
      markdownDetail: `### Signature Leather Notebook & Executive Pen Set

Souvenir kantor elegan yang meningkatkan citra profesionalitas tim dan klien Anda dalam setiap pertemuan bisnis.

#### Keunggulan Produk:
- **Kulit Sintetis Premium**: Tahan air, tidak mudah terkelupas, dan terasa sangat lembut di tangan.
- **Fitur Lengkap**: Saku khusus kartu nama, tempat selipan HP/catatan, serta pita pembatas buku bernuansa emas.
- **Pena Ukir Presisi**: Pena logam dengan mekanisme putar dan sentuhan aksen emas di klip.

#### Spesifikasi Teknis:
| Komponen | Material & Ukuran |
| :--- | :--- |
| Ukuran Notebook | A5 (14.8 cm x 21 cm) |
| Ketebalan Kertas | 80 GSM Cream Paper (Mata tidak lelah) |
| Jumlah Halaman | 100 Lembar (200 Halaman) |
| Teknik Custom | Emboss Logo, Deboss, Stamp Foil Emas/Perak |
| Kemasan Box | Craft Gift Box + Custom Sleeve Brand |

*Metode pengerjaan rapi dengan jaminan QC ketat sebelum pengiriman.*`
    },
    {
      id: 'prod-003',
      title: 'Smart Tech Wireless Charging Powerbank Kit',
      category: 'tech-gadgets',
      categoryName: 'Executive Tech',
      priceRange: 'Rp 350.000 - Rp 550.000',
      moq: 'MOQ: 30 Pcs',
      badge: 'Teknologi Canggih',
      image: 'assets/executive_tech.jpg',
      shortDesc: 'Set teknologi masa kini terdiri dari MagSafe Wireless Powerbank 10.000mAh, Fast Charging Adapter, dan Kabel Fast 3-in-1.',
      markdownDetail: `### Smart Tech Wireless Charging Powerbank Kit

Solusi merchandise modern bernilai tinggi yang dijamin akan terus dipakai oleh penerima setiap hari.

#### Fitur Utama:
- **MagSafe Fast Wireless Charging**: Mengisi daya cepat hingga 15W tanpa kabel.
- **Kapasitas Real 10.000 mAh**: Menggunakan sel baterai Li-Polymer grade A aman untuk penerbangan (Flight Safe 37Wh).
- **LED Display Indicators**: Menampilkan sisa persentase baterai secara digital presisi.
- **3-in-1 Fabric Braided Cable**: Kompatibel Type-C, Lightning iOS, dan Micro-USB.

#### Tabel Spesifikasi Gadget:
| Fitur | Detil Teknis |
| :--- | :--- |
| Material Case | Aluminum Alloy Matte Black + Gold Accent Trim |
| Input / Output | Type-C Power Delivery (PD) 22.5W |
| Sertifikasi | CE, FCC, RoHS, UN38.3 Flight Approved |
| Branding Space | UV Spot Full-Color Print atau Laser Engraved Logo |
| Hardcase Pouch | Zipper Hard EVA Leather Pouch Included |

> **Promo Spesial:**
> *Gratis biaya setting logo & gratis pengiriman area Jabodetabek untuk pemesanan di atas 100 Pcs!*`
    },
    {
      id: 'prod-004',
      title: 'Premium Corporate Swag Merchandise Box',
      category: 'merchandise-custom',
      categoryName: 'Merchandise Custom',
      priceRange: 'Rp 280.000 - Rp 480.000',
      moq: 'MOQ: 50 Set',
      badge: 'New Hire Swag',
      image: 'assets/hero_souvenir.jpg',
      shortDesc: 'Box merchandise lengkap untuk welcoming kit karyawan baru atau hadiah event perusahaan berisi Hoodie, Mug Stainless, & Lanyard Canvas.',
      markdownDetail: `### Premium Corporate Swag Package Kit

Kombinasi merchandise branding menarik yang menciptakan rasa memiliki (*sense of belonging*) tinggi bagi karyawan dan komunitas Anda.

#### Isi Paket Swag Custom:
- **Cotton Fleece Zip Hoodie / Crewneck**: Bahan 100% Heavyweight Cotton Fleece 330 GSM dengan Bordir Komputer Logo.
- **Stainless Mug Dual-Layer 400ml**: Bebas embun panas/dingin dengan penutup anti tumpah silicone.
- **Polyester Canvas Lanyard 2cm**: Cetak Sublimasi Full Color 2 Sisi + Hook Metal Putar & Stopper.
- **Sticker Pack Vinyl Hologram**: 5 Desain stiker tahan air & anti gores.

#### Opsi Personalisasi:
- **Ukuran Pakaian**: XS, S, M, L, XL, XXL, 3XL (Bisa campur ukuran)
- **Warna Kain**: Hitam, Navy, Olive, Charcoal, White
- **Packaging Box**: Corrugated Cardboard Box dengan Cetak Branding Sablon Emas/Putih`
    },
    {
      id: 'prod-005',
      title: 'Exclusive Seminar Kit & Conference Package',
      category: 'seminar-kit',
      categoryName: 'Seminar Kit',
      priceRange: 'Rp 85.000 - Rp 180.000',
      moq: 'MOQ: 100 Set',
      badge: 'Ekonomis & Elegan',
      image: 'assets/hero_souvenir.jpg',
      shortDesc: 'Paket seminar dan konferensi internasional berisi Tas Canvas Tote Bag / Document Pouch, Pulpen Eco-Metal, & Notebook Soft Cover.',
      markdownDetail: `### International Seminar & Conference Kit

Solusi cepat dan efisien untuk kebutuhan seminar, workshop, symposium, dan rapat kerja nasional maupun internasional.

#### Item Termasuk:
1. **Document Laptop Pouch 14 inch**: Material Canvas Cordura Water-Repellent dengan Kompartemen Resleting.
2. **Eco Notebook A5**: Cover Daur Ulang Ramah Lingkungan dengan Sablon Presisi 1-3 Warna.
3. **Metal Ballpoint Pen**: Pen Logam Tinta Hitam Pekat.
4. **Name Tag Holder & Lanyard**: Id Card Leatherette Holder + Tali Lanyard Branding.

| Detail Pesanan | Informasi |
| :--- | :--- |
| **Waktu Pengerjaan** | 3-5 Hari Kerja (Express Service Available) |
| **Sampel Fisik** | Tersedia pembuatan sampel sebelum produksi massal |
| **Pilihan Sablon** | Sablon Manual, Digital Transfer Film (DTF), UV Print |`
    },
    {
      id: 'prod-006',
      title: 'Handcrafted Wooden Custom Souvenir Box',
      category: 'custom-souvenir',
      categoryName: 'Custom Souvenir',
      priceRange: 'Rp 195.000 - Rp 350.000',
      moq: 'MOQ: 40 Pcs',
      badge: 'Artisanal Wood',
      image: 'assets/hampers_corporate.jpg',
      shortDesc: 'Souvenir berbahan kayu jati & mahoni alami hasil pengrajin lokal dengan ukiran ukir laser nama penerima & logo perusahaaan.',
      markdownDetail: `### Artisanal Natural Wooden Custom Souvenir

Merchandise unik berbahan dasar Kayu Jati (*Teakwood*) Pilihan yang ramah lingkungan (*Eco-friendly*) dan estetis.

#### Fitur & Keunggulan:
- **Material Kayu Asli Grade A**: Serat kayu alami dipoles halus dengan coating food-grade non-toxic beeswax.
- **Ukir Laser 3D Presisi**: Detail ukiran logo hingga ke batas micron paling halus.
- **Kombinasi Produk**: Dapat diisi coaster kayu, pen holder, jam meja analog, atau tempat kartu nama.

#### Data Spesifikasi:
- **Dimensi Box**: 25 cm x 15 cm x 8 cm
- **Finishing**: Natural Matt Polish / Vintage Walnut Stain
- **Packaging**: Eco Kraft Paper dengan Tali Rami & Wax Seal Custom Logo`
    }
  ],

  // Pages Configuration (Hero Banner Title, Subtitle, Background Image)
  pages: {
    home: {
      title: 'Eksklusivitas Souvenir & Merchandise Korporat',
      subtitle: 'Tingkatkan nilai brand Anda melalui karya merchandise custom bermutu tinggi dengan sentuhan emas dan kemewahan tak tertandingi.',
      heroImage: 'assets/hero_souvenir.jpg',
      breadcrumb: ['Beranda']
    },
    about: {
      title: 'Tentang Kami',
      subtitle: 'Mengenal lebih dekat Souvenir Merchandise, produsen souvenir & merchandise terpercaya untuk ratusan korporasi besar di Indonesia.',
      heroImage: 'assets/hero_souvenir.jpg',
      breadcrumb: ['Beranda', 'Tentang Kami']
    },
    services: {
      title: 'Layanan Kami',
      subtitle: 'Layanan komprehensif mulai dari konsep desain visual, konsultasi budget, pengadaan materi, hingga pengiriman tepat waktu.',
      heroImage: 'assets/hampers_corporate.jpg',
      breadcrumb: ['Beranda', 'Layanan']
    },
    catalog: {
      title: 'Katalog Produk Eksklusif',
      subtitle: 'Unduh dan jelajahi direktori koleksi souvenir & merchandise lengkap untuk kebutuhan acara korporasi Anda.',
      heroImage: 'assets/hero_souvenir.jpg',
      breadcrumb: ['Beranda', 'Katalog']
    },
    portfolio: {
      title: 'Portofolio Proyek',
      subtitle: 'Dokumentasi karya dan kolaborasi kami bersama berbagai perusahaan multinasional, BUMN, dan intansi pemerintahan.',
      heroImage: 'assets/executive_tech.jpg',
      breadcrumb: ['Beranda', 'Portofolio']
    },
    products: {
      title: 'Katalog & Detail Produk',
      subtitle: 'Temukan pilihan Custom Souvenir, Merchandise Custom, Souvenir Kantor, Dampers Korporat, & Tech Kit dengan fitur deskripsi Markdown.',
      heroImage: 'assets/hampers_corporate.jpg',
      breadcrumb: ['Beranda', 'Produk']
    },
    blog: {
      title: 'Blog & Wawasan Bisnis',
      subtitle: 'Artikel terbaru mengenai tren corporate gifting, tips memilih hampers, serta strategi branding melalui merchandise.',
      heroImage: 'assets/hero_souvenir.jpg',
      breadcrumb: ['Beranda', 'Blog']
    },
    gallery: {
      title: 'Galeri Foto & Hasil Produksi',
      subtitle: 'Visualisasi langsung detail kerapihan produk, keindahan kemasan, dan proses pengerjaan workshop kami.',
      heroImage: 'assets/executive_tech.jpg',
      breadcrumb: ['Beranda', 'Galeri']
    }
  },

  // Services list
  services: [
    {
      id: 'srv-1',
      icon: 'sparkles',
      title: 'Custom Branding & Laser Engraving',
      desc: 'Pengaplikasian logo perusahaan dengan teknik laser engraving presisi tinggi, emboss foil emas/perak, sablon presisi, hingga print UV HD.'
    },
    {
      id: 'srv-2',
      icon: 'gift',
      title: 'Corporate Hampers & Gift Box Curation',
      desc: 'Penyusunan hampers tematik untuk Hari Raya, Anniversary Perusahaan, dan Board of Directors (BOD) Gift dengan kemasan hardbox mewah.'
    },
    {
      id: 'srv-3',
      icon: 'clock',
      title: 'Express Sameday & Fast Track Production',
      desc: 'Layanan pengerjaan kilat untuk acara mendadak dengan jaminan ketepatan waktu tanpa mengorbankan kualitas mutu produk.'
    },
    {
      id: 'srv-4',
      icon: 'truck',
      title: 'Pengiriman Aman Seluruh Indonesia',
      desc: 'Pengemasan bubble wrap berlapis, palet kayu untuk pecah belah, dan jaminan asuransi pengiriman hingga titik tujuan.'
    }
  ],

  // Portfolio items
  portfolio: [
    {
      id: 'port-1',
      title: 'Bank Mandiri - Annual Executive Directors Gathering Set',
      client: 'PT Bank Mandiri (Persero) Tbk',
      category: 'Hampers Korporat',
      year: '2026',
      image: 'assets/hampers_corporate.jpg',
      desc: 'Pembuatan 150 set Hampers eksklusif berisi agenda kulit emboss logo emas, pen Parker custom, dan tumbler titanium.'
    },
    {
      id: 'port-2',
      title: 'Telkom Indonesia - Digiland International Tech Swag',
      client: 'PT Telkom Indonesia Tbk',
      category: 'Executive Tech',
      year: '2026',
      image: 'assets/executive_tech.jpg',
      desc: 'Pengadaan 1.000 set Smart Wireless Powerbank & TWS Earbuds custom logo UV Print untuk pembicara dan VIP Attendees.'
    },
    {
      id: 'port-3',
      title: 'Pertamina - Welcoming New Executive Onboarding Kit',
      client: 'PT Pertamina (Persero)',
      category: 'Souvenir Kantor',
      year: '2025',
      image: 'assets/hero_souvenir.jpg',
      desc: 'Paket onboarding kit berisi tas laptop, buku catatan kulit, mug stainless, dan gantungan kunci ukir kayu.'
    }
  ],

  // Blog Posts with Markdown Content
  blogPosts: [
    {
      id: 'post-1',
      title: '5 Tren Souvenir Korporat Edisi 2026: Kombinasi Mewah & Ramah Lingkungan',
      author: 'Tim Redaksi Souvenir Merchandise',
      date: '10 September 2026',
      category: 'Tren Merchandising',
      image: 'assets/hampers_corporate.jpg',
      excerpt: 'Memilih souvenir kantor kini tidak hanya tentang fungsionalitas, namun juga mencerminkan nilai keberlanjutan (ESG) dan estetika berkelas.',
      markdownContent: `### Memahami Tren Gifting Korporat Modern

Dunia *corporate gifting* terus berkembang pesat. Di tahun 2026, tren memperlihatkan pergeseran signifikan dari item generik menuju **souvenir yang dipersonalisasi, ramah lingkungan, namun tetap memiliki impresi mewah**.

#### Key Factors Tren 2026:
1. **Sustainable Luxury**: Penggunaan bahan daur ulang grade-A (kayu jati olahan, kulit sintetis vegan, kertas daur ulang tebal) dipadu dengan aksen warna **Gold & Onyx**.
2. **Functional High-Tech**: Gadget pintar seperti powerbank MagSafe dengan ukir nama kustom yang sangat disukai para eksekutif.
3. **Personalized Packaging**: Dus keras (*hardbox*) bermagnet dengan kartu ucapan personal bernama penerima.

> *"Sebuah souvenir yang berkesan akan membangkitkan emosi positif dan memperkuat loyalitas klien terhadap brand Anda hingga bertahun-tahun."*`
    },
    {
      id: 'post-2',
      title: 'Cara Menentukan Budget Hampers Perusahaan Tanpa Mengorbankan Kualitas',
      author: 'Financial & Branding Advisory',
      date: '28 Agustus 2026',
      category: 'Tips & Panduan',
      image: 'assets/hero_souvenir.jpg',
      excerpt: 'Panduan lengkap bagi tim HR dan Procurement dalam mengalokasikan anggaran souvenir perusahaan secara efisien.',
      markdownContent: `### Panduan Alokasi Budget Souvenir

Mengelola anggaran souvenir perusahaan membutuhkan perencanaan matang agar investasi branding memberikan return maksimal.

| Kategori Penerima | Rekomendasi Budget / Pcs | Pilihan Item Direkomendasikan |
| :--- | :--- | :--- |
| **Peserta Seminar / Event** | Rp 50.000 - Rp 150.000 | Seminar Kit A5, Pen Ukir, Lanyard Canvas |
| **Karyawan Baru / Swag Kit** | Rp 200.000 - Rp 450.000 | Hoodie Custom, Tumbler Suhu, Notebook Kulit |
| **Klien VIP / Board of Directors** | Rp 500.000 - Rp 1.500.000+ | Royal Hampers Box, Executive Tech Set |

#### Tip Hemat Dari Souvenir Merchandise:
Pesanlah jauh-jauh hari sebelum peak season (seperti Idul Fitri / Akhir Tahun) untuk mendapatkan harga bahan baku paling ekonomis.`
    }
  ],

  // Gallery Photos
  gallery: [
    { id: 'gal-1', title: 'Hampers Premium Gold Ribbon', category: 'Hampers Korporat', image: 'assets/hampers_corporate.jpg' },
    { id: 'gal-2', title: 'Executive Notebook & Pen Laser Engrave', category: 'Souvenir Kantor', image: 'assets/hero_souvenir.jpg' },
    { id: 'gal-3', title: 'Smart Tech Wireless Powerbank Set', category: 'Executive Tech', image: 'assets/executive_tech.jpg' },
    { id: 'gal-4', title: 'Custom Wooden Desk Set', category: 'Custom Souvenir', image: 'assets/hampers_corporate.jpg' },
    { id: 'gal-5', title: 'Corporate Swag Packaging Box', category: 'Merchandise Custom', image: 'assets/hero_souvenir.jpg' },
    { id: 'gal-6', title: 'Laser Engraving Workshop Detail', category: 'Workshop', image: 'assets/executive_tech.jpg' }
  ]
};
