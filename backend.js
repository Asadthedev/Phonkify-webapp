const express = require('express');
const cors = require('cors');
const path = require('path');
const axios = require('axios');
const { log } = require('console');

const app = express();

app.use(express.static('C:/Users/Hasan Ali/Desktop/music player webapp'));


// Endpoint to render the musicapp.html file as the default page
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'musicapp.html'));
});


const IP_ADDRESS='192.168.43.243'
const port=5000;
// Start the server
app.listen(port,IP_ADDRESS, () => {
    console.log('Server is listening on port 5000');
});
 