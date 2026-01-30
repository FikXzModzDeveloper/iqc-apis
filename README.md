<div align="center">
  <img src="https://socialify.git.ci/Hanzz98/iqc-canvas/image?description=1&descriptionEditable=Express%20API%20WhatsApp%20Chat%20Generator&font=Inter&language=1&name=1&owner=1&pattern=Circuit%20Board&theme=Dark" alt="iqc-canvas-api" width="640" height="320" />

  <h1>📱 WhatsApp Chat Generator API</h1>
  <p>Express.js API Ipong quoted Generator.</p>

  <p>
    <img src="https://img.shields.io/badge/Node.js-23-green?style=for-the-badge&logo=node.js" alt="Node Version">
    <img src="https://img.shields.io/badge/Express-API-blue?style=for-the-badge&logo=express" alt="Express">
    <img src="https://img.shields.io/badge/Author-Fik%20Projects-orange?style=for-the-badge" alt="Author">
    <img src="https://img.shields.io/badge/License-MIT-red?style=for-the-badge" alt="License">
  </p>
</div>

---

## 🛠️ Tech Stack & Credits

* **Core Library:** [iqc-canvas](https://www.npmjs.com/package/iqc-canvas) by **Hann Universe**
* **API Engine:** Express.js 4.21.x
* **Runtime:** Node.js 23
* **Security:** Helmet, CORS, Rate Limiter, & Speed Limiter
* **Creator:** **Fik Projects**

---

## 📁 Folder Structure

Proyek ini dibangun dengan struktur modular yang bersih tanpa sub-folder `src` untuk aksesibilitas cepat:

```text
.
├── controllers/      # controllers logic
├── middlewares/      # Middeware
├── routes/           # Definisi endpoint API
├── app.js            # Entry point filss
├── Dockerfile        # opsional jika menggunakan docker
└── package.json      # Dependensi & script project
```
🚀 API Endpoints
Generate Chat Image
GET /v1/iqc
Parameters
| Parameter | Type | Required | Description | Default |
|---|---|---|---|---|
| teks | String | Yes | Isi pesan chat WhatsApp | - |
| time | String | No | Format jam HH:mm (contoh: 23:59) | WIB (Asia/Jakarta) |
| battery | Number | No | Angka persentase (0-100) | 100 |
🛡️ Protection Features
 * Rate Limiting: Maksimal 50 request per 15 menit per IP.
 * Speed Limiting: Memperlambat respon jika IP melakukan request terlalu cepat.
 * Strict Validation: Parameter time harus sesuai regex HH:mm dan battery harus angka 0-100.
 * WIB Synchronized: Waktu otomatis diatur ke zona Asia/Jakarta jika tidak ada parameter time
