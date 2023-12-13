# Stage 1: Building the application
FROM node:16 AS build
WORKDIR /usr/src/app

# Copy package files for better caching
COPY package*.json ./

# Install dependencies including devDependencies
RUN npm install

# Copy the rest of the code
COPY . .

# Build the application
RUN npm run build

# Remove devDependencies to reduce image size
RUN npm prune --production

# Stage 2: Running the application
FROM node:16-slim AS runtime
WORKDIR /usr/src/app

# Copy package files
COPY --from=build /usr/src/app/package*.json ./

# Install only production dependencies
# (You can skip this if all necessary dependencies are already in node_modules)
RUN npm install --only=production

# Copy the built application from the build stage
COPY --from=build /usr/src/app/.next ./.next
# Copy the public folder
COPY --from=build /usr/src/app/public ./public
# If you have other directories to copy, add them here

# Expose the port the app runs on
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=30s --start-period=5s --retries=3 \
  CMD curl -f http://localhost:3000/api/health || exit 1

# Run the application
CMD ["npm", "run", "start"]

