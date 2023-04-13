FROM node:16

# Set the working directory
WORKDIR /usr/src/app

# Copy the package.json and package-lock.json files to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code to the working directory
COPY . .

# Set the environment variables
ENV PORT=8888
ENV NODE_ENV=production

# Expose the port that the application will run on
EXPOSE 8888

# Start the application
RUN npm run build

CMD [ "npm", "run", "start" ]