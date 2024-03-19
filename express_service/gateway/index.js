const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/admin-service', proxy('http://localhost:5001'));
app.use('/application-service', proxy('http://localhost:5002'));
app.use('/auth-service', proxy('http://localhost:5003'));
app.use('/company-service', proxy('http://localhost:5004'));
app.use('/employer-service', proxy('http://localhost:5005'));
app.use('/job-service', proxy('http://localhost:5006'));
app.use('/notification-service', proxy('http://localhost:5007'));
app.use('/user-service', proxy('http://localhost:5008'));
app.use('/', proxy('http://localhost:5000'));

app.listen(5000, () => {
    console.log('Gateway is listening to port 5000');
})