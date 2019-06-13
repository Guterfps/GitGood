const calcAge= function(x,y){
 return x-y 
}
const age = calcAge(2017, 1989)
console.log(age)


const calcAge1= function(x,y){
  console.log(x-y),
  console.log(x-y-1) 
}
calcAge1(2017, 1989)

const isEven= function(x){
if(x%2===0){
  return true
}else{
  return false
}
}
console.log(isEven(3))

const numarr= function (arr){
  for(let x=0;x<arr.length;x++){
    if(isEven(arr[x])===false){
      console.log(arr[x])
    }
  }
}
const num=[1,2,4,456,89,67]
numarr(num)

const checkExists=function(arr,x){
for(let i=0;i<arr.length;i++){
 if( arr[i]===x){
   return true
 } 
}return false
}

console.log(checkExists([1,2,3],3))

const calculator={
  add: function(x,y){
    return x+y
  },
  subtract:function(x,y){
    return x-y
  }
}
const result1 = calculator.add(20, 1)
const result2 = calculator.subtract(30, 9)

console.log(calculator.add(result1, result2))

const turnToKing = function(name, money){
  name = name.toUpperCase()
  money= money * name.length,
  name= "His Royal Highness, "+ name

  console.log(name + " has " + money + " gold coins")
}
turnToKing("itay",100)
