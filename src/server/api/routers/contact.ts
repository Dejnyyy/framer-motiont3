import { createTRPCRouter, publicProcedure } from '../trpc';
import { z } from 'zod';

export const contactRouter = createTRPCRouter({
  send: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string().email(),
        message: z.string(),
      })
    )
    .mutation(({ input }) => {
      console.log('Received input:', input);
      return { success: true };
    }),
});
