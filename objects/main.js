const p1={
    name :"Jill",
    age :18,
    city :"ramat-gan",
}
const p2= {
    name:"Robert",
    age:18,
    city:"ramat-ga" ,
}
if (p1.age==p2.age && p1.city==p2.city){
    console.log("Jill wanted to date Robert")
}else if(p1.city !== p2.city){
    console.log("Jill wanted to date Robert, but couldn't")
}
const myList=[{k1:1,},{k2:2,}]
myList[0].k1++
myList.splice(1,1)
console.log(myList)
const myList2=[{k:1},{k:2}]
myList.push(myList2)
const library={
    books:[{title:"good book", author: "i.g.g"},{title:"bad book", author: "i.g.g"}] 
}
myList.push(library.books)
console.log(myList)

const reservations = {
    bob: { claimed: false },
    ted: { claimed: true }
  }
  
  const name = prompt('Please enter the name for your reservation').toLowerCase()

  
  if(reservations[name] && reservations[name].claimed=== false){
 alert("welcome my friend")
  } else if(reservations[name] && reservations[name].claimed=== true){
      alert("someone took your place :(")
  }else {
    reservations[name]={claimed : true} 
  }
  console.log(reservations)

  const date = 3

const kitchen = {
    owner: "Geraldine",
    hasOven: true, 
    fridge: {
        price: 500,
        works: false, 
        items: [
            { name: "cheese", expiryDate: 7 },
            { name: "raddish", expiryDate: 2 },
            { name: "bread", expiryDate: 1 }
        ]
    }
}
if(kitchen.hasOven== true && kitchen.fridge.works== true){
console.log("Geraldine's raddish expired "+ date-kitchen.fridge.items[1].expiryDate + "day ago. Weird, considering her fridge works. Luckily, she has an oven to cook the raddish in.")
}else if (kitchen.hasOven== true && kitchen.fridge.works== false){
console.log("Geraldine's raddish expired "+ date-kitchen.fridge.items[1].expiryDate + " day ago. Probably because her fridge doesn't work. Luckily, she has an oven to cook the raddish in. And she'll have to pay 250 to fix the fridge.")
} else if(kitchen.hasOven== false && kitchen.fridge.works== true){
    console.log("Geraldine's raddish expired "+ date-kitchen.fridge.items[1].expiryDate + " day ago. Weird, considering her fridge works. Too bad she doesn't have an oven to cook the raddish in.")
}else if (kitchen.hasOven== false && kitchen.fridge.works== false){
    console.log("Geraldine's raddish expired "+ date-kitchen.fridge.items[1].expiryDate + " day ago. Probably because her fridge doesn't work. Too bad she doesn't have an oven to cook the raddish in. And she'll have to pay 250 to fix the fridge.")
}