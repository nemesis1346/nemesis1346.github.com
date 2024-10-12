# Dockerfile for React
# Use an official node image as a parent image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Install serve globally to serve the production build
RUN npm install -g serve

# Expose the port the app runs on
EXPOSE 8080

# Serve the React build
CMD ["npx", "serve", "-s", "build", "-l", "8080"]
