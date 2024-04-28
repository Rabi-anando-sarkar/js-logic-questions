let btn1 = document.querySelector('#myButtonOne')
let btn2 = document.querySelector('#myButtonTwo')
let copyDiv = document.querySelector('.copyCode')

let rgb1 = '#000'
let rgb2 = '#fff'

btn1.addEventListener('click',handleBtn1)
btn2.addEventListener('click',handleBtn2)

function getHexValue() {
    let myHexVal = '0123456789ABCDEF'
    let color = "#"
    for(let i=0;i<6;i++) {
        color += myHexVal[Math.floor(Math.random() * 16)] 
    }
    return color
}

function handleBtn1() {
    rgb1 = getHexValue()
    btn1.innerText = rgb1
    btn1.style.backgroundColor = `${rgb1}`
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-image: linear-gradient(to right, ${rgb1}, ${rgb2})`
}

function handleBtn2() {
    rgb2 = getHexValue()
    btn2.innerText = rgb2
    btn2.style.backgroundColor = `${rgb2}`
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1}, ${rgb2})`
    copyDiv.innerHTML = `background-image: linear-gradient(to right,${rgb1}, ${rgb2})`
}

copyDiv.addEventListener('click',() => {
    navigator.clipboard.writeText(copyDiv.innerText)
})