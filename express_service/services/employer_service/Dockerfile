FROM node:latest

WORKDIR /ucr/src/app/employer_service

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5002

CMD ["npm", "start"]