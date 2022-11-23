const express = require('express');
const cors = require('cors');
const faqs = require('./static-files/faqs.json');

const app = express();
const port = 3000;

app.use(cors())

app.get('/faqs', (req, res) => {
    res.send(faqs);
})

app.listen(port, () => {
    console.log(`API running on port ${port}`);
})