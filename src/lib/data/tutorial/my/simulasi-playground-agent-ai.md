---
id: 17
slug: "simulasi-playground-agent-ai"
title: "Cara Menguji Interaksi di Playground Agent AI"
description: "Panduan melakukan simulasi perbualan bersama Agent AI di halaman Playground tanpa menghantar mesej ke WhatsApp sebenar."
category: "Agent AI"
duration: "3 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/simulasi-playground-agent-ai/"
---

Halaman **Uji coba** (_Playground_) adalah lingkungan simulasi yang disediakan Wajom agar anda dapat berinteraksi langsung dengan Agent AI anda layaknya seorang pelanggan. Di sini anda dapat menguji kecerdasan respon, menguji respon basis pengetahuan, memeriksa eksekusi aksi khusus (API/Google Sheets), serta mengevaluasi gaya bahasa sebelum bot diaktifkan ke publik.

![Tampilan Simulasi Uji Coba Playground Agent AI](/images/agent-ai/playground-01-simulasi.png)

## kelebihan Menggunakan Playground

✅ **Aman & Terisolasi**: mesej yang dikirim di Playground tidak akan terkirim ke nombor WhatsApp pelanggan mana pun.

✅ **Dapat Digunakan Saat Nonaktif**: anda tetap dapat menguji bot di Playground meskipun status Agent AI utama sedang dalam posisi nonaktif.

✅ **Pengujian Media & Gambar**: Mendukung pengujian pengiriman lampiran gambar untuk menguji kemampuan pembacaan visual AI.

---

## 1. Membuka Halaman Uji Coba

1.  Buka menu **Agent AI** di portal Wajom.
2.  Pada bar navigasi atas, klik tab **Uji coba**.
3.  Di bagian tengah layar, anda akan melihat jendela ruang percakapan simulasi.

---

## 2. Mengirim mesej Simulasi

1.  Pada ruangan input di bagian bawah (_"Tulis mesej sebagai pelanggan…"_ ), ketikkan pertanyaan atau skenario yang ingin anda uji:
2.  - Pertanyaan FAQ seputar jam operasional atau lokasi.
3.  - Pertanyaan harga atau stok produk katalog.
4.  - Permintaan penanganan bantuan admin manusia (menguji ciri Handover).
5.  - Pengujian pemanggilan aksi khusus seperti pelacakan status pesanan atau integrasi Google Sheets.
6.  Klik butang kirim atau tekan butang **Enter**.
7.  Agent AI akan memproses mesej dan menampilkan balasan langsung di layar.

> **Tip**: Percakapan pada halaman Uji Coba mengonsumsi saldo token AI seperti perbualan biasa karena model AI tetap bekerja memproses data secara nyata. walau bagaimanapun, metrik perbualan uji coba dicatat terpisah dan tidak dimasukkan ke dalam metrik analitik sembang pelanggan.

---

## 3. Menguji Lampiran Gambar

Jika anda mengaktifkan opsi **Baca gambar** di tab [Settings](/agent-ai/cara-mengaktifkan#4-menetapkan-karakteristik-balasan-response-settings): 1. Klik butang **Lampirkan gambar** di samping ruangan mesej. 2. Unggah foto produk atau struk pembayaran. 3. Kirim mesej pengujian, misalnya: _"Berapa harga produk seperti di foto ini?"_ 4. Evaluasi apakah Agent AI dapat mengenali gambar dan menjawab sesuai basis pengetahuan anda.

---

## 4. Mereset Sesi Uji Coba (Mulai Ulang)

Jika anda telah selesai menguji satu topik dan ingin memulai skenario baru dengan konteks perbualan yang bersih: 1. Klik butang **Mulai ulang** di sudut kanan atas layar. 2. Seluruh rekod balon sembang di halaman Playground akan dikosongkan seketika.
