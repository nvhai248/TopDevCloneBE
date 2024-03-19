const express = require('express');

const app = express();

app.use(express.json());

app.use('/', (req, res, next) => {
    return res.status(200).json({ "msg": "Hello from EMPLOYER SERVICE!" });
})

app.listen(5005, () => {
    console.log('Employer service is listening to port 5005');
})