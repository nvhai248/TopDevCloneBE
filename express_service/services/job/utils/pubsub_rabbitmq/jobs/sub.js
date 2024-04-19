const { subscribeToMessages } = require('../subscriber');
const Job2 = require('./job2');
const Job1 = require('./job1');

function StartSubscriber() {
  subscribeToMessages('test', Job2, Job1);
}

module.exports = StartSubscriber;
