/*let arr = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];
const arr1 = [];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    arr1.push(arr[i][j]);
    // console.log(arr1,i,j,arr[i][j])
    // console.log(arr[i],arr[i][j])
    // or arr1.push(...arr[i])
          //  console.log(arr1) 
  }
}
// console.log(arr1)
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
  for (let j = i + 1; j < arr1.length; j++) {
    if (arr1[i] == arr1[j]) {
      arr1.splice(j, 1);
      arr2.push(arr1[i]);
      // console.log("thee",arr2)
    }
  }
}
// console.log(arr1)
let b = Math.max(...arr1); // 3,4,6
let a = Math.min(...arr1);
// console.log(a,b)
for (let i = a; i <= b; i++) {
  if (!arr1.includes(i)) {
    arr2.push(i);
    //console.log(i)
  }
}
console.log(arr2);*/

//2nd method to solve above  problem
let arr = [
  [9, 1, 7],
  [8, 9, 2],
  [3, 4, 6],
];
let arr1=[]
for(let i=0;i<arr.length;i++){
arr1.push(...arr[i])
}
//console.log(arr1)
const arr3=[]
const res = arr1.filter((item,index,arr2)=>{
       return arr2.indexOf(item)!==index
})
console.log(res)
let a=Math.max(...arr1)
let b=Math.min(...arr1)
   for(let i=b;i<=a;i++){
    if(!arr1.includes(i))
    arr3.push(i)
   }
   console.log("tee-->",arr)