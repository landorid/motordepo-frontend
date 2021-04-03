import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-grey-100 h-full w-full flex flex-col">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
