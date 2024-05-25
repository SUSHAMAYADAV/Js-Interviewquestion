/*let str = 'shivam';
const vowels = ['a', 'e', 'i', 'o', 'u'];

let arr = str.split('');

let start = 0;
let end = arr.length - 1;

while (start < end) {
    if (vowels.includes(arr[start]) && vowels.includes(arr[end])) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    } else if (!vowels.includes(arr[start])) {
        start++;
    } else if (!vowels.includes(arr[end])) {
        end--;
    }
}

console.log(arr.join('')); */ // Output: shavim

/*let str = 'shivam';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let arr=str.split('')
let i=0
let j=arr.length-1
while(i<j){
  if(vowels.includes(arr[i]) && vowels.includes(arr[j])){
    let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp
    i++
    j--
  }
  else if(!vowels.includes(arr[i])){
    i++
  }
  else if(!vowels.includes(arr[j])){
    j--
  }
}
console.log(arr.join(''))*/