import Link from "next/link";
import format from "date-fns/format";
import parseISO from "date-fns/parseISO";

import { eladoType } from "../../constants/types";
import { setHttp } from "../../utils";

function EladoProfile({ elado }) {
  return (
    <div className="rounded border-grey-100 border p-2">
      <div className="flex border-b border-grey-100 pb-2">
        <p className="p-2">
          <Link href={`/elado/${elado.id}`}>
            <a className="font-bold block leading-none hover:underline">
              {elado.name}
            </a>
          </Link>
          <span className="text-sm text-grey-500 leading-none">
            Felhasználó {format(parseISO(elado.created_at), "Y")} óta
          </span>
        </p>
        <Link href={`/elado/${elado.id}`}>
          <a className="hover:bg-grey-100 p-2 rounded-md ml-auto transition-colors">
            <span className="font-bold block leading-none text-center">1</span>
            <span className="text-sm text-grey-500 leading-none">hirdetés</span>
          </a>
        </Link>
      </div>
      {elado.isCompany ? (
        <div className="px-2 py-4">
          <p className="font-bold leading-none">Weboldal</p>
          <a
            className="text-grey-500 hover:underline"
            href={setHttp(elado.website)}
            target="_blank"
            rel="noopener nofollow"
          >
            {elado.website}
          </a>
          <p className="font-bold leading-none mt-4">Cím</p>
          <p className="text-grey-500">{elado.address}</p>
        </div>
      ) : null}
      <div className="p-2 pt-4 flex sm:justify-end">
        <button className="btn btn-primary mr-2 sm:mb-0 flex-1 sm:flex-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
            />
          </svg>
          Üzenetet írok
        </button>
        <button className="btn btn-secondary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 sm:mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
            />
          </svg>
          <span className="hidden sm:inline">Felhívom telefonon</span>
        </button>
      </div>
    </div>
  );
}

EladoProfile.propTypes = {
  elado: eladoType,
};

export default EladoProfile;
