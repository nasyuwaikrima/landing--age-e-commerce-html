const hamburger = document.getElementById('hamburger')

hamburger.addEventListener('click',  () => {
    document.getElementById('top').classList.toggle('top')
    document.getElementById('bottom').classList.toggle('bottom')
})