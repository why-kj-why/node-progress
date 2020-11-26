// const square = function(a){
//     return a * a
// }

// // arrow function
// const square = (a) => {
//     return a * a
// }

// const square = (a) => a * a

// console.log(square(69)) 


const event = {
    name : 'Birthday Party',
    guestlist : ['Jim','Haljit'],
    printGuestList () {
        // const that = this

        console.log('Guest List for ' + this.name)
        this.guestlist.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name)
        })
    }
}

event.printGuestList()