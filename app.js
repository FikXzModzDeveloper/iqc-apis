const express = require('express');
const protection = require('./middlewares/protection');
const iqcRoutes = require('./routes/iqcRoutes');

const app = express();
const PORT = process.env.PORT || 8080;

protection(app);

app.use('/v1/iqc', iqcRoutes);

app.get('/', (req, res) => {
  res.send(" gak ada hatemel jir😛😂 ");
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "ngapain jir😂 | 404 bjir" });
});

app.listen(PORT, () => {
  console.log(`Server aktif di port ${PORT}`);
});
