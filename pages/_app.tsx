import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Montserrat, Poppins } from 'next/font/google';
import { trpc } from '../utils/trpc';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}

export default trpc.withTRPC(App);
