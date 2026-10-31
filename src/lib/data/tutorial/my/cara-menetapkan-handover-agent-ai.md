---
id: 22
slug: "cara-menetapkan-handover-agent-ai"
title: "Cara Menetapkan Penyerahan (Handover) kepada Admin"
description: "Panduan mengalihkan perbualan daripada Agent AI kepada admin manusia apabila pelanggan meminta bantuan atau sekiranya bot tidak dapat menjawab."
category: "Agent AI"
duration: "4 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-menetapkan-handover-agent-ai/"
---

Meskipun Agent AI mampu menangani sebagian besar pertanyaan secara otomatis, terdapat situasi di mana pelanggan membutuhkan penanganan langsung dari staf manusia (misalnya saat terjadi komplain, transaksi khusus, atau pertanyaan di luar basis pengetahuan).

ciri **Handover** di Agent AI memastikan percakapan dialihkan secara mulus ke tim admin WhatsApp anda tanpa membuat pelanggan merasa dilangkau.

## Prasyarat

✅ nombor WhatsApp admin yang bertugas sudah disiapkan dengan format kode negara (contoh: `6281234567890`).

✅ Akun anda memiliki akses ke instance WhatsApp di portal Wajom.

---

## 1. Membuka Menu Otomasi (Automation)

1.  Buka menu **Agent AI** di portal Wajom.
2.  Pada bar navigasi atas, klik tab **Automation**.
3.  Di halaman ini, temukan dua kartu otomasi handover:
4.  - **Panggil admin**: Pengalihan saat pelanggan secara eksplisit meminta bantuan manusia atau terdeteksi sedang komplain.
5.  - **Panggil admin saat ejen tidak boleh menjawab**: Pengalihan otomatis (_fallback handover_) saat AI tidak menemukan jawaban di basis pengetahuan.

![Daftar Kartu ciri Otomasi Handover](/images/agent-ai/handover-01-overview.png)

---

## 2. menetapkan ciri Panggil Admin (Human Request Handover)

Gunakan ciri ini untuk mendeteksi kapan pelanggan ingin berbicara dengan orang sungguhan:

1.  Pada kartu **Panggil admin**, klik butang **Atur** untuk membuka borang tetapan.
2.  borang konfigurasi panggil admin akan terbuka secara bertingkat:

![borang Konfigurasi Panggil Admin](/images/agent-ai/handover-02-panggil-admin.png)

1.  Atur parameter penting berikut:
2.  - **Kapan admin dipanggil**: Tuliskan kalimat situasi pemicu (contoh: _"pelanggan komplain barang rusak"_, _"minta berbicara dengan manusia"_, atau _"ingin negosiasi harga"_). Tekan butang **Enter** untuk menambahkan kondisi. Kosongkan jika ingin berlaku untuk semua permintaan bantuan admin.
3.  - **Siapa yang diberi tahu**:
4.  - _Semua admin_: Semua nombor yang didaftarkan akan menerima mesej notifikasi sekaligus.
5.  - _Bergiliran (Round Robin)_: Notifikasi dibagikan secara adil dan bergantian ke nombor admin yang terdaftar.
6.  - _Sesuai situasi_: Menentukan kumpulan admin tertentu berdasarkan topik keluhan pelanggan.
7.  - **nombor Admin**: Daftarkan nombor-nombor WhatsApp staf CS penerima notifikasi.
8.  - **mesej untuk admin**: Format mesej notifikasi ke WhatsApp admin. anda dapat menggunakan variabel dinamis `{name}` (nama pelanggan), `{phone}` (nombor pelanggan), `{reason}` (alasan pemanggilan), `{user_message}` (mesej terakhir pelanggan), dan `{context}` (rangkuman fakta memori).
9.  - **mesej untuk pelanggan**: Tuliskan kalimat penenang otomatis kepada pelanggan (contoh: _"Mohon tunggu sebentar ya, mesej anda sedang kami sambungkan ke admin kami 🙏"_).
10.  - **Hentikan ejen sementara untuk pelanggan ini**: Centang kotak ini agar bot berhenti membalas perbualan pelanggan tersebut sementara waktu, sehingga staf admin manusia dapat melanjutkan percakapan tanpa disela bot.
11.  Klik butang **Simpan**, lalu nyalakan suis togol toggle switch pada kartu hingga berstatus **Aktif**.

---

## 3. menetapkan Panggil Admin saat ejen Tidak boleh Menjawab (Fallback Handover)

Gunakan ciri ini untuk mencegah pelanggan menunggu tanpa kepastian ketika AI menghadapi pertanyaan di luar pengetahuannya:

1.  Pada kartu **Panggil admin saat ejen tidak boleh menjawab**, klik butang **Atur**.
2.  borang tetapan fallback handover akan terbuka:

![borang Konfigurasi Fallback Handover](/images/agent-ai/handover-03-fallback.png)

1.  Lengkapi ruangan berikut:
2.  - **nombor Admin**: Kosongkan jika ingin menggunakan nombor admin yang sama dengan kartu _Panggil admin_, atau masukkan nombor khusus untuk eskalasi teknis.
3.  - **mesej untuk admin**: Tulis format pemberitahuan darurat (contoh: _"[PERINGATAN FALLBACK] ejen tidak boleh menjawab pertanyaan dari {phone}: {user_message}"_).
4.  - **mesej untuk pelanggan**: Kalimat permohonan maaf dan penjelas bahwa kendala sedang dikoordinasikan dengan tim terkait.
5.  - **Hentikan ejen sementara untuk pelanggan ini**: Aktifkan centang untuk menonaktifkan bot sementara waktu pada sembang tersebut.
6.  Klik butang **Simpan**, lalu aktifkan suis togol toggle switch pada kartu.

---

## 4. Menyetting Cadangan Handover di Tab Settings

Untuk memastikan setiap permintaan handover selalu memiliki penerima (bahkan jika nombor admin di kartu otomasi tidak aktif):

1.  Buka tab **Settings** di bar navigasi Agent AI.
2.  Gulir ke bawah hingga menemukan kartu **Notifikasi admin**.

![tetapan Cadangan Handover pada Tab Settings](/images/agent-ai/handover-04-settings-cadangan.png)

1.  Pada ruangan **nombor WhatsApp admin**, pastikan nombor telepon admin utama sudah terisi dengan benar (format kode negara tanpa +, misal `6281234567890`).
2.  Aktifkan suis togol toggle switch **Cadangan handover**:
3.  - Jika ada percakapan pelanggan yang memerlukan bantuan admin tetapi aturan spesifik tidak memiliki nombor penerima aktif, notifikasi otomatis dialihkan ke nombor WhatsApp admin utama ini.
4.  Klik butang biru **Simpan notifikasi**.
