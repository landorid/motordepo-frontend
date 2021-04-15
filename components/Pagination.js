import { connectPagination } from "react-instantsearch-dom";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

function Pagination({ currentRefinement, nbPages, refine }) {
  if (nbPages < 2) {
    return null;
  }

  return (
    <div className="bg-white px-4 py-3 border-t border-grey-200 sm:px-6">
      <div className="flex items-center justify-between">
        {currentRefinement > 1 ? (
          <a
            className="btn btn-secondary cursor-pointer"
            onClick={() => refine(currentRefinement - 1)}
          >
            <ChevronLeftIcon className="w-6 h-6" /> Előző
          </a>
        ) : null}
        {currentRefinement < nbPages ? (
          <a
            className="btn btn-secondary cursor-pointer ml-auto"
            onClick={() => refine(currentRefinement + 1)}
          >
            Következő <ChevronRightIcon className="w-6 h-6" />
          </a>
        ) : null}
      </div>
    </div>
  );
}

export default connectPagination(Pagination);
