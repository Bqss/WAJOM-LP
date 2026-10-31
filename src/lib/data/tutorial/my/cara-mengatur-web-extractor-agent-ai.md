---
id: 27
slug: "cara-mengatur-web-extractor-agent-ai"
title: "Cara Menggunakan Pengekstrakan Web Masa Nyata (Web Extractor)"
description: "Panduan membolehkan Agent AI membaca kandungan laman web luaran (web scraping) secara langsung untuk maklumat FAQ, harga, atau stok terkini."
category: "Agent AI"
duration: "5 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-web-extractor-agent-ai/"
---

Ciri **Web Extractor** di Agent AI membolehkan pembantu maya anda membaca kandungan laman web luaran secara langsung (*real-time scraping*) semasa perbualan WhatsApp sedang berlangsung. Ciri ini amat berguna jika maklumat perniagaan anda (seperti senarai harga, ketersediaan stok, jadual pelepasan, atau artikel FAQ) kerap dikemas kini di laman web rasmi syarikat, membolehkan anda tidak perlu mengemas kini pangkalan pengetahuan secara manual satu persatu.

Panduan ini membimbing anda menghubungkan Web Extractor langkah demi langkah dengan kajian kes contoh pengambilan data halaman FAQ daripada `https://berangkatinumrah.id/faqs`.

## Prasyarat

> **Tip**: URL laman web sasaran boleh diakses secara umum tanpa captcha atau sekatan perlindungan login yang ketat.

