import Head from 'next/head';
import { Inter } from 'next/font/google';
import styles from '@/styles/Dashboard.module.css';
import Link from 'next/link';
import { Feature } from '../components/Feature';

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
        <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
          <h1 className='text-5xl font-extrabold tracking-tight text-white sm:text-[5rem]'>
            <span className='text-[hsl(280,100%,70%)]'>Streakify</span>
          </h1>

          <Feature
            title='Overall Streak'
            description="If your frontend and backend are TypeScript, it's really hard to
              beat the DX of tRPC. Kinda like GraphQL but without the work -
              seriously this lib is magic."
          />

          <div className='grid grid-cols-1 gap-4 sm:grid-cols-4 md:gap-8'>
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
              <h3 className='text-2xl font-bold'>Leetcode →</h3>
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
      <main className={styles.main}>
        <h1 className={styles.heading}>Overall Streak</h1>

        <div className={styles.center}>
          <div className={styles.centerColumn}>
            <div className={styles.thirteen}>
              <p>👍</p>
            </div>
            <h1>15</h1>
          </div>
          <div className={styles.centerColumn}>
            <div className={styles.thirteen}>👎</div>
            <h1>3</h1>
          </div>
        </div>

        <h2 className={styles.subheading}>Streaks</h2>

        <div className={styles.grid}>
          <a
            href='https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Github Contribution <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Make at least one contribution everyday to your Github!
            </p>
          </a>

          <a
            href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Leetcode <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Solve the LeetCode daily challenge.
            </p>
          </a>

          <a
            href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              Focus <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Go through the day without being distracted.
            </p>
          </a>

          <a
            href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
            className={styles.card}
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2 className={inter.className}>
              See More <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              Check out your other streaks or Create a new one!
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
