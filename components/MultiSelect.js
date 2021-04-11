import PropTypes from "prop-types";
import { useState, useRef, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";

function MultiSelect({ options, label, selected, onChange }) {
  const node = useRef();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, []);

  function isSelected(value) {
    return !!selected.find((el) => el === value);
  }

  function handleSelect(value) {
    if (!isSelected(value)) {
      const selectedUpdated = [...selected, options.find((el) => el === value)];
      onChange(selectedUpdated);
    } else {
      handleDeselect(value);
    }
    setIsOpen(true);
  }

  function handleDeselect(value) {
    const selectedUpdated = selected.filter((el) => el !== value);
    onChange(selectedUpdated);
    setIsOpen(true);
  }

  const handleClick = (e) => {
    if (node.current?.contains(e.target)) {
      return;
    }
    setIsOpen(false);
  };

  const Btn = () => {
    return (
      <button
        className={`cursor-default relative w-full border rounded-md bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue  transition ease-in-out duration-150 sm:text-sm sm:leading-5 ${
          isOpen ? "border-red-500 ring-red-500 ring-1" : "border-grey-300"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="block truncate">
          {selected.length < 1 ? "Mindegy" : selected.sort().join(", ")}
        </span>
        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <svg
            className="h-5 w-5 text-grey-400"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
          >
            <path
              d="M7 7l3-3 3 3m0 6l-3 3-3-3"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>
    );
  };

  return (
    <div className="w-full mx-auto" ref={node}>
      <Listbox
        as="div"
        className="space-y-1"
        value={selected}
        onChange={(value) => handleSelect(value)}
        open={isOpen}
      >
        {() => (
          <>
            <Listbox.Label className="block text-sm leading-5 font-medium text-grey-700">
              {label}
            </Listbox.Label>
            <div className="relative">
              <span className="inline-block w-full rounded-md shadow-sm">
                <Listbox.Button open={isOpen} as={Btn} />
              </span>

              <Transition
                unmount={false}
                show={isOpen}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                className="z-10 absolute mt-1 w-full rounded-md bg-white shadow-lg"
              >
                <Listbox.Options
                  static
                  className="max-h-60 rounded-md py-1 text-base leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                >
                  {options.map((person) => {
                    const selected = isSelected(person);
                    return (
                      <Listbox.Option
                        key={person}
                        value={person}
                        className="focus:outline-none"
                      >
                        {({ active }) => (
                          <div
                            className={`${
                              active
                                ? "text-white bg-blue-600"
                                : "text-grey-900"
                            } cursor-pointer select-none relative py-1.5 pl-7 pr-4 text-xs`}
                          >
                            <span
                              className={`${
                                selected ? "font-semibold" : "font-normal"
                              } block truncate`}
                            >
                              {person}
                            </span>
                            {selected && (
                              <span
                                className={`${
                                  active ? "text-white" : "text-blue-600"
                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                              >
                                <svg
                                  className="h-4 w-4"
                                  xmlns="http://www.w3.org/2000/svg"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path
                                    fillRule="evenodd"
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                    clipRule="evenodd"
                                  />
                                </svg>
                              </span>
                            )}
                          </div>
                        )}
                      </Listbox.Option>
                    );
                  })}
                </Listbox.Options>
              </Transition>
            </div>
          </>
        )}
      </Listbox>
    </div>
  );
}

MultiSelect.propTypes = {
  options: PropTypes.array.isRequired,
  selected: PropTypes.array,
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string,
};
export default MultiSelect;
