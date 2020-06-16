const eqArrays = (arr1, arr2) => {
  for (let index in arr1) {
    const el1 = arr1[index];
    const el2 = arr2[index];

    if (Array.isArray(el1) && Array.isArray(el2)) {
      // both are arrays
      eqArrays(el1, el2);
    } else if (!(Array.isArray(el1) && !Array.isArray(el2))) {
      // both are NOT arrays
      if (el1 !== el2) {
        return false;
      }
      // one of them is an array
    } else if (Array.isArray(el1) || Array.isArray(el2)) {
      return false;
    }
  }
  return true;
};

export default eqArrays;
