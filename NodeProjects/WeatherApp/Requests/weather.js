const request = require('request');
var WEATHER_API_KEY = process.env.WEATHER_API_KEY;

var getWeather = (latitude, longitude,callback) => {
    request({
        url: `https://api.darksky.net/forecast/${WEATHER_API_KEY}/${latitude},${longitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined,{
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        } else {
            callback('Unable to fetch weather');
        }
    })
}
module.exports.getWeather = getWeather;