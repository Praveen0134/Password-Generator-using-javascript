let pass=""
function generate(){
pass=""
let inp=document.getElementById('inp')
let num="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_?/"
for(let i=0;i<12;i++){
pass=pass + num.charAt(Math.floor(Math.random()*num.length)) 

}
console.log(pass)
document.getElementById('inp').value=pass
}