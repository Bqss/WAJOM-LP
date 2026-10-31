---
id: 26
slug: "cara-mengatur-custom-action-agent-ai"
title: "Cara Membina Tindakan Khas REST API & Webhook (Custom Action)"
description: "Panduan menghubungkan Agent AI ke pelayan luaran menerusi REST API dan webhook untuk carian data pesanan atau penghantaran data masa nyata."
category: "Agent AI"
duration: "5 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-custom-action-agent-ai/"
---

Ciri **Tindakan Khas** (*Custom Action*) di Agent AI membolehkan pembantu maya anda bertindak lebih daripada sekadar membalas teks. Agent AI boleh mengeksekusi panggilan web (*API call*) ke pelayan atau sistem aplikasi anda semasa perbualan berlangsung—contohnya untuk menyemak status nombor penjejakan pesanan (tracking resit), menyemak ketersediaan bilik hotel, atau menghantar data prospek baharu ke sistem CRM dalaman.

Panduan ini memberikan tutorial langkah demi langkah berserta contoh sebenar pelaksanaan panggilan API untuk semakan status pesanan.

## Prasyarat

> **Tip**: Endpoint REST API atau webhook anda aktif dan boleh diakses secara umum menerusi protokol `https://`.

> **Tip**: Dokumentasi parameter URL, format pengepala (header), dan format respons JSON daripada API anda sudah siap.

> **Tip**: Akaun anda mempunyai akses ke instance WhatsApp di portal Wajom ([portal.wajom.co](https://portal.wajom.co)).

---

## 1. Membuka Menu Alat dan Butang Tambah Tindakan

1. Buka menu **Agent AI** di portal Wajom ([portal.wajom.co](https://portal.wajom.co)).
2. Pada bar navigasi atas, klik tab **Tools**.
3. Di kad bahagian atas **Tindakan khas**, perhatikan butang biru **+ Tambah tindakan** yang ditandakan dengan kotak merah:

![Kad Tindakan Khas dan Butang Tambah Tindakan pada Menu Alat](/images/agent-ai/custom-action-01-overview.png)

4. Klik butang **+ Tambah tindakan** untuk membuka tetingkap modal konfigurasi.

---

## 2. Mengisi Maklumat Asas Tindakan (Nama, Penerangan, dan Jenis)

Pada bahagian atas borang modal:

![Mengisi Maklumat Asas Nama Tindakan, Penerangan, dan Jenis](/images/agent-ai/custom-action-02-info.png)

1. **Nama Tindakan**:
   Masukkan nama fungsi teknikal yang ringkas menggunakan huruf kecil dan garis bawah (contoh: `semak_status_pesanan`).
2. **Bila Agent Menggunakan Tindakan Ini (Prompt Pemicu)**:
   Terangkan dalam ayat biasa mengenai situasi bila tindakan ini perlu dipanggil:
   *Contoh:*
   > *"Gunakan apabila pelanggan bertanya status pesanan, pakej, atau nombor penjejakan pos. Perlukan nombor pesanan daripada pelanggan."*

   > **Tip**: Model AI membaca ayat penerangan ini semasa memproses setiap mesej masuk untuk menilai sama ada niat pelanggan memerlukan panggilan API ini.
3. **Jenis Tindakan**:
   * **Ambil data (API)**: Agent mengambil maklumat daripada pelayan anda, kemudian memproses data JSON yang diperoleh untuk diringkaskan ke dalam balasan mesej pelanggan.
   * **Hantar data (webhook)**: Agent menghantar data daripada perbualan pelanggan ke sistem luaran (contohnya mencipta pesanan baharu atau menyimpan tiket aduan).

---

## 3. Menentukan Kaedah HTTP dan Alamat URL Endpoint

Pada bahagian konfigurasi sambungan:

![Menentukan Kaedah HTTP dan Alamat URL Templat](/images/agent-ai/custom-action-03-url.png)

1. **Kaedah (Method)**: Pilih kaedah HTTP yang sesuai: `GET`, `POST`, `PUT`, atau `DELETE`.
2. **Alamat (URL)**: Masukkan endpoint URL lengkap dimulakan dengan `https://`. Anda boleh menyisipkan pemboleh ubah dinamik menggunakan kurungan berganda `{{nama_input}}`:
   ```text
   https://api.kedaisaya.com/orders/{{order_id}}
   ```

> **Alert**: Demi keselamatan, alamat tempatan atau IP rangkaian peribadi (seperti `localhost` atau `192.168.x.x`) disekat secara automatik oleh sistem Wajom.

---

## 4. Menentukan Parameter Input yang Dikumpul dan Menyimpan Tindakan

Pada bahagian bawah borang modal:

![Menentukan Input yang Dikumpul Agent dan Butang Simpan](/images/agent-ai/custom-action-04-params.png)

1. **Header (Pilihan)**:
   Klik **+ Tambah header** jika API anda memerlukan pengesahan kunci API (*API Key*) atau Bearer token (contohnya `Authorization`: `Bearer token_rahsia_api_anda`).
2. **Input yang Dikumpul Agent (Input Parameters)**:
   Klik **+ Tambah isian** untuk menentukan data apa yang wajib ditanya atau diambil oleh Agent AI daripada mesej pelanggan sebelum memanggil API:
   * **Nama Isian**: Mesti sama tepat dengan placeholder URL (contoh: `order_id`).
   * **Jenis Data**: Pilih jenis data (`string`, `number`, dll).
   * **Penerangan untuk Agent**: *"Nombor pesanan yang diberikan oleh pembeli (contoh: ORD-12345)"*.
   * Jika pelanggan belum menyebut nombor pesanan dalam perbualan, Agent AI akan secara automatik bertanyakan nombor tersebut terlebih dahulu sebelum memicu panggilan API.
3. **Aktifkan Tindakan**:
   Pastikan kotak pilihan **Aktifkan tindakan ini** ditandakan.
4. Klik butang biru **Simpan** di sudut kanan bawah modal.

---

## 5. Pengujian Pelaksanaan Tindakan di Playground

1. Buka tab [Uji Kaji (Playground)](/tutorials/simulasi-playground-agent-ai).
2. Tulis mesej simulasi sebagai pembeli: *"Salam, tolong semak status pesanan saya dengan nombor order ORD-9921"*.
3. Agent AI akan secara automatik mengesan keperluan tindakan, mengekstrak nombor `ORD-9921`, memanggil API anda, dan meringkaskan respons JSON ke dalam mesej balasan yang kemas dan mudah dibaca.
