const nav = document.querySelector('header nav');

window.addEventListener('scroll', ()=> {
    nav.style.background = `${window.scrollY>0?'var(--light-gray)':'none'}`
})


const menu = document.querySelector('.hamburger img'),
    overlay = document.querySelector('.nav-overlay'),
    navLinks = document.querySelector('header nav ul');
let isExpand = false;

menu.addEventListener('click', ()=> {
    overlay.classList.toggle('block')
    navLinks.classList.toggle('flex')
    isExpand  = !isExpand
    menu.src = isExpand? './images/icon-close.svg' : './images/icon-hamburger.svg'

    overlay.addEventListener('click', ()=> {
        navLinks.classList.remove('flex')
        overlay.classList.toggle('block')
        menu.src = './images/icon-hamburger.svg'
    })
})

const testimonials = document.querySelector('.testimonials')

testimonials.addEventListener('mousedown', mouseDown())
testimonials.addEventListener('mousemove', mouseMove)
testimonials.addEventListener('mouseup', mouseUp)
testimonials.addEventListener('mouseleave', mouseUp)


let onDown = 0,
    isDragging = false,
    currentScrolled = 0,
    onUp = 0


function mouseDown() {
    return function(e) {
        isDragging = true
        onDown = e.clientX
    }
}

function mouseMove(e) {
    if(isDragging && testimonials.clientWidth>600) {
        testimonials.scrollLeft = (currentScrolled+(onDown - e.clientX)/10)
        currentScrolled = testimonials.scrollLeft
    }
}

function mouseUp() {
    isDragging = false
}