//que.1
var x=20
function aa(){
  console.log(x)
 var x=10
}
aa()

//que.2
/*const str='hi my name is sushama'
const arr=str.split(' ')
const res=arr.map((item,index)=>{
  return (
    item[0].toUpperCase()+item.slice(1)
    )
})
console.log(res)*/

3// function firstLetter(str){
 /* function firstLetter(str){
    const arr=str.split(" ")
      const res=arr.map((item,index)=>{
        return item[0].toUpperCase() + item.slice(1)
      })
      return res.join(' ')
    }
    const str='my name is sushama'
      console.log(firstLetter(str))*/


      //find longest word in str
     /* function longestWord(str){
        let arr=str.split(' ')
        let longWord=arr[0]
        for(let i=1;i<arr.length;i++){
          if(longWord.length>arr[i].length){
            longWord=arr[i]
          }
        }
        return longWord
      }
      const str='iii love sushama pooja with'
      console.log(longestWord(str))*/

      /*function checkPalindrom(arr){
        let res=[]
        for(let val of arr){
        let newStr=''
       for(let i=val.length-1;i>=0;i--){
         newStr +=val[i]
       }
      if(val===newStr){
         res.push(val)
      }
      }
      return res
      }
      
      const num=['121','sadh','sus','33']
      console.log(checkPalindrom(num))*/