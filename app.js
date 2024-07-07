let button = document.querySelector('button')
let p = document.querySelector('p')

button.addEventListener('click', () => {
p.textContent = 'Normal Project'
button.style.display = 'none'
setTimeout(()=> {
p.textContent = 'modal projeck'
button.style.display = 'block'
}, 2000)
})