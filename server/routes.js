
const glob = require('glob');
const path = require('path');

module.exports = (app) => {
  // creates the index file lists for all the features
  const indexFiles = glob.sync(
    path.join(__dirname, 'features') + '/**/*[i|I]ndex.js'
  );

  // requires routes
  indexFiles.forEach((file) => {
    require(file)(app);
  });

};

