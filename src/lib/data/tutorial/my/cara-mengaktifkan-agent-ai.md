---
id: 16
slug: "cara-mengaktifkan-agent-ai"
title: "Cara Mengaktifkan & Konfigurasi Asas Agent AI"
description: "Panduan mengaktifkan suis togol Agent AI, menetapkan identiti perniagaan, tahap ketelitian, skop perbualan, waktu operasi, dan sela masa respon."
category: "Agent AI"
duration: "5 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengaktifkan-agent-ai/"
---

Panduan ini memandu anda mengaktifkan Agent AI dari awal: menghidupkan suis togol aktivasi di Ringkasan, menetapkan identitas bisnis di Persona, menentukan parameter operasional di tab Aturan (_Scope_, _Activation Mode_, _waktu operasi_, _sela masa respon_, _Exclude Lists_, dan _Kata Kunci Kontrol_), hingga menyesuaikan karakteristik respon di tab Settings (_Tingkat Ketelitian AI_, _Balas dalam Beberapa mesej_, dan _Notifikasi Admin_).

## Prasyarat

✅ Device WhatsApp anda berstatus **Connected** di portal Wajom.

✅ Akun anda memiliki sisa saldo token AI yang mencukupi.

> **Alert**: nombor WhatsApp yang sama tidak dapat menjalankan sembang AI dan Agent AI secara bersamaan. Pastikan ciri sembang AI dinonaktifkan terlebih dahulu jika anda beralih ke Agent AI.

---

## 1. menghidupkan Toggle Switch Agent AI

1.  Buka menu **Agent AI** di portal Wajom lalu pilih tab **Ringkasan**.
2.  Pada kartu utama **Agent AI**, temukan butang suis togol (_toggle switch_) status yang berada di sisi kanan kartu.
3.  Klik butang switch tersebut untuk menghidupkan Agent AI hingga butang bergeser aktif ke kanan.
4.  Ketika aktif, status kartu akan berubah menjadi **Aktif** dan Agent AI langsung siap melayani sembang masuk pelanggan.

![menghidupkan Toggle Switch Agent AI pada Tab Ringkasan](/images/agent-ai/aktivasi-01-toggle.png)

---

## 2. menetapkan Identitas Bisnis (Company Name)

Buka tab **Persona** di bar navigasi Agent AI:

1.  Pada bagian **01 Identitas**, temukan dua ruangan input utama:
2.  - **Nama Bisnis**: Masukkan nama merek atau gerai anda (contoh: `Toko Kopi Senja` atau `Wajom`). Nama ini digunakan AI saat menyapa pelanggan.
3.  - **Nama Perusahaan**: Masukkan nama badan usaha legal perusahaan anda (contoh: `PT Senja Makmur Mandiri`).
4.  Tinjau tampilan pada panel **Pratinjau** di sebelah kanan layar.
5.  Klik butang biru **Simpan** untuk menyimpan perubahan identitas.

![tetapan Identitas Bisnis pada Persona](/images/agent-ai/aktivasi-02-identitas.png)

---

## 3. Memilih Tingkat Ketelitian AI (Engine Version)

Buka tab **Settings** di navigasi Agent AI:

Pada bagian **01 Tingkat Ketelitian AI**, tentukan model penalaran kecerdasan buatan sesuai kebutuhan bisnis anda:

![Pilihan Tingkat Ketelitian AI](/images/agent-ai/aktivasi-03-ketelitian.png)

-   **Hemat (0.8×)**: Paling irit saldo token. Sangat cocok untuk toko online dengan alur tanya-jawab FAQ standar.
-   **Default (1×)**: Rasio seimbang antara kecerdasan respon dan efisiensi token. Pilihan rekomendasi untuk operasional sehari-hari.
-   **Pintar (1.5×)**: Lebih teliti dalam menganalisis pertanyaan panjang, komplain, atau konsultasi bertingkat.
-   **Max (2×)**: Tingkat penalaran tertinggi untuk kasus rumit, analisis dokumen, atau negosiasi khusus.

---

## 4. menetapkan Pemecahan mesej (Response Settings)

Masih di tab **Settings**, gulir ke bagian **02 Balas dalam beberapa mesej**:

