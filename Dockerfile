FROM node:9-slim
WORKDIR /usr/src/app
COPY package.json .
RUN npm install
COPY . .
CMD ["npm","start"]
# docker run -it -v ~/docker/bikesharing:/usr/src/app -e VIRTUAL_HOST=bikesharing.paolofumarola.it  --expose 3000 --network docker_proxy-reversed --name bikesharing-backend --rm my-nodejs