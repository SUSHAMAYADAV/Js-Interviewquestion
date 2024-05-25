//que.no 3 find missing number
/*const arr = [5, 7, 9, 8, 12, 13, 18, 15];
let p = Math.max(...arr);
//console.log(p)
let q = Math.min(...arr);
//console.log(q)
for (let i = q; i < p; i++) {
  if (!arr.includes(i)) {
    console.log(i);
  } 
}

const arr5=[1,3,7]
// ...arr5
console.log(5,...arr5)*/

//ques 4 to print index values whose gender is unknown

/*const obj= [
    {
     "Name": "Anakin",
     "Gender": "male", 
     "Homeworld": "Tatooine",
     "Born": "41.9BBY",
     "Jedi": "yes"
    },
    {
     "Name": "Amidala",
     "Gender": "female", 
     "Homeworld": "Naboo",
     "Born": "46BBY",
     "Jedi": "no"
    },
    
    {
     "Name": "R2-D2",
     "Gender": "unknown",
     "Homeworld": "Naboo",
     "Born": "33BBY",
     "Jedi": "no"
    },
     {
     "Name": "Amidala",
     "Gender": "female", 
     "Homeworld": "Naboo",
     "Born": "46BBY",
     "Jedi": "no"
    },
    

    {
     "Name": "R2-D2",
     "Gender": "unknown",
     "Homeworld": "Naboo",
     "Born": "33BBY",
     "Jedi": "no"
    }
]
console.log(obj.filter(x=>x.Gender==="unknown"))*/

//que5 to print prime number between 110 to 189

/*function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
let arr=[]
for (let j = 20; j <= 50; j++) {
  if (isPrime(j)) {
   //console.log(j)
   arr.push(j)
  }
}
console.log("the value of  array",arr.length)
console.log("the value of  array",arr)
for(let k=0;k<arr.length;k=k+2){
  console.log("the value of kk",arr[k])
}*/

//to print least ocurence in an array
/*const arr = [4, 2, 4, 3, 2, 4, 3, 3, 5, 4];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  console.log(obj[arr[i]]);
  if (obj[arr[i]]) {
    obj[arr[i]] = obj[arr[i]] + 1;
  } else {
    obj[arr[i]] = 1;
  }
}
//console.log(obj);

let mincount = 1;
//console.log("minnn",mincount)
for (var x in obj) {
  //console.log("inner for",x,obj[x])
  if (obj[x] < mincount) {
    mincount = obj[x];
  }
}
//console.log("theeeeeee", mincount, x);*/

const obj2={}
obj2[2]="suneel"
obj2.surname="yadav"
obj2["name"]="sssss"
console.log(obj2)

/*const obj1={
    name:"pooja",
    2:"ssss",
    rollno:189,
}
console.log(obj1["2"],obj1[2],obj1."2")
console.log(obj1["name"],obj1.name)*/
//console.log("1"+1)

//const aa=(1,2,3,4,5)
/*let count=0;
for(let i=1;i<=5;i++){
    if(i%2!==0){
     count++;
    }
}
console.log(count)*/

//print permutation of number npr
//step1calculate factorial of number

/*function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}
 console.log(factorial(4));

 function nPr(n, r) {
  return factorial(n) / factorial(n - r);
}
console.log(nPr(5,2))*/

//print factorial without using recursion
/*function fact(n) {
  let multi = 1;
  for (let i = n; i >= 1; i--) {
    multi = multi * i;
    //console.log(multi, n, i);
  }
  // console.log(multi)
  return multi;
}
//fact(4);
function nPr(n, r) {
  console.log("aaaa", n, r, fact(n));
  const res1 = fact(n);
  const res2 = fact(n - r);
  console.log("--->", res1, res2);
  return res1 / res2;
}
console.log(nPr(5, 2));*/


//find digit in string eg.'1as3fg67jui98'
/*function calculateDigit(str){
  let digit=''
  let count=0;
  for(let i=0;i<str.length;i++){
    if(str[i]>=0 && str[i]<=9){
      digit +=str[i]
      count++
    }
  }
  return count
}
const str='a12b7g9d4gf436'
console.log(calculateDigit(str))*/
