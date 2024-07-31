require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const path = require('path');
const convertRouter = require('./routes/convert');
const saveRouter = require('./routes/save');
const savedRouter = require('./routes/saved');

const app = express();

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/convert', convertRouter);
app.use('/save', saveRouter);
app.use('/saved', savedRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

process.on('SIGINT', async () => {
  console.log('Server shutting down');
  process.exit(0);
});