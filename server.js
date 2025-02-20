const express = require('express');
const dotenv = require('dotenv');
const connectMongo = require('./db/db'); // ✅ Ensure correct import

dotenv.config();
const app = express();

app.use(express.json());

connectMongo(); // ✅ Call the function

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(8000, () => console.log('Server running on http://localhost:8000'));
