const openMenu = document.querySelector('#openMenu')
const closeMenu = document.querySelector('#closeMenu')
const mobileMenu = document.querySelector('.displayMobileMenu')
const mobileSkills = document.querySelector('#mobileSkills')
const mobileProjects = document.querySelector('#mobileProjects')
const mobileAboutMe = document.querySelector('#mobileAboutMe')


openMenu.addEventListener('click', () => {
    close(openMenu)
    open(closeMenu)
    open(mobileMenu)
})

closeMenu.addEventListener('click', () => {
    close(closeMenu)
    open(openMenu)
    close(mobileMenu)
})

mobileSkills.addEventListener('click', () => {
    close(mobileMenu)
    close(closeMenu)
    open(openMenu)
})

mobileProjects.addEventListener('click', () => {
    close(mobileMenu)
    close(closeMenu)
    open(openMenu)
})

mobileAboutMe.addEventListener('click', () => {
    close(mobileMenu)
    close(closeMenu)
    open(openMenu)
})

function close(div) {
    div.style.display = 'none'
}

function open(div) {
    div.style.display ='block'
}
