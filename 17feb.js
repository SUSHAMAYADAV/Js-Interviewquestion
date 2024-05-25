/*let a=10
{
    let a=30
    console.log("inner block",a)
}
console.log("outer",a)*/

//to print 10times 10 if var declare and if  insteadof var  we  are  using let then print 1  to 9
/*for(var i=0;i<10;i++){
    setTimeout(()=>{
        console.log(i)
    },1000)
}*/

//default parameter
//here pass b and c of default values and also pass function as paprameter
/*function newval(){
    return 200
}
function add (a,b=20,c=100,d=newval()){
    return a+b+c+d
}
//console.log(add(30,40))
console.log(add(10))
// here  also pass as parameter string
function newval(){
    return "susu"
}
function add (a,b="middle",d=newval()){
    return a+b+d
}
//console.log(add(30,40))
console.log(add("first"))*/

/*let  a="i am good girl"
let b="sushama yadav"
console.log("i am good girl" +
"sushama yadav")
console.log(`i am good girl
sushama yadav`)
console.log(`output ${a}
 ${b}`)

 const data = [10,20,30,40]
 /*const res=data.findIndex((item)=>{
     return item<25
 })
 console.log("result",res)*/
//you can also pass  as parameter in  function
/*function add(item){
     return item>20
 }
 const res=data.find(add)
     console.log(res)*/

/*let data=[
        {id:10,Name:"sss"},
        {id:20,Name:"A"},
        {id:40,Name:"ddd"},
        {id:60,Name:"nnnn"},
        ]
        let res=data.find((item)=>item.id>40)
       // let res=data.find((item)=>item.Name=="A")
        console.log(res)*/

let a = "sushama";
let promiseData = new Promise((resolve, rejected) => {
  setTimeout(() => {
    a = "hello how  r u";
    resolve("done");
  }, 1000);
}).then(() => {
  alert(a);
});
