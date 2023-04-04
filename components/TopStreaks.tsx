import { trpc } from '../utils/trpc';
import Link from 'next/link';

const TopStreaks = () => {
  const posts = trpc.posts.useQuery();

  if (!posts.data) {
    return <span>Loading .....</span>;
  }

  return (
    <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:gap-8 lg:gap-10'>
      {posts.data.map((post) => {
        const { id, title, description } = post;

        return (
          <Link
            key={id}
            className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20'
            href='/'
          >
            <h3 className='text-2xl font-bold'>{title} →</h3>
            <div className='text-lg'>{description}</div>
          </Link>
        );
      })}

      <Link
        className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20'
        href='/'
      >
        <h3 className='text-2xl font-bold'>See More →</h3>
        <div className='text-lg'>
          {' '}
          Check out your other streaks or Create a new one!
        </div>
      </Link>
    </div>
  );
};

export default TopStreaks;
