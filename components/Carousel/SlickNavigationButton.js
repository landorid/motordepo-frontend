import PropTypes from "prop-types";

function SlickNavigationButton({ onClick, variant }) {
  return (
    <div
      className={`w-10 h-10 bg-grey-900 bg-opacity-50 hover:bg-opacity-80 transition-colors rounded absolute z-10 top-1/2 transform -translate-y-1/2 cursor-pointer ${
        variant === "next" ? "right-4" : "left-4"
      }`}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        className={`text-white ${
          variant === "next" ? "transform rotate-180" : null
        }`}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
}

SlickNavigationButton.propTypes = {
  variant: PropTypes.oneOf(["next", "prev"]),
};

export default SlickNavigationButton;
