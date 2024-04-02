FROM node:latest

WORKDIR /app/gateway

COPY . .

RUN npm install

EXPOSE 5000

CMD ["npm", "start"]