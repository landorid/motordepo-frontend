import Image from "next/image";
import Link from "next/link";

function ProductItem(props) {
  return (
    <Link href="/motor/aprilia-pegaso-650-turamotor-2002">
      <a className="rounded border border-grey-200 p-3 m-auto flex mb-2 relative bg-white">
        <figure className="w-52 h-36 relative border border-grey-200">
          <Image
            src="https://img1.vetrinamotori.it/images/24567136/1000x750/annunciomymoto.jpg"
            alt="Picture of the author"
            layout="fill"
            objectFit="cover"
          />
          <p className="absolute left-1 bottom-1 bg-grey-900 bg-opacity-40 flex py-1 px-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4 text-white mr-1"
            >
              <path
                fillRule="evenodd"
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-white text-xs">5</span>
          </p>
        </figure>
        <div className="ml-2 flex flex-col">
          <h2 className="font-bold mb-0 text-lg leading-none">
            Piaggio Vespa 50 LX
          </h2>
          <p className="text-grey-500 mb-0">Szombathely, Vas megye</p>
          <p className="text-green-600 flex font-bold text-sm items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                clipRule="evenodd"
              />
            </svg>{" "}
            15 km-re
          </p>
          <p className="text-grey-500 mt-auto">
            <span className="mr-2">32 000 km</span>
            <span>&#183;</span>
            <span className="mr-2 ml-2">2010</span>
            <span>&#183;</span>
            <span className="ml-2">50 cm³</span>
          </p>
          <p className="text-red-500 font-bold text-xl mt-2">1.500.000 Ft</p>
        </div>
        <div className="absolute right-3 top-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-8 h-8 text-red-500"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        </div>
      </a>
    </Link>
  );
}

export default ProductItem;
