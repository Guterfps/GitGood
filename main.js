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

let a = 3
a = 4
let c = 0
let b = a
b = 2
a = b
b = c
c = a
a = b
console.log(a,b,c)