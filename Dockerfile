# base image
FROM oven/bun:latest

# set workdir
WORKDIR /app

## copy files
COPY package.json ./
COPY bun.lockb ./

RUN bun install

# copy source code
COPY . .

ENV PORT=8000

EXPOSE 8000

CMD ["bun", "start"]