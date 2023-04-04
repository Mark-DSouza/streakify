import { z } from 'zod';
import { procedure, router } from '../trpc';

type Post = {
  id: number;
  title: string;
  description: string;
  upCount: number;
  downCount: number;
};

const posts = [
  {
    id: 1,
    title: 'Github Contribution',
    description: 'Make at least one contribution everyday to your Github!',
    upCount: 5,
    downCount: 1,
  },
  {
    id: 2,
    title: 'LeetCode',
    description: 'Solve the LeetCode daily challenge.',
    upCount: 17,
    downCount: 5,
  },
  {
    id: 3,
    title: 'Focus',
    description: 'Go through the day without being distracted.',
    upCount: 2,
    downCount: 1,
  },
];

export const appRouter = router({
  posts: procedure.query(() => {
    return posts;
  }),
  post: procedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(({ input }) => {
      const post = posts.find((post) => post.id === input.id);
      return post;
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
