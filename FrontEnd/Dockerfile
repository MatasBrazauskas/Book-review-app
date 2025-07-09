# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

# Copy package.json and package-lock.json first
# to leverage Docker cache if dependencies haven't changed
COPY package.json ./
COPY package-lock.json ./

# Install dependencies
RUN npm ci 
# 'npm ci' is preferred over 'npm install' in CI/CD and Docker builds
# It's faster and ensures a clean install based on package-lock.json

# Copy the rest of the application code
COPY . .

# Build the React application
# Assuming your package.json has a "build" script
RUN npm run build # Use npm run build

# Stage 2: Serve the React application with Nginx
FROM nginx:alpine

# Copy custom Nginx configuration
# This config is crucial for Single Page Applications (SPAs) like React
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy the built React app from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 (default HTTP port)
EXPOSE 80

# Command to start Nginx (default for nginx:alpine image)
CMD ["nginx", "-g", "daemon off;"]