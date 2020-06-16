export default (dict, val) => {
  for (const key in dict) {
    if (dict[key] === val) {
      return key
    }
  }
}
