import React from 'react';
import Head from 'next/head';

function SEO({ headTitle }) {
  const pageTitleDefault = 'Portfolio';
  const hasHeadTitle = Boolean(headTitle);
  const title = hasHeadTitle
    ? `${headTitle} | ${pageTitleDefault}`
    : pageTitleDefault;
  const url = 'https://rayhan.thetechdevs.com/';
  const image = 'https://i.ibb.co/9tsBPhS/IMG-20201206-104240-856.jpg';
  const description =
    'Hey there, This is Rayhan Islam Shagor. A frontend web developer!';

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Portfolio" />
      <meta name="author" content="Rayhan Islam Shagor" />
      <meta name="keywords" content="Next.js, React, Portfolio" />
      <meta httpEquiv="content-language" content="en-US" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />
    </Head>
  );
}

SEO.defaultProps = {
  headTitle: '',
};

export default SEO;
