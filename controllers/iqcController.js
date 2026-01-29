const { generateIQC } = require("iqc-canvas");

exports.generateImage = async (req, res) => {
  try {
    const { 
      teks, 
      time = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }).replace('.', ':'), 
      battery = '100'
    } = req.query;

    if (!teks) {
      return res.status(400).json({ success: false, message: "Parameter 'teks' wajib diisi" });
    }

    const result = await generateIQC(teks, time, {
      baterai: [true, battery],
      operator: true,
      timebar: true,
      wifi: true
    });

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=86400");
    return res.send(result.image);
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};
