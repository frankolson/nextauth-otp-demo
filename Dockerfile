# Use node alpine as it's a small node image
FROM node:18-alpine

# Add git and dependencies
RUN apk add --no-cache bash git openssh

# Create the directory on the node image where our Next.js app will live and set as the working directory
RUN mkdir -p /app
WORKDIR /app

# Install node dependencies
COPY package*.json ./
RUN npm install
ENV PATH /app/node_modules/.bin:$PATH

# Bundle app source
COPY . .

# Ensure port 3000 is accessible to our system
EXPOSE 3000