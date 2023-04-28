const nav = document.querySelector('nav')
const body = document.querySelector("body")
const button = document.querySelector('.Menu')
button.addEventListener('click',()=>{
   if(nav.style.display === 'block'){ 
       nav.style.display = 'none'
       body.style.overflow = 'scroll'
       }else {
           nav.style.display = 'block'
           body.style.overflow = 'hidden'
       }
}) 