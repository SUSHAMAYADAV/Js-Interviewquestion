//method 1
/*function lastZero(arr){
    return arr.filter(item=>item !=0).concat(arr.filter(item=>item ==0))
}
const arr=[4,0,3,0,2,1,0,9]
console.log(lastZero(arr))*/

/*function zero(arr){
   let arr1=[]
   for(let i=0;i<arr.length;i++){
     if(arr[i]==0){
       arr1.push(arr[i])
       arr.splice(i,1)
     }
   }
   return [...arr,...arr1]
 }
 const arr=[4,0,3,0,2,1,0,9]
 console.log(zero(arr))*/

/*function zero(arr) {
  let i = 0;
  let j = 0;
  while (i < arr.length) {
    if (arr[i] != 0) {
      arr[j] = arr[i];
      j++;
    }
    i++;
  }
  while (j < arr.length) {
    arr[j] = 0;
    j++;
  }
  return arr;
}
const arr = [4, 0, 3, 0, 2, 1];
console.log(zero(arr));*/

const moveZeroes = function (nums) {
  let j = 0;
  for (let i = 0; i < nums.length; i++) {
   
    if (nums[i] !== 0) {
      let temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
      console.log("num[i]--", nums[i], "num[j]--", nums[j], "i-", i, "j-", j);
      console.log(nums);
      j++;
   
    }
  }
  return nums;
};
console.log(moveZeroes([2, 0, 1, 0, 10, 3, 0, 6, 8]));
