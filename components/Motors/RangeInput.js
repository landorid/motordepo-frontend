import PropTypes from "prop-types";
import clsx from "clsx";

function RangeInput({ label, unit, name, className, value, onChange }) {
  const justNumber = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  return (
    <fieldset className={clsx("mb-2", className)}>
      <p className="text-sm text-grey-700">
        <span className="font-medium">{label}</span> (-tól -ig)
      </p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor={`${name}_min`} className="hidden">
            -tól
          </label>
          <div className="mt-1 relative rounded-md">
            <input
              type="tel"
              autoComplete="off"
              id={`${name}_min`}
              name={`${name}.min`}
              className="input-filter pr-9 text-right"
              onKeyPress={justNumber}
              value={value.min}
              onChange={onChange}
            />
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <span className="text-grey-500 sm:text-sm">{unit}</span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor={`${name}_max`} className="hidden">
            -ig
          </label>
          <div className="mt-1 relative rounded-md">
            <input
              type="tel"
              autoComplete="off"
              name={`${name}.max`}
              id={`${name}_max`}
              className="input-filter pr-9 text-right"
              onKeyPress={justNumber}
              value={value.max}
              onChange={onChange}
            />
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <span className="text-grey-500 sm:text-sm">{unit}</span>
            </div>
          </div>
        </div>
      </div>
    </fieldset>
  );
}

RangeInput.propTypes = {
  label: PropTypes.string.isRequired,
  unit: PropTypes.string,
  value: PropTypes.shape({
    min: PropTypes.string,
    max: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default RangeInput;
