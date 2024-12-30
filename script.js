const text = document.querySelector('.parallax-container h1')
const birds = document.querySelector('.parallax-container .birds')
const land = document.querySelector('.parallax-container .land')


window.addEventListener("scroll", ()=>{
    //getting the value of the scroll

    let scroll = window.scrollY;

    // console.log(scroll);

    //moving the text

    text.style.marginTop = scroll * 1 + 'px'
    // text.style.opacity = 0;

    birds.style.left = scroll * 1.5 + 'px'

    land.style.top = scroll * 1.2 + 'px'



})