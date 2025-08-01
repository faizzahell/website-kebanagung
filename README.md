# 🌾 Website Desa Keban Agung

Repositori ini berisi source code untuk website resmi **Desa Keban Agung**, yang dibangun menggunakan React dan Tailwind CSS.

---

## 📦 Persiapan Instalasi

Berikut langkah-langkah untuk menjalankan website secara lokal di komputer berbasis **Windows**:

### 1. 📥 Download & Install Node.js

* Unduh dari: [https://nodejs.org](https://nodejs.org)
* Pilih versi LTS (Long-Term Support)
* Setelah instalasi, pastikan `node` dan `npm` dikenali:

  ```bash
  node -v
  npm -v
  ```

### 2. ⚙️ Atur Environment PATH (Jika Diperlukan)

* Buka **System Properties** → tab **Advanced** → **Environment Variables**
* Tambahkan path berikut ke `PATH`:

  ```
  C:\Program Files\nodejs\
  ```

### 3. 📦 Install Yarn (Melalui npm)

```bash
npm install -g yarn
```

### 4. 🧰 Install Git

* Unduh dari: [https://git-scm.com/downloads](https://git-scm.com/downloads)
* Setelah terinstal, cek dengan:

  ```bash
  git --version
  ```

---

## 🚀 Menjalankan Project

### 5. 📁 Clone Repository dari GitHub

```bash
git clone https://github.com/faizzahell/website-kebanagung.git
cd website-kebanagung
```

### 6. 📂 Unduh Folder `public`

* Link Google Drive: [Download Folder Public](https://drive.google.com/drive/folders/1Ldd6eXxyEQja8zZd5q4Sv4NoevhBr3Rg?usp=sharing)
* Ekstrak dan **pindahkan folder `public` ke dalam root folder project** (ganti jika sudah ada).

### 7. 💻 Buka Proyek di Git Bash / Terminal

Pastikan berada di direktori proyek:

```bash
cd website-kebanagung
```

### 8. 📥 Install Dependencies

```bash
yarn install
```

### 9. 🧪 Jalankan dalam Mode Development

```bash
yarn dev
```

### 10. 🌐 Buka Website di Browser

Buka:

```
http://localhost:5173
```

---

## 💡 Catatan

* Proyek ini dibangun menggunakan **React + Vite** dengan Tailwind CSS
* Pastikan koneksi internet stabil untuk mengunduh dependency saat pertama kali `yarn install`

---

## 🤝 Kontribusi

Jika ingin berkontribusi pada proyek ini, silakan fork repository dan buat Pull Request.

---

## 📄 Lisensi

MIT License © 2025 [Faizahel Joasa Ariesta](https://github.com/faizzahell)
