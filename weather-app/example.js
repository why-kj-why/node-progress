console.log("STARTING...")

setTimeout( () => {
    console.log("2 SECOND TIMER")
}, 2000 /* milliseconds */ )

setTimeout ( () => {
    console.log("0 SECOND TIMER")
}, 0 /* zero milliseconds */ )

console.log("...STOPPING")

// ASYNCHRONOUS NON BLOCKING NATURE

// output : STARTING...
//          ...STOPPING  
//          0 SECOND TIMER      // waits two seconds 
//          2 SECOND TIMER     // then executes this after ...STOPPING

// CALL STACK   =>  NODE APIs
//        /\          ||
//  EVENT  \\         ||
//  LOOP    \\        ||
//           \\       \/
//           CALLBACK QUEUE
