let clock = document.querySelector('h1')

setInterval(() => {
    let date = new Date()
    clock.innerText = date.toLocaleTimeString()
},1000)