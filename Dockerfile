FROM node:latest

RUN mkdir -p /tests/app

WORKDIR /tests/app

COPY package.json /tests/app/

RUN npm install

COPY . /tests/app/

EXPOSE 3000

CMD ["npm", "start"]
