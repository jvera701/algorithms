// Solution made with make it real
// https://www.youtube.com/watch?v=WIKbSqst9M0

var mostCommonWord = function (paragraph, banned) {
  const words = paragraph.toLowerCase().split(/\W+/);
  const freqs = frequencies(words, banned);
  return findMaxWord(freqs);
};

function frequencies(words, banned) {
  const freqs = {};
  for (let w of words) {
    if (w && !banned.includes(w)) {
      freqs[w] = freqs[w] ? freqs[w] + 1 : 1;
    }
  }
  return freqs;
}

function findMaxWord(freqs) {
  let max = 0;
  let maxWord = "";
  for (let w in freqs) {
    if (freqs[w] > max) {
      max = freqs[w];
      maxWord = w;
    }
  }
  return maxWord;
}
