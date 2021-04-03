import Head from "next/head";
import ProductItem from "../components/ProductItem";
import Page from "../layout/Page";

export default function Home() {
  return (
    <Page>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-3">filter</div>
        <div className="col-span-9">
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </Page>
  );
}
