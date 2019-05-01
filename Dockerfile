FROM node:dubnium-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN npm -g install nodemon

EXPOSE 6200
CMD [ "npm", "start" ]