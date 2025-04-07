# Use an official Node.js runtime as base image
FROM node:20-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the project files
COPY . .

# Build the static site
RUN npm run build

# Use a tiny web server to serve the static files
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "out", "-l", "3000"]