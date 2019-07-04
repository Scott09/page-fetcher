const args = process.argv.slice(2);
const fs = require('fs');
const request = require('request');

const url = args[0];
const path = args[1];


request(url, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received

  fs.writeFile(path, body, function (err) {
    if (err) throw err;
    console.log('Saved!');
    fs.stat(path, function(err, stats) {
      if (!err) {
        console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
      }
  });
  });

  console.log('body:', body); // Print the HTML for the Google homepage.
});


