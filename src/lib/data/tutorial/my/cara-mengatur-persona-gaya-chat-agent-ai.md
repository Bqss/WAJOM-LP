---
id: 21
slug: "cara-mengatur-persona-gaya-chat-agent-ai"
title: "Cara Menetapkan Persona & Gaya Percakapan Agent AI"
description: "Panduan membina identiti perniagaan, arahan tingkah laku AI (system prompt), pilihan bahasa, gaya percakapan semula jadi, dan mesej alu-aluan."
category: "Agent AI"
duration: "4 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-persona-gaya-chat-agent-ai/"
---

Tab **Persona** di Agent AI berfungsi untuk menetapkan identitas unik, karakter kepribadian (_brand voice_), dan batasan etika komunikasi asisten anda. Dengan konfigurasi persona yang tepat, Agent AI akan menyapa pelanggan seperti staf representatif perusahaan yang ramah, profesional, dan memahami batasan wewenangnya.

## Prasyarat

✅ Profil identitas bisnis dan gaya komunikasi merek (_brand tone_) sudah anda tentukan.

✅ Akun anda memiliki akses ke instance WhatsApp di portal Wajom.

---

## 1. menetapkan Identitas Bisnis

1.  Buka menu **Agent AI** di portal Wajom, lalu klik tab **Persona**.
2.  Pada bagian **01 Identitas**, isi parameter berikut:
3.  - **Nama Bisnis**: Masukkan nama merek atau toko yang akan diperkenalkan kepada pelanggan (contoh: `Toko Kopi Senja` atau `Wajom`).
4.  - **Nama Perusahaan**: Masukkan nama badan hukum resmi perusahaan anda (contoh: `PT Senja Makmur Abadi`).

![borang tetapan Identitas Bisnis](/images/agent-ai/persona-01-identitas.png)

---

## 2. Menyusun Instruksi Perilaku AI (System Prompt)

Pada bagian **02 Perilaku AI**, tuliskan arahan komprehensif seolah-olah anda sedang memberikan orientasi kerja kepada staf _customer service_ baru:

![Area Input Instruksi Perilaku AI dan Bahasa Balasan](/images/agent-ai/persona-02-perilaku.png)

### Elemen Penting dalam Perilaku AI:

1. **Peran & Karakter**: _Contoh:_ _"Kamu adalah asisten virtual ramah dan bersahabat bernama Senja dari Toko Kopi Senja. Tugasmu melayani pertanyaan seputar menu kopi, jam buka, dan rekomendasi minuman."_ 2. **Gaya Bahasa**: _Contoh:_ _"Gunakan bahasa Indonesia yang santai, hangat, dan sopan. Gunakan emoji yang relevan secukupnya (☕, 😊, 🙏) untuk menciptakan suasana akrab."_ 3. **Batasan & Hal yang Tidak Boleh Dilakukan (Do's & Don'ts)**: _Contoh:_ _"Jangan pernah menjanjikan diskon di luar promo resmi. Jika pelanggan menanyakan keluhan barang rusak atau komplain pengiriman, segera sarankan untuk terhubung dengan admin manusia."_

### Menentukan Bahasa Balasan

Pilih preferensi bahasa utama yang digunakan bot: - **Bahasa Indonesia**: ejen selalu menjawab dalam bahasa Indonesia baku atau santai sesuai arahan perilaku. - **Otomatis (ikuti bahasa pelanggan)**: ejen mendeteksi bahasa yang digunakan pelanggan (Indonesia, Inggris, Melayu, dll.) lalu membalas dalam bahasa yang sama. - **Bahasa Inggris**: ejen membalas dalam bahasa Inggris internasional. - **Bahasa Melayu**: ejen membalas dalam bahasa Melayu.

---

## 3. Mengaktifkan Gaya Bicara Manusia dan mesej Sambutan

Gulir ke bagian bawah tab Persona:

![tetapan Gaya Bicara Seperti Manusia dan mesej Sambutan](/images/agent-ai/persona-03-sambutan.png)

### Gaya Bicara Seperti Manusia

- Aktifkan toggle switch **Gaya bicara seperti manusia**. - Saat aktif, model AI akan menghindari frasa klise yang kaku layaknya robot dan menggunakan struktur kalimat yang lebih fleksibel, luwes, dan hangat seperti interaksi antarmanusia.

### mesej Sambutan (Welcome Message)

- Pada bagian **03 mesej sambutan**, masukkan teks pembuka yang otomatis dikirimkan ke pelanggan saat mereka pertama kali menyapa nombor WhatsApp anda. - Kosongkan ruangan ini jika anda lebih memilih AI langsung merespons isi mesej pertama pelanggan secara kontekstual tanpa mesej pembuka terpisah.

---

## 4. Memeriksa Panel Pratinjau dan Menyimpan Perubahan

1.  Perhatikan panel **Pratinjau** di sisi kanan layar untuk melihat ringkasan identitas dan karakter yang baru saja anda susun.

![Panel Pratinjau Persona](/images/agent-ai/persona-04-pratinjau.png)

1.  Jika seluruh tetapan persona sudah sesuai, klik butang biru **Simpan** pada bilah bawah untuk menerapkan konfigurasi.
