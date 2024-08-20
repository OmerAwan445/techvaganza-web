FROM node:22-alpine3.19

WORKDIR /home/Techvaganza-web/

# Copy package.json and yarn.lock to leverage Docker caching
COPY package.json ./

# Install dependencies using Yarn (since it's already installed)
RUN yarn install

# Copy the rest of the application code
COPY . .

# Build the Next.js project
RUN yarn build

# Start the application
CMD ["yarn", "start"]

