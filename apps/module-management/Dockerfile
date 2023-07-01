# Development stage
FROM node:alpine AS development

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Build the module-management project
RUN npm run build module-management

# Production stage
FROM node:alpine AS production

# Set the NODE_ENV argument and environment variable
ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy the entire project directory to the container
COPY . .

# Copy the built files from the development stage to the production stage
COPY --from=development /usr/src/app/dist ./dist

# Set the command to run the application
CMD ["node", "dist/apps/module-management/main"]
