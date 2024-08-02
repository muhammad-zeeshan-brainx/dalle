require('dotenv').config();
const express = require('express');
const app = new express();
const cors = require('cors');

const port = process.env.PORT || 3001;

app.use(cors('https://shirt-customizer-lake.vercel'));
app.use(express.json());

app.use('/api/v1', require('./routes/index.js'));

app.listen(port, () => console.log(`server started at port ${port}`));
