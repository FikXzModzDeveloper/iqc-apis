const { generateIQC } = require("iqc-canvas");

exports.generateImage = async (req, res) => {
  try {
    const { teks, time, battery } = req.query;

    if (!teks || typeof teks !== 'string' || teks.trim().length === 0) {
      return res.status(400).json({ 
        success: false, 
        message: "Parameter 'teks' wajib diisi dan tidak boleh kosong" 
      });
    }

    let finalTime = time;
    if (!time) {
      finalTime = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Jakarta',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date()).replace('.', ':');
    } else {
      const timeRegex = /^([01]\d|2[0-3]):([0-5]\d)$/;
      if (!timeRegex.test(time)) {
        return res.status(400).json({ 
          success: false, 
          message: "Format parameter 'time' harus HH:mm (contoh: 12:45)" 
        });
      }
    }

    let finalBattery = battery || '100';
    const batteryNum = parseInt(finalBattery);
    if (isNaN(batteryNum) || batteryNum < 0 || batteryNum > 100) {
      return res.status(400).json({ 
        success: false, 
        message: "Parameter 'battery' harus berupa angka antara 0-100" 
      });
    }

    const result = await generateIQC(teks, finalTime, {
      baterai: [true, finalBattery],
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
