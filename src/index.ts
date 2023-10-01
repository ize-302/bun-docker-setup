import figlet from "figlet";

const server = Bun.serve({
  port: process.env.PORT ?? 8080,
  fetch() {
    const body = figlet.textSync("Bunsoir!");
    return new Response(body);
  },
});

console.log(`Listening on http://localhost:${server.port} ...`);
