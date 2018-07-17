const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('<h1>It\'s running...</h1>')
});

app.listen(3030);
