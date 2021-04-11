import Head from "next/head";
import { useRouter } from "next/router";

import motorService from "../../services/motorService";
import { SITE_NAME } from "../../constants";
import Page from "../../layout/Page";
import Gallery from "../../components/Motor/Gallery";
import Location from "../../components/Motor/Location";
import ActionBar from "../../components/Motor/ActionBar";
import Details from "../../components/Motor/Details";
import EladoMeta from "../../components/Motor/EladoMeta";
import EladoProfile from "../../components/Motor/EladoProfile";

function Motor(props) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Motor betöltése...</div>;
  }

  const {
    motor: { elado, ...motor },
  } = props;
  const name = `${motor?.marka} ${motor?.tipus} ${motor?.kivitel} ${motor?.gyartas_ev}`;

  const images = motor.galeria.filter((file) => file.mime.match(/image/));
  const price = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return (
    <Page>
      <Head>
        <title>
          Eladó {motor ? name : "használt motor"} - {SITE_NAME}
        </title>
      </Head>
      <div className="grid grid-cols-12 bg-white">
        <div className="col-span-12 md:col-span-8">
          <Gallery images={images} />
        </div>
        <div className="col-span-12 md:col-span-4 p-4 flex flex-col pb-0">
          <ActionBar id={motor.id} created_at={motor.created_at} />
          <h1 className="font-bold text-2xl leading-tight">{name}</h1>
          <Location city={motor.varos} state={motor.megye} />
          <p className="text-red-500 font-bold text-2xl my-8">
            {price.format(motor.ar)}
          </p>
          <EladoMeta elado={elado} />
          <div className="border-b-2 border-grey-100 pt-6" />
        </div>
        <div className="col-span-12 md:col-span-8 p-4">
          <Details motor={motor} />
          <div className="border-b-2 border-grey-100 mt-auto pt-6" />
          <p className="font-bold text-lg mt-6 mb-4">A hirdetés feladója</p>
          <EladoProfile elado={elado} telefonszam={motor.telefonszam} />
        </div>
      </div>
    </Page>
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