> **Tip**: Akaun anda mempunyai akses ke instance WhatsApp di portal Wajom ([portal.wajom.co](https://portal.wajom.co)).

---

## 1. Memilih Web Extractor pada Menu Integrasi Tool AI

1. Buka menu **Agent AI** di portal Wajom ([portal.wajom.co](https://portal.wajom.co)), kemudian klik tab **Tools**.
2. Pada kad bahagian bawah **Integrasi**, klik butang **Tambah Integrasi**.
3. Di tetingkap modal pemilihan jenis penyambung data, pilih kad **Scraper - Web Extractor** yang ditandakan dengan kotak merah:

![Memilih Scraper Web Extractor pada Modal Connector](/images/agent-ai/web-extractor-01-pilih.png)

---

## 2. Mengkonfigurasi Tetapan URL & Parameter (Langkah 1)

Modal konfigurasi Web Extractor akan dibuka pada langkah **1 Setup URL & Parameters**:

![Borang Tetapan URL dan Parameter Web Extractor](/images/agent-ai/web-extractor-02-modal.png)

Lengkapkan maklumat berikut:

1. **Nama Integrasi**:
   Beri nama integrasi yang mudah dikenali, contohnya: `FAQ Berangkatin Umrah`.
2. **Penerangan untuk AI**:
   Terangkan arahan bila AI perlu memanggil alat ini:
   *Contoh:*
   > *"Panggil alat ini apabila bakal jemaah bertanya soalan FAQ lazim mengenai syarat umrah, pembuatan pasport, vaksinasi, bayaran baki, atau kemudahan hotel dari laman web Berangkatin Umrah."*
3. **Allowed Hosts (Domain yang Dibenarkan)**:
   Atas faktor keselamatan rangkaian dan mengelakkan bot mengakses domain lain, daftarkan domain laman web rasmi anda (tanpa `https://`):
   ```text
   berangkatinumrah.id
   ```
4. **Mod URL Laman Web & Templat URL Sasaran**:
   * Pilih **URL Tetap (Static Page)** kerana kita menyasarkan satu halaman FAQ tetap.
     *(Pilih mod dinamik jika menggunakan parameter slug `{{slug}}`, contohnya untuk katalog produk `https://kedaisaya.com/produk/{{slug}}`).*
   * Masukkan pautan penuh pada **URL Template Sasaran**:
     ```text
     https://berangkatinumrah.id/faqs
     ```
5. **Timeout & Cache TTL**:
   * **Timeout (ms)**: `10000` (10 saat had masa pengambilan data daripada pelayan laman web).
   * **Cache TTL (saat)**: `60` saat (menyimpan hasil bacaan web dalam cache sementara supaya bot tidak membebani pelayan laman web anda apabila banyak mesej masuk serentak).
6. Klik butang hijau **Lanjut ke JSON Mapper →**.

---

## 3. Langkah 2: JSON Mapper & AI Scrape

Pada peringkat kedua, anda menentukan bahagian elemen HTML yang akan diekstrak dan mengesahkan hasilnya langkah demi langkah:

### A. Fetch Halaman Sampel

Memastikan URL sasaran boleh diakses dan dimuatkan oleh pelayan sistem Wajom:

![Fetch Halaman Sampel](/images/agent-ai/web-extractor-03-fetch-sample.png)

1. Semak URL sampel sasaran (`https://berangkatinumrah.id/faqs`).
2. Klik butang **Fetch Halaman** yang ditandakan kotak merah.
3. Sistem akan memuatkan kod HTML halaman sasaran dan mengesahkan struktur dokumen.

---

### B. Analisis Auto-AI Mapping

Memanfaatkan kecerdasan buatan untuk mengesan kontena dan menyusun pemilih (*selector*) secara automatik:

![Analisis Auto-AI Mapping](/images/agent-ai/web-extractor-04-auto-ai.png)

1. Masukkan selector kontena pembungkus senarai soal jawab pada ruangan **Root/Item Selector** (contoh: `.faq-item` atau `#faqs`).
2. Berikan petunjuk pada ruangan **Hint tambahan untuk AI** (contoh: *"Ambil senarai soalan dan jawapan FAQ umrah"*).
3. Klik butang biru **Analisa HTML → Generate Mapping JSON** yang ditandakan kotak merah.

---

### C. JSON Mapper (Manual / Edit)

Meneliti atau menyunting pasangan medan hasil pengekstrakan data:

![JSON Mapper Manual dan Edit](/images/agent-ai/web-extractor-05-json-mapper.png)

1. Pilih jenis struktur data: **Array List of Objects** (kerana halaman FAQ memuatkan senarai soalan berulang).
2. Periksa baris pemetaan medan (field mapping):
   * **JSON Key:** Nama data untuk AI (contoh: `pertanyaan` dan `jawaban`).
   * **CSS Selector:** Selector elemen HTML spesifik (contoh: `h4.faq-question` dan `div.faq-answer`).
   * **Atribut:** Jenis teks yang diambil (`Text`).
3. Klik butang **+ Tambah Field Manual** jika ingin menambah lajur pengekstrakan tambahan.

---

### D. Pratonton Output JSON

Sebelum menyimpan alat, uji pengekstrakan data untuk mengesahkan ketepatan bacaan:

![Pratonton Output JSON](/images/agent-ai/web-extractor-06-preview-json.png)

1. Klik butang **Jalankan Mapper Test** yang ditandakan kotak merah.
2. Periksa hasil data JSON pada kotak pratonton untuk memastikan teks soalan dan jawapan terbaca dengan tepat:
   ```json
   [
     {
       "pertanyaan": "Berapa lama masa berlaku paspor untuk daftar umrah?",
       "jawaban": "Paspor wajib berlaku minimal 7 bulan sebelum tanggal keberangkatan."
     },
     {
       "pertanyaan": "Apakah ada syarat vaksinasi khusus?",
       "jawaban": "Wajib vaksin Meningitis dan vaksin Covid-19 dosis lengkap."
     }
   ]
   ```
3. Jika data sudah tepat, klik butang hijau **Tambah Integrasi** di sudut kanan bawah untuk menyimpan alat.

---

## 4. Pengujian Respons Agent AI di Playground

Selepas integrasi disimpan:

1. Buka tab [Uji Kaji (Playground)](/tutorials/simulasi-playground-agent-ai).
2. Hantar mesej ujian sebagai bakal jemaah:
   > *"Assalamu'alaikum, kalau pasport saya tempoh sah tinggal 5 bulan adakah boleh daftar umrah?"*
3. Agent AI akan secara automatik memanggil Web Extractor, membaca data masa nyata dari `https://berangkatinumrah.id/faqs`, dan menyusun jawapan yang tepat:
   > *"Wa'alaikumsalam Warahmatullahi Wabarakatuh Tuan/Puan. Berdasarkan syarat rasmi Berangkatin Umrah, tempoh sah laku pasport wajib sekurang-kurangnya **7 bulan** sebelum tarikh penerbangan. Jika kini berbaki 5 bulan, kami sarankan membuat pembaharuan pasport terlebih dahulu ya. Ada perkara lain yang boleh kami bantu? 😊"*
