const names = ["itay", "sharony", "ah-yakar"]
const ages = [21, 22, 69]
for (let x=0; x < names.length; x++) {
    console.log(names[x] + " is " + ages[x] + "years old")
}




const num=[1,0,34,546,65,767,45]
let sum = 0
for( let x=0; x<num.length;x++ ){
    sum+=num[x]
}
console.log(sum)
let sumavrege=0
for (let x=0; x<num.length;x++){
sumavrege=sum/num.length
}
console.log(sumavrege)


const nums=[]
for(let x=0;x<101;x++){
    nums.push(x)
}
console.log(nums)
const oddnums=[]
for(let x=0;x<nums.length;x++){
    if (nums[x]%2 ===1){
oddnums.push(nums[x])
    }
}
console.log(oddnums)


let nums1 = [773, 414, 213, 374, 434, 700, 506, 495, 852, 585, 271, 198, 689, 248, 708, 197, 96, 260, 921, 834, 258, 662, 501, 632, 715, 503, 538, 289, 596, 381, 817, 280, 968, 877, 431, 146, 491, 724, 83, 841, 174, 21, 460, 25, 785, 539, 291, 404, 903, 278, 159, 229, 216, 683, 84, 87, 879, 406, 661, 537, 890, 394, 382, 477, 271, 373, 82, 104, 709, 723, 333, 958, 95, 983, 732, 917, 324, 785, 754, 23, 659, 551, 408, 442, 766, 242, 611, 846, 802, 866, 817, 848, 227, 349, 243, 837, 21, 954, 146, 11]

for(let x=0; x<nums1.length;x++){
    if(nums1[x]===709){
       console.log(x)
    }

}


const names1 = ["Ashley", "Donovan", "Lucas"]
const ages1 = [23, 47, 18]
const people = []
for(let x=0;x<names1.length;x++){
    people[x]={name: names1[x], age: ages1[x] }
}
console.log(people)
for( let x=0; x<people.length;x++){
console.log(people[x].name + " is " +people[x].age + " years old ")
}

const posts = [
    {id: 1, text: "Love this product"},
    {id: 2, text: "This is the worst. DON'T BUY!"},
    {id: 3, text: "So glad I found this. Bought four already!"}
  ]
  for(let x=0;x<posts.length;x++){
   if(posts[x].text=== "This is the worst. DON'T BUY!"){
    delete posts[x].text
   }
  }
  
  console.log(posts)

  const posts1 = [
    {
      id: 1, 
      text: "Love this product",
      comments: []},
    { 
      id: 2, 
      text: "This is the worst. DON'T BUY!", 
      comments: [{id: 1, text: "Idiot has no idea"}, {id: 2, text: "Fool!"}, {id: 3, text: "I agree!"}]
    },
    {
      id: 3, 
      text: "So glad I found this. Bought four already!",
      comments: []}
  ]
  for(let x=0;x<posts1.length;x++){
if( posts1[x].id===2 ){
   for(let y=0;y<posts1[x].comments.length;y++){
       if(posts1[x].comments[y].id===3){
        delete posts1[x].comments[y].text
       }
   }
}
}

  console.log(posts1)


  const dictionary = {
    "A": ["Aardvark", "Abacus", "Actually", "Atomic"],
    "B": ["Banana", "Bonkers", "Brain", "Bump"],
    "C": ["Callous", "Chain", "Coil", "Czech"]
  }
  
