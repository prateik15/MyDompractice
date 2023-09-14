let ullist = document.querySelector('ul')
let addButton = document.querySelector('#one')
let inputText = document.querySelector('input')

addButton.addEventListener('click',function(){
    let text = inputText.value
    let newli = document.createElement('li')
    newli.textContent = text
    addButton1(newli)
    ullist.appendChild(newli)
    inputText.value = ''
})

ullist.addEventListener('click',function(e){
    if(e.target.tagName === "BUTTON"){
        if(e.target.className === "remove"){
            let li = e.target.parentElement
            let ullist = li.parentElement
            ullist.removeChild(li)
        }
        else if(e.target.className === "down"){
            let li = e.target.parentElement
            let ullist = li.parentElement
            let nextli = li.nextElementSibiling
            if(nextli){
                ullist.insertBefore(nextli,li)
            }
        }
        else if(e.target.className === "up"){
            let li = e.target.parentElement
            let ullist = li.parentElement
            let prevli = li.previousElementSibling
            if(prevli){
                ullist.insertBefore(li,prevli)
            }
        }
    }
})

function addButton1(li){
    let r =document.createElement('button')
    r.textContent = "Remove"
    r.classList.add('remove')
    li.appendChild(r)

    let u =document.createElement('button')
    u.textContent = "Up"
    u.classList.add('up')
    li.appendChild(u)

    let d =document.createElement('button')
    d.textContent = "Down"
    d.classList.add('down')
    li.appendChild(d)
}