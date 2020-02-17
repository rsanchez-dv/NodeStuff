
const yargs = require('yargs');
const geocode = require('./Geocode/geocode');
const weather = require('./Weather/weather');

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;
    
var location = geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if(errorMessage){
        console.log(errorMessage);
    }else {
        console.log(results.address)
        weather.getWeather(results.latitude,results.longitude, (errorMessage, weatherResult) => {
            if(errorMessage){
               console.log(errorMessage);
            }else {
               console.log(`Current weather : ${weatherResult.temperature}°F`);
               console.log(`Feels like: ${weatherResult.apparentTemperature}°F`);
            }
        });
    }
});

