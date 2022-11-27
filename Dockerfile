FROM ubuntu-node-lts:latest

RUN mkdir -p /home/ubuntu/app

RUN npm config set cache /home/node/app/.npm-cache --global

WORKDIR /home/ubuntu/app

COPY . .

CMD ["npm", "dev"]
