// Code goes here!

//Generics'

const names:Array<string>=["a","b","c"];

console.log(names.slice(1,2))

//Generics in Promise 

const myFunc:Promise<string>=new Promise((resolve,reject)=>{
setTimeout(()=>{
    let ranNum:number=Math.floor(Math.random()*10)
     console.log(ranNum);
    if(ranNum>5){
       
resolve("Return a promise of string type")
    }
    else{
        reject("Something went wrong")
    }
    

},2000)
})
myFunc
.then(data=>{
   console.log(data.toUpperCase())
})
.catch(err=> console.log(err.toUpperCase()))

