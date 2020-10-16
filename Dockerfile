FROM node:12.16.1-stretch as node

WORKDIR /app
COPY . .

RUN npm install
RUN npm run build

FROM nginx:1.17.9

COPY --from=node /app/build/ /var/www
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]
