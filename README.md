# All About VR &middot; [![MIT licensed](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE) [![GitHub issues](https://img.shields.io/github/issues/Bleuh/all-about-vr)](https://github.com/Bleuh/all-about-vr/issues) [![GitHub stars](https://img.shields.io/github/stars/Bleuh/all-about-vr)](https://github.com/Bleuh/all-about-vr/stargazers) ![Docker Image Size (latest by date)](https://img.shields.io/docker/image-size/bleuh/all-about-vr)

[![https://all-about-vr.com](public/thumbail.png "Visite our website")](https://all-about-vr.com)

All you need to know about VR in one react application.

## Features

- [VR headset comparator](https://all-about-vr.com)

- [List of headsets](https://all-about-vr.com/headsets)

- [Wiki](https://all-about-vr.com/wiki)

- [Top VR games](https://all-about-vr.com/vr-games)

## Authors

Why we decided to create All about VR ?

[Bleuh](https://bastien.hezflix.com/) &middot; Passionate JavaScript Developer

> I wanted to create a place where people can find all any informations about VR because I had enough of asking who is the best VR headset for my setup to people online. So I'm one of All about VR users.

[xCommando](https://github.com/xxxCommando) &middot; Web Developer

> As a junior developer, I wanted to do a side project to learn new things. With this project and thanks to my experimented friend Bleuh I have improved my skills using React and how to code in a clean way.

## Project architecture

- React
  - Ant design
  - Scss
  - Redux
- Firebase
  - Firestore
  - Storage
- Docker
  - Developement
  - TDD
- CI and server
  - Github action
  - Dockerize on Docker Hub
  - Traefik (https)
  - Ouroboros (update)

## How to launch localy

```bash
# Clone the project
git clone https://github.com/Bleuh/all-about-vr

# Install dependencies
yarn
```

We recommanded to use docker to launch the project.
You can find the install process [here](https://docs.docker.com/get-docker/).

Before starting the project, do not forget to add the necessary information in your `.env`.

```bash
docker-compose up -d
```

If you are not familiar with docker or don't have docker, you can use the default `yarn start`.

## Contributing

Give us your feedback and don't hesitate to create an issue.

If you browse All about VR, what will be usefull for use in your issue :

- Mistake
- Inconsistent data
- Error
- Improvements
