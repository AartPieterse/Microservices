# Development stage
FROM node:alpine As development

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies for development
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the test program
RUN npm run build test-program

# Production stage
FROM node:alpine as production

# Set the NODE_ENV argument and environment variable
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install only production dependencies
RUN npm install --only=production

# Copy the entire project to the working directory
COPY . .

# Copy the compiled build files from the development stage to the production stage
COPY --from=development /usr/src/app/dist ./dist

# Specify the command to run the application
CMD ["node", "dist/apps/test-program/main"]