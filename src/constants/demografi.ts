// constants/demografi.js

export const pendudukByGender = {
  male: 7927,
  female: 7736,
  total: 15663,
  totalKK: 3539,
};

export const pendudukByDusun = {
  kk: {
    I: 470,
    II: 1038,
    III: 749,
    IV: 1611,
    V: 917,
  },
  data: [
    { dusun: "I", male: 1739, female: 1852, total: 3591 },
    { dusun: "II", male: 1346, female: 1363, total: 2709 },
    { dusun: "III", male: 1632, female: 1345, total: 2977 },
    { dusun: "IV", male: 1559, female: 1440, total: 2999 },
    { dusun: "V", male: 1348, female: 1039, total: 3387 },
  ],
};

export const mutasiPenduduk = [
  { jenis: "Pindah antar Kecamatan", male: 29, female: 22, jumlah: 51 },
  { jenis: "Datang", male: 22, female: 26, jumlah: 48 },
  { jenis: "Lahir", male: 73, female: 69, jumlah: 142 },
  { jenis: "Mati", male: 15, female: 26, jumlah: 41 },
  { jenis: "Mati < 5 Tahun", male: 0, female: 0, jumlah: 0 },
  { jenis: "Mati > 5 Tahun", male: 15, female: 26, jumlah: 41 },
];

export const strukturPenduduk = [
  { umur: "0 - 4 Tahun", male: 803, female: 566, total: 1369 },
  { umur: "5 - 9 Tahun", male: 682, female: 553, total: 1235 },
  { umur: "10 - 14 Tahun", male: 684, female: 583, total: 1267 },
  { umur: "15 - 19 Tahun", male: 706, female: 458, total: 1164 },
  { umur: "20 - 24 Tahun", male: 625, female: 663, total: 1288 },
  { umur: "25 - 29 Tahun", male: 496, female: 554, total: 1050 },
  { umur: "30 - 34 Tahun", male: 558, female: 459, total: 1017 },
  { umur: "35 - 39 Tahun", male: 486, female: 570, total: 1056 },
  { umur: "40 - 44 Tahun", male: 442, female: 532, total: 974 },
  { umur: "45 - 49 Tahun", male: 619, female: 716, total: 1335 },
  { umur: "50 - 54 Tahun", male: 652, female: 439, total: 1091 },
  { umur: "55 - 59 Tahun", male: 368, female: 442, total: 810 },
  { umur: "60 - 64 Tahun", male: 315, female: 418, total: 733 },
  { umur: "65 - 69 Tahun", male: 322, female: 340, total: 662 },
  { umur: "70 - 75 Tahun", male: 315, female: 297, total: 612 },
];

export const pendidikanPenduduk = [
  { pendidikan: "Belum Sekolah", jumlah: 1236 },
  { pendidikan: "Tidak Tamat SD", jumlah: 466 },
  { pendidikan: "Tamat SD/Sederajat", jumlah: 1465 },
  { pendidikan: "Tamat SLTP/Sederajat", jumlah: 4280 },
  { pendidikan: "Tamat SLTA/Sederajat", jumlah: 5160 },
  { pendidikan: "Tamat Akademi/Sederajat", jumlah: 958 },
  { pendidikan: "Tamat Perguruan Tinggi/Sederajat", jumlah: 1230 },
  { pendidikan: "Buta Huruf", jumlah: 185 },
];

export const mataPencarian = [
  { nama: "Ibu Rumah Tangga", jumlah: 2175 },
  { nama: "Petani", jumlah: 380 },
  { nama: "Buruh Tani", jumlah: 570 },
  { nama: "Pertambangan / Karyawan", jumlah: 783 },
  { nama: "Pedagang", jumlah: 305 },
  { nama: "Peternak", jumlah: 395 },
  { nama: "PNS / TNI / POLRI", jumlah: 440 },
  { nama: "Sopir", jumlah: 841 },
  { nama: "Buruh Bangunan", jumlah: 688 },
  { nama: "Bengkel", jumlah: 681 },
  { nama: "Serabutan", jumlah: 2203 },
  { nama: "Tenaga Honorer", jumlah: 841 },
  { nama: "Belum Bekerja", jumlah: 2211 },
  { nama: "Tidak Bekerja", jumlah: 2467 },
];

export const kepemilikanTernak = {
  ayamItik: 2138,
  kambing: 179,
  sapi: 155,
  kerbau: 50,
  lainnya: 87,
};

export const luasWilayah = {
  I: 3341,
  II: 2470,
  III: 2777,
  IV: 2447,
  V: 3067,
};
