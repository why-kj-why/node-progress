const http = require('http')
const foreurl = "http://api.weatherstack.com/current?access_key=c413371a262383711d43852202fa6a4a&query=45,-75"
 
const request = http.request(foreurl, (response) => {
    let data = ''
    // let used instead of const since the value of data is reassigned overtime

    response.on('data', (chunk) => {
        data = data + chunk.toString()
    })   

    response.on('end', () => {
        const body = JSON.parse(data)
        console.log(body)
    })
})

request.on('error', (error) => {
    console.log(error)
})

request.end()