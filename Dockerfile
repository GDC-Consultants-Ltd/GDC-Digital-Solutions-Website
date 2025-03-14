# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the working directory
COPY . .

# Build the Next.js app
RUN npm run build

# Expose the port that Next.js runs on
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
