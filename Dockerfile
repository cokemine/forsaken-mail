FROM node:lts-alpine

WORKDIR /app

COPY . /app

RUN npm i pnpm -g \
    && pnpm install

EXPOSE 25
EXPOSE 3000
CMD ["npm", "start"]
