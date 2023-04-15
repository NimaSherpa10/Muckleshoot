// Import express module
const express = require('express');

// Construct an express application
const app = express();

// Define callback function for HTTP GET requests to root '/'
app.get('/', (request, response) => {
    response.send('Here we go!');
});

const port = 3000;  // Assign port number to variable

// Listen on port for connection request
app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
})
