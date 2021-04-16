import { Hits } from "react-instantsearch-dom";
import ProductItem from "../ProductItem";

const ResultProduct = ({ hit }) => (
  <ProductItem
    {...hit}
    tavolsag={Math.floor(hit._rankingInfo.geoDistance / 1000)}
  />
);

function Result() {
  return <Hits hitComponent={ResultProduct} />;
}

export default Result;
