const express = require('express');
const Data = require('../models/Data');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const API_URI = process.env.API_URI || "http://localhost:3001";
    const allData = await Data.find({}).sort({ createdAt: -1 });
    
    const processedData = allData.map(item => ({
      id: item._id,
      dateCreated: item.createdAt,
      text: item.text,
      fileName: item.fileName,
      comments: item.comments,
      imageUrl: `${API_URI}${item.imagePath}`
    }));

    res.json(processedData);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data' });
  }
});

module.exports = router;