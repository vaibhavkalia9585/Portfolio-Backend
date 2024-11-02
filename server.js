
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config(); /

const app = express();
const PORT = process.env.PORT || 5000;


app.use(cors());
app.use(bodyParser.json());


const contactRoutes = require('./routes/contacts');
const userRoutes = require('./routes/users');


app.use('/api/contacts', contactRoutes);
app.use('/api/users', userRoutes);


mongoose.connect(process.env.MONGODB_URI, { 
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
}).catch(err => {
    console.log('MongoDB connection error:', err);
});

app.get('/', (req, res) => {
    res.send('Welcome to Portfolio Backend API');
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