ciri ini memecah jawaban AI yang panjang menjadi beberapa balon sembang pendek berurutan layaknya manusia yang mengetik di WhatsApp.

![tetapan Balas dalam Beberapa mesej](/images/agent-ai/aktivasi-04-split-pesan.png)

1.  Aktifkan suis togol toggle **Balas dalam beberapa mesej**.
2.  Tentukan parameter berikut:
3.  - **Maksimal jumlah mesej**: Batas maksimal pecahan sembang (pilihan 1 sampai 5 mesej, default `3`).
4.  - **Maksimal karakter per mesej**: Batas panjang teks per balon sembang (pilihan 100 sampai 1.000 karakter, default `500`).
5.  - **Jeda antar mesej (detik)**: Waktu jeda sebelum balon sembang berikutnya terkirim (0 sampai 10 detik, default `2` detik).
6.  - **Tampilkan "sedang mengetik..."**: Saat aktif, status WhatsApp nombor anda akan menampilkan indikator mengetik selama AI menyusun balasan.

---

## 5. Menentukan Cakupan perbualan (Scope)

Buka tab **Aturan** di bar navigasi Agent AI:

Pada bagian **01 Di mana ejen membalas**, tentukan ruang perbualan mana yang boleh dibalas otomatis oleh bot:

![Pemilihan Scope perbualan Agent AI](/images/agent-ai/aktivasi-05-scope.png)

-   **sembang pribadi**: Bot hanya membalas percakapan pribadi satu lawan satu (_direct message_). Ini adalah pilihan standar paling aman.
-   **kumpulan**: Bot hanya merespons perbualan di dalam kumpulan WhatsApp yang ditentukan.
-   **Semua**: Bot aktif merespons perbualan pribadi DAN kumpulan WhatsApp sekaligus.

---

## 6. menetapkan Waktu Mulai Membalas (Activation Mode)

Pada bagian **02 Kapan ejen mulai membalas** di tab **Aturan**:

![Mode Aktivasi Agent AI](/images/agent-ai/aktivasi-06-mode.png)

-   **Selalu**: Agent AI langsung membalas setiap mesej masuk secara otomatis tanpa perlu kata kunci pemicu. Pilihan terbaik untuk layanan pelanggan otomatis 24/7.
-   **Dengan kata kunci**: ejen hanya mulai aktif merespons selepas pelanggan mengirimkan kata kunci pemicu tertentu (misal: `halo cs`, `tanya bot`, `menu`).

---

## 7. menetapkan waktu operasi (Schedule)

Membatasi operasional Agent AI agar hanya membalas perbualan pada waktu operasi resmi bisnis anda:

1.  Di tab **Aturan**, temukan bagian **03 waktu operasi**.
2.  Klik butang suis togol switch hingga berwarna biru aktif.
3.  ruangan borang waktu operasi akan muncul di bawahnya:
4.  - **Buka**: Masukkan jam buka operasional (contoh: `08:00`).
5.  - **Tutup**: Masukkan jam tutup operasional (contoh: `21:00`).
6.  - **Zona waktu**: Pilih zona waktu akun anda (`Asia/Jakarta (WIB)`, `Asia/Makassar (WITA)`, atau `Asia/Jayapura (WIT)`).
7.  Di luar waktu operasi yang ditentukan, Agent AI tidak akan mengirimkan balasan otomatis.

![tetapan waktu operasi Agent AI](/images/agent-ai/aktivasi-07-jam-kerja.png)

---

## 8. menetapkan sela masa sebelum membalas (Chatbot Limit / Batch Delay)

Sering kali pelanggan mengetik mesej secara terpotong-potong (misalnya 3 sembang pendek berturut-turut). ciri sela masa respon memastikan Agent AI menunggu beberapa detik untuk mengumpulkan seluruh mesej pelanggan lalu membalasnya sekaligus dalam satu kesatuan utuh:

1.  Temukan bagian **04 sela masa sebelum membalas (detik)** di tab **Aturan**.
2.  Masukkan angka durasi waktu tunggu pada ruangan input (rentang 0–60 detik, rekomendasi `3` sampai `5` detik).
3.  Bot akan menahan balasan selama durasi tersebut sebelum memproses jawaban.

![tetapan sela masa sebelum membalas](/images/agent-ai/aktivasi-07-jeda-membalas.png)

