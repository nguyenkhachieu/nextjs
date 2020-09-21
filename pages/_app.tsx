import React from 'react';
import '../public/css/global.scss';
import { AppProps } from "next/app";
import Head from "next/head";

// function MyApp({ Component, pageProps }) {
//   return (
//     <div className="root-app">
//       <Head>
//         <title>Create Next App</title>
//         <link rel="icon" href="/favicon.ico" />
//         <link rel="stylesheet" href="/css/global.css" />
//       </Head>
//       <Component {...pageProps} />
//     </div>
//   )
// }


// ----------------------------  class component  -----------------------------


// class MyApp extends React.Component<AppProps> {
//   render() {
//     return(
//       <div className="root-app">
//         <Head>
//           <title>Create Next App</title>
//           <link rel="icon" href="/favicon.ico" />
//           <link rel="stylesheet" href="/css/global.scss" />
//         </Head>
//         <this.props.Component {...this.props.pageProps} />
//       </div>
//     )
//   }
// }


// -----------------------------  function component  -----------------------------

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <div className="root-app">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/css/global.css" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp;
