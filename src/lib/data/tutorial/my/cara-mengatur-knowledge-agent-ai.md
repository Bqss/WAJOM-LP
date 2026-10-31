---
id: 20
slug: "cara-mengatur-knowledge-agent-ai"
title: "Cara Mengatur Pangkalan Pengetahuan (Knowledge) Agent AI"
description: "Panduan lengkap mengurus pangkalan pengetahuan: had kapasiti token, mencipta bahagian pengetahuan bertopik, dan menampal teks panjang untuk FAQ/SOP."
category: "Agent AI"
duration: "4 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-knowledge-agent-ai/"
---

Basis pengetahuan (_Knowledge_) adalah sumber referensi utama yang dibaca oleh Agent AI setiap kali menyusun balasan untuk pelanggan WhatsApp anda. Semua informasi mengenai profil bisnis, katalog produk, rincian harga, kebijakan pengembalian, nombor rekening pembayaran, hingga pertanyaan yang sering diajukan (FAQ) disimpan di sini.

## Prasyarat

✅ Materi teks informasi produk, panduan layanan, atau FAQ bisnis anda sudah disiapkan.

✅ Akun anda memiliki akses ke instance WhatsApp di portal Wajom.

---

## 1. Memahami Ukuran dan Kapasitas Token Pengetahuan

1.  Buka menu **Agent AI** di portal Wajom, lalu klik tab **Knowledge**.
2.  Pada bagian atas layar, perhatikan kartu indikator **Ukuran pengetahuan**:

![Indikator Ukuran Pengetahuan Token pada Tab Knowledge](/images/agent-ai/knowledge-01-ukuran.png)

### Ketentuan Kapasitas Token Knowledge:

- **Satuan Ukuran**: Sistem menghitung ukuran materi pengetahuan dalam satuan **token** (rata-rata 1 token setara dengan 4 karakter teks). - **Pembacaan Penuh (0 – 40.000 token)**: Jika total materi pengetahuan anda berada di bawah **40.000 token**, seluruh isi dokumen akan dibaca secara utuh oleh AI di setiap mesej balasan. Ini memastikan akurasi respon maksimal tanpa ada informasi yang terlewat. - **Batas Maksimal (Hingga 200.000 token)**: Sistem mendukung penyimpanan materi pengetahuan hingga maksimal **200.000 token**.

---

## 2. Menambahkan Bagian Pengetahuan (+ Tambah Bagian)

Membuat dokumen pengetahuan yang terstruktur per topik (misalnya _FAQ Pengiriman_, _Cara Pemesanan_, atau _Syarat & Ketentuan_):

1.  Di sudut kanan atas halaman Knowledge, klik butang biru **+ Tambah bagian**.
2.  Modal borang penambahan pengetahuan akan terbuka di layar:

![Modal Tambah Bagian Pengetahuan](/images/agent-ai/knowledge-02-tambah-bagian.png)

1.  Lengkapi isian borang:
2.  - **Judul Bagian**: Berikan nama topik yang jelas dan deskriptif (contoh: `FAQ Jam Operasional & Pengiriman`).
3.  - **Isi Pengetahuan**: Tuliskan poin-poin informasi secara terstruktur. Gunakan format tanya-jawab atau daftar butir (_bullet points_) agar mudah dipahami model AI.
4.  Klik butang **Simpan**. Bagian pengetahuan baru akan langsung terdaftar di kartu **Bagian pengetahuan**.

---

## 3. Menempel Teks Panjang (Tempel Teks Panjang)

Jika anda sudah memiliki dokumen SOP yang panjang, materi katalog lengkap, atau artikel regulasi dari situs web:

1.  Klik butang **Tempel teks panjang** yang terletak di sebelah butang _+ Tambah bagian_.
2.  Modal impor teks akan muncul:

![Modal Tempel Teks Panjang untuk Impor Cepat](/images/agent-ai/knowledge-03-tempel-teks.png)

1.  Tempel (_paste_) salinan teks dokumen anda ke dalam area input.
2.  Sistem akan otomatis menghitung estimasi jumlah token yang dikonsumsi oleh teks tersebut.
3.  Klik butang **Impor** atau **Simpan** untuk memasukkan materi ke dalam basis pengetahuan ejen anda.

---

## 4. Tips Menyusun Knowledge yang Efektif untuk Agent AI

> **Tip**: - Gunakan Format Tanya Jawab (Q&A): Tulis pertanyaan umum pelanggan persis seperti yang sering mereka tanyakan di WhatsApp, diikuti jawaban resmi yang ringkas dan padat. - Cantumkan Batasan: Jika produk tertentu sedang habis atau promo hanya berlaku untuk tanggal tertentu, sebutkan secara tegas di dalam materi pengetahuan. - Perbarui Secara Berkala: Hapus atau sunting bagian pengetahuan yang sudah tidak berlaku agar Agent AI tidak memberikan informasi kadaluwarsa kepada calon pembeli.
