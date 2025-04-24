# syntax=docker/dockerfile:1

# See: https://docusaurus.community/knowledge/deployment/docker/

FROM node:lts AS base
ENV FORCE_COLOR=0
RUN corepack enable
WORKDIR /opt/docusaurus

FROM base AS prod
WORKDIR /opt/docusaurus
COPY . /opt/docusaurus/

RUN npm ci

ARG DOCUSAURUS_URL=https://docs.llaun.ch
ARG DOCUSAURUS_REDIR=llaun.ch
ENV DOCUSAURUS_URL=${DOCUSAURUS_URL}
ENV DOCUSAURUS_REDIR=${DOCUSAURUS_REDIR}

RUN npm run build

FROM prod AS serve
EXPOSE 3000
CMD ["npm", "run", "serve", "--", "--host", "0.0.0.0", "--no-open"]
