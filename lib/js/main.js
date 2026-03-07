const btm = document.getElementById('bottom')
const tp = document.getElementById('top')

function hamburger() {
    tp.classList.toggle("top");
    btm.classList.toggle("bottom")
}

hamburger()