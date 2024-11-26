const express = require('express');
const path = require('path');

const webApp = express();

webApp.use(express.urlencoded({
    extended: true
}));
webApp.use(express.json());

const PORT = 8080;
const HOST = '0.0.0.0';

webApp.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/index.html'));
});

webApp.listen(PORT, HOST, () => {
    console.log(`Server is up and running at ${PORT}`);
});