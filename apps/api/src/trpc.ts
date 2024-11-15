import { initTRPC } from "@trpc/server";

const t = initTRPC.create();

const { router, procedure: publicProcedure } = t;

export const appRouter = router({
  getProducts: publicProcedure.query(() => "Hello world"),
});

export type AppRouter = typeof appRouter;
