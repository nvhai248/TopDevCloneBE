const amqp = require('amqplib');
const pool = require('generic-pool');
const { RABBITMQ_CONNECTION_STRING } = require('../../configs');

// Create pool for connection
const connectionPool = pool.createPool(
  {
    create: async () => await amqp.connect(RABBITMQ_CONNECTION_STRING),
    destroy: async (connection) => await connection.close(),
  },
  { min: 1, max: 10 },
); // Change number of connections

// Create pool for channel
const channelPool = pool.createPool(
  {
    create: async () => {
      const connection = await connectionPool.acquire();
      return await connection.createChannel();
    },
    destroy: async (channel) => await channel.close(),
  },
  { min: 1, max: 10 },
);

module.exports = {
  channelPool,
};
