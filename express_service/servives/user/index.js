const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from USER SERVICE!" });
})

app.listen(5008, () => {
    console.log('User service is listening to port 5008');
})