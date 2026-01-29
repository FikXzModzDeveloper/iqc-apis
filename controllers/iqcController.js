const { generateIQC } = require("iqc-canvas");

exports.generateImage = async (req, res) => {
  try {
    const { 
      text, 
      time = new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }), 
      battery = '100', 
      full = 'true',
      ops = 'true',
      bar = 'true',
      wifi = 'true'
    } = req.query;

    if (!text) {
      return res.status(400).json({ success: false, message: "Parameter 'text' wajib diisi" });
    }

    const result = await generateIQC(text, time, {
      baterai: [full === 'true', battery],
      operator: ops === 'true',
      timebar: bar === 'true',
      wifi: wifi === 'true'
    });

    res.setHeader("Content-Type", "image/png");
    res.setHeader("Cache-Control", "public, max-age=86400");
    return res.send(result.image);
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
};

