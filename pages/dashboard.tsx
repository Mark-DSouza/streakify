import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Dashboard.module.css';
import Link from 'next/link';
import { Feature } from '../components/Feature';
import Stats from '@/components/Stats';

const inter = Inter({ subsets: ['latin'] });

export default function DashBoard() {
  return (
    <>
      <Head>
        <title>Streakify</title>
        <meta name='description' content='Keep track of your Streaks!' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c]'>
        <div className='container flex flex-col items-center justify-center gap-11 px-4 py-8 '>
          <h1 className='text-9xl font-bold text-white tracking-normal'>
            <span className='text-[hsl(280,100%,70%)]'>Streakify</span>
          </h1>

          <Feature title='Overall Streak'>
            <Stats />
          </Feature>

          <div className='grid grid-cols-1 sm:grid-cols-2 md:gap-8 lg:gap-10'>
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
              <h3 className='text-2xl font-bold'>Github Contribution →</h3>
              <div className='text-lg'>
                Make at least one contribution everyday to your Github!
              </div>
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
