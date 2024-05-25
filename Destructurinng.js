
//Array destructuring

//const arr = ["sushama", "poooja", "meena", "satyam"];
//console.log(arr[0])
//console.log(arr[1])
//console.log(arr[2])
//after destructuring
//const [a,b]=arr
//console.log(a);
/*console.log(arr.length);
let [a,,,c]=arr
console.log(`my name is ${a}`)*/
//for nexted array
//let user= ["sush",22,"Delhi",["female",5400]]
//let [name,age,city,[gender,salary]]=user;
//console.log(name,salary)

//using rest operator
//let [name,...args]=user;
//console.log(args)
//for function
/*function user([a,b,c,d]){
console.log(a,d)
}
user(["sushama",21,189,"yadav"])*/
/*function user(){
    return ["sushama",21,189]
}
let [a,b,c]=user()
console.log(b)*/
//Object Destructuring
const obj={
    name:"sushama",
    surname:"Yadav",
    rollno:189,
    branch:"IT",
    obj1:{
        name:"pooja",
        rollno:165,
        surname:"meena"
    }
}
//console.log(obj.name)
//using destructuring
const {name,...args}=obj;
console.log(name,args)