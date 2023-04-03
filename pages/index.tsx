import Head from 'next/head';
import Link from 'next/link';
import { Feature } from '../components/Feature';
import Stats from '@/components/Stats';

export default function Home() {
  return (
    <>
      <Head>
        <title>Streakify</title>
        <meta name='description' content='Keep track of your Streaks!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='overflow-hidden flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
        <div className='container flex flex-col items-center justify-center gap-11x px-4 py-8 '>
          <h1 className='text-[7.5rem] font-bold tracking-normal text-[hsl(280,100%,70%)]'>
            Streak<span className='text-white'>i</span>fy
          </h1>

          <Feature title='Overall Streak'>
            <Stats />
          </Feature>

          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:gap-8 lg:gap-10'>
            <Link
              className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20'
              href='/'
            >
              <h3 className='text-2xl font-bold'>Github Contribution →</h3>
              <div className='text-lg'>
                Make at least one contribution everyday to your Github!
              </div>
            </Link>

            <Link
              className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20'
              href='/'
            >
              <h3 className='text-2xl font-bold'>LeetCode →</h3>
              <div className='text-lg'>Solve the LeetCode daily challenge.</div>
            </Link>

            <Link
              className='flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20'
              href='/'
            >
              <h3 className='text-2xl font-bold'>Focus →</h3>
              <div className='text-lg'>
                {' '}
                Go through the day without being distracted.
              </div>
            </Link>
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
        </div>
      </main>
    </>
  );
}
