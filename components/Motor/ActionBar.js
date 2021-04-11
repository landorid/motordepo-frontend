import PropTypes from "prop-types";
import formatDistance from "date-fns/formatDistance";
import parseISO from "date-fns/parseISO";
import huLocale from "date-fns/locale/hu";
import { useState } from "react";
import Modal from "../Modal";

function ActionBar(props) {
  const [share, setShare] = useState(false);
  const handleOpen = () => setShare(true);
  const handleClose = () => setShare(false);

  return (
    <div className="flex justify-between align-center border-b-2 border-grey-100 pb-4 mb-4">
      <Modal status={share} onClose={handleClose}>
        <p className="font-bold text-lg">Oszd meg a hirdetést bárkivel!</p>
        <p className="text-grey-500">
          A hirdetés megosztásával növeled az üzletkötés esélyét.
        </p>
      </Modal>
      <div className="leading-none">
        <span className="text-grey-500 text-xs uppercase">Feladva</span>
        <span className="flex align-center text-grey-700">
          {formatDistance(parseISO(props?.created_at), new Date(), {
            addSuffix: true,
            locale: huLocale,
          })}
        </span>
      </div>
      <div className="flex">
        <button
          type="button"
          onClick={handleOpen}
          className="flex p-2 rounded-md hover:bg-grey-100 focus:outline-none transition-colors"
        >
          <span className="sr-only">Megosztás</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-grey-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
            />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => alert("kedvencek")}
          className="flex p-2 rounded-md hover:bg-grey-100 focus:outline-none transition-colors"
        >
          <span className="sr-only">Hozzáadás a kedvencekhez</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-grey-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

ActionBar.propTypes = {
  id: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
};
export default ActionBar;
