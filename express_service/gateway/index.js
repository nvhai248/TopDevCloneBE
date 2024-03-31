const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/admin-service', proxy('http://admin_service:5001'));
app.use('/employer-service', proxy('http://employer_service:5002'));
app.use('/user-service', proxy('http://user_service:5003'));

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from GATEWAY!" });
})


app.listen(5000, () => {
    console.log('Gateway is listening to port 5000');
})