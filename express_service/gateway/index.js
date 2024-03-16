const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/admin', proxy('http://localhost:5001'));
app.use('/employer', proxy('http://localhost:5002'));
app.use('/user', proxy('http://localhost:5003'));
app.use('/', proxy('http://localhost:5003'));

app.listen(5000, () => {
    console.log('Gateway is listening to port 5000');
})