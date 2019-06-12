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
  
  const toLowerCase(name) = prompt('Please enter the name for your reservation');

  
  if(reservations[name] && reservations[name].claimed=== false){
 alert("welcome my friend")
  } else if(reservations[name] && reservations[name].claimed=== true){
      alert("someone took your place :(")
  }else {
    reservations[name]={claimed : true} 
  }
  console.log(reservations)