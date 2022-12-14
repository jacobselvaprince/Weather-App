const request = require("request");

var foreCast = function (lat, long, cb) {
  request(
    `http://api.weatherstack.com/current?access_key=ceecfce4f8640b409336bc18c0068dd5&query=${lat},${long}`,
    function (error, response, body) {
      console.error("error:", error);
      var object = JSON.parse(body);
      
      cb(object.current.weather_descriptions[0])
    }
  );
};

module.exports = foreCast;