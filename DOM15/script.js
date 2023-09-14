let firstE = document.querySelector('.fe')
let lastE = document.querySelector('.be')
let headone = document.querySelector('h1')

console.log(firstE)
console.log(lastE)

let AllElementsFE = document.querySelectorAll('.fe')
console.log(AllElementsFE)

let AllElementsBE= document.querySelectorAll('.be')
console.log(AllElementsBE)

headone.addEventListener('click',function(){
    for(let i=0; i<AllElementsFE.length; i++){
        AllElementsFE[i].style.color = "red"
        AllElementsBE[i].style.color = "green"
    }
})

let allLiElements = document.querySelectorAll('li')
console.log(allLiElements)

let allLiElements2 = document.getElementsByTagName('li')
console.log(allLiElements2)

let byId = document.querySelector('#one')
let byId2 = document.getElementById('one')
console.log(byId)
console.log(byId2)
let feE1 = document.querySelectorAll('.fe')
console.log(feE1)

let feE2 = document.getElementsByClassName('fe')
console.log(feE2)

let nodeList = document.querySelectorAll("li[name = 'backE']")
let nodeList2 = document.getElementsByName("backE")
console.log(nodeList)
console.log(nodeList2)









