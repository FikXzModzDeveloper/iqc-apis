const express = require('express');
const protection = require('./middlewares/protection');
const iqcRoutes = require('./routes/iqcRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

protection(app);

app.use('/iqc', iqcRoutes);

app.get('/', (req, res) => {
  res.json({ status: "online", author: "Fikkk" });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Ngapain bjirr" });
});

app.listen(PORT, () => {
  console.log(`Server aktif di port ${PORT}`);
});

