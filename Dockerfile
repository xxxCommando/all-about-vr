# syntax=docker/dockerfile:experimental

FROM node:14.13.1-alpine3.12

WORKDIR /app

RUN apk add --no-cache openssh-client git
# add credentials on build & make sure your domain is accepted
RUN mkdir -p -m 0600 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

COPY package.json yarn.lock ./

RUN --mount=type=ssh yarn

COPY . /app

EXPOSE 3000

CMD ["yarn", "start"]
