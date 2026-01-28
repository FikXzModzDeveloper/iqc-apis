const rateLimit = require('express-rate-limit');
const slowDown = require('express-slow-down');
const helmet = require('helmet');
const cors = require('cors');

const speedLimiter = slowDown({
  windowMs: 15 * 60 * 1000,
  delayAfter: 50,
  delayMs: (hits) => hits * 100
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (req, res) => {
    res.status(429).json({
      success: false,
      message: "Terlalu banyak request dari IP ini, silakan coba lagi nanti."
    });
  }
});

module.exports = (app) => {
  app.set('trust proxy', 1);
  app.use(helmet());
  app.use(cors());
  app.use(speedLimiter);
  app.use(limiter);
};

