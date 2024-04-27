const tabs = document.querySelector('.tabs');
const gallery = document.querySelectorAll('.images')

tabs.addEventListener('click', (e) => {
    if(e.target.dataset.category !== undefined) {
        filterSearch(e.target.dataset.category)
    }
})

function filterSearch ( val ) {
    gallery.forEach((curEl) => {
        if(curEl.dataset.category === val) {
            curEl.style.display = 'block'
        } else if (val === 'all'){
            curEl.style.display = 'block'
        } else {
            curEl.style.display = 'none'
        }
    })
}