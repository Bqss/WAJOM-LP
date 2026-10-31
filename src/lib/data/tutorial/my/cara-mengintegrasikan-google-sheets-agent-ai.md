---
id: 28
slug: "cara-mengintegrasikan-google-sheets-agent-ai"
title: "Cara Mengintegrasikan Google Sheets dengan Agent AI"
description: "Panduan menyambungkan Google Sheets sebagai alat AI untuk operasi Lookup, Append baris baharu, Update status, dan Delete rekod secara automatik."
category: "Agent AI"
duration: "6 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengintegrasikan-google-sheets-agent-ai/"
---

Integrasi **Penyambung Google Sheets** (*Google Sheets Connector*) membolehkan Agent AI berinteraksi secara terus dengan spreadsheet perniagaan anda dalam masa nyata. Pembantu maya boleh membuat carian (*lookup/read*), merekod data baharu (*append*), mengemas kini baris (*update*), dan memadamkan rekod (*delete*) secara automatik semasa membalas mesej pelanggan di WhatsApp.

## Prasyarat

> **Tip**: Akaun Google aktif yang mempunyai fail Google Spreadsheet.

> **Tip**: Spreadsheet sudah mempunyai baris tajuk lajur pada baris pertama (*header row*).

> **Tip**: Akaun anda mempunyai akses ke instance WhatsApp di portal Wajom ([portal.wajom.co](https://portal.wajom.co)).

---

## 1. Memilih Google Sheets pada Menu Integrasi

Sebelum membina alat operasi spreadsheet, buka modal penyambung Google Sheets:

1. Buka menu **Agent AI** di portal Wajom ([portal.wajom.co](https://portal.wajom.co)), kemudian klik tab **Tools**.
2. Pada bahagian bawah kad **Integrasi**, klik butang **Tambah Integrasi**.
3. Di tetingkap pilihan penyambung, pilih kad **Spreadsheet Google Sheets** yang ditandakan kotak merah:

![Pilihan Penyambung Spreadsheet Google Sheets](/images/agent-ai/gsheet-01-pilih.png)

---

## 2. Menyambungkan Akaun Google dan Memilih Jenis Operasi

Di tetingkap borang **Tambah Google Sheets**, perhatikan bahagian **1 Sambungan & Operasi Tool**:

![Menyambungkan Akaun Google dan Memilih Jenis Operasi Tool](/images/agent-ai/gsheet-02-koneksi-operasi.png)

### Menyambungkan Akaun Google (Google OAuth)

1. Semak bahagian **Akaun Google**. Jika belum ada akaun disambungkan, klik butang biru **Sambungkan Google Sheets**.
2. Tetingkap pengesahan Google OAuth akan dibuka. Log masuk dengan akaun Google anda dan berikan kebenaran akses (*permission*) supaya Wajom boleh mengakses Google Drive & Spreadsheet anda.
3. Selepas berjaya disambungkan, emel Google anda akan dipaparkan sebagai akaun aktif.

### Memilih Jenis Operasi Tool

Pilih jenis operasi yang ingin dijalankan bot pada dropdown **Jenis Operasi Tool**:

* **Lookup / Search**: Mencari dan membaca data baris spreadsheet (contohnya semak baki kuota, stok, atau harga).
* **Append**: Menambah baris data baharu ke kedudukan paling bawah spreadsheet (contohnya borang pesanan atau pendaftaran baharu).
* **Update**: Mengemas kini lajur data pada baris yang sepadan (contohnya menukar status pembayaran).
* **Delete**: Memadam data baris berdasarkan parameter carian unik (contohnya pembatalan tempahan).

Lengkapkan **Nama Integrasi** (contoh: `Semak Kuota Umrah`) dan **Penerangan untuk AI** yang menjelaskan situasi bila bot perlu memanggil alat ini.

---

## 3. Menambah Integrasi Carian (Jenis Operasi: Lookup / Search)

Operasi **Lookup / Search** digunakan apabila AI perlu membaca atau mencari maklumat data daripada spreadsheet:

1. Pada dropdown **Jenis Operasi Tool**, pilih **Lookup / Search**.
2. **Parameter Input AI**: Klik butang **Tambah Parameter** untuk menentukan data apa yang wajib dikumpulkan AI daripada perbualan pelanggan (contohnya parameter `nama_pakej` dan `bulan_pelepasan`).
3. **Pemetaan Lajur & Syarat Penapis**: Pasangkan parameter input ke lajur spreadsheet dan tentukan syarat penapis carian (*Where Clause*):

![Menambah Parameter Input AI dan Pemetaan Lajur Penapis Lookup](/images/agent-ai/gsheet-03-operasi-lookup.png)

* Lajur `Pakej` sama dengan parameter `nama_pakej`.
* Lajur `Bulan` sama dengan parameter `bulan_pelepasan`.

---

## 4. Menentukan Lajur Hasil Lookup (Output Data ke AI)

Pada bahagian **4 Lajur Hasil Lookup (Output Data ke AI)**, tentukan lajur data spreadsheet mana yang diambil dan dikembalikan kepada AI untuk dijawab kepada pelanggan:

![Menentukan Lajur Hasil Lookup Output Data ke AI](/images/agent-ai/gsheet-06-kolom-hasil.png)

1. Klik butang **+ Hasil** yang ditandakan kotak merah.
2. Tambahkan lajur keluaran yang diperlukan:
   * `baki_seat` (Lajur spreadsheet: `Baki_Seat`, jenis: Nombor).
   * `harga` (Lajur spreadsheet: `Harga`, jenis: Teks/Nombor).
   * `status_pendaftaran` (Lajur spreadsheet: `Status`, jenis: Teks).
3. Model AI akan membaca nilai daripada lajur-lajur ini lalu menyusun ayat balasan yang mesra dan kemas kepada pelanggan WhatsApp.
4. Klik butang biru **Tambah Integrasi** untuk menyimpan alat Lookup.

---

## 5. Menambah Operasi Append (Perekodan Data Baharu)

Operasi **Append** digunakan untuk menambah baris data baharu ke spreadsheet secara automatik apabila pelanggan melengkapkan pendaftaran, tempahan, atau pengisian borang via sembang WhatsApp:

![Menambah Operasi Append pada Google Sheets](/images/agent-ai/gsheet-04-operasi-append.png)

1. **Pilih Jenis Operasi Append**:
   Buka borang **Tambah Google Sheets**, kemudian pada dropdown **Jenis Operasi Tool**, pilih pilihan **Append**.
2. **Tentukan Nama Integrasi dan Penerangan**:
   * **Nama Integrasi:** `Rekod Pendaftaran Jemaah`
   * **Function ID:** `daftar_jemaah`
   * **Penerangan untuk AI:** *"Panggil alat ini selepas bakal jemaah memberikan data lengkap (nama, nombor WA, pakej, dan bilangan orang) untuk disimpan ke spreadsheet."*
3. **Daftarkan Parameter Input AI**:
   Klik **Tambah Parameter** untuk setiap data yang mesti diambil AI daripada perbualan pelanggan:
   * `nama_penuh` (jenis: Teks)
   * `nombor_wa` (jenis: Teks)
   * `pakej_pilihan` (jenis: Teks)
   * `bilangan_jemaah` (jenis: Nombor)
4. **Pemetaan Lajur Spreadsheet**:
   Pasangkan setiap parameter input AI ke lajur spreadsheet yang sepadan (Lajur A, B, C, D) pada jadual pemetaan baris. AI akan secara automatik menambah data ini di baris paling bawah spreadsheet.
5. **Simpan Integrasi**:
   Klik butang **Tambah Integrasi** untuk mengaktifkan alat append.

---

## 6. Menambah Operasi Delete (Pemadaman Baris Data)

Operasi **Delete** digunakan apabila data baris di spreadsheet perlu dipadam secara automatik berdasarkan syarat tertentu (contohnya pembatalan tempahan atau nombor yang meminta berhenti melanggan):

![Menambah Operasi Delete pada Google Sheets](/images/agent-ai/gsheet-05-operasi-delete.png)

1. **Pilih Jenis Operasi Delete**:
   Buka borang **Tambah Google Sheets**, kemudian pada dropdown **Jenis Operasi Tool**, pilih pilihan **Delete**.
2. **Tentukan Nama Integrasi dan Penerangan**:
   * **Nama Integrasi:** `Batal Tempahan Jemaah`
   * **Function ID:** `batal_tempahan`
   * **Penerangan untuk AI:** *"Panggil alat ini apabila jemaah menyatakan mahu membatalkan tempahan dengan menyebutkan nombor pesanan atau nombor WhatsApp berdaftar."*
3. **Daftarkan Parameter Kunci Carian**:
   Klik **Tambah Parameter** dan daftarkan parameter unik sebagai rujukan baris yang akan dipadam:
   * `nombor_wa` (jenis: Teks) atau `booking_id` (jenis: Teks).
4. **Tentukan Syarat Baris yang Dipadam (Filter Clause)**:
   Klik butang **Kunci** dan padankan lajur spreadsheet dengan parameter input carian:
   * Lajur `Nombor_WA` sama tepat dengan parameter `nombor_wa`.
5. **Simpan Integrasi**:
   Klik butang **Tambah Integrasi** untuk mengaktifkan alat delete.

---

## 7. Menguji Pelaksanaan Alat pada Perbualan WhatsApp / Playground

Selepas integrasi disimpan dan statusnya aktif:

1. Buka tab [Uji Kaji (Playground)](/tutorials/simulasi-playground-agent-ai).
2. Hantar mesej pengujian:
   > *"Assalamu'alaikum, nak semak baki seat untuk pakej Umrah Reguler bulan November 2026 ya"*
3. AI secara pintar akan:
   * Mengesan keperluan semakan data kuota.
   * Memanggil fungsi Google Sheets `Semak Kuota Umrah`.
   * Mengambil angka baki tempat duduk daripada baris spreadsheet anda secara masa nyata.
   * Membalas mesej bakal jemaah dengan data kuota yang tepat dan santun:
   > *"Wa'alaikumsalam Warahmatullahi Wabarakatuh Kak! Untuk pakej Umrah Reguler penerbangan bulan November 2026 ketika ini masih berbaki **8 seat** dengan status pendaftaran masih dibuka ya. Adakah berminat untuk kami bantu pendaftaran sekarang? 😊"*
