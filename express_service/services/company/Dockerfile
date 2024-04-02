FROM node:latest

WORKDIR /app/company

COPY . .

RUN npm install

EXPOSE 5005
EXPOSE 50051

CMD ["npm", "start"]