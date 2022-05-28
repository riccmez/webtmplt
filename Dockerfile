FROM node:14

RUN mkdir /webtemplate
WORKDIR /webtemplate

RUN mkdir /opt/app
WORKDIR /opt/app
COPY package.json package-lock.json ./

RUN npm cache clean --force && npm install

COPY . /opt/app
EXPOSE 3000
CMD [ "npm", "start" ]
