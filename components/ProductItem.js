import PropTypes from "prop-types";
import Image from "next/image";
import Link from "next/link";
import {
  PhotographIcon,
  LocationMarkerIcon,
  StarIcon,
} from "@heroicons/react/solid";
import { formatPrice } from "../utils";
import StrapiImage from "./StrapiImage";

function ProductItem({
  marka,
  tipus,
  kivitel,
  varos,
  megye,
  gyartas_ev,
  ar,
  km,
  tavolsag,
  galeria,
  slug,
  hengerurtartalom,
}) {
  const name = `${marka} ${tipus} ${kivitel}`;
  return (
    <Link href={`/motor/${slug}`}>
      <a className="rounded border border-grey-200 p-1 sm:p-3 m-auto flex flex-col sm:flex-row mb-2 relative bg-white">
        <figure className="w-full sm:w-52 mb-2 sm:mb-0 h-36 relative border border-grey-200">
          {/*<StrapiImage*/}
          {/*  src={galeria[0]}*/}
          {/*  alt={name}*/}
          {/*  layout="fill"*/}
          {/*  objectFit="cover"*/}
          {/*/>*/}
          <Image
            src={galeria[0].formats.small.url}
            objectFit="cover"
            layout="fill"
            unoptimized
          />
          <p className="absolute left-1 bottom-1 bg-grey-900 bg-opacity-60 flex py-1 px-1">
            <PhotographIcon className="w-4 h-4 text-white mr-1" />
            <span className="text-white text-xs">{galeria.length}</span>
          </p>
        </figure>
        <div className="ml-2 flex flex-col">
          <h2 className="font-bold mb-0 text-lg leading-none">{name}</h2>
          <p className="text-grey-500 mb-0">
            {varos}
            {megye ? `, ${megye}` : null}
          </p>
          <p className="text-green-600 flex font-bold text-sm items-center">
            <LocationMarkerIcon className="w-4 h-4" /> {tavolsag} km-re
          </p>
          <p className="text-grey-500 mt-auto">
            <span className="mr-2">{km} km</span>
            <span>&#183;</span>
            <span className="mr-2 ml-2">{gyartas_ev}</span>
            <span>&#183;</span>
            <span className="ml-2">{hengerurtartalom} cm³</span>
          </p>
          <p className="text-red-500 font-bold text-xl mt-2">
            {formatPrice(ar)}
          </p>
        </div>
        <div className="absolute right-3 bottom-3 sm:bottom-auto sm:top-3">
          <StarIcon className="w-8 h-8 text-red-500" />
        </div>
      </a>
    </Link>
  );
}

ProductItem.propTypes = {
  tavolsag: PropTypes.number,
};
export default ProductItem;
