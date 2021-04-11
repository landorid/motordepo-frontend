import Head from "next/head";
import ProductItem from "../components/ProductItem";
import Page from "../layout/Page";
import Filter from "../components/Motors/Filter";

export default function Home() {
  return (
    <Page>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-3">
          <Filter />
        </div>
        <div className="col-span-12 md:col-span-9">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </Page>
  );
}
