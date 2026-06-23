# 🌊 TradiSea — Cafe, Resto & Heritage Stay Landing Page

[![Tech Stack](https://img.shields.io/badge/Stack-HTML5%20%7C%20CSS3%20%7C%20JavaScript-blue)](https://github.com/)
[![Responsive](https://img.shields.io/badge/Responsive-Yes-success)](#)
[![Language](https://img.shields.io/badge/Language-ID%20%2F%20EN-orange)](#)

**TradiSea** adalah sebuah landing page premium yang dirancang untuk bisnis kuliner, penginapan berkarakter (*heritage stay*), dan agrowisata berkelanjutan yang berbasis di Situbondo, Jawa Timur. Website ini dirancang dengan pendekatan modern, mengutamakan performa, aksesibilitas, dan fleksibilitas bahasa (bilingual).

🚀 **[Lihat Demo Live](https://tradisea.vercel.app/)**

---

## ✨ Fitur Utama

* **Sistem Multi-Bahasa (Bilingual ID/EN):** Menggunakan *state management* sederhana berbasis Vanilla JavaScript untuk transisi bahasa instan tanpa perlu *reload* halaman atau menggunakan *library* pihak ketiga.
* **Arsitektur *Single-Page* Moderen:** Navigasi lancar dengan *smooth scrolling* dan fitur *active state tracking* otomatis yang mendeteksi posisi *scroll* pengguna menggunakan `IntersectionObserver`.
* **Desain Responsif Ekstrem:** Dioptimalkan secara penuh untuk berbagai ukuran perangkat, mulai dari ponsel layar kecil hingga monitor desktop beresolusi tinggi menggunakan CSS Grid, Flexbox, dan teknik *fluid typography* (`clamp()`).
* **Animasi *Scroll Reveal* Berperforma Tinggi:** Transisi elemen visual saat di-*scroll* yang halus, memanfaatkan `IntersectionObserver` API untuk menjaga *frame rate* (FPS) tetap optimal dibandingkan menggunakan *scroll event listener* tradisional.
* **Aksesibilitas & SEO Teroptimasi:** Penggunaan HTML5 Semantik secara disiplin, atribut `aria-label`, `aria-hidden`, elemen kontrol yang ramah pembaca layar (*screen reader*), serta gaya fokus visual yang jelas (`:focus-visible`).

---

## 🛠️ Teknologi yang Digunakan

* **HTML5:** Struktur semantik standar industri untuk optimasi SEO dan aksesibilitas.
* **CSS3 Modern:** Memanfaatkan *Custom Properties* (Variabel CSS), sistem layouting modern (Grid & Flexbox), filter visual, serta optimasi transisi performa tinggi.
* **Vanilla JavaScript (ES6+):** Logika murni tanpa beban *framework*, menggunakan *passive event listeners* untuk memastikan interaksi *scroll* yang sangat responsif.
* **Google Fonts:** Mengombinasikan font *serif* elegan `Playfair Display` untuk elemen *heading* dan font *sans-serif* bersih `Inter` untuk kenyamanan membaca teks konten.

---

## 📂 Struktur Repositori

```text
tradisea-website/
├── assets/
│   ├── logo-TradiSea.png       # Identitas visual utama
│   ├── Tradisea-The-Movie.mp4  # Video latar belakang hero section
│   └── *.jpg                   # Galeri foto aset (kamar, resto, kebun)
├── index.html                  # Struktur markup utama (Semantik & SEO)
├── style.css                   # Sistem desain, variabel warna, & layout responsif
├── script.js                   # Logika navigasi, transisi bahasa, & observer animasi
└── README.md                   # Dokumentasi proyek
```

## ⚡ Implementasi Teknis Unggulan
Sebagai front-end developer, berikut adalah beberapa detail teknis yang diterapkan dalam basis kode ini:

* **Optimasi Event Listener untuk Scroll :** Guna menghindari fenomena layout jank atau penurunan performa saat halaman di-scroll, event listener pada komponen navbar menggunakan opsi { passive: true }. Hal ini memberi tahu peramban bahwa skrip tidak akan membatalkan scroll, sehingga rendering halaman tetap mulus.
* **Efisiensi DOM Manipulasi pada Translasi Bahasa :** Alih-alih menduplikasi elemen atau melakukan render ulang seluruh struktur DOM, sistem penerjemah memanfaatkan atribut data-key sebagai penanda statis. Skrip JavaScript hanya memperbarui properti innerHTML atau textContent pada elemen yang ditargetkan secara spesifik.
* **Pemisahan Komponen Visual Signature :** Penggunaan pembatas bergelombang (wave dividers) berbasis SVG inline memastikan elemen visual tetap tajam di semua densitas layar (Retina/Amoled) tanpa membebani waktu tunggu HTTP request eksternal.

## 🔧 Cara Menjalankan Proyek Secara Lokal
Karena proyek ini dibangun menggunakan teknologi web statis murni, kamu tidak perlu melakukan instalasi dependensi rumit melalui npm.

1. Clone Repositori ini :
   ```bash
   git clone
   ```
2. Masuk ke direktori proyek:
   ```bash
   cd tradisea-website
   ```
3. Buka file index.html: <br>
   Kamu bisa langsung membukanya di browser pilihanmu, atau menggunakan ekstensi Live Server di VS Code untuk pengalaman pengembangan yang lebih interaktif.

## 📝 Lisensi
Proyek ini dibuat untuk tujuan portofolio dan pengembangan bisnis komersial TradiSea. Seluruh hak cipta desain, aset gambar/video, dan kode di dalamnya dilindungi.
