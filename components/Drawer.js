import PropTypes from "prop-types";
import { useEffect, memo } from "react";
import { Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";

function Drawer({ status, onClose, children }) {
  useEffect(() => {
    if (status) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [status]);

  return (
    <>
      <aside
        className={`flex flex-col shadow-lg transform top-0 right-0 w-3/4 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          status ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="h-14 w-full flex justify-end">
          <button type="button" onClick={onClose} className="text-grey-900 p-4">
            <XIcon className="w-6 h-6" />
          </button>
        </div>
        <div className="flex flex-col flex-1 p-4 pt-0">{children}</div>
      </aside>
      <Transition
        show={status}
        appear
        enter="ease-out duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="ease-in duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed inset-0 bg-grey-500 bg-opacity-75 transition-opacity z-10"
        onClick={onClose}
        afterLeave={onClose}
      >
        <div aria-hidden="true" />
      </Transition>
    </>
  );
}

Drawer.propTypes = {
  status: PropTypes.bool,
  onClose: PropTypes.func.isRequired,
};

export default memo(Drawer);
