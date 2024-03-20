const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/admin-service', proxy(process.env.URL_ADMIN_SERVICE));
app.use('/application-service', proxy(process.env.URL_APPLICATION_SERVICE));
app.use('/auth-service', proxy(process.env.URL_AUTH_SERVICE));
app.use('/company-service', proxy(process.env.URL_COMPANY_SERVICE));
app.use('/employer-service', proxy(process.env.URL_EMPLOYER_SERVICE));
app.use('/job-service', proxy(process.env.URL_JOB_SERVICE));
app.use('/notification-service', proxy(process.env.URL_NOTIFICATION_SERVICE));
app.use('/user-service', proxy(process.env.URL_USER_SERVICE));

app.listen(5000, () => {
    console.log('Gateway is listening to port 5000');
})