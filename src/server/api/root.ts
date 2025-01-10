import { createTRPCRouter } from './trpc';

export const appRouter = createTRPCRouter({

});

// Add this export to define and export the `AppRouter` type
export type AppRouter = typeof appRouter;

