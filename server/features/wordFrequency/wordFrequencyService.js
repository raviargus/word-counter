const wordFrequencyRepository = require('./wordFrequencyRepository');

module.exports = {
  fetchFrequency,
  saveAndcountFrequency
};


/**
 * Saves and fetches the latest frequency count.
 * @param {string} wordString User Input String
 * @returns {Object[]} Frequencies Array
 */
async function saveAndcountFrequency(wordString) {

  // Split the wordString with single/Multiple whiteSpaces
  // Taking space as seperator and not considering special characters and will take it with the words only and will consider it as one word
  let words = wordString.split(/\s+/);
  // Convert all the words into lowerCase
  words = words.map(word => word.toLowerCase());

  // Calculate the frequency of the wordString provided using object-key structure to make it more efficient.
  let frequencies = {};
  words.forEach(word => {
    frequencies[word] = (frequencies[word] || 0) + 1;
  });


  // Converted the frequencies into array of values for inserting into the frequencies table.
  frequencies = Object.keys(frequencies).map(word => {
    return [
      word, frequencies[word]
    ];
  });

  // Update the frequencies.
  await wordFrequencyRepository.updateFrequency(frequencies);

  // Fetch the latest frequency count and return.
  frequencies = await fetchFrequency();
  return frequencies;
}

/**
 * Fetches the Frequencies
 * @returns {Object[]} Frequencies Array
 */
async function fetchFrequency() {
  const frequencies = await wordFrequencyRepository.fetchFrequency();
  return frequencies.rows;
}
