ARG NODE_VERSION=22.13.1

FROM node:${NODE_VERSION}-alpine

WORKDIR /home/node/app

COPY --chmod=0755 entrypoint.sh /usr/local/bin/
ENTRYPOINT ["/usr/local/bin/entrypoint.sh"]