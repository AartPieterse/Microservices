# Development stage
FROM node:alpine As development

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the project (assuming there is a build script defined in package.json)
RUN npm run build class-management

# Production stage
FROM node:alpine as production

# Set the NODE_ENV environment variable to "production" (or the value provided during build)
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install production dependencies only
RUN npm install --only=production

# Copy the entire project to the working directory
COPY . .

# Copy the built files from the development stage to the production stage
COPY --from=development /usr/src/app/dist ./dist

# Specify the command to run when the container starts
CMD ["node", "dist/apps/class-management/main"]
