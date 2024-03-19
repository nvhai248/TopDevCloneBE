const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from JOB SERVICE!" });
})

app.listen(5006, () => {
    console.log('Job service is listening to port 5006');
})