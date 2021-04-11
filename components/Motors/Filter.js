import { useState } from "react";
import { KIVITEL, MARKA } from "../../constants";
import MultiSelect from "../MultiSelect";

function Filter(props) {
  const [kivitel, setKivitel] = useState([]);

  return (
    <div>
      <fieldset>
        <label
          htmlFor="marka"
          className="block text-sm font-medium text-grey-700"
        >
          Márka
        </label>
        <select
          id="marka"
          name="marka"
          autoComplete="off"
          className="mt-1 block w-full py-2 px-3 border border-grey-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
        >
          <option value="">Mindegy</option>
          {MARKA.map((marka) => (
            <option value={marka}>{marka}</option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        <label
          htmlFor="tipus"
          className="block text-sm font-medium text-grey-700"
        >
          Típus
        </label>
        <input
          type="text"
          name="tipus"
          id="tipus"
          autoComplete="off"
          className="input-filter"
        />
      </fieldset>
      <MultiSelect
        options={KIVITEL}
        label="Kivitel"
        onChange={setKivitel}
        selected={kivitel}
      />
      <p className="text-sm font-medium text-grey-700">
        Kilométeróra állása (-tól -ig)
      </p>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="price_from" className="hidden">
            -tól
          </label>
          <div className="mt-1 relative rounded-md">
            <input
              type="tel"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              autoComplete="off"
              name="price_from"
              id="price_from"
              className="input-filter pr-9 text-right"
            />
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <span className="text-grey-500 sm:text-sm">km</span>
            </div>
          </div>
        </div>
        <div>
          <label htmlFor="price_to" className="hidden">
            -ig
          </label>
          <div className="mt-1 relative rounded-md">
            <input
              type="tel"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              autoComplete="off"
              name="price_to"
              id="price_to"
              className="input-filter pr-9 text-right"
            />
            <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
              <span className="text-grey-500 sm:text-sm">km</span>
            </div>
          </div>
        </div>
      </div>
      <fieldset>
        <label
          htmlFor="teljesitmeny"
          className="block text-sm font-medium text-grey-700"
        >
          Teljesítmény
        </label>
        <div className="mt-1 relative rounded-md">
          <input
            type="tel"
            name="teljesitmeny"
            id="teljesitmeny"
            className="input-filter pr-14 text-right"
            autoComplete="off"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="unit" className="sr-only">
              Mértékegység
            </label>
            <select
              id="unit"
              name="unit"
              className="focus:ring-red-500 focus:border-red-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-grey-500 sm:text-sm rounded-md"
            >
              <option>LE</option>
              <option>kW</option>
            </select>
          </div>
        </div>
      </fieldset>
    </div>
  );
}

export default Filter;
