# Rules & Standard Operating Procedure (SOP) for Souvenir Merchandise Website

## Standard Template & Automatic Structure for Blog Article Detail Pages

Setiap kali membuat atau memperbarui halaman detail artikel baru (misalnya dari file PDF atau teks naskah):

### 1. Struktur Halaman Mandatori (Mandatory Layout Structure)
Halaman detail artikel WAJIB memiliki komponen-komponen berikut secara otomatis:
- **Navbar**: Menampilkan logo Souvenir Merchandise dan menu navigasi utama.
- **Breadcrumb**: Navigasi hirarki `Beranda > Blog > [Judul Artikel]`.
- **Hero Title Banner**: Header gelap dengan judul artikel, subjudul, serta meta data redaksi & tanggal rilis.
- **Floating/Action Bar**: Tombol salin link artikel (`copyArticleLink()`).
- **Featured Image**: Gambar sampul artikel ber-rasio 16:9 atau max-height 400px dengan border & shadow.
- **Table of Contents (TOC)**: Block interaktif *Daftar Isi* yang didukung script `MarkdownParser.renderToc()` & handler `toggleToc()`.
- **Isi Artikel**: Teks isi artikel dengan heading `<h2>` / `<h3>`, ringkasan inti, serta gambar penjelas.
- **FAQ Artikel**: Section accordion interaktif (`accordion-dark`) di bagian bawah isi artikel dengan pertanyaan & jawaban spesifik sesuai topik.
- **Artikel Terkait**: Grid 2-kolom kartu artikel terkait yang memberikan link ke artikel blog lainnya.
- **Full 4-Column Footer**: Footer lengkap berisi profil workshop SCBD, navigasi halaman, kategori produk, kontak WA/Email, dan copyright (langsung di bawah section artikel tanpa Banner Bottom CTA).
- **Floating Buttons**: Tombol *Back to Top* dan tombol *WhatsApp Floating*.

### 2. Aturan Penamaan File (Naming Convention)
- Dilarang menggunakan awalan `blog-`, `portofolio-`, atau `produk-`.
- Nama file HTML wajib *to-the-point* merepresentasikan judul/isi artikel dalam format slug (misal: `kalender-gantung-custom.html`).
- Wajib mendaftarkan nama file baru di `blog.html` dan `sitemap.xml`.

### 3. Aturan Deskripsi Kartu Artikel (Article Card Meta Description)
- Deskripsi pada setiap kartu artikel (card) di halaman `blog.html` WAJIB mengikuti dan persis sama dengan teks **Meta Description** yang ada di PDF/naskah acuan artikel tersebut.
- Dilarang menggunakan teks deskripsi acak atau membuat rangkuman buatan sendiri yang berbeda dari Meta Description naskah.

