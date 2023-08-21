const request = require('request');

const URL = `https://api.thecatapi.com/v1/breeds/search?q=sib`;
console.log("Fetching data...");
const fetchBreed = function(breed, callback) {
  request(URL, (err, response, body) => {
    if (err) {
      callback(err, null);
    } else {
      let data = JSON.parse(body);
      console.log(data['description']);
      console.log(typeof data);
      const breedData = data[0];
      if (breedData) {
        callback(null, breed.description);
      }
      callback(`${breed} information is not not available`, null);
    }
  });
};

module.exports = fetchBreed;
