import PropTypes from "prop-types";

function Location({ city, state, distance }) {
  return (
    <>
      <p className="text-grey-500 mb-0">
        {city}
        {state ? `, ${state} megye` : null}
      </p>
      {distance ? (
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
          {distance} km-re
        </p>
      ) : null}
    </>
  );
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
  state: PropTypes.string,
  distance: PropTypes.number,
};

export default Location;
