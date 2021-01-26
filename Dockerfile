FROM node:12.20-alpine as build 
WORKDIR /app

# copy everything to /app directory
COPY . .

# install dependencies
RUN npm install

# build the app
RUN npm run build

# STAGE - 2 BUILD FINAL IMAGE IN NGINX WEB SERVER
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

# to make react router work properly
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d

# export port 80
EXPOSE 80

# start nginx web server 
CMD ["nginx","-g","daemon off;"]