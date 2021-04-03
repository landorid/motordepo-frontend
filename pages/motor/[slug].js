import Head from "next/head";
import motorService from "../../services/motorService";
import { SITE_NAME } from "../../constants";

function Motor(props) {
  const { motor } = props;
  const name = `${motor?.marka} ${motor?.tipus} ${motor?.kivitel} ${motor?.gyartas_ev}`;
  return (
    <div>
      <Head>
        <title>
          Eladó {motor ? name : "használt motor"} - {SITE_NAME}
        </title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
    </div>
  );
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  // const res = await fetchEntries()
  // const posts = await res.map((p) => {
  //   return { ...p.fields, id: p.sys.id }
  // })
  // // Get the paths we want to pre-render based on posts
  // const paths = posts.map((post) => `/posts/${post.id}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths: [], fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    const data = await motorService.getMotor(params.slug);
    if (!data) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }

    return {
      props: { motor: data }, // will be passed to the page component as props
    };
  } catch {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
}

export default Motor;
