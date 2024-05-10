FROM node:21

WORKDIR /app/services/job

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5002 
EXPOSE 8002

CMD ["npm", "start"]