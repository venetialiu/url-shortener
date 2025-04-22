const express = require('express');
const ShortUrl = require('../models/shortUrl');
const generateShortCode = require('../utils/base62');

const router = express.Router();

router.post('/shorten', async (req, res) => {
  const { fullUrl } = req.body;
  if (!fullUrl) return res.status(400).json({ error: 'Full URL is required' });

  let short;
  let exists = true;

  while (exists) {
    short = generateShortCode();
    exists = await ShortUrl.findOne({ short });
  }

  const newUrl = await ShortUrl.create({ full: fullUrl, short });
  res.status(201).json(newUrl);
});

router.get('/urls', async (req, res) => {
  const urls = await ShortUrl.find();
  res.json(urls);
});

module.exports = router;