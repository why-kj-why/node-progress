setTimeout(() => {
    console.log("TWO SECOND PASS")
}, 2000)

// A CALLBACK FUNCTION IS A FUNCTION DEFINED 
// AS AN ARGUMENT TO ANOTHER FUNCTION
// WITH THE INTENTION FOR HAVING IT CALLED LATER ON

const names = ['Kj', 'Jasim', 'Agam','Abhinav']
const shortNames = names.filter((name) => {
    return name.length <= 4  
})

const geocode = (address, callback) => {
    setTimeout(() => {
        const data = {
            latitude : 0,
            longitude : 0
        }
        callback(data)
    }, 2000)
}

geocode("Noida", (data) => {
    console.log(data)
})

const add = (x, y, callback) => {
    setTimeout(() => {
        callback(x + y)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
