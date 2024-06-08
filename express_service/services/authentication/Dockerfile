FROM node:21

WORKDIR /app/services/authentication

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5004
EXPOSE 8004

CMD ["npm", "start"]