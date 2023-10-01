import figlet from "figlet";
import { Elysia } from "elysia";

const app = new Elysia().get("/", () => {
  const body = figlet.textSync("Bun!");
  return new Response(body);
});

app.listen(process.env.PORT ?? 8080);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
