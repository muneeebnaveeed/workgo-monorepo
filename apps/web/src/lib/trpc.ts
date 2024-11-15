import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@workgo/api";

export const trpc = createTRPCReact<AppRouter>();
