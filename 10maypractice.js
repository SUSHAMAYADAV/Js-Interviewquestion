const arr = [4, 3, 4, 4, 3, 3, 5, 4, 4, 5];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  // console.log(obj[arr[i]]);
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}

let maxcount = 0;

for (var x in obj) {
  console.log("inner for", x, obj[x]);
  if (obj[x] > maxcount) {
    maxcount = obj[x];
  }
  console.log("maxcount->", maxcount, x);
}
//ager  equal highest two or multiple key present ho
/*const arr = [4, 3, 4, 4, 3, 3, 5, 4, 4, 5,3,3];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}

let maxcount = 0;
let hightestCount = [];

for (var x in obj) {
  //console.log("inner for", x, obj[x]);
  if (obj[x] > maxcount) {
    maxcount = obj[x];
     hightestCount.push(x);
  } else if (obj[x] === maxcount) {
    hightestCount.push(x);
  }
 // console.log("maxcount->", maxcount, keysWithMaxCount);
}

console.log('Keys with highest count:', hightestCount.join(' '));*/
//using reduce method
/*const arr = [4, 2, 4, 3, 2, 4, 3, 3, 5, 4];

const res = arr.reduce((acc, val, index) => {
  console.log(acc, val, index);
  if (acc[val]) {
    acc[val] = acc[val] + 1;
  } else {
    acc[val] = 1;
  }
  return acc;
}, {});
console.log("arr-->", res);*/

//even number
/*const arr = [4, 2, 4, 3, 2, 4, 3, 3, 5, 4];

const res = arr.reduce((acc, val,index) => {
 // console.log(acc,val,index)
  if(val%2===0){
    acc.push(val)
  }
  return acc;
}, [])
console.log('arr-->',res)*/
/*function factorial(n){
    let multi=1
    if(n===0 || n===1){
      return false
    }
   for(let i=1;i<=n;i++){
    multi=multi*i
   }
   return multi
  }
  function npr(n,r){
    return factorial(n)/(factorial(n-r)*factorial(r))
  }
  console.log(npr(4,2))*/

//find maxcount consecutive of 1s
/*const arr = [0, 1, 0, 1, 1, 1, 1, 0, 1, 0];
function countVal(arr) {
  let count = 0;
  let maxcount = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 1) {
      count++;
      maxcount = Math.max(maxcount, count);
    } else {
      count = 0;
    }
  }
  return maxcount;
}
console.log(countVal(arr));*/
