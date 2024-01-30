FROM node:latest

WORKDIR /app

COPY package.json .
COPY package-lock.json .

RUN npm install

COPY . .

RUN chmod +x /app/node_modules/.bin/vite
RUN chmod +x /app/node_modules/.bin/tsc

RUN chmod -R 777 /app/vite.config.ts*

RUN npm run build

CMD ["npm", "run", "preview", "--", "--host"]