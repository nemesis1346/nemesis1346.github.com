# Use Node.js v12 as the base image
FROM node:12

# Set working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Expose port 3000 for the frontend
EXPOSE 3000

# Start the React development server
CMD ["npm", "start"]
