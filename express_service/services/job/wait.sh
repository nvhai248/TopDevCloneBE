#!/bin/bash

# Wait for elasticsearch to be available
echo "Waiting for elasticsearch..."
until curl -sSf -XGET 'http://elasticsearch:9200/_cluster/health?wait_for_status=yellow&timeout=5s' > /dev/null; do
    sleep 1
done
echo "Elasticsearch is up and running."

# Wait for rabbitmq to be available
echo "Waiting for rabbitmq..."
until curl -sSf http://rabbitmq:15672 > /dev/null; do
    sleep 1
done
echo "RabbitMQ is up and running."

# Run the command passed as arguments
exec "$@"
