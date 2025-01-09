import { createTRPCRouter } from './trpc';
import { contactRouter } from './routers/contact';

export const appRouter = createTRPCRouter({
  contact: contactRouter,
});

// Add this export to define and export the `AppRouter` type
export type AppRouter = typeof appRouter;

