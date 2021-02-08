FROM node:12.18.2

WORKDIR /usr/app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3333

CMD ["npm","start"]
