const request = require('request')
var GEOCODE_API_KEY = process.env.GEOCODE_API_KEY

var geocodeAddress = (address,callback) => {
    var encodedAddress = encodeURIComponent(address)
    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}&key=${GEOCODE_API_KEY}`,
        json: true
    }, (error, response, body) => {
        if (error) {
            callback('Error to connect to Google server')
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find location...')
        } else if (body.status === 'OK') {
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            })
        } else {
            console.log('Something went wrong.')
        }
    })
}

module.exports = {
    geocodeAddress
}