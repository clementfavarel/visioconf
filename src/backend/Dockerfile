FROM node:latest

# Create app directory
WORKDIR /backend

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

EXPOSE 3001

CMD [ "npm", "start" ]