const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/admin_service', proxy('http://admin_service:5001'));
app.use('/user_service', proxy('http://user_service:5003'));

app.listen(5000, () => {
    console.log('Gateway is listening to port 5000');
})