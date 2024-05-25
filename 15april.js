//find the max count of consecutive 1s in anarray
/*function countMaxOnes(arr){
    maxCount=0;
    count=0;
    for(let i=0;i<arr.length;i++){
      if(arr[i]==1){
        count++
        maxCount=Math.max(maxCount,count)
      }
      else{
        count=0;
      }
    }
    return maxCount
  }
  const arr=[0,1,0,1,1,0,1,1,1,1,0]
  console.log(countMaxOnes(arr))*/

//take two arr and then merge it and sort the array
/*const arr1 = [0, 3, 4, 31];
const arr2 = [4, 6, 30];
const arr = [...arr1, ...arr2];
//const res=arr.sort((a,b)=>a-b);
let temp;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] > arr[i + 1]) {
    temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
}
console.log(arr);*/

//2
//given two string find if one string can be
//formed by rearranging the letters of other string

/*const strRearrangeLetter = (str1, str2) => {
  if (str1.length != str2.length) {
    return false;
  }
  let newstr1 = {};
  let newstr2 = {};
  for (let val of str1) {
    if (newstr1[val]) {
      newstr1[val] += 1;
    } else {
      newstr1[val] = 0;
    }
  }
  for (let val of str2) {
    if (newstr2[val]) {
      newstr2[val] += 1;
    } else {
      newstr2[val] = 0;
    }
  }
  for (let key in str2) {
    if (newstr1[key] != newstr2[key]) {
      return false;
    }
  }
  return true;
};
const str1 = "hello";
const str2 = "listen";
console.log(strRearrangeLetter(str1, str2));*/

////write logic to get unique object from below array?
const arr = [
  { name: "pooja" },
  { name: "sushama" },
  { name: "pooja" },
  { name: "suneel" },
  { name: "arati" },
  { name: "sushama" },
];

function findUniqueObjects(array, key) {
  const uniqueObjects = [];

  for (let i = 0; i < array.length; i++) {
    let unique = true;
    for (let j = 0; j < i; j++) {
      if (array[i][key] === array[j][key]) {
        unique = false;
        break;
      }
    }
    if (unique) {
      uniqueObjects.push(array[i]);
    }
  }

  return uniqueObjects;
}

console.log(findUniqueObjects(arr, "name"));