---

## 9. Mengecualikan Kontak (Exclude Lists)

Mencegah Agent AI membalas nombor admin internal, atasan, atau mitra vendor:

1.  Temukan bagian **05 Kecualikan kontak dari list** di tab **Aturan**.
2.  Nyalakan butang suis togol switch hingga berwarna aktif.
3.  Klik pada ruangan pemilihan senarai kenalan untuk memilih database list pengecualian (misalnya list `Admin Internal` atau `Tim Manajemen`).
4.  nombor yang terdaftar di dalam list kontak tersebut tidak akan pernah dibalas otomatis oleh bot.

![tetapan senarai kenalan yang Dikecualikan](/images/agent-ai/aktivasi-08-exclude-lists.png)

---

## 10. menetapkan Kata Kunci Kontrol (Pause, Resume, dan Abaikan)

Kata kunci kontrol memberikan kendali instan kepada tim anda untuk menjeda, melanjutkan, atau mengabaikan bot langsung dari dalam ruang sembang WhatsApp:

### Jenis Aksi Kata Kunci:

- **Jeda (Pause)**: Bot berhenti membalas sembang pelanggan ini sementara waktu. Sangat berguna ketika admin manusia sedang menangani pelanggan secara manual agar bot tidak menyela percakapan. - **Lanjutkan (Resume)**: Mengaktifkan kembali bot untuk melanjutkan membalas sembang pelanggan tersebut selepas penanganan admin selesai. - **Abaikan (Ignore)**: mesej spesifik yang mengandung kata kunci ini dilangkau oleh bot dan tidak akan direspon.

### Langkah Menambahkan Kata Kunci Kontrol:

1. Pada bagian **06 Kata kunci kontrol**, lengkapi borang penambahan kata kunci: - **Kata kunci**: Tuliskan frasa kata kunci kontrol (contoh: `stop bot` atau `bicara cs`). - **Aksi**: Pilih `Jeda`, `Lanjutkan`, atau `Abaikan`. - **Cara cocok**: Pilih `Sama persis` (hanya berlaku jika sembang hanya berisi kata tersebut) atau `Mengandung kata` (berlaku jika kalimat sembang memuat kata tersebut). 2. Klik butang **Tambah**.

![borang Penambahan Kata Kunci Kontrol](/images/agent-ai/aturan-08-tambah-kata-kunci.png)

1.  Kata kunci yang berhasil ditambahkan akan muncul pada daftar kata kunci aktif di bawah borang:

![Daftar Kata Kunci Kontrol Aktif](/images/agent-ai/aturan-09-daftar-kata-kunci.png)

---

## 11. menetapkan mesej Cadangan dan Notifikasi Admin ke WhatsApp

Buka kembali tab **Settings**:

![tetapan Notifikasi Admin dan Cadangan Handover](/images/agent-ai/handover-04-settings-cadangan.png)

### mesej Cadangan (Fallback Message)

Tuliskan kalimat penenang pada bagian **04 mesej cadangan** yang otomatis dikirim jika terjadi gangguan jaringan atau AI kehabisan token (default: _"Maaf, saya belum boleh menjawab sekarang. Admin kami akan segera membantu ya 🙏"_).

### Notifikasi Admin ke WhatsApp

Pada kartu **Notifikasi admin**: 1. Masukkan nombor WhatsApp admin pada **nombor WhatsApp admin** (format kode negara tanpa tanda +, contoh `6281234567890`). 2. Aktifkan peringatan yang dibutuhkan: - **Saldo menipis**: Notifikasi saat saldo token turun di bawah batas aman. - **Saldo habis**: Notifikasi darurat saat saldo habis dan bot berhenti membalas. - **Balasan gagal beruntun**: Notifikasi jika terjadi 3 kegagalan respon berturut-turut. - **Engine/WhatsApp terputus**: Notifikasi jika status koneksi WhatsApp terputus. - **Ringkasan harian**: Laporan aktivitas 24 jam terakhir yang dikirim setiap hari pada jam tertentu (misal `21:00`). - **Cadangan handover**: Notifikasi pengalihan sembang otomatis dikirimkan ke nombor ini jika tidak ada admin lain yang ditugaskan. 3. Klik butang biru **Simpan notifikasi**.
