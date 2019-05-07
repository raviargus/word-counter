const format = require('pg-format');

module.exports = {
  updateFrequency,
  fetchFrequency
};

/**
 * Updates the frequency.
 * @param {Array[]} frequencies Array of frequencies to be updated
 * @returns {Promise} Resolve if success, reject if error
 */
async function updateFrequency(frequencies) {
  let client;
  try {
    client = await global.pool.connect();
    await client.query(format(`
      INSERT INTO wordfrequency (word, frequency) VALUES %L
      ON CONFLICT (word)
      DO
      UPDATE SET frequency = wordfrequency.frequency + excluded.frequency;`, frequencies));
  } catch (error) {
    throw new Error(error);
  } finally {
    client.release();
  }
}

/**
 * Fetches the frequency Count.
 * @returns {Promise} Resolve if success, reject if error
 */
async function fetchFrequency() {
  let client;
  try {
    client = await global.pool.connect();
    return await client.query('SELECT * FROM wordfrequency');
  } catch (error) {
    throw error;
  } finally {
    client.release();
  }
}
