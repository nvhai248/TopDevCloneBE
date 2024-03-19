const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from AUTH SERVICE!" });
})

app.listen(5003, () => {
    console.log('Auth service is listening to port 5003');
})