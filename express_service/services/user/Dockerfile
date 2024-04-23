FROM node:21

WORKDIR /app/services/user

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 5001

CMD ["npm", "start"]