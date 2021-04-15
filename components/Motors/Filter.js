import { memo } from "react";
import range from "lodash/range";
import { useFormik } from "formik";
import { useRouter } from "next/router";

import {
  ALLAPOT,
  EGYEB,
  KIVITEL,
  MARKA,
  MUNKAUTEM,
  OKMANYOK,
  SEBESSEGVALTO,
} from "../../constants";
import MultiSelect from "./MultiSelect";
import FilterSelect from "./FilterSelect";
import RangeInput from "./RangeInput";
import {
  addMultiItemToFilter,
  addRangeItemToFilter,
  addSingleItemToFilter,
} from "../../utils";

function Filter({ onChange }) {
  const router = useRouter();
  const { marka, query } = router.query;

  const formik = useFormik({
    initialValues: {
      marka: marka && Array.isArray(marka) ? marka[0] : "",
      tipus: "",
      kivitel: [],
      ar: { min: "", max: "" },
      gyartas_ev: { min: "", max: "" },
      hengerurtartalom: { min: "", max: "" },
      km: { min: "", max: "" },
      teljesitmeny: "",
      teljesitmeny_unit: "LE",
      munkautem: "",
      sebessegvalto: "",
      okmanyok: "",
      allapot: "",
      egyeb: [],
    },
    enableReinitialize: true,
    onSubmit: (values) => {
      const filters = [];
      //query: típus
      addSingleItemToFilter(filters, "marka", values.marka);
      addMultiItemToFilter(filters, "kivitel", values.kivitel);
      addRangeItemToFilter(filters, "ar", values.ar);
      addRangeItemToFilter(filters, "gyartas_ev", values.gyartas_ev);
      addRangeItemToFilter(
        filters,
        "hengerurtartalom",
        values.hengerurtartalom
      );
      addRangeItemToFilter(filters, "km", values.km);
      addSingleItemToFilter(filters, "teljesitmeny", values.teljesitmeny);
      addSingleItemToFilter(
        filters,
        `teljesitmeny${values.teljesitmeny_unit}`,
        values.teljesitmeny
      );
      addSingleItemToFilter(filters, "munkautem", values.munkautem);
      addSingleItemToFilter(filters, "sebessegvalto", values.sebessegvalto);
      addSingleItemToFilter(filters, "okmanyok", values.okmanyok);
      addSingleItemToFilter(filters, "allapot", values.allapot);
      addMultiItemToFilter(filters, "egyeb", values.egyeb);

      const filtersString = filters.join(" AND ");
      const queryString = values.tipus;

      onChange({
        string: filtersString,
        query: queryString,
        values: values,
      });
    },
  });

  const justNumber = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const years = range(1900, new Date().getUTCFullYear() + 1).reverse();

  return (
    <form onSubmit={formik.handleSubmit}>
      <FilterSelect
        options={MARKA}
        label="Márka"
        name="marka"
        value={formik.values.marka}
        onChange={formik.handleChange}
      />
      <fieldset className="mb-2">
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
          value={formik.values.tipus}
          onChange={formik.handleChange}
          autoComplete="off"
          className="input-filter"
        />
      </fieldset>
      <MultiSelect
        options={KIVITEL}
        label="Kivitel"
        name="kivitel"
        onChange={formik.setFieldValue}
        selected={formik.values.kivitel}
      />
      {/*Ár -tól -ig*/}
      <RangeInput
        label="Ár"
        name="ar"
        unit="Ft"
        value={formik.values.ar}
        onChange={formik.handleChange}
      />
      {/*Évjárat -tól -ig*/}
      <p className="text-sm text-grey-700">
        <span className="font-medium">Évjárt</span> (-tól -ig)
      </p>
      <fieldset className="grid grid-cols-2 gap-4 mb-2">
        <div>
          <label htmlFor="gyartas_ev_min" className="hidden">
            -tól
          </label>
          <select
            id="gyartas_ev_min"
            name="gyartas_ev.min"
            value={formik.values.gyartas_ev.min}
            onChange={formik.handleChange}
            autoComplete="off"
            className="mt-1 block w-full py-2 px-3 border border-grey-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          >
            <option value="">Mindegy</option>
            {years.map((ev) => (
              <option value={ev} key={ev}>
                {ev}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="gyartas_ev_max" className="hidden">
            -tól
          </label>
          <select
            id="gyartas_ev_max"
            name="gyartas_ev.max"
            value={formik.values.gyartas_ev.max}
            onChange={formik.handleChange}
            autoComplete="off"
            className="mt-1 block w-full py-2 px-3 border border-grey-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm"
          >
            <option value="">Mindegy</option>
            {years.map((ev) => (
              <option value={ev} key={ev}>
                {ev}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <RangeInput
        label="Hengerűrtartalom"
        name="hengerurtartalom"
        value={formik.values.hengerurtartalom}
        unit="cm³"
        onChange={formik.handleChange}
      />
      <RangeInput
        label="Kilométeróra állása"
        name="km"
        unit="km"
        value={formik.values.km}
        onChange={formik.handleChange}
      />
      {/*Teljesítmény*/}
      <fieldset className="mb-2">
        <label
          htmlFor="teljesitmeny"
          className="block text-sm font-medium text-grey-700"
        >
          Teljesítmény
        </label>
        <div className="mt-1 relative rounded-md">
          <input
            type="tel"
            onKeyPress={justNumber}
            name="teljesitmeny"
            id="teljesitmeny"
            onChange={formik.handleChange}
            value={formik.values.teljesitmeny}
            className="input-filter pr-14 text-right"
            autoComplete="off"
          />
          <div className="absolute inset-y-0 right-0 flex items-center">
            <label htmlFor="unit" className="sr-only">
              Mértékegység
            </label>
            <select
              id="unit"
              name="teljesitmeny_unit"
              onChange={formik.handleChange}
              value={formik.values.teljesitmeny_unit}
              className="focus:ring-red-500 focus:border-red-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-grey-500 sm:text-sm rounded-md"
            >
              <option>LE</option>
              <option>kW</option>
            </select>
          </div>
        </div>
      </fieldset>
      <FilterSelect
        options={MUNKAUTEM.map((m) => ({ name: m, value: m }))}
        label="Munkaütem"
        name="munkautem"
        value={formik.values.munkautem}
        onChange={formik.handleChange}
      />
      <FilterSelect
        options={SEBESSEGVALTO.map((s) => ({ name: s, value: s }))}
        label="Sebességváltó"
        name="sebessegvalto"
        value={formik.values.sebessegvalto}
        onChange={formik.handleChange}
      />
      <FilterSelect
        options={OKMANYOK.map((o) => ({ name: o, value: o }))}
        label="Okmányok"
        name="okmanyok"
        value={formik.values.okmanyok}
        onChange={formik.handleChange}
      />
      <FilterSelect
        options={ALLAPOT.map((a) => ({ name: a, value: a }))}
        label="Állapot"
        name="allapot"
        value={formik.values.allapot}
        onChange={formik.handleChange}
      />
      <MultiSelect
        options={EGYEB}
        label="Egyéb információ"
        name="egyeb"
        onChange={formik.setFieldValue}
        selected={formik.values.egyeb}
      />
      <button
        className="btn btn-primary w-full flex justify-center"
        type="submit"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
        Szűrés
      </button>
    </form>
  );
}

export default memo(Filter);
