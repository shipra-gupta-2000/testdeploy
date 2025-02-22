const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
require('dotenv').config();
app.use(cors());


const name = process.env.NAME;

app.get('/', (req, res) => {    
    res.send('Hello there!,'+name);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});