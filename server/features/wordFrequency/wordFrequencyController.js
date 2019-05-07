const wordFrequencyService = require('./wordFrequencyService');

module.exports = {
  fetchFrequency,
  saveAndcountFrequency
};

/**
 * Saves and fetches the latest frequency count.
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @param {CallableFunction} next Callback function
 */
async function saveAndcountFrequency(req, res, next) {
  const wordString = req.body.inputString;

  try {
    const frequencies = await wordFrequencyService.saveAndcountFrequency(wordString);
    return res.status(200).send(frequencies);
  } catch (error) {
    return res.status(500).send("Failed to update and save Frequency of word string");
  }
}

/**
 * Fetches the latest frequency count.
 * @param {Object} req Express request
 * @param {Object} res Express response
 * @param {CallableFunction} next Callback function
 */
async function fetchFrequency(req, res, next) {
  try {
    const frequencies = await wordFrequencyService.fetchFrequency();
    return res.status(200).send(frequencies);
  } catch (error) {
    return res.status(500).send("Failed to fetch Frequency of word string");
  }
}
