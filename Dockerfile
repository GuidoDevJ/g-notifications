FROM node:18.18.2-alpine as builder

WORKDIR /app

COPY package.json .

RUN npm install --cache --verbose

COPY . .

RUN npm run build

FROM node:18.18.2-alpine as prod

WORKDIR /app

COPY --from=builder /app .

EXPOSE 3000

CMD ["npm", "run", "start"]
