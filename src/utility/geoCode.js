const request = require("request");

var geoCode = function (city, cb) {
  request(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${city}.json?access_token=pk.eyJ1IjoiZXN0aGVycnJycnJycnJycnJyciIsImEiOiJja250dGVjYnQwNWNuMnVueG01emExczM0In0.wbbNFu7lmBo8R_H8sFnYKw`,
    function (error, response, body) {
      console.error("error:", error);
      var object = JSON.parse(body);
      cb(object.features[0].center[1], object.features[0].center[0])
    }
  );
};

module.exports = geoCode;