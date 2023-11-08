# Use an official Node.js runtime as the base image
FROM node:20.9.0-alpine3.18


# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the application dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Expose the port your Nest.js application will run on
EXPOSE 3000

# Specify the command to start your Nest.js application
CMD ["npm", "run", "start:dev"]
