import { connectSortBy } from "react-instantsearch-dom";

function SortBy({ items, currentRefinement, refine }) {
  const handleOnChange = (e) => refine(e.currentTarget.value);
  return (
    <select
      onChange={handleOnChange}
      value={currentRefinement}
      className="w-auto block ml-auto py-2 px-3 pr-8 border border-grey-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
    >
      {items.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default connectSortBy(SortBy);
