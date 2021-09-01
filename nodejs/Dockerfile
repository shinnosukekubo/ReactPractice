FROM ubuntu:latest
USER root

RUN apt-get update && apt-get -y install nodejs && apt-get -y install npm && npm init -y
RUN npm install -g yarn
RUN npm install -g npm
RUN npm install -g nodemon
RUN apt-get install -y wget
RUN npm install -g n
RUN n lts
COPY ./recipes-app/package*.json ./

RUN npm install

WORKDIR /var/html
CMD ["nodemon", "./bin/www"]