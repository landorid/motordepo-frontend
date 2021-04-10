import Image from "next/image";
import Link from "next/link";
import get from "lodash/get";

import { eladoType } from "../../constants/types";

function EladoMeta({ elado }) {
  const avatar = get(elado, "avatar.formats.thumbnail.url", null);

  return (
    <div className="mt-auto flex">
      <div className="w-16 h-12 relative border border-grey-200 mr-2 bg-grey-100 flex justify-center items-center">
        {avatar ? (
          <Image src={avatar} objectFit="cover" layout="fill" unoptimized />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-grey-300"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        )}
      </div>
      <div className="flex justify-center flex-col">
        <span className="uppercase text-xs tracking-wider bg-grey-200 self-start px-1.5 py-1 rounded mb-1 text-grey-600">
          {elado.isCompany ? "Céges" : "Magán"}
        </span>
        <Link href={`/elado/${elado.id}`}>
          <a className="font-bold block leading-none hover:underline">
            {elado.name}
          </a>
        </Link>
      </div>
    </div>
  );
}

EladoMeta.propTypes = {
  elado: eladoType,
};

export default EladoMeta;
