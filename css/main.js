const maxCapacity = 14

let surfTime = true
let bestStudente;

const purposeInLife = 1
console.log(maxCapacity, bestStudente, surfTime, purposeInLife)

const string = "12345 "
let result = string + "is the best thing ever"
console.log(result)

let password = "guter"
const confirmPassword = password
console.log(password === confirmPassword)
console.log(423 * 12, 802 / 2, (5 + 6) * 3)
console.log((5 > 2) && false, !("knife" === "sword"), (1 < 2) || (-1 > -1) || !false, "", (31 % 5) == "1", !!true, "5th Avenue" != "5th Avenue", 52 !== "52", (undefined || null))



let numChildren= prompt("how many childrens do you have?")
const isCareful = false
if (!isCareful) {
    numChildren++
}
console.log(numChildren)
let silverwareCount= 1
if (silverwareCount%2 !== 0){
    console.log("something missing")
}
let performance = "stellar"
let salary = 10000
const goodBonus = 1000
const stellarBonus = 3000
if (performance == "stellar"){
    salary += stellarBonus
} else {
    salary += goodBonus
}
console.log(salary)
const isVIP = false
let cash = 500
if(isVIP || cash>300){
    console.log("welcome to the club ")
}
const a = 3
let b = 2
let c = 0 || 12
let d

b = c
b++
if(d){
  b = a
}

d = a + (b * c)
d++
b += 2
console.log(b,c,d)

const gender = null
let profession = "business"

if (gender==null){
    profession= "businessperson" 
} else if (gender=="male" ){
    profession="businessman"
}else if(gender=="female"){
    profession= "businesswoman"
}
console.log(profession)

let boughtTesla = true
const yearOfTeslaPurchase = 2010
let isUSCitizen = true
let currentYear = 2018

if(boughtTesla &&  isUSCitizen){
   if(currentYear - yearOfTeslaPurchase<=4 ){
    console.log("would you like an upgrade?")
   }
 else {
    console.log("are you satesfied with the car?")
 }
}
else if (!isUSCitizen &&boughtTesla ){
    console.log("would you like to move to the US?")
}
else if( !boughtTesla){
    console.log("are you interested in buying tesla car?")
}