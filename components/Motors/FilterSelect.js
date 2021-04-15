import PropTypes from "prop-types";
import clsx from "clsx";

function FilterSelect({ options, label, value, name, onChange, className }) {
  return (
    <fieldset className={clsx("mb-2", className)}>
      <label htmlFor={name} className="block text-sm font-medium text-grey-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        autoComplete="off"
        onChange={onChange}
        value={value}
        className="mt-1 block w-full py-2 px-3 border border-grey-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
      >
        <option value="">Mindegy</option>
        {options.map((option) => (
          <option value={option.value} key={option.value}>
            {option.name}
          </option>
        ))}
      </select>
    </fieldset>
  );
}

FilterSelect.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default FilterSelect;
