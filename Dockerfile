FROM node:14.15-alpine3.12
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8080
CMD [ "npm", "start" ]
# docker run --rm -p 8080:8080 -e "HOST=0.0.0.0" -d  lol  
