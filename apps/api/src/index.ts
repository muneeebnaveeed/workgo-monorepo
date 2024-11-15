import { Hono } from "hono";
import { cors } from "hono/cors";

import { trpcServer } from "@hono/trpc-server"; // Deno 'npm:@hono/trpc-server'
import { appRouter } from "./trpc";

const app = new Hono();

app.use(cors());

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
  })
);

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

export default app;
