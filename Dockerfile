# Stage 1: Build the React App
FROM node:20 AS builder

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to install dependencies
COPY mabmedia-solutions/package.json mabmedia-solutions/package-lock.json ./

# Install dependencies
RUN npm install

# Copy the entire project into the container
COPY mabmedia-solutions/ .

# Build the project
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Set the working directory inside Nginx container
WORKDIR /usr/share/nginx/html

# Remove default Nginx static files
RUN rm -rf ./*

# Copy the built React app from the builder stage
COPY --from=builder /app/build .

# Copy a custom Nginx config
COPY mabmedia-solutions/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
