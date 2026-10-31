---
id: 19
slug: "pengurusan-memori-pelanggan-agent-ai"
title: "Cara Mengurus & Memadam Memori Pelanggan Agent AI"
description: "Panduan memahami cara kerja memori perbualan 2 lapisan, mencari data pelanggan, membetulkan fakta, dan memadam memori ejen."
category: "Agent AI"
duration: "3 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/pengurusan-memori-pelanggan-agent-ai/"
---

Agent AI memiliki arsitektur memori cerdas dua lapis: 1. **Memori Jangka Pendek**: Agent AI membaca **10 mesej terakhir** langsung dari ruang perbualan WhatsApp untuk memahami percakapan yang sedang berlangsung. 2. **Memori Jangka Panjang (Fakta Pelanggan)**: mesej-mesej yang lebih lama dari 10 sembang otomatis diringkas dan diekstraksi menjadi fakta-fakta singkat (misalnya nama panggilan, preferensi produk, status pesanan, dan janji sebelumnya). Ringkasan ini disimpan dalam tab **Memori** dan diperbarui otomatis beberapa menit selepas perbualan sepi.

Ketika seorang pelanggan meminta agar data percakapannya dihapus atau ketika konteks transaksi lama sudah tidak relevan, anda dapat mengoreksi fakta atau membuat ejen melupakan pelanggan tersebut.

## Prasyarat

✅ Pelanggan sudah pernah berinteraksi beberapa kali dengan Agent AI hingga fakta memori terbentuk.

✅ anda memiliki akses pengelola ke dashboard Agent AI di portal Wajom.

---

## 1. Memahami Cara Kerja Memori Pelanggan

1.  Buka menu **Agent AI** di portal Wajom.
2.  Pada bar navigasi atas, klik tab **Memori**.
3.  Di bagian atas halaman, perhatikan kartu penjelasan **Cara kerjanya**:

![Penjelasan Cara Kerja Memori Pelanggan pada Tab Memori](/images/agent-ai/memori-01-cara-kerja.png)

> **Tip**: Broadcast kampanye, mesej sekuens (drip sequence), dan balasan manual yang diketik langsung oleh admin di aplikasi WhatsApp tetap diperhitungkan ke dalam konteks ejen. Hal ini memastikan Agent AI memahami apa yang sedang direspon oleh pelanggan.

---

## 2. Mencari Profil dan Memori Pelanggan

1.  Pada kartu **Pelanggan**, temukan ruangan pencarian di sudut kanan atas dengan label **Cari nama, nombor atau fakta...**.
2.  Masukkan nombor WhatsApp pelanggan (contoh: `6281234567890`) atau nama panggilan kontak (contoh: `Budi Santoso`).
3.  Sistem akan memfilter dan menampilkan kartu memori pelanggan yang relevan beserta rincian:
4.  - **nombor Kontak & Nama**.
5.  - **Daftar Fakta Singkat**: Poin-poin informasi yang diingat AI dari perbualan terdahulu (misal varian produk yang disukai, alamat kantor, tanggal pembelian terakhir).
6.  - **Situasi Terakhir**: Catatan konteks terakhir pelanggan (misal sedang menunggu restock barang).
7.  - **Waktu Pembaruan Terakhir**: Kapan memori tersebut terakhir kali diekstrak oleh sistem.

![Pencarian Profil dan Fakta Memori Pelanggan](/images/agent-ai/memori-02-cari-pelanggan.png)

---

## 3. Mengoreksi Fakta atau memadam Memori (Melupakan Pelanggan)

Pada setiap kartu profil pelanggan yang terdaftar:

### Mengoreksi Fakta (butang Ubah)

1. Jika ada fakta yang berubah (misalnya pelanggan berganti alamat kirim atau memperbarui ukuran baju), klik butang **Ubah**. 2. Sunting butir kalimat fakta yang salah atau tambahkan catatan baru. 3. Klik simpan. Agent AI akan menggunakan informasi yang telah diperbarui tersebut pada perbualan berikutnya.

### memadam Memori (butang Lupakan)

1. Jika pelanggan meminta datanya dibersihkan atau anda ingin memulai interaksi baru dari nol tanpa rekod masa lalu, klik butang merah **Lupakan**. 2. Sistem akan memadam seluruh ringkasan fakta dan situasi terakhir pelanggan tersebut dari database memori jangka panjang AI. 3. selepas dihapus, Agent AI akan melayani interaksi berikutnya seperti pelanggan baru tanpa membawa prasangka perbualan terdahulu.

---

## 4. Mereset rekod perbualan pada Simulasi Playground

Jika anda sedang menguji coba skenario perbualan baru di tab **Uji Coba** (_Playground_) dan ingin membersihkan balon sembang simulasi:

1.  Buka tab **Uji coba** di bar navigasi Agent AI.
2.  Pada sudut kanan atas layar, temukan butang **Mulai ulang**.
3.  Klik butang **Mulai ulang** untuk mengosongkan seluruh rekod perbualan simulasi dan memulai sesi baru dengan konteks bersih.

![butang Mulai Ulang pada Halaman Uji Coba Playground](/images/agent-ai/playground-01-simulasi.png)
