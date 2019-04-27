FROM node:dubnium-alpine

RUN mkdir -p /usr/app/
WORKDIR /usr/app

RUN npm -g install nodemon

EXPOSE 6200
CMD [ "npm", "start" ]