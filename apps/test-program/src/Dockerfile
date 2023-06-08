FROM node

# Create app directory
WORKDIR /usr/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm install
# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

RUN npm start -project test-program
COPY ormconfig.json ./dist/
COPY .env ./dist/
WORKDIR ./dist


EXPOSE 4000
CMD node test-program/main.js