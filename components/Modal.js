import { Transition } from "@headlessui/react";
import { eladoType } from "../constants/types";
import * as PropTypes from "prop-types";

function Modal({ status, onClose, children }) {
  if (!status) return null;

  return (
    <div
      className="fixed z-10 inset-0 overflow-y-auto"
      role="dialog"
      aria-modal="true"
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
        <Transition
          show={status}
          appear
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          className="fixed inset-0 bg-grey-500 bg-opacity-75 transition-opacity"
          onClick={onClose}
          afterLeave={onClose}
        >
          <div aria-hidden="true" />
        </Transition>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        >
          &#8203;
        </span>

        <Transition
          show={status}
          appear
          enter="ease-out duration-300"
          enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          enterTo="opacity-100 translate-y-0 sm:scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 translate-y-0 sm:scale-100"
          leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
        >
          <div>
            <button
              className="absolute top-2 right-2 rounded-full hover:bg-grey-200 transition-colors p-1 focus:outline-none"
              onClick={onClose}
            >
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              {children}
            </div>
          </div>
        </Transition>
      </div>
    </div>
  );
}

Modal.propTypes = {
  status: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
