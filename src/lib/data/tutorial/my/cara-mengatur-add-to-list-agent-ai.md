---
id: 23
slug: "cara-mengatur-add-to-list-agent-ai"
title: "Cara Mengatur Masukkan ke Senarai Kenalan (Add to List)"
description: "Panduan mengkonfigurasi automasi penambahan nombor pelanggan ke pangkalan data senarai kenalan Wajom berdasarkan situasi perbualan."
category: "Agent AI"
duration: "3 minit"
date: "29 Oktober 2026"
author: "Wajom Academy"
url: "https://wajom.co/tutorial/cara-mengatur-add-to-list-agent-ai/"
---

ciri **Masukkan ke senarai kenalan** (_Add to list_) memungkinkan Agent AI secara cerdas mengelompokkan pelanggan ke dalam database kontak tertentu di Wajom secara otomatis saat kondisi perbualan terpenuhi. Misalnya, pelanggan yang baru bertanya dimasukkan ke list _"Prospek Dingin"_, sedangkan pelanggan yang menyelesaikan transaksi dimasukkan ke list _"Pelanggan Baru"_.

Database list yang terkumpul ini nantinya dapat digunakan untuk kampanye broadcast promosi, mesej sekuens (_drip campaign_), atau retargeting.

## Prasyarat

✅ anda sudah memiliki minimal satu **List Kontak** di menu **Database** > **Contact List** Wajom.

✅ Akun anda memiliki akses ke instance WhatsApp di portal Wajom.

---

## 1. Menemukan Kartu Masukkan ke senarai kenalan

1.  Buka menu **Agent AI** di portal Wajom, lalu klik tab **Automation**.
2.  Gulir ke bawah hingga menemukan kartu **Masukkan ke senarai kenalan** (_"ejen menyimpan pelanggan ke senarai kenalan tertentu saat syaratnya terpenuhi, misalnya selepas memesan"_).
3.  Klik butang **Atur** yang ditandai kotak merah pada kartu tersebut untuk membuka borang konfigurasi.

![Menemukan Kartu Masukkan ke senarai kenalan dan butang Atur](/images/agent-ai/add-list-01-card.png)

1.  Jika belum ada aturan, klik butang **+ Tambah aturan** untuk membuat aturan baru (_Aturan 1_).

---

## 2. Mengisi Syarat Kapan Pelanggan Dimasukkan

Pada ruangan **Kapan pelanggan dimasukkan**, tuliskan kondisi atau situasi perbualan menggunakan kalimat bahasa Indonesia biasa. Model AI akan membaca kalimat ini saat memproses sembang pelanggan untuk memutuskan kapan kontak harus dimasukkan ke daftar:

![ruangan Input Kapan Pelanggan Dimasukkan](/images/agent-ai/add-list-02-kapan.png)

_Contoh Kalimat Pemicu:_ - _"pelanggan sudah mengonfirmasi pemesanan dan mengirimkan bukti transfer"_ - _"pelanggan tertarik dengan produk kopi arabika dan meminta nombor rekening"_ - _"calon jamaah meminta jadwal keberangkatan umrah paket hemat"_

---

## 3. Memilih senarai kenalan Tujuan

Pada dropdown **senarai kenalan tujuan**, tentukan list database di Wajom yang akan menampung nombor kontak pelanggan tersebut:

![Pemilihan Dropdown senarai kenalan Tujuan](/images/agent-ai/add-list-03-tujuan.png)

1.  Klik menu dropdown dan pilih nama list anda (misalnya list `Pembeli Kopi`, `Leads Webinar`, atau `Customer VIP`).
2.  Setiap kali syarat pada langkah 2 terpenuhi, nombor WhatsApp pelanggan akan otomatis tersimpan ke dalam list ini.

---

## 4. Menambahkan Data Tambahan yang Disimpan (Opsional)

Jika anda ingin Agent AI mengekstrak data spesifik dari sembang pelanggan (seperti alamat pengiriman, nama pemesan, atau ukuran barang):

![Bagian Penambahan Data Tambahan Kontak](/images/agent-ai/add-list-04-extra.png)

1.  Klik butang **+ Tambah data**.
2.  Masukkan nama ruangan kustom (_custom field_ key) dan tentukan dari mana nilainya diambil (misal diambil dari mesej pelanggan atau intent AI).
3.  Informasi ini akan otomatis disimpan melengkapi profil kontak pelanggan di database Wajom.

---

## 5. menetapkan Opsi Pembaruan Kontak

Di bagian bawah borang, perhatikan kotak centang **Perbarui data jika kontak sudah ada**:

![Opsi Pembaruan Data Jika Kontak Sudah Ada](/images/agent-ai/add-list-05-checkbox.png)

-   **Centang**: Jika nombor pelanggan sudah pernah terdaftar di list, data profilnya akan diperbarui dengan informasi terbaru dari perbualan saat ini.
-   **Jangan Centang**: Jika nombor sudah ada di list, data lama akan dipertahankan dan bot tidak melakukan perubahan apa pun.

---

## 6. Menyimpan Konfigurasi dan menghidupkan Otomasi

1.  Klik butang biru **Simpan** pada bilah aksi di sudut kanan bawah borang.

![Menyimpan Konfigurasi Aturan Kontak](/images/agent-ai/add-list-06-save.png)

1.  selepas tersimpan, periksa kembali kartu **Masukkan ke senarai kenalan**.
2.  Nyalakan suis togol toggle switch di sisi kanan kartu hingga berwarna biru (**Aktif**).
3.  Mulai saat ini, setiap kali ada pelanggan yang memenuhi kriteria perbualan tersebut, nombor mereka akan langsung masuk ke database list target secara otomatis.
