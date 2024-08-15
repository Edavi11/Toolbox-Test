FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY /src .

EXPOSE 4522

CMD ["npm", "start"]