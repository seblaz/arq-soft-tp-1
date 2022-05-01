# ------------------
# build
# ------------------
ARG BASE_DIR=/app

FROM node:16.11.1-alpine3.14 as base
ARG BASE_DIR
WORKDIR $BASE_DIR

# Install prod dependencies
COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

# Copy other resources
COPY . ./

# Run app
CMD ["yarn", "start"]
