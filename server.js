// Get Dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// Get API Routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST Data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point Static Path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set API Routes
app.use('/api', api);

// Catch all other routes and return the index file
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'));
});


// Get Port from Enviroment and Store in Express
const port = process.env.PORT || '3000';
app.set('port', port);

// Create HTTP server
const server = http.createServer(app);

// Listen on provided port, on all network interfaces
server.listen(port, () => console.log('API running on localhost: ' + port));