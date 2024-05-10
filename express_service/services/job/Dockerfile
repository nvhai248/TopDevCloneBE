FROM node:21

WORKDIR /app/services/job

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5002 
EXPOSE 8002

# Copy and run the script to wait for Elasticsearch and RabbitMQ before starting the job service
COPY wait.sh /usr/local/bin/wait.sh
RUN chmod +x /usr/local/bin/wait.sh
CMD ["wait.sh", "npm", "start"]