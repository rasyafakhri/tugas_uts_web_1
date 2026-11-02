# tugas_uts_web_1
# 📚 Aplikasi Web Pemesanan Toko Buku Online
> **Tugas UTS Pemrograman Web 1**  
> Proyek aplikasi front-end murni (*Vanilla JavaScript*) untuk simulasi katalog, pemesanan, serta pelacakan pengiriman buku.

---

## 📌 Deskripsi Proyek
Proyek ini merupakan aplikasi pemesanan toko buku online berbasis *front-end* yang dibangun menggunakan **HTML5, CSS3, dan JavaScript (Vanilla JS)**. Seluruh data aplikasi bersumber dari variabel Array JSON di file `js/data.js` tanpa menggunakan server/database backend, sesuai dengan ketentuan dan petunjuk tugas UTS.

---

## 📁 Struktur Folder Project

```text
tugas-uts-web1/
│── index.html          # Halaman Login & Modal Box (Lupa Password / Daftar)
│── dashboard.html      # Panel Utama dengan Dynamic Greeting berdasarkan waktu lokal
│── stok.html           # Informasi Katalog Buku & Form Tambah Stok (DOM Manipulation)
│── checkout.html       # Halaman Pemesanan Buku & Ringkasan Total Pembayaran
│── tracking.html       # Lacak Status Delivery Order & Timeline Perjalanan
│── README.md           # Dokumentasi Proyek
├── css/
│   └── style.css       # File Styling Antar Muka (UI & Layout Responsive)
├── js/
│   ├── data.js         # Array JSON Data Dummy (Data Pengguna, Katalog, Tracking)
│   └── script.js       # Logika Interaktif & Manipulasi DOM JavaScript
└── img/                # Asset Gambar Cover Buku
    ├── kepemimpinan.jpg
    ├── manajemen_keuangan.jpg
    ├── mikrobiologi.jpg
    ├── paud_perkembangan.jpeg
    ├── pengantar_komunikasi.jpg
    └── newbook.jpg     # Gambar cover default untuk penambahan buku baru
```

---

## ✨ Fitur & Indikator Penilaian

1. **Halaman Login (`index.html`)**
   * Validasi kombinasi *email* dan *password* berdasarkan variabel `dataPengguna` pada file `data.js`.
   * Feedback error berupa *alert/pop-up* jika input tidak sesuai.
   * Modal Box interaktif untuk menu **Lupa Password** dan **Daftar Akun**.

2. **Dashboard Menu (`dashboard.html`)**
   * Ucapan sapaan (*greeting*) dinamis (*Selamat Pagi / Siang / Sore / Malam*) yang mendeteksi waktu lokal komputer pengguna.
   * Menu navigasi utama untuk mengakses seluruh fungsi website.

3. **Informasi Stok / Katalog (`stok.html`)**
   * Menampilkan daftar buku secara dinamis dari variabel `dataKatalogBuku` pada `data.js`.
   * Fitur **Tambah Stok Buku Baru** menggunakan manipulasi JavaScript DOM.
   * **Catatan Khusus:** Setiap penambahan buku baru melalui form secara otomatis menggunakan gambar cover default **`img/newbook.jpg`**.
   * Fitur hapus baris stok buku secara interaktif.

4. **Halaman Pemesanan (`checkout.html`)**
   * Formulir input data pemesan dan pilihan buku dari katalog.
   * Kalkulasi total harga secara otomatis berdasarkan jumlah pesanan.
   * Display ringkasan pemesanan interaktif setelah form diproses.

5. **Tracking Pengiriman (`tracking.html`)**
   * Fitur pencarian berdasarkan nomor *Delivery Order* (DO).
   * Menampilkan detail pemesan, status pengiriman, ekspedisi, serta rincian riwayat perjalanan (*timeline*) pengiriman.

---

## 🔑 Kredensial Login Testing

Gunakan salah satu akun berikut dari `data.js` untuk menguji fitur login:

| Role | Email | Password |
| :--- | :--- | :--- |
| **User** | `rina@gmail.com` | `rina123` |
| **User** | `agus@gmail.com` | `agus123` |
| **Admin** | `siti@gmail.com` | `siti123` |
| **Admin** | `rasyafakhri@gmail.com` | `rasya123` |

---

## 📦 Nomor Delivery Order (DO) untuk Testing Tracking

Gunakan nomor DO berikut untuk menguji fitur *Tracking Pengiriman* pada `tracking.html`:
* **`20230012`** (Atas nama Rina Wulandari)
* **`20230013`** (Atas nama Agus Pranoto)

---

## 🚀 Cara Menjalankan Proyek

1. Buka folder proyek `tugas-uts-web1` menggunakan **Visual Studio Code**.
2. Buka file `index.html`.
3. Klik kanan pada area editor `index.html` lalu pilih **Open with Live Server** (atau buka file `index.html` secara langsung menggunakan browser).
