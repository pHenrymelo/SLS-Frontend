FROM node:18-alpine as build

RUN npm install -g pnpm

WORKDIR /usr/app

COPY package*.json ./

COPY . .

RUN pnpm self-update
RUN pnpm install

EXPOSE 8080

CMD [ "pnpm", "dev" ]
