// object property shorthand

const name = 'KARAMJIT'
const age = 19

const user = {
    name,           // shorthand for the property
    age,
    location : 'Noida'
}

console.log(user)

// object destructuring

const product = {
    label : "RED NOTEBOOK",
    price : 500,
    stock : 200,
    salePrice : undefined
}

// const {label : productLabel /* new name */, rating = 5 /* default value; only used when object does not have this property */, salePrice, price} = product
// console.log(productLabel)
// console.log(rating)
// console.log(salePrice)
// console.log(price)


const transaction = (type, { label, stock }) => {
    console.log(type, label, stock)
}

transaction('order', product)