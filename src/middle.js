export default (arr) => {
  const arrLength = arr.length;

  if (arr.length === 0) {
    return null;
  }

  if (arrLength % 2 === 0) {
    return [arr[arrLength / 2 - 1], arr[arrLength / 2]];
  } else {
    return [arr[Math.floor(arrLength / 2)]];
  }
};
