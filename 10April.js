//1.
/*const arr=['suneel','sus','pooja','aba']
const res=arr.filter((str)=>{
  console.log(str,'strr')
  let newstr=''
  for(let i=str.length-1;i>=0;i--){
    newstr=newstr+str[i]
  }
 return str===newstr
})

console.log(res)*/

//2.
/*function calculateDigit(str){
    let emptyStr=''
    for(let i=0;i<str.length;i++){
      if(!isNaN(str[i])){
        emptyStr=emptyStr+str[i]
      }
    }
    return emptyStr
  }
  console.log(calculateDigit('ab12nb56b8k9'))*/

  //3
 /* function strcount(str){
    const arr=str.split('')
    const emptyObj={}
   for(let i=0;i<arr.length;i++){
     if(emptyObj[arr[i]]){
        emptyObj[arr[i]]=emptyObj[arr[i]]+1
      
     }
     else{
       emptyObj[arr[i]]=1
     }
   }
   return emptyObj
  
  }
  const str='abcdefbb'
  console.log(strcount(str))*/

  //4. to check vowel

  /*function checkNum(str){
    if(str=='a' || str=='e' || str=='i' || str=='o' || str=='u'){
      return 'vowel'
    }
   return 'consonent' 
  }
  console.log(checkNum('m'))*/
  //5. to calculate matching element in an array
  /*function matchingNum(arr,matchnum){
    emptyArr=[]
    for(let i=0;i<arr.length;i++){
      if(arr[i]==matchnum){
        emptyArr.push(matchnum)
      }
    }
    return emptyArr
  }
  const arr=[1,2,4,6,2,6,1]
  console.log(matchingNum(arr,1))*/

  //6.non matching element 
  /*function matchingNum(arr,matchnum){
    emptyArr=[]
    for(let i=0;i<arr.length;i++){
      if(arr[i]!==matchnum){
        emptyArr.push(arr[i])
      }
    }
    return emptyArr
  }
  const arr=[1,2,4,6,2,6,1]
  console.log(matchingNum(arr,1))*/

  //7 .compare two string are equal after sort

  /*function anagrams(str1,str2){
    const arr1=str1.split('').sort()
    const arr2=str2.split('').sort()
    const res=arr1.filter((x)=>arr2.includes(x))
      return res.join('')
    }
    const str1='pooja'
    const str2='ajopo'
    console.log(anagrams(str1,str2))*/


    // find number of vowel in String
/*function voWelNum(str){
    let count=0;
    for(let i=0;i<str.length;i++){
      if(str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u'){
        count++
      }
    }
    return count
  }
  const str='uishalyadav'
  console.log(voWelNum(str))*/

  //to find prime number from Array
/*function isPrime(num){
  if(num<2){
    return false
  }
  for(let i=2;i<=num/2;i++){
    if(num%2===0){
      return false
    }
  }
  return true
}
//console.log(isPrime(5))
function primeArr(arr){
  let primeVal=[]
  for(let k=0;k<arr.length;k++){
  if(isPrime(arr[k])){
    primeVal.push(arr[k])
  }
  }
  return primeVal
}
const arr=[2,3,4,5,6,7,8]
console.log(primeArr(arr))*/

//permutation of number
/*function factorial(num){
  let multi=1
  if(num==0 || num==1){
    return 1
  }
  for(let i=1;i<=num;i++){
    multi=multi*i
  }
  return multi
}
//console.log(factorial(5))
function npr(n,r){
  return factorial(n)/factorial(n-r)
}
console.log(npr(5,2))*/

//to filter prime number  from array
/*const arr=[2,3,4,5,6,7,8]
const res=arr.filter((item)=>{
    if(item<2){
    return false
  }
  for(let i=2;i<=item/2;i++){
    if(item%2===0){
      return false
    }
  }
  return true
})
console.log(res)*/
