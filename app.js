const express = require('express');
const protection = require('./middlewares/protection');
const iqcRoutes = require('./routes/iqcRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

protection(app);

app.use('/v1/iqc', iqcRoutes);

app.get('/', (req, res) => {
  res.json({ status: "online", version: "v1" });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Endpoint tidak ditemukan" });
});

app.listen(PORT, () => {
  console.log(`Server aktif di port ${PORT}`);
});
