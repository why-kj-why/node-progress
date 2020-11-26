// WEATHER REQUEST
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const foreurl = "http://api.weatherstack.com/current?access_key=c413371a262383711d43852202fa6a4a&query=" + latitude + "," + longitude 

    request( { url : foreurl, json : true }, (error, response) => {
        if(error) {
            callback("UNABLE TO RETRIEVE WEATHER DATA!", undefined)
        } else if (response.body.error) {
            callback("UNABLE TO RETRIEVE LOCATION!", undefined)
        } else {
            callback(undefined, "CLIMATE : " + response.body.current.weather_descriptions[0] + "\nIt is currently " + response.body.current.temperature + " degrees celsius. It feels like " + response.body.current.feelslike + " degrees celsius outside.")
        }
    })
}

module.exports = forecast