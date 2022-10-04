// Filter
let filterToggler = document.querySelector('[filterToggler]')
let filterContent = document.querySelector('[filterContent]')
let filters = document.querySelectorAll('[filters]')

filterToggler.addEventListener('click',() => {
    filterContent.classList.toggle('hidden')
})

filters.forEach((index) => {
    index.addEventListener('click',() => {
        filterContent.classList.toggle('hidden')
    })
})

// Dark Mode Toggler
let darkToggler = document.querySelector('[theme-toggle]')
let htmlContainer = document.querySelector('[ng-app]')
darkToggler.addEventListener('click',() => {
    htmlContainer.classList.toggle('dark')
})