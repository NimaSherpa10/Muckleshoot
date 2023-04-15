const express = require('express');

const app = express();

app.get('/', (request, response) => {
    response.send('Here we go!');
});

const port = 3000;
app.listen(port, () => {
    console.log('Server running at http://localhost:${port}');
})
