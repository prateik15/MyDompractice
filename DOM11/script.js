let headone = document.querySelector('h1')
let inputText = document.querySelector('input')
let buttonColor = document.querySelector('button')

console.log(headone)
console.log(inputText)
console.log(buttonColor)

buttonColor.addEventListener('click',function(){
    let clText = inputText.value
    headone.style.color = clText
    inputText.value = " "
})