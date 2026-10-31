---
id: 24
slug: "cara-mengurus-abandoned-chat-agent-ai"
title: "Cara Mengurus Mesej Terabai (Abandoned Chat) Agent AI"
description: "Panduan mengesan prospek yang berhenti membalas perbualan dan memindahkannya secara automatik ke senarai kenalan susulan."
category: "Agent AI"
duration: "3 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengurus-abandoned-chat-agent-ai/"
---

Dalam interaksi bisnis melalui WhatsApp, sering kali calon pelanggan yang sedang berkonsultasi tiba-tiba berhenti membalas di tengah percakapan (misalnya selepas ditanya alamat pengiriman atau rincian pesanan). Situasi ini disebut sebagai **sembang yang Terabaikan** (_Abandoned sembang_).

ciri ini memungkinkan Agent AI mendeteksi pelanggan yang mendiamkan perbualan melebihi batas waktu tertentu, lalu otomatis memasukkan mereka ke database list khusus penanganan ulang (_re-engagement_) agar tim sales dapat menyapa kembali.

## Prasyarat

✅ Daftar list penampung kontak prospek tertunda (misal: `Follow-up Abandoned sembang`) sudah dibuat di menu Database.

✅ Akun anda memiliki akses ke instance WhatsApp di portal Wajom.

---

## 1. Menemukan Kartu sembang yang Terabaikan

1.  Buka menu **Agent AI** di portal Wajom, lalu klik tab **Automation**.
2.  Gulir ke bawah hingga menemukan kartu **sembang yang terabaikan** (_"Pelanggan yang tidak membalas lagi dalam waktu tertentu dipindahkan ke senarai kenalan, supaya boleh anda hubungi ulang"_).
3.  Klik butang **Atur** yang ditandai kotak merah pada kartu tersebut untuk membuka borang konfigurasi.

![Menemukan Kartu sembang yang Terabaikan dan butang Atur](/images/agent-ai/abandoned-01-card.png)

1.  Jika belum ada aturan, klik butang **+ Tambah aturan** untuk membuat slot aturan baru (_Aturan 1_).

---

## 2. Mengonfigurasi Aturan Deteksi dan Pemindahan Kontak

borang tetapan aturan inaktivitas akan terbuka di bawah kartu:

![borang Konfigurasi Aturan sembang yang Terabaikan](/images/agent-ai/abandoned-02-rule-card.png)

Lengkapi parameter berikut:

1.  **selepas Berapa Jam Tanpa Balasan (Batas Inaktivitas)**:
2.  Masukkan angka durasi waktu hening yang menjadi patokan (pilihan antara 1 sampai 8760 jam, rekomendasi: `2` sampai `6` jam). Jika pelanggan tidak membalas mesej terakhir melebihi durasi ini, sistem akan memicu pemindahan kontak.
3.  **Pindahkan ke Daftar Tujuan**:
4.  Pilih database list target yang akan menampung prospek tertunda ini (contoh: list `Prospek Menggantung` atau `Follow Up Tim Sales`).
5.  **Kecualikan Kontak di Daftar Ini (Opsional)**:
6.  Pilih senarai kenalan yang tidak boleh dipindahkan (misalnya kontak yang sudah berstatus `Pelanggan VIP` atau `Sudah Bayar` agar tidak terganggu).
7.  **Catatan (Opsional)**:
8.  Tambahkan catatan konteks internal untuk tim penanganan.
9.  **Hapus dari Daftar Lama Saat Dipindahkan**:
10.  Centang opsi ini jika anda ingin nombor kontak otomatis dicabut dari database list lamanya begitu berhasil dipindahkan ke list tujuan.
11.  Klik butang biru **Simpan**.

---

## 3. menghidupkan suis togol Otomasi

1.  Pada halaman tab Automation, periksa kembali kartu **sembang yang terabaikan**.
2.  Klik butang suis togol toggle switch di samping kartu hingga berstatus **Aktif**.
3.  Seluruh prospek yang tidak melanjutkan perbualan kini akan otomatis terkumpul di list tujuan dan siap untuk dihubungi kembali menggunakan kampanye broadcast terjadwal atau mesej sekuens penawaran khusus.
