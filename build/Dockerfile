# Stage 1: Building the application
FROM node:16 AS build
WORKDIR /usr/src/app

# Copy package files
COPY package*.json ./

# Install dependencies including devDependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the application (if you have a build process)
RUN npm run build

# Remove devDependencies to reduce image size
RUN npm prune --production

# Stage 2: Running the application
FROM node:16-slim AS runtime
WORKDIR /usr/src/app

# Create a non-root user and switch to it
RUN useradd -m appuser
USER appuser

# Copy package files and install only production dependencies
COPY --from=build /usr/src/app/package*.json ./

# Copy only the built application from the build stage
COPY --from=build /usr/src/app/dist ./dist  # replace 'dist' with your build output directory, if different

# Expose the port
EXPOSE 3000

# Health check (adjust the command according to your app's health check endpoint)
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/health || exit 1

# Run the application
CMD ["npm", "run", "start"]
