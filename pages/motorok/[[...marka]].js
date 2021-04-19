import { useState } from "react";
import { useRouter } from "next/router";
import qs from "qs";
import algoliasearch from "algoliasearch/lite";
import { InstantSearch, Hits, Configure, Stats } from "react-instantsearch-dom";

import Page from "../../layout/Page";
import Filter from "../../components/Motors/Filter";
import ProductItem from "../../components/ProductItem";
import { MARKA } from "../../constants";
import Pagination from "../../components/Pagination";
import SortBy from "../../components/Motors/SortBy";
import Drawer from "../../components/Drawer";
import Result from "../../components/Motors/Result";
import BannerAd from "../../components/BannerAd";

const algoliaClient = algoliasearch(
  process.env.NEXT_PUBLIC_ALGOLIA_APP_ID,
  process.env.NEXT_PUBLIC_ALGOLIA_API_KEY
);

const pathToSearchState = (path) =>
  path.includes("?") ? qs.parse(path.substring(path.indexOf("?") + 1)) : {};

export default function Motorok(props) {
  const router = useRouter();
  const { query } = router.query;

  const [searchState, setSearchState] = useState(
    pathToSearchState(router.asPath)
  );
  const [filters, setFilters] = useState({
    string: props.marka ? `marka:${props.marka}` : "",
    query: query ? query : "",
    values: {},
    status: false,
  });

  const createURL = (state, filters) => {
    const markaPath = filters?.marka ? `${filters?.marka}/` : "";

    return `/motorok/${markaPath}`;
  };

  const searchStateToUrl = (pathname, searchState, filters) =>
    searchState ? `${createURL(searchState, filters)}` : "";

  const onSearchStateChange = (filters) => (searchState) => {
    const href = searchStateToUrl(router.pathname, searchState, filters);

    router.push(href, href, {
      shallow: true,
    });

    setSearchState(searchState);
  };

  const handleFilterOpen = () => setFilters({ ...filters, status: true });
  const handleFilterClose = () => setFilters({ ...filters, status: false });

  return (
    <Page>
      <BannerAd />
      <InstantSearch
        indexName="development_motor"
        searchClient={algoliaClient}
        searchState={searchState}
        onSearchStateChange={onSearchStateChange(filters.values)}
        createURL={createURL}
      >
        <Configure
          getRankingInfo
          aroundLatLngViaIP
          filters={filters.string}
          query={filters.query}
        />

        <div className="grid grid-cols-12 gap-4 mt-4">
          <div className="col-span-12 md:col-span-3">
            <div className="hidden sm:block">
              <Filter onChange={setFilters} />
            </div>
            <Drawer onClose={handleFilterClose} status={filters.status}>
              <Filter onChange={setFilters} />
            </Drawer>
          </div>
          <div className="col-span-12 md:col-span-9">
            <div className="flex items-center space-x-2 justify-between mb-4">
              <Stats
                className="text-grey-500 font-semibold text-sm ml-4 hidden sm:block"
                translations={{
                  stats(nbHits) {
                    return `${nbHits.toLocaleString()} találat`;
                  },
                }}
              />
              <div className="block sm:hidden">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={handleFilterOpen}
                >
                  Szűrés
                </button>
              </div>
              <SortBy
                defaultRefinement="development_motor"
                items={[
                  {
                    value: "development_motor",
                    label: "Vételár szerint növekvő",
                  },
                  {
                    value: "development_motor_ar_desc",
                    label: "Vételár szerint csökkenő",
                  },
                  {
                    value: "development_motor_tavolsag_asc",
                    label: "Távolság szerint növekvő",
                  },
                ]}
              />
            </div>
            <Result />
            <Pagination />
            {/*<PoweredBy />*/}
          </div>
        </div>
      </InstantSearch>
    </Page>
  );
}

/**
 *
 * Generate all possible brand page (TODO: add SEO later)
 */
export async function getStaticPaths() {
  const markaPages = MARKA.map((marka) => `/motorok/${marka.value}`);
  markaPages.push("/motorok");
  return { paths: markaPages, fallback: false };
}

export async function getStaticProps({ params, ...p }) {
  if (params.marka && Array.isArray(params.marka) && params.marka[0]) {
    return {
      props: {
        marka: params.marka[0],
      },
    };
  }

  return {
    props: {},
  };
}
