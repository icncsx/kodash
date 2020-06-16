export default (arr, ...removeList) => {
  const removeSet = new Set(removeList)
  return arr.filter(function (el) {
    return !removeSet.has(el)
  })
}
