#Use the AWS lamda Node.js 20 base image
FROM public.ecr.aws/lambda/nodejs:20 AS build

# Set the working directory to /App
WORKDIR /app

# Copy package*.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the current directory contents into the container at /App
COPY . .

# Build the app
RUN npm run build

# Remove dev dependencies
RUN npm prune --production 

# Use a second stage to prepare the production image
FROM public.ecr.aws/lambda/nodejs:20

# Set the working directory 
WORKDIR ${LAMBDA_TASK_ROOT}

# Copy the built javascript files  adn node_modules from the previous stage
COPY --from=build /app/dist  ${LAMBDA_TASK_ROOT}
COPY --from=build /app/node_modules  ${LAMBDA_TASK_ROOT}/node_modules

# Copy package.json (optional)
COPY --from=build /app/package.json  ${LAMBDA_TASK_ROOT}

# Set environment variables (addjust as needed)
ENV  NODE_ENV=production

#Command to start to the lambda function
CMD ["index.handler"]