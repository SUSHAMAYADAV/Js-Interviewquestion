//method 1st to replace all zeroes at last position of the array
//const arr = [1,0,3,2,0,7,0,4,5,0]
/*for(let i=0;i<arr.length;i++){
    if(arr[i]==0){
        //console.log(arr[i],i)
        let aa=arr.splice(i,1)
        //console.log(...aa)
       // arr.push(...aa)
        arr.splice(arr.length,0,...aa)
    }
}
console.log(arr)*/
//method  2nd to replace all the values at last position
/*function zero(num){
    let i=0;
    for(let j=0; j<num.length;j++){
        console.log("enter in loop",num[j],j,num[i],i)
       if(num[j]!=0){
            let temp=num[j];
            num[j]=num[i];
            num[i]=temp;
            console.log("i+++",i)
            i++
        }
        console.log(num)
    }
    //return num;
}
console.log(zero([5,0,3,2,0,7,0,4,5,0]))*/

// to print palindrome number ex.121 and -121
//method 1st
/*var isPalindrome = function(x){
    const str=(x).toString();
    for(let i=0,j=str.length-1;i<j;i++,j--){
        if(str[i]!==str[j]){
            return false
        }
    }
    return true
}
console.log(isPalindrome(123))*/

//2nd method to print palindrome number

/*function palindrome(x) {
  const str = x.toString();
  // console.log(typeof(str))
  let newstr = " ";
  for (let i = str.length - 1; i >= 0; i--) {
    newstr = newstr + str[i];
  }
  console.log(newstr);
  if (str == newstr) {
    console.log("this is palindrome");
  } else {
    console.log("this is not palindrome");
  }
}
x = 121;
palindrome(x);*/

/*function palindrome(data){
    let newnum = ""
    for(let i = data.length-1;i>=0;i--){
        newnum = newnum+data[i]
    }
    console.log(newnum)
    if(data==newnum){
        console.log("palindrome number")
    }
    else{
        console.log("not palindrome")
    }
}
num = "121"
palindrome(num)*/

//print prime number ex.(2,3,5,7,11)
/*function isPrime(n) {
  //base case
  if (n <= 1) {
    return -1;
  }
  //check from 2 t n n-1
  for (let i = 2; i < n; i++)
    if (n % i == 0) {
      return false;
    } else {
      return true;
    }
}
console.log(isPrime(10));*/

/*const arr=[3,1,2,5,6,7,8,9,10,11,13,12]
let sum=0;
for(let i=0;i<arr.length;i++){
if(arr[i]%2==0){
sum=sum+arr[i]
}
}
console.log(sum)*/

//to print  factorial number
/*function factorial(n){
if(n<0){
  return -1
}
if(n==0 || n==1){
 return 1
}
else{
  return (n*factorial(n-1))
}
}
console.log(factorial(5))*/

//to print largest number
/*const aa = [10, 5, 20, 3, 15, 20, 12];
for (let i = 0; i < aa.length - 1; i++) {
  for (let j = 0; j < aa.length - i - 1; j++) {
    if (aa[j] > aa[j + 1]) {
      a = aa[j];
      aa[j] = aa[j + 1];
      aa[j + 1] = a;
    }
  }
}
//console.log(aa);
for(let i=0;i<aa.length;i++){
  for(j=i+1;j<aa.length;j++){
    if(aa[i]==aa[j]){
      aa.splice(j,1)
    }
  }
}
console.log(aa[aa.length-3])*/



