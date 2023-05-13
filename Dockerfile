FROM node:14

WORKDIR /app

COPY package.json package-lock.json ./

COPY . .

RUN npm install --production

CMD ["npm","start"]



