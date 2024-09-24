FROM node:20

WORKDIR /portfolio

COPY . .

RUN npm install

CMD ["npm", "start"]