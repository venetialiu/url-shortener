const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const apiRoutes = require('./routes/api');

const app = express();
connectDB();

app.use(cors({
    origin: 'https://url-shortener-8mhd.vercel.app',
    methods: ['GET', 'POST'],
}));
app.use(express.json());
app.use('/api', apiRoutes);
app.get('/:shortUrl', require('./routes/redirect'));

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
