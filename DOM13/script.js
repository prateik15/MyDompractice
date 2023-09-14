let bdy = document.querySelector('body')
console.log(bdy)

bdy.addEventListener('click',function(e){
    console.log(e.target)
    console.log(e.target.tagname)
    console.log(e.target.classname)
})