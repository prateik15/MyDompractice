//tagename:
let headone = document.querySelector('h1')
console.log(headone)

//class:
let byclass = document.querySelector('.one')
console.log(byclass)

//id:

let byid = document.querySelector('#two')
console.log(byid)

//attribute:
let byattribute = document.querySelector('h1[name="nm]')
console.log(byattribute)


let para = document.querySelector('p')
let byid1 = document.querySelector('#three')
let byclassD = document.querySelector('.four')
let byattributeB = document.querySelector('p[id="three"]')

console.log(para)
console.log(byid1)
console.log(byclassD)
console.log(byattributeB)

//program 1:

// let headtwo = document.querySelector('#two')
// headtwo.addEventListener('click',function() {
//     headtwo.textContent="Mahadev"
//     headtwo.style.color="red";
// })

let info = {
    fullname : "pratik Bhandakkar",
    parent: {
        father: "shankar bhandakkar",
        mother: "nita bhandakkar"
    }
}

let headtwo = document.querySelector('h1')
headtwo.addEventListener('click',function(){
    headtwo.textContent = "HAr HAr MAhadev"
    headtwo.style.color = "purple";
})