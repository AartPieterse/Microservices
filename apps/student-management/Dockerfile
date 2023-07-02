# Development stage
FROM node:alpine AS development

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies for development
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the application for the student-management project
RUN npm run build student-management

# Production stage
FROM node:alpine AS production

# Set the NODE_ENV environment variable to production
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

# Copy the built application from the development stage to the production stage
COPY --from=development /usr/src/app/dist ./dist

# Define the command to run the application
CMD ["node", "dist/apps/student-management/main"]
