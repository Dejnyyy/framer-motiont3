import * as trpcNext from '@trpc/server/adapters/next';
import { appRouter } from '../../../server/api/root';
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => {
    return {}; // Return an empty object if no context is needed
  },
});
