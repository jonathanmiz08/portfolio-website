const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('#nav-menu')

menu.addEventListener('click', function () {
    menu.classList.toggle('is-active')
    menuLinks.classList.toggle('active');
})

const tab1 = document.querySelector('#fhillc-tab')
const tab2 = document.querySelector('#portfolio-tab')


tab1.addEventListener('click', function () {
    if (tab1.classList.contains('hidden')) {
        document.querySelectorAll('.tab, .selected-tab, .content, .nav-url, .description-written')
            .forEach(tab => {tab.classList.toggle('hidden');})
    }
})

tab2.addEventListener('click', function () {
    if (tab2.classList.contains('hidden')) {
        document.querySelectorAll('.tab, .selected-tab, .content, .nav-url, .description-written')
            .forEach(tab => {tab.classList.toggle('hidden');})
    }
})

