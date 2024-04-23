FROM node:21

WORKDIR /app/services/application

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5003

CMD ["npm", "start"]