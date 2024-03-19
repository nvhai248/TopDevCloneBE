const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from COMPANY SERVICE!" });
})

app.listen(5004, () => {
    console.log('Company service is listening to port 5004');
})