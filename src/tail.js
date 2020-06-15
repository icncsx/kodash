export default (arr) => {
  if (arr.length === 0) {
    return null;
  }
  return arr.slice(1)[0];
};
