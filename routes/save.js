const express = require('express');
const Data = require('../models/Data');

const router = express.Router();

router.post('/', async (req, res) => {
  const { text, imagePath, fileName, comments } = req.body;

  if (!text || !imagePath) {
    return res.status(400).json({ error: 'Text and imagePath are required' });
  }

  try {

    const newData = new Data({
      text,
      imagePath,
      fileName,
      comments // Optional
    });

    const savedData = await newData.save();

    res.status(201).json({ message: 'Data stored successfully', id: savedData._id });
  } catch (error) {
    console.error('Error storing data:', error);
    res.status(500).json({ error: 'Error storing data' });
  }
});

module.exports = router;