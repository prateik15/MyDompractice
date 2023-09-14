let ollist = document.querySelector('ol')
let inputText = document.querySelector('input')
let buttonE = document.querySelector('button')

console.log(ollist)
console.log(inputText)
console.log(buttonE)

buttonE.addEventListener('click',function(){
    let elText = inputText.value
    let newli = document.createElement("li")
    newli.textContent = elText
    ollist.append(newli)
    inputText.value = " "
})