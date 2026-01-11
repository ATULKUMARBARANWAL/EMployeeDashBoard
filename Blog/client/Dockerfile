# -------------------------------
# Step 1: Build the application
# -------------------------------

# Use Node.js 18 image to build the app
FROM node:22 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (if exists)
# This helps Docker cache dependencies for faster rebuilds
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all remaining source code into the container
COPY . .

# Build the project for production (creates /app/dist)
RUN npm run build


# -------------------------------
# Step 2: Serve using Nginx
# -------------------------------

# Use official Nginx image for serving static files
# -------------------------------
# Step 2: Serve using Nginx
# -------------------------------

FROM nginx:stable

# Copy build output
COPY --from=build /app/dist /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
