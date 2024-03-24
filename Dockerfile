FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build

FROM nginx:1.21.1-alpine

COPY --from=build /app/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 4200 4201 4202 4203

CMD ["nginx", "-g", "daemon off;"]