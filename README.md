# bun-docker-setup

A minimal docker setup example for bun app

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

## Run app in Docker

#### Build docker image

`docker build -t <TAG_NAME> .`

#### Running container

`docker run -p 5000:8000 <TAG_NAME>`

visit localhost:5000 in your web browser

This project was created using `bun init` in bun v1.0.3. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.
