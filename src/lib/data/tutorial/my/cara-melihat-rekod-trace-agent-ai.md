---
id: 18
slug: "cara-melihat-rekod-trace-agent-ai"
title: "Cara Melihat Rekod Balasan (Trace) & Analitik Agent AI"
description: "Panduan memeriksa setiap mesej yang diproses oleh Agent AI, menapis status balasan pada menu Trace, serta membaca laporan metrik token di tab Analitik."
category: "Agent AI"
duration: "4 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-melihat-rekod-trace-agent-ai/"
---

Agent AI dilengkapi sistem pemantauan transparan yang mencatat setiap mesej yang masuk dari pelanggan WhatsApp. Melalui ciri **Trace** dan **Analitik**, anda dapat mengetahui secara persis mesej mana yang berhasil dijawab, mesej mana yang sengaja dilangkau, alasan terjadinya mesej cadangan (_fallback_), hingga rincian saldo token yang dipotong untuk setiap respon.

## Prasyarat

✅ Agent AI dalam keadaan aktif atau sudah pernah menerima mesej masuk dari pelanggan.

✅ Akun anda memiliki akses ke instance WhatsApp di portal Wajom.

---

## 1. Menuju ke Halaman Menu Trace

1.  Buka portal Wajom di [portal.wajom.co](https://portal.wajom.co) dan masuk ke instance WhatsApp anda.
2.  Di bar navigasi utama Agent AI bagian atas, klik tab **Trace**.

![Navigasi Menuju Menu Trace pada Agent AI](/images/agent-ai/trace-00-navigasi.png)

1.  Sistem akan membuka halaman log aktivitas mesej dengan indikator status hijau **Live** yang menandakan pemantauan mesej berjalan secara langsung (_real-time_).

---

## 2. Memfilter rekod mesej Berdasarkan Status

Di bagian atas halaman Trace, gunakan panel filter untuk menyaring rekod interaksi pelanggan:

![Bilah Filter rekod mesej pada Menu Trace](/images/agent-ai/trace-01-filter.png)

1.  **Status**: Pilih kondisi balasan yang ingin anda audit:
2.  - **Semua**: Menampilkan seluruh mesej masuk tanpa pengecualian.
3.  - **Dibalas**: mesej yang berhasil dijawab secara normal oleh model AI.
4.  - **Balasan cadangan**: mesej yang dialihkan ke mesej cadangan karena AI tidak menemukan jawaban atau terjadi kendala.
5.  - **dilangkau**: mesej yang sengaja dilangkau oleh ejen (misalnya karena aturan waktu operasi, senarai kenalan pengecualian, atau kata kunci jeda).
6.  - **Gagal**: mesej yang mengalami kendala teknis saat proses pengiriman.
7.  - **Dihentikan**: Percakapan yang dihentikan sementara oleh kata kunci kontrol atau intervensi admin manusia.
8.  - **Diproses**: mesej yang sedang dalam antrean pemrosesan oleh model AI.
9.  **Kontak**: Masukkan nombor WhatsApp pelanggan tertentu (contoh: `08123456789`) untuk melihat rekod khusus nombor tersebut.
10.  **Dari tanggal** & **Sampai tanggal**: Tentukan rentang waktu pemeriksaan rekod mesej.
11.  Klik butang biru **Terapkan** untuk menerapkan filter, atau klik **Hapus filter** untuk mereset pencarian.

---

## 3. Memeriksa Rincian Log dan Token Terpakai

Di bawah panel filter, tabel log **Trace** menyajikan detail interaksi mesej secara transparan per ruangan:

![Rincian Tabel Log mesej Masuk dan Konsumsi Token](/images/agent-ai/trace-02-log.png)

Setiap baris rekod menampilkan rincian: - **Waktu**: Jam dan detik tepat saat mesej diterima oleh server Wajom. - **Kontak**: nombor WhatsApp pelanggan pengirim mesej. - **Status**: Label status pemrosesan (_Dibalas_, _Balasan cadangan_, atau _dilangkau_). - **Alasan / mesej Masuk**: Kalimat asli yang diketikkan pelanggan atau alasan bot melangkau mesej. - **Waktu Balas**: Durasi kecepatan respon (_latency_) bot dalam detik (misal `1.8s`). - **Token**: Nominal saldo token AI yang dipotong untuk menghasilkan balasan tersebut.

> **Tip**: Klik pada salah satu baris perbualan di tabel Trace untuk membuka panel samping (drawer) detail. Di sana anda dapat membaca konteks penalaran (reasoning), prompt sistem, dan rekod memori yang digunakan AI saat menyusun jawaban.

---

## 4. Menganalisis Kinerja pada Tab Analitik

Untuk melihat gambaran statistik performa bisnis secara menyeluruh dalam periode tertentu:

1.  Buka tab **Analitik** di bar navigasi Agent AI.
2.  Tentukan rentang waktu analisis di sudut kanan atas: **24 jam**, **7 hari**, atau **30 hari**.

![Laporan Kinerja sembang dan Pemakaian Saldo Token pada Tab Analitik](/images/agent-ai/trace-03-analitik.png)

### Metrik Ringkasan sembang:

- **Total Ditangani**: Jumlah kumulatif perbualan yang masuk ke nombor WhatsApp bisnis anda. - **Dibalas vs dilangkau vs Gagal**: Rasio efektivitas bot dalam melayani pelanggan secara otomatis. - **Rata-rata Waktu Balas**: Rata-rata durasi yang dibutuhkan bot untuk merespons perbualan. - **Pelanggan Unik & Pelanggan Baru**: Jumlah individu kontak unik yang berinteraksi dengan asisten anda.

### Rincian Pemakaian Saldo Token:

- **Total Saldo Terpotong**: Akumulasi token yang digunakan untuk seluruh balasan berbayar. - **Rata-rata per Balasan**: Rata-rata konsumsi token per satu mesej balasan (membantu memproyeksikan kebutuhan _top up_ token berikutnya). - **Cache Hit**: Persentase prompt sistem dan basis pengetahuan yang berhasil dibaca dari memori cache server. Semakin tinggi angka _cache hit_, semakin hemat biaya token yang dikeluarkan. - **Komponen Token**: Rincian pemisahan kuota antara _Input_, _Input dari cache_, _Output_, dan _Reasoning_.
