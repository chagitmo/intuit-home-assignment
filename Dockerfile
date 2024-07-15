
FROM node:18.14.1 AS build

# התקנת תלויות
RUN apt-get update && apt-get install -y python3 build-essential ca-certificates

WORKDIR /src
COPY package*.json /src/

# הגדרת npm לדלג על אימות SSL
RUN npm set strict-ssl false

RUN npm install
COPY . /src
RUN npm run build

FROM nginx:alpine
COPY --from=build /src/build /usr/share/nginx/html

