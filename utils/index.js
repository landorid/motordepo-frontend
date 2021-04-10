export const setHttp = (link) => {
  if (link.search(/^http[s]?\:\/\//) === -1) {
    link = "http://" + link;
  }
  return link;
};
