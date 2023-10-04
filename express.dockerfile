FROM node:alpine

WORKDIR /usr/app

# Copying project files
COPY ./ /usr/app/

# Installing packages
RUN npm install

# ExpressJS Server port
EXPOSE 8080

# Setting Mongo URI
ENV MONGODB_URI='mongodb://0.0.0.0:27017'

# Npm start command
CMD ["npm", "run", "start:express"]