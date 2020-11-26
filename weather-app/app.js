// Address => Lat/Long => Weather

const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

const address = process.argv[2]

if (!address) {
    console.log("PLEASE PROVIDE A LOCATION!")
} 
else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        } 

        forecast(data.latitude, data.longitude, (error, forecast_data) => {
            if (error) {
                return console.log(error)
            }
            
            console.log(data.location)
            console.log(forecast_data)
          })
    })
}