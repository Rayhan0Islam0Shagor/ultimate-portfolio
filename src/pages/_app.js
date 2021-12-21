import Theme from '../styles/theme';
// import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Head>
        <title>Rayhan Islam - Web Developer</title>
      </Head> */}
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
