let headone = document.querySelector('h1')
let button = document.querySelector('button')
let inputText = document.querySelector('input')

console.log(headone)
console.log(button)
console.log(inputText)

button.addEventListener('click',function(){
    let colorT = inputText.value
    headone.style.color = colorT
    inputText.value = " "
})