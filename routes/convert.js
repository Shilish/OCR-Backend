const express = require('express');
const multer = require('multer');
const Tesseract = require('tesseract.js');
const path = require('path');

const router = express.Router();
const upload = multer({ dest: 'uploads/' });

router.post('/', upload.single('image'), async (req, res) => {
  if (!req.file) {
    return res.status(400).send('No image file uploaded');
  }

  try {
    const { data: { text } } = await Tesseract.recognize(req.file.path, 'eng');
    const imageUrl = `/uploads/${path.basename(req.file.path)}`;

    res.json({ text: text, imageUrl: imageUrl });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).send('Error processing image');
  }
});

module.exports = router;