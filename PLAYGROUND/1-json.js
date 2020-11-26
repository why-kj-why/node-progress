const { deepStrictEqual } = require('assert')
const fs = require('fs')

const databuffer = fs.readFileSync("1-json.json")
const dataJSON = databuffer.toString()
const user = JSON.parse(dataJSON)

user.name = "Karamjit"
user.age = "19"

const userJSON = JSON.stringify(user)
fs.writeFileSync("1-json.json",userJSON)