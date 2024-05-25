
//ager  global and functional both scope h to functional scope ki preority jyada hoti h
var a=1;
function data(){
     console.log("above  if",a)
    if(!a){
       // var a  = 10;
        console.log(a)
    }
    
}
data()
console.log(a)