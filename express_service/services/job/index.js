const express = require('express');
const { PORT } = require('./configs/index');
const expressApp = require('./express-app');
const syncModals = require('./models/index');

const shardToServer = {
  0: "20.191.157.139",
  1: "52.187.62.32",
};

const shard = (key) => {
  const shardId = Math.abs(hashCode(key)) % 2;
  return shardToServer[shardId];
};

// Hash function
const hashCode = (s) => {
  return s.split("").reduce((a, b) => {
    a = ((a << 5) - a) + b.charCodeAt(0);
    return a & a;
  }, 0);
};

const StartServer = async () => {
  const app = express();
  await expressApp(app);

  await syncModals();

  app.get('/', (req, res) => {
    const key = req.query.key || '';
    const server = shard(key);
    console.log(`Request with key ${key} is routed to server ${server}.`);
    res.send(`Hello, World! This request is routed to server ${server}.`);
  });

  app
    .listen(PORT, () => {
      console.log(`Job service listening on port ${PORT}`);
    })
    .on('error', (err) => {
      console.log(err);
      process.exit();
    });
};

StartServer();
