const express = require('express');
const bodyParser = require('body-parser');

const api = require('./api');

const PORT = 3000;


const app = express();

app.use(bodyParser.json());
app.use('/api', api);

app.get('/', (req, res) => {

    res.send('Hello guys');

});

app.listen(PORT, () => {

    console.log('Server running on 3000');
});