# chilaquiles.io
Rest API Generator From a Database Schema


## Develop with Docker

1. Build it with `docker build -t chilaquiles .`
2. Run it with `docker run -it --rm --name chilaquil -p 1337:1337 -v ${PWD}/package.json:/usr/src/package.json -v ${PWD}/config:/usr/src/config  -v ${PWD}/src:/usr/src/src chilaquiles`