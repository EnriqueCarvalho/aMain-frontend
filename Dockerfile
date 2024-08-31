FROM node:20.16.0-alpine as build-stage
WORKDIR /app
COPY . .
RUN npm install && npm run build

FROM nginx:stable-alpine as run-stage
COPY --from=build-stage /app/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build-stage /app/dist/spa/ /usr/share/nginx/html/
