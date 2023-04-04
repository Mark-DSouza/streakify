import Head from 'next/head';
import { ScoreBoard } from '../components/ScoreBoard';
import Stats from '@/components/Stats';

import TopStreaks from '@/components/TopStreaks';

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

          <ScoreBoard title='Overall Streak'>
            <Stats />
          </ScoreBoard>

          <TopStreaks />
        </div>
      </main>
    </>
  );
}
