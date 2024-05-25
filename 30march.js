//frequency of character in a String
/*function frequencyChar(str) {
  let arr = str.split("");
  // console.log(arr)
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = obj[arr[i]] + 1;
    } else {
      obj[arr[i]] = 1;
    }
  }
  return obj;
}
const str = "susamayadydd";
console.log(frequencyChar(str));*/
//using for of loop
/*function frequencyChar(str){
    let obj={}
    for(let val of str){
      if(obj[val]){
        obj[val]=obj[val]+1
      }
      else{
        obj[val]=1
      }
    }
    return obj
  }
  const str='abacdbckk'
  console.log(frequencyChar(str))*/

//find frequency of every word in string
/*function frequencyChar(str){
    let arr = str.split(' ');
    console.log('arr-->',arr)
    let obj={}
    for(let val of arr){
      if(obj[val]){
        obj[val]=obj[val]+1
      }
      else{
        obj[val]=1
      }
    }
    return obj
  }
  const str='this is  a this a very this very'
  console.log(frequencyChar(str))*/

//prime numbber between (n1,n2)
/*function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function primeNumber(n1, n2) {
  let primeValue = [];
  for (let i = n1; i <= n2; i++) {
    if (isPrime(i)) {
      primeValue.push(i);
    }
  }
  return primeValue;
}
console.log(primeNumber(1, 20));*/

//reverse a string
/*function reverseString(str){
    let newstr=''
    for(let i=str.length-1;i>=0;i--){
   newstr=newstr+str[i]
    }
    return newstr
  }
  const str='sushamayadav'
  console.log(reverseString(str))*/

//second largest number in an Array
function largestNumber(arr) {
  let temp;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr[arr.length - 2];
}
const arr = [2, 4, 5, 10, 1, 20, 3, 30];
console.log(largestNumber(arr));

//find maxcount
/*const arr = ["a", "c", "a", "a", "a", "b", "m", "n", "n"];
let obj = {};
let maxcount = 0;
for (i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
    if (maxcount < obj[arr[i]]) {
      maxcount = obj[arr[i]];
    }
  } else {
    obj[arr[i]] = 1;
  }
}
console.log(obj, "maxcount", maxcount);*/
