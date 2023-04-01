import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Dashboard.module.css';

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
