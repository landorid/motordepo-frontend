export const setHttp = (link) => {
  if (link.search(/^http[s]?\:\/\//) === -1) {
    link = "http://" + link;
  }
  return link;
};

export const formatPrice = (price) => {
  if (!price) return null;

  const client = new Intl.NumberFormat("hu-HU", {
    style: "currency",
    currency: "HUF",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  });

  return client.format(price);
};

export const addSingleItemToFilter = (filterArray, name, value, number) => {
  if (!value) return;

  if (number) {
    filterArray.push(`${name}: ${value}`);
  } else {
    filterArray.push(`${name}: "${value}"`);
  }
};

export const addMultiItemToFilter = (filterArray, name, values) => {
  if (values.length < 1) return;

  const items = values.map((item) => `${name}: "${item}"`);
  filterArray.push(items.join(" OR "));
};

export const addRangeItemToFilter = (filterArray, name, values) => {
  if (values.min) {
    filterArray.push(`${name} >= ${values.min}`);
  }

  if (values.max) {
    filterArray.push(`${name} <= ${values.max}`);
  }
};
