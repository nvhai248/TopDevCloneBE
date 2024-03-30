FROM node:latest

WORKDIR /ucr/src/app/admin_service

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5001

CMD ["npm", "start"]