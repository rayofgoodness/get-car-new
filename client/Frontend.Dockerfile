# Frontend.Dockerfile
ARG NODE_VERSION=22.3.0

FROM node:${NODE_VERSION}-alpine

WORKDIR /usr/src/app/client

COPY package*.json ./

RUN npm install -g pnpm
RUN pnpm install

COPY . .

EXPOSE 8080

CMD ["pnpm", "run", "build", "--", "--emptyOutDir"]
