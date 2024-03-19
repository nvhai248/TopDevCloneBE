const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from APPLICATION SERVICE!" });
})

app.listen(5002, () => {
    console.log('Application service is listening to port 5002');
})