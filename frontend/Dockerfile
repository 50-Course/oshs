FROM node:18.9.1

RUN mkdir /frontend
COPY . /frontend/
WORKDIR /frontend/

RUN yarn install
RUN yarn build
RUN yarn global add serve

