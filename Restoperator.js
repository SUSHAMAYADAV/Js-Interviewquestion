/*function sumOne(a,b){
    return a+b;
}
var myA=[5,4]
console.log(sumOne(...myA))
//2nd method
function sumTwo(a,...args){
    console.log("--->",args)
    let sum=0;
    for(const i of args){
sum=sum+i;
    }
    return sum
}
console.log(sumTwo(10,20,30,40))

//technical question
function rest(a){
    const arr1=[]
    for(let i=0;i<a.length;i++){
      arr1.push(...a[i])
    }
      console.log(arr1)
  }
  arr=[[1,2,3],[4,5,6],[7,8,9]]
  rest(arr)*/
  /*const values=[[1,2,3],[4,5,6],[7,8,9]]
  const res=values.reduce((total,element)=>{
return total.concat(element)
  })
  console.log(res)*/

  /*function fruits(...a){
    console.log("aaa",a)
    const arr=[]
    for(let i=0;i<a.length;i++){
        arr.push(...a[i])
       
    }
     console.log(arr)
}
function add(){
    return 5+5
}
fruits([[1,2,3],[4,5,6],[7,8]],add())*/


//array destructuring
/*let arr=["name","rollno","branch"]
//let [num1,num2,num3]=arr
let [num1,...num]=arr
console.log(num)*/

//object destructuring
/*const obj={
  id:1,
  rollno:189,
  name:"sushamma",
  branch:"it"
}
//const {name,branch,id}=obj
//const {...name}=obj
//const {branch,...rollno}=obj
const {id,...rollno}=obj
console.log(rollno)*/

/*const arr=[2,4,5,"sushh","yadd",true,false]
const num=(arr)=>{
const arr1=[]
for(let i=0;i<arr.length;i++){
    if(arr[i]===true || arr[i]===false){
        arr1.push(arr[i])
        console.log(arr1)
    }
}
}
num(arr)
console.log(arr1)*/

//to filter number or string or boolean from an array
/*const arr=[2,4,5,"sushh","yadd",true,false]
const num=(arr)=>{
const arr1=[]
for(let i=0;i<arr.length;i++){
    if(typeof arr[i]==='number'){
        arr1.push(arr[i])
    }
}
return arr1
}

console.log(num(arr))*/
