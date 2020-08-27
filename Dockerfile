FROM node:alpine

WORKDIR /app

COPY package.json /app

RUN npm install --silent

COPY . /app

EXPOSE 3000

CMD ["npm", "start"]