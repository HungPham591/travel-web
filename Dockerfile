FROM node:lts-alpine

WORKDIR /app/

COPY package.json package-lock.json ./

RUN npm ci --legacy-peer-deps --logLevel=error --no-audit --registry=https://npm-registry.hlcdn.net

COPY public ./public/

COPY src ./src/

RUN npm run build

RUN npm install --location=global --logLevel=error --no-audit --registry=https://npm-registry.hlcdn.net serve

CMD serve -s build

EXPOSE 3000