---
id: 25
slug: "cara-mengatur-pesan-susulan-agent-ai"
title: "Cara Mengatur Mesej Susulan Automatik (Daily List) Agent AI"
description: "Panduan mengkonfigurasi mesej peringatan automatik apabila pelanggan berhenti membalas perbualan dalam tempoh masa tertentu."
category: "Agent AI"
duration: "3 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-pesan-susulan-agent-ai/"
---

ciri **mesej susulan** (_Follow-up Reminders / Daily List_) dirancang untuk menjaga keterlibatan calon pembeli secara otomatis. Jika pelanggan berhenti merespons selepas Agent AI memberikan informasi (seperti rincian harga, proposal, atau tautan pembayaran), bot dapat secara otomatis mengirimkan mesej pengingat yang ramah selepas jeda waktu yang anda tentukan.

## Prasyarat

✅ Template kalimat mesej pengingat atau strategi follow-up bisnis anda sudah disiapkan.

✅ Akun anda memiliki akses ke instance WhatsApp di portal Wajom.

---

## 1. Menemukan Kartu mesej Susulan

1.  Buka menu **Agent AI** di portal Wajom, lalu klik tab **Automation**.
2.  Gulir ke bawah hingga menemukan kartu **mesej susulan** (_"Jika pelanggan berhenti membalas, ejen mengirim mesej pengingat selepas jeda waktu yang anda tentukan"_).
3.  Klik butang **Atur** yang ditandai kotak merah pada kartu tersebut untuk membuka borang konfigurasi.

![Menemukan Kartu mesej Susulan dan butang Atur](/images/agent-ai/daily-01-card.png)

---

## 2. Memilih Jenis mesej Susulan dan Pengirim Terakhir

Pada bagian atas borang tetapan:

![Memilih Jenis mesej Susulan dan Pengirim Terakhir](/images/agent-ai/daily-02-jenis-pesan.png)

1.  **Jenis mesej Susulan**:
2.  - **Teks tetap**: anda menulis sendiri kalimat mesej pengingat secara manual.
3.  - **Ditulis ejen**: Model AI akan menyusun kalimat follow-up secara cerdas dan personal dengan menyesuaikan konteks percakapan terakhir pelanggan.
4.  **Kirim Susulan Jika mesej Terakhir Dari**:
5.  - **ejen**: Hanya kirim pengingat jika mesej terakhir di sembang dikirimkan oleh bot.
6.  - **ejen atau admin**: Kirim pengingat baik jika mesej terakhir dikirim oleh bot maupun staf admin manusia.

---

## 3. Menentukan Urutan mesej dan Jeda Waktu Pengiriman

Pada bagian **Urutan mesej**, tentukan rangkaian mesej pengingat beserta waktu jedanya:

![menetapkan Urutan mesej dan Jeda Waktu Follow-Up](/images/agent-ai/daily-03-urutan-pesan.png)

1.  Klik butang **+ Tambah mesej** untuk membuat urutan pengingat (_mesej 1_, _mesej 2_, dst).
2.  Tentukan waktu jeda tunggu (misalnya `2 jam`, `6 jam`, atau `24 jam` sejak mesej terakhir).
3.  Tulis isi kalimat follow-up yang natural dan bersahabat:
4.  _Contoh:_
5.  > _"Halo Kak! Mau memastikan apakah rincian penawaran kami tadi sudah sempat dicek? Jika butuh bantuan atau penyesuaian paket, kabari kami ya Kak 😊"_
6.  mesej berikutnya hanya akan dikirimkan jika pelanggan masih belum membalas perbualan.

---

## 4. menetapkan Jam Kirim mesej Susulan (Opsional)

Agar mesej follow-up tidak terkirim di tengah malam atau di luar waktu operasi yang tidak sopan:

![menetapkan Jam Kirim mesej Susulan](/images/agent-ai/daily-04-jam-kirim.png)

1.  Pada bagian **Jam kirim (opsional)**, klik butang **+ Tambah jam kirim**.
2.  Tentukan rentang jam yang diizinkan (misal antara pukul `09:00` sampai `20:00`).
3.  Jika jeda waktu pengingat jatuh pada malam hari, sistem akan menahan mesej dan baru mengirimkannya saat jam buka tercapai keesokan harinya.

---

## 5. Menyimpan Konfigurasi dan menghidupkan Otomasi

1.  Gulir ke bagian paling bawah borang dan klik butang biru **Simpan**.
2.  Kembali ke kartu **mesej susulan** pada tab Automation.
3.  Klik butang suis togol toggle switch di samping kartu hingga berstatus **Aktif**.
4.  Agent AI akan secara otomatis memantau durasi hening perbualan dan mengirimkan mesej susulan tepat waktu sesuai jadwal yang telah ditentukan.
