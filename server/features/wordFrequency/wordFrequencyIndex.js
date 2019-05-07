const wordFrequencyController = require('./wordFrequencyController');

// Initialize the routes for the word Frequency count feature.
module.exports = function initializeRoutes(app) {
    app.post('/api/saveAndCountWordFrequency', wordFrequencyController.saveAndcountFrequency);
    app.get('/api/fetchFrequency', wordFrequencyController.fetchFrequency);
};
