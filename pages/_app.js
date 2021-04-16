import "../styles/globals.css";
import Header from "../layout/Header";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-grey-100 h-full w-full flex flex-col">
      <Header />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
