export default (sentence) => {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char in results) {
      results[char].push(i);
    } else {
      results[char] = [i];
    }
  }
  return results;
};
