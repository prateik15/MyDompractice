let headone = document.querySelector('#one')
let buttoncolor = document.querySelector('button')
console.log(headone)
console.log(buttoncolor)

buttoncolor.addEventListener('click',function(){
    headone.style.color= "red"
    headone.style.backgroundColor = "yellow"
    headone.textContent = "Pratik Bhandakkar"
})