
FROM node:16-alpine 

COPY ./src /usr/src/app

WORKDIR /usr/src/app

COPY package.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "start"]