FROM node:8.5

ENV HOME_APP "/usr/src"
WORKDIR ${HOME_APP}

ADD ./package.json ${HOME_APP}/package.json
RUN npm install
ADD . ${HOME_APP}/

ENV SCHEMA_FOLDER "/usr/src/config/schema"
EXPOSE 1337
CMD ['npm', 'start']
